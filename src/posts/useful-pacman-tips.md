---
title: 'Useful Pacman Tips'
imgUrl: '/images/posts/useful-pacman-tips/pacman.jpg'
publishedAt: '2024-07-24'
readTime: '6 minutes'
summary: 'Pacman is the package manager on Arch Linux. This guide aims to point out some useful Pacman commands and explain them in a simple way.'
---

_This post is a rolling release, it will be added to over time_

**Note:** This is a summary and simplification of documentation and other articles that I have read. If you're a new Arch user, you will find value in this guide. I highly reccomend [this article](https://wiki.archlinux.org/title/Pacman/Tips_and_tricks) after reading this as well.

## Updating your system

Note: _Pacman must run as root for commands that move files around_

In order to _fully_ update your system you want to use this combination of flags:

```sh
sudo pacman -Syu
```

**Don't** run the following commands, this is merely an explanation:

`-Sy` will "sync" your package database, but the updates won't be installed.

after running `-Sy` you can run `-Su` to install those updates.

You can think of `-Sy` as `apt-get update` and `-Su` as `apt-get upgrade`.

On Arch Linux, we run these commands together as `-Syu` because it is a rolling release distribution and partial upgrades are not supported. More on that [here](https://wiki.archlinux.org/title/System_maintenance#Partial_upgrades_are_unsupported) on the official Arch Wiki.

**Small Note:**

Sometimes, if `-Sy` or `-Syu` was recently ran, `-Syu` will not actually check the remote repository

To force this check, I normally use:

```sh
sudo pacman -Syyu
```

![System Upgrade](/images/posts/useful-pacman-tips/system-upgrade.png)
<ins>This is safe</ins> and achieves the same thing as `-Syu` in most cases.

## Searching for packages

To search for a program to download, use the `-Ss` flag:

```sh
pacman -Ss tmux
```

In this example, we search for tmux:

![Searching Pacman](/images/posts/useful-pacman-tips/searching.png)

## Installing packages

To install a program, use `-S`:

```sh
sudo pacman -S tmux
```

![Basic Install](/images/posts/useful-pacman-tips/basic-install.png)

I already have tmux installed, so I will type "n" for no here, but you would type "Y" if you wanted to proceed, and Pacman will do the rest.

You can also **upgrade the system** while installing a package with:

```sh
sudo pacman -Syu tmux
```

## Removing packages

Let's do this the right way, using only `-R` isn't as good as you may think.

Start using the following:

```sh
sudo pacman -Rns tmux
```

`-R` is for removing packages, the `-s` flag tells Pacman to also remove the dependencies that this package pulled down when it was installed. `-n` also tells Pacman to also remove system config files associated with this package.

![Removing Packages](/images/posts/useful-pacman-tips/remove-package.png)

## Listing Installed Packages

`-Q` is used to query everything installed with Pacman.

```sh
pacman -Q
```

> How many packages do I have installed?

```sh
pacman -Q | wc -l
```

> What packages have I installed? (What is on my machine minus all dependencies)

```sh
pacman -Qe
```

> Which package owns a file?

```sh
pacman -Qo tmux
```

> How can I list out all files in a package?

```sh
pacman -Ql tmux
```

> I don't want extra information, just the package names!

```sh
pacman -Qq
```

> How can I find unused dependencies?

```sh
pacman -Qdt
```

> How can I search for a package by name on my machine?

```sh
packman -Qs tmux
```

### Main Pacman Flags:

Here is a brief overview of the capital letter flags and their purpose:

**-S "sync"** installing & updating

**-R "remove"**

**-Q "query"** local database

## Customizing Pacman

Pacman has a configuration file where you can make some enhancements.

```sh
vim /etc/pacman.conf
```

I use the following options:

```
# Misc options
#UseSyslog
Color
ILoveCandy
#NoProgressBar
CheckSpace
VerbosePkgLists
ParallelDownloads = 5
```
