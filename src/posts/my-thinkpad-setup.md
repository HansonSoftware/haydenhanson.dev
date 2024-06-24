---
title: 'My Thinkpad Setup'
imgUrl: '/images/posts/my-thinkpad-setup/laptop.jpg'
publishedAt: '2024-06-13'
summary: 'This is an overview of my i5-8350U Thinkpad T480. I daily drive this laptop running arch linux. Here I explain what modifications I have made!'
---

## The Last Great ThinkPad.

Many say that the T480 is the last great ThinkPad model. Its number of useful ports, compatability with linux, the TrackPoint and potential to upgrade are all reasons why I 100% agree!

## Software

- OS: Arch Linux
- DE: Hyprland (Wayland)
- Shell: zsh
- Terminal: kitty
- Browser: Firefox (Hardened)
- Editor: nvim

### Development Environment Setup

#### Workspace 1 is always my browser

![Browser](/images/posts/my-thinkpad-setup/browser.png)

In my hyprland configuration I have set mainMod to the windows (SUPER) key:

```sh
$mainMod = SUPER # windows key
```

I switch between workspaces with SUPER followed by a number:

```sh
# Switch workspaces with mainMod + [0-9]
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

With this setup, no matter where I am, I press SUPER 1 to go to my browser.

#### Workspace 2 is always my terminal running tmux

Similarly, SUPER 2 always takes me to my home base. My terminal running tmux with organized sessions. I use my terminal for almost everything nowadays, if there is a TUI for it, I try to use it.

![Terminal](/images/posts/my-thinkpad-setup/terminal.png)

I use Neovim as my only text editor. I made the switch from VS Code about a year ago and have never looked back. My configuration uses lazy.nvim and is set up to be fully modular. You can check it out [here](https://github.com/HansonSoftware/dotfiles/tree/main/.config/nvim).

My tmux configuration can also be found [here](https://github.com/HansonSoftware/dotfiles/blob/main/.tmux.conf). It was inspired by [this video](https://www.youtube.com/watch?v=DzNmUNvnB04).

![tmux](/images/posts/my-thinkpad-setup/tmux.png)

#### Page 3 is normally running spotify and cava

![Spotify](/images/posts/my-thinkpad-setup/spotify.png)

#### Page 4 is where I throw temporary apps

![Rofi](/images/posts/my-thinkpad-setup/app-selector.png)

## Hardware

I am using the ThinkPad T480 14.0" FHD Touchscreen with an i5-8350U CPU, 16GB DDR4 RAM and a fingerprint reader. I got it refurbished from Amazon for cheap.

The only problem was that the battery life was horrible. I upgraded the external battery to a 72WH battery to fix this.

If you have a really keen eye, you may have noticed just how much my battery went down in between taking those screenshots..

Because of this, the next upgrade I plan to make is to replace the internal battery! I also want to upgrade the CPU cooler and re-apply thermal paste, updates coming soon!
