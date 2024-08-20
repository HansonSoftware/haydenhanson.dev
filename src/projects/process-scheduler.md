---
title: 'Process Scheduler'
imgUrl: '/images/projects/process-scheduler/final.png'
completedAt: '2021/10/12'
orderId: 6
technologiesUsed: ['C']
summary: 'Program that allows users to schedule tasks (other executables) from the command line in an efficient way. Written in C for a systems course.'
---

## Overview

My task was to finish a series of functions to implement a feature for the KAIA virtual system.
I implemented a process scheduler for this virtual machine to let it know which process is the best one to pick next.

**C Topics:**

- Bitwise Operations
- Structs
- Linked Lists
- Algorithms

**Problem Background:**

KAIA-VM is a lightweight process-level virtual machine that allows users to run Linux programs with custom execution techniques.
These machines are useful for testing complicated interactions between processes (programs being run) by manually scheduling them in certain orders, or allowing the user to run processes with custom priority orderings.

**So, what is scheduling and how does it work?**

The basic idea is to pick a process and run it for a very, very short amount of time. At the end of that time, you can put it back in a ready queue (linked list) and then choose another one from that queue to run. As long as you keep letting each process run for a tiny amount of time, and keep swapping them out, then it seems like your Operating System is running many different programs at the same time! This is the main idea of multitasking.

---

## KAIA-VM Structure

The VM runs on top of Linux and implements custom multitasking of processes. The basic idea is that every time you start running a new process, what’s really happening is that you’re adding that process information to a node in a ready queue, shown below.

![Queue-Header-Diagram](/images/projects/process-scheduler/Queue-Header-Diagram.PNG)

Each Linked List starts from a Queue Header node. These nodes have a count that you can maintain and a pointer to the first Process Node in the
linked list. When a new process is created, it is added to the END (right side) of the Ready Queue Linked List.

For example, here is a set of depictions of starting with an empty Ready Queue.

![Queue-Header-Example](/images/projects/process-scheduler/Queue-Header-Example.PNG)

Using a timer, KAIA-VM will run the process you returned to it for a set amount of time (by default, this is 250ms). It will then return that process to you by either calling the scheduler_insert function again to put it back to the end of the Ready Queue, meaning it’s still not finished and is ready to run, or it will call another one of the functions to put it into another queue, the Defunct Queue, which tracks all terminated processes.

When KAIA-VM is running, it will continue this cycle of calling your functions to get a process that’s ready to run, then it will run it for 250ms, then it will call a function to put it back into the Ready Queue so it can run again in the future. When you have multiple processes running, this will run each of them for a small amount of time, then go to the next one, in a big cycle, until each process has finished running and they all end up on the Defunct Queue.

During this operation, the user may elect to suspend a process. This doesn’t kill the process, it just moves it to a third queue, called the Suspended Queue. When a process is in the suspended queue, it doesn’t get chosen to run on the CPU. These are all process nodes that will just be idle. Later, a user can resume a process, which will call the function to move that process node from the suspended queue back to the ready queue, where it can run again in the normal cycle. In order to help manage all of these three Linked Lists (queues), there is another struct that contains pointers to them all.

Here’s a picture of what this looks like.

![Schedule-Header-Example](/images/projects/process-scheduler/Schedule-Header-Example.PNG)

The functions will create the Schedule Header, then create each of the three Queue Headers, and then will eventually be responsible for creating Process Nodes, inserting them into one of the three Queues, removing them from one of the three Queues, or moving them between the three Queues.

---

## Process States

There is an int (32-bit signed integer data type) that we to use to hold many different pieces of data within. **Storing multiple smaller data types inside of one larger one is very common in Systems Programming**.

To understand the flags, we first need to do a very small discussion on Process States. Each Program – like ‘ls’ – that you run in Linux is run as a Process. Each Process starts off by going into the Ready Queue, where it will be in the Ready State, indicating it’s ready to run whenever it gets scheduled. When the process running on the CPU either finishes, or has been running too long, it’ll be switched out and put at the end of the Ready Queue, so it’ll run again later. Then the Scheduler will pick the next Process from the Ready Queue and put it on the CPU to run for its little piece of time.

If someone chooses to suspend a Process, it will be moved to a Suspended Queue, and it will be changed to the Suspended State. When it gets resumed, it’ll be moved back to the Ready Queue and put back into the Ready State. When a Process finishes running, it’ll be moved into
the Defunct Queue, which keeps a list of all of the terminated processes. Anything in the Defunct Queue will be in a Defunct (known as a Zombie) State.

Every process can be in exactly one of three possible states in the VM at any given time.

![Process-Lifecycle](/images/projects/process-scheduler/Process-Lifecycle.PNG)

---

## Process Node Flag Bits

The Process Node (process_node_t) struct maintains their current state using the flags member.

This 32-bit int contains pieces of information that have been combined together using bitwise operations. It was required that I used bitwise operators for these flags.

![Flag-Bits](/images/projects/process-scheduler/Flag-Bits.PNG)

![Flag-Bits-Example](/images/projects/process-scheduler/Flag-Bits-Example.PNG)

---

## Sample Run

To build KAIA-VM, run the make command:

`hhanson2@zeus-1:src$ make`

KAIA-VM starts up with all of its internal debug messages turned off and with the CS engine off.
Because of this, when you start it up, you can type in commands to run and nothing will happen! To make them actually run, you need to start the CS engine.

Built-In Commands for the KAIA-VM Shell

- `schedule` This will print out all of the processes in all three of your Linked Lists!
- `suspend X` This will suspend running process with PID X (and call your schedule_suspend)
- `resume X` This will resume running process with PID X (and call your schedule_resume)
- `[Linux Command]` You can enter any common Linux Command with arguments to run.
  - Note, there are three special programs you can run that have very long outputs.
  - These are a lot easier to debug because you can see them being run over a long time.
  - `slow_cooker [X]` Prints out one message every second for 10 seconds (or X sec)
  - `slow_printer [X]` Prints out one message every half-second for 10 (or X) iterations
  - `slow_hat` Prints out an ASCII art of the RedHat Logo, one line per 0.5 sec
    - Courtesy of https://www.asciiart.eu/computers/linux Designed by bug.
- `debug` Toggles the KAIA-VM Debug Messages On/Off (can be spammy)
- `quit` Shuts EVERYTHING down responsibly and quits. (calls your schedule_deallocate)

This is what KAIA looks like on startup:

![Startup](/images/projects/process-scheduler/start.png)

KAIA-VM is a full-featured Virtual Environment that lets you run normal Linux commands and
programs, but with a custom scheduler.

The basic idea is that when the Context Switch (CS) engine is running, it will call schedule_select
to get a process to run from your code, then it will run that process for a runtime number of
microseconds (usec). After that time elapses, the CS engine will then stop it from running on
the CPU and return it to you (either schedule_insert or schedule_exit). Finally, it will wait for
delaytime number of microseconds before looping back to the top to get the next process.

In a real live environment, runtime would be about 3000usec (3ms) and delaytime would be
0usec. But, we want to be able to follow the action and make it easier to debug, so the default
values for this system in our class is runtime is set to 250000usec (0.25 sec) and delaytime is
1000000usec (1 sec). This makes it a lot easier to debug!

KAIA-VM starts up with all of its internal debug messages turned off and with the CS engine off.
Because of this, when you start it up, you can type in commands to run and nothing will
happen! To make them actually run, you need to start the CS engine

![Schedule](/images/projects/process-scheduler/schedule.png)

- Here I start four processes and then check the current schedule to show that they’ve all been added to the Ready Queue.
- Then I use the start command to start up the CS Engine.
  - After this, you can see each process running for a tiny amount of time before switching to the next one.
- After a few seconds, I typed in the stop command to Stop the CS Engine.
- Then I use schedule again.
  - You can see that three processes are still running in the Ready Queue (remember that they get taken out and added back in to the end, so the order will be different as the CS Engine is running) and the one process we did complete is in the Defunct Queue.

![Example-Use](/images/projects/process-scheduler/in-use.png)

_Thanks for checking out my school projects!_

---

## Bullet Points:

- This was a project for CS 367, GMU's Systems Programming course.
- I was tasked to build process scheduling functionality for a pre-built VM, KAIA.
- My program was built with C and had no memory leaks, tested with Valgrind.
- For more information about this project or the source code, please don't hesitate to contact me. I must abide by GMU's honor code policy!

## The Goal:

The main goal with this project was to build a custom process scheduler that achieves all the specifications requested. Another goal was to build a robust, well-documented C program with efficient memory management.

## What I've learned:

Implementing data structures such as a Linked List, Dynamic Array, and HashMap in C. How to interact with the operating system. Efficient, "low-level" memory management.
