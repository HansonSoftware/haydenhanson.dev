---
title: 'My ThinkPad Setup'
imgUrl: '/images/posts/my-thinkpad-setup/laptop.jpg'
publishedAt: '2024-08-01'
readTime: '6 minutes'
summary: 'This is an overview of my 2018 ThinkPad T480. Here I explain what modifications I have made and how I set up my development workflow.'
---

## The Last Great ThinkPad.

Many say that the T480 is the last great ThinkPad model. The number of useful ports, compatability with linux, the TrackPoint and upgradability are all reasons why I agree! In this post I go over the software I run on mine.

## System Overview

- **OS**: Arch Linux
- **Encryption**: LUKS
- **DE**: Hyprland (Wayland)
- **Bar**: Waybar
- **Shell**: zsh
- **Terminal**: Alacritty
- **Editor**: nvim
- **Browser**: Firefox (Hardened)

### Keybinds

I switch between workspaces with the **SUPERKEY** followed by a number:

```sh
$mainMod = SUPER

# Switch workspaces with SUPER + [0-9]
bind = $mainMod, 1, workspace, 1
bind = $mainMod, 2, workspace, 2
bind = $mainMod, 3, workspace, 3
bind = $mainMod, 4, workspace, 4
bind = $mainMod, 5, workspace, 5
bind = $mainMod, 6, workspace, 6
bind = $mainMod, 7, workspace, 7
bind = $mainMod, 8, workspace, 8
bind = $mainMod, 9, workspace, 9
bind = $mainMod, 0, workspace, 10
```

I toggle waybar with the following hyprland configuration below. I really just use it to check my battery, I think it's cleaner without it enabled.

```sh
bind = $CONTROL, ESCAPE, exec, killall waybar || waybar # toggle waybar

```

My full hyprland configuration can be found [here](https://github.com/HansonSoftware/dotfiles/tree/main/ThinkPad/.config/hypr).

### Development Workflow

#### Workspace 1: Browser

![Browser](/images/gallery/thinkpad_workspace1.png)

With this setup, no matter where I am, I press **SUPER 1** to go to my browser.

#### Workspace 2: Terminal + TMUX

Similarly, **SUPER 2** always takes me to my home base. My terminal running tmux with organized sessions. I use my terminal for almost everything nowadays, if there is a TUI for it, I try to use it.

![Terminal](/images/gallery/thinkpad_workspace2.png)

I use Neovim as my only text editor. I made the switch from VS Code about a year ago and have never looked back. My configuration uses lazy.nvim and is set up to be fully modular. You can check it out [here](https://github.com/HansonSoftware/dotfiles/tree/main/.config/nvim).

My tmux configuration can also be found [here](https://github.com/HansonSoftware/dotfiles/blob/main/.config/tmux/tmux.conf). It was inspired by [this video](https://www.youtube.com/watch?v=DzNmUNvnB04).

![tmux](/images/gallery/thinkpad_workspace2_tmux.png)

#### Workspace 3: Music

I use this [Spotify TUI](https://github.com/aome510/spotify-player), it is **fantastic** and the default keybindings are great.

![Spotify](/images/gallery/thinkpad_workspace3.png)

#### Workspaces 4-9: Extras (rofi, slack, etc..)

![Rofi](/images/gallery/thinkpad_workspace4.png)

## Hardware

I am using the **ThinkPad T480** 14.0" FHD Touchscreen with an i5-8350U CPU, 16GB DDR4 RAM and a fingerprint reader. I got it refurbished from Amazon for around $200.

The only problem when I got it was that the battery life was _horrible_. I upgraded the external battery to a 72WH battery to fix this and it's been great since!
