---
title: 'Vim Motions'
imgUrl: '/images/posts/vim-motions/thumbnail.png'
publishedAt: '2024-09-19'
readTime: '10 minutes'
summary: 'Stop using a mouse and start using Neovim, youll thank yourself in the future! This is a cheatsheet for a lot of useful Vim motions.'
---

# Introduction

I think any developer who wants to be faster at editing files should try Vim, even if it's just the motions in your prefered text editor. I'm not as fast as <a href="https://youtu.be/y6VJBeZEDZU?t=45" target="_blank">some people</a> (enjoy that video lol), but I love using these motions.

Using vim almost turns writing code into a game for me - I'm always thinking of the fastest way I can change the text on the screen. This is an organized list of commands pulled from various places that I use everyday!

**Note:** Vim and Neovim will be used synonymously in this article

## How do I exit Vim?

**Mode:** `COMAND` (more on what this means soon)

| Motion   | Description                                 |
| -------- | ------------------------------------------- |
| **:wq**  | **Write** and **Quit** (save and quit)      |
| **:q**   | **Quit** but fails if unsaved changes exist |
| **:q!**  | **Quit** without saving                     |
| **:wqa** | **Write** and **Quit** on all open files    |

Now, if you're a chad, you exit Vim like this:

**Mode:** `Normal`

| Motion | Description             |
| ------ | ----------------------- |
| **ZZ** | **Write** and **Quit**  |
| **ZQ** | **Quit** without saving |

## How do I save changes without quitting?

**Mode:** `COMAND`

| Motion  | Description                               |
| ------- | ----------------------------------------- |
| **:w**  | **Write** file without quitting           |
| **:wa** | **Write** all open files without quitting |

## Changing Vim Modes

"Modes" are what make Vim special and allow you to hit sick combo moves to edit your text.

| Command     | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| **i**       | Enter **INSERT** mode                                            |
| **a**       | Enter **INSERT** mode after the cursor (think: **append**)       |
| **A**       | Enter **INSERT** mode at the end of the line (think: **Append**) |
| **o**       | **Open** new line below the cursor and enter **INSERT** mode     |
| **O**       | **Open** new line above the cursor and enter **INSERT** mode     |
| **v**       | Enter **VISUAL** mode                                            |
| **Shift-v** | Enter **VISUAL-LINE** mode                                       |
| **Ctrl-v**  | Enter **VISUAL-BLOCK** mode                                      |
| **:**       | Enter **COMMAND** mode                                           |
| **R**       | Enter **REPLACE** mode                                           |
| **ESC**     | Go back to **NORMAL** mode from other modes                      |

`NORMAL` mode is Vim's default mode and is where the magic happens!

## How do I move?

**Mode:** `NORMAL`

| Command | Description                              |
| ------- | ---------------------------------------- |
| **h**   | Move cursor left (left most)             |
| **j**   | Move cursor down (looks like down arrow) |
| **k**   | Move cursor up                           |
| **l**   | Move cursor right (right most)           |

Useful tip for noobs, you will likely want to use the arrow keys when you first start. To stop yourself from doing that you can add this line to your config, which quickly helped me get better.

```sh
local keymap = vim.keymap

-- TIP: Disable arrow keys in normal mode
keymap.set("n", "<left>", '<cmd>echo "Use h to move!!"<CR>')
keymap.set("n", "<right>", '<cmd>echo "Use l to move!!"<CR>')
keymap.set("n", "<up>", '<cmd>echo "Use k to move!!"<CR>')
keymap.set("n", "<down>", '<cmd>echo "Use j to move!!"<CR>')
```

## Movements Within A Line

**Mode:** `NORMAL`

| Command | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| **$**   | Move cursor to the end of the line                                         |
| **0**   | Move cursor to the beginning of the line                                   |
| **^**   | Move cursor to first non-blank character in line                           |
| **fx**  | **Find** next occurrence of character 'x'                                  |
| **Fx**  | **Find** previous occurrence of character 'x'                              |
| **tx**  | Go **towards** next occurrence of character 'x' (stops right before it)    |
| **Tx**  | Go **towards** previous occurence of character 'x' (stops right before it) |
| **;**   | Repeat previous `f`, `F`, `t`, or `T` movement forwards                    |
| **,**   | Repeat previous `f`, `F`, `t`, or `T` movement backwards                   |

## Word Movements

A **word** is basically just a sequence of letters, digits and underscores OR sequence of other symbols, separated by whitespace.

**Mode:** `Normal`

| Command | Description                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------ |
| **w**   | Move cursor forwards to start of **word** (sequence of letters, digits, underscores OR sequence of other symbols)  |
| **W**   | Move cursor forwards to start of **WORD** (any sequence of non-blank characters)                                   |
| **b**   | Move cursor backwards to start of **word** (sequence of letters, digits, underscores OR sequence of other symbols) |
| **B**   | Move cursor backwards to start of **WORD** (any sequence of non-blank characters)                                  |
| **e**   | Move cursor forwards to end of **word** (sequence of letters, digits, underscores OR sequence of other symbols)    |
| **E**   | Move cursor forwards to end of **WORD** (any sequence of non-blank characters)                                     |
| **ge**  | Move cursor backwards to end of **word** (sequence of letters, digits, underscores OR sequence of other symbols)   |
| **gE**  | Move cursor backwards to end of **WORD** (any sequence of non-blank characters)                                    |

## Sentence Movements

A **sentence** ends with a ".", "!" or "?" followed by the end of the line, a space or tab.

**Mode:** `Normal`

| Command | Description                          |
| ------- | ------------------------------------ |
| **)**   | Move cursor to next **sentence**     |
| **(**   | Move cursor to previous **sentence** |

## Paragraph Movements

**Paragraphs** are blocks of consecutive non-empty lines. NOTE: Line with white space is not empty.

**Mode:** `Normal`

| Command | Description                                                                  |
| ------- | ---------------------------------------------------------------------------- |
| `}`     | Move cursor to next **paragraph** (block of consecutive non-empty lines)     |
| `{`     | Move cursor to previous **paragraph** (block of consecutive non-empty lines) |

## Moving To Specific Lines

**Note**: Replace `number` with an actual number.

**Mode:** `Normal`

| Command     | Description                                         |
| ----------- | --------------------------------------------------- |
| **gg**      | Move cursor to first line of document               |
| **G**       | Move cursor to last line of document                |
| **numberG** | Move cursor to line `number`                        |
| **numberj** | Go `number` lines down                              |
| **numberk** | Go `number` lines up                                |
| **H**       | Move cursor to line at the top of the window        |
| **M**       | Move cursor to the line at the middle of the window |
| **L**       | Move cursor to the line at the bottom of the window |

## Thanks for reading!

### Sources:

<a href="https://vim.rtorr.com/" target="_blank">Vim Cheatsheet</a>,

<a href="https://www.josean.com/posts/vim-essentials-cheatsheet" target="_blank">Josean Martinez's Blogpost</a>
