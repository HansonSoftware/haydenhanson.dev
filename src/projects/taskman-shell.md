---
title: 'Taskman Shell'
imgUrl: '/images/projects/taskman-shell/final.png'
completedAt: '2022-04-15'
summary: 'Mini UNIX shell that packs quite a bit of functionality.'
---

# ☝️ Final Version

I completed this project for GMU's CS 367 Course - Computer Systems and Programming

![Preview](/images/projects/taskman-shell/fresh.png)

I completed this project for GMU's CS 367 Course - Computer Systems and Programming. The bulk of my code can be found in src/taskman.c. In order to abide by my university's honor code policy, the source code is private. However, I have received permission to share it with recruiters and interviewers.

![Preview](/images/projects/taskman-shell/shell.png)

## Welcome Message

At startup, or when "help" is called, the shell prints a short description of the system, including a list of built-in instructions and their usage.

![Preview](/images/projects/taskman-shell/tasks.png)

## Queueing Tasks

Any command which is not a built-in instruction is interpreted as a user command. When a user command is entered into Taskman, this will create and initialize a new task entry which describes the command.

Entering the command will not immediately result in executing the command but adds the task to the queue. The "tasks" built-in instruction lists all of the currently existing tasks and the total number of tasks in said queue.

![Preview](/images/projects/taskman-shell/delete.png)

## Deleting Tasks

The "delete TASKID" built-in instruction removes the task with TASKID from the list of tasks.

![Preview](/images/projects/taskman-shell/run.png)

## Running Tasks ☝️

The "run TASKID [FILE]" built-in instruction executes the external command associated with task TASKID. This runs as a foreground process, meaning that the shell waits for the process to finish. If FILE is specified, then the child process's input will be redirected from the file. The process status changes as it runs and eventually completes. When the process completes, the task records the process's exit code.

![Preview](/images/projects/taskman-shell/bg.png)

## ☝️ Background Tasks

The "bg TASKID [FILE]" built-in instruction executes the external command associated with task TASKID. This runs as a background process, meaning that the shell does not wait for the process to finish. Signal Handling is used here to notify the parent process. If FILE is specified, then the child process's input will be redirected from the file. The process status changes as it runs and eventually completes. When the process completes, the task records the process's exit code.

![Preview](/images/projects/taskman-shell/log.png)

## Logging Task Output

The log TASKID [FILE] and output TASKID built-in instructions:

"log TASKID [FILE]" executes the external command associated with Task TASKID. Logs the output of the command to the file log#.txt. The command's output will be printed to the terminal as well. Runs as a background process. Signal Handling is used here to notify the parent process.

"output TASKID" shows previously logged output associated with Task TASKID. The logged output must have been previously saved using the log built-in.

![Preview](/images/projects/taskman-shell/cancel.png)

## Canceling

The "cancel TASKID" built-in instruction terminates the process associated with Task TASKID using SIGINT.

![Preview](/images/projects/taskman-shell/ctrl-z.png)

## Keyboard Shortcuts

ctrl-C: A SIGINT is sent to the foreground process to terminate its execution.
ctrl-Z: A SIGTSTP is sent to the foreground process to suspend its execution.

Thanks for checking out my school projects!

---

## Bullet Points:

- This is the infamously hard final project for CS 367, I grasped the concepts and did really well on this.
- I was tasked to build a shell from scratch using the skills we learned throughout the year.
- My program was built with C and had no memory leaks, tested with Valgrind.
- For more information about this project or the source code, please don't hesitate to contact me. I must abide by GMU's honor code policy!

## The Goal:

The main goal with this project was to build a custom shell that achieves all the specifications requested. Another goal was to build a robust, well-documented C program with efficient memory management.

## What I've learned:

Signal handling and how to work with a custom signal handler, How to interact with the operating system, Efficient memory management.
