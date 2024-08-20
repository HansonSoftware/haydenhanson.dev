---
title: 'Taskman Shell'
imgUrl: '/images/projects/taskman-shell/final.png'
completedAt: '2022-04-15'
orderId: 4
technologiesUsed: ['C']
summary: 'Mini UNIX shell that packs quite a bit of functionality. This project taught me the basics of operating systems. I hope you can learn something from this article!'
---

Before we dive into my uni's systems final project, I want to really make sure we're on the same page. A shell is a program that acts as an interface between the user and the operating system's kernel, allowing you to interact with the system by issuing commands. We'll go into a bit more detail below.

### 1. Definition and Purpose

- **Shell as an Interface:** The shell provides a command-line interface (CLI). It's where you type commands to perform various tasks, from managing files to executing programs.

- **Command Interpretation:** It interprets and processes the commands you enter, turning them into instructions that the operating system can execute.

### 2. Types of Shells

- **sh (Bourne Shell):** The original Unix shell, which influenced many other shells.
- **zsh (Z Shell):** Known for its advanced features and customization options, like improved tab completion and spell checking.
- **Bash (Bourne Again Shell):** One of the most popular shells, known for its scripting capabilities and user-friendly features.
- ~~**fish (Friendly Interactive Shell):** Designed to be user-friendly with features like autosuggestions and syntax highlighting.~~ **And other inferior shells.**
- **Taskman** (this project we're about to explore) is also a shell that can run on a Unix system. Though, it is "mini" and does not quite compare with its big brothers above.

### 3. Interaction with the Kernel

- **System Calls:** When you execute a command in the shell, it often makes system calls to the kernel to perform actions like reading or writing files, creating processes, or communicating over networks. Here is a [cheatsheet](https://www.cheat-sheets.org/saved-copy/Linux_Syscall_quickref.pdf) for some Linux syscalls.
- **Pipelines and Redirection:** Shells allow you to use features like pipelines (connecting the output of one command to the input of another) and redirection (sending output to files or other commands), which interact with the kernel’s I/O system.

---

# Taskman

## Welcome/Help Message

At startup, or when the `help` command is invoked, the shell prints a short description of the system, including a list of built-in instructions and their usage.

![Welcome/Help](/images/projects/taskman-shell/shell.png)

## Queueing Tasks

Any command which is not a built-in instruction is interpreted as a user command. When a user command is entered into Taskman, this will create and initialize a new task entry which describes the command state.

![Queueing Tasks](/images/projects/taskman-shell/tasks.png)

Entering the command will not immediately result in executing the command but adds the task to the queue. The `tasks` built-in instruction lists all of the currently existing tasks and the total number of tasks in said queue.

## Deleting Tasks

The `delete TASKID` built-in instruction removes the task with TASKID from the list of tasks.

![Deletion](/images/projects/taskman-shell/delete.png)

## Running Tasks

The `run TASKID [FILE]` built-in instruction executes the external command associated with task TASKID. This runs as a foreground process, meaning that the shell waits for the process to finish. If FILE is specified, then the child process's input will be redirected from the file. The process status changes as it runs and eventually completes. When the process completes, the task records the process's exit code.

![Running](/images/projects/taskman-shell/run.png)

## Background Tasks

The `bg TASKID [FILE]` built-in instruction executes the external command associated with task TASKID. This runs as a background process, meaning that the shell does not wait for the process to finish. Signal Handling is used here to notify the parent process. If FILE is specified, then the child process's input will be redirected from the file. The process status changes as it runs and eventually completes. When the process completes, the task records the process's exit code.

![BG Tasks](/images/projects/taskman-shell/bg.png)

## Logging Task Output

The `log TASKID [FILE]` and `output TASKID` built-in instructions:

![Logging](/images/projects/taskman-shell/log.png)

- `log TASKID [FILE]` executes the external command associated with Task TASKID. Logs the output of the command to the file log#.txt. The command's output will be printed to the terminal as well. Runs as a background process. Signal Handling is used here to notify the parent process.

- `output TASKID` shows previously logged output associated with Task TASKID. The logged output must have been previously saved using the log built-in.

## Canceling

The `cancel TASKID` built-in instruction terminates the process associated with Task TASKID using SIGINT.

![Canceling](/images/projects/taskman-shell/cancel.png)

## Keyboard Shortcuts

- **ctrl-C:** A SIGINT is sent to the foreground process to terminate its execution.
- **ctrl-Z:** A SIGTSTP is sent to the foreground process to suspend its execution.

![Keys](/images/projects/taskman-shell/ctrl-z.png)

---

## Bullet Points:

- This is the infamously hard final project for CS 367, I grasped the concepts and did really well on this (A).
- I was tasked to build a shell from scratch using the skills we learned throughout the year.
- My program was built with C and had no memory leaks, tested with Valgrind.
- For more information about this project or the source code, please don't hesitate to contact me.

## The Goal:

The main goal with this project was to build a custom shell that achieves all the specifications requested. Another goal was to build a robust, well-documented C program with efficient memory management.

## What I've learned:

Signal handling and how to work with a custom signal handler, How to interact with the operating system, Efficient memory management.

## _Thanks for checking out my school projects!_

_I completed this project for GMU's CS 367 Course - Computer Systems and Programming. The bulk of my code can be found in src/taskman.c. In order to abide by my university's honor code policy, the source code is private. However, I have received permission to [share it](https://github.com/HansonSoftware/Taskman-UNIX-Shell) with recruiters and interviewers._
