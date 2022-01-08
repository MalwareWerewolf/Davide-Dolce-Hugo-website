+++ 
date = "2021-01-24"
title = "Why you should switch to Linux"
slug = "Why you should switch to Linux"
tags = []
categories = ["Linux"]
series = []
+++

!["Ubuntu groovy"](/images/posts/why-you-should-switch-to-linux/Ubuntu-Groovy-Desktop.png)

After many years of using Windows, I dediced to switch to Linux for many reasons and I recommend to everyone to do the same. I wrote this post not only to share my thoughts but also to dispel a few myths, this is my personal opinion, everyone can argue about these thoughts.

## Linux is better for programming

If you are not specifically programming with the .NET Framework which only works on Windows, all the other programming languages like **C, C++, Java, Python** etc. will work flawlessly on Linux. You type a simple **sudo apt install packagename** and you get everything ready in your terminal, no need to Google the installer and go through the installation process. On Windows some installers like **Python**, gives you the options to set automatically the **environment variables** on your machine, in this way you can call the command **python** from your CMD. In other cases this does not happen, you need to do everything manually step by step.

Another thing that I really dislike in Windows is the CMD, let's take as an example the Python installer again, if you have the **CMD** opened and you type **python** after setting the environment variable, this is not recognized, unless you open another CMD or you install a package manager like [Chocolatey](https://github.com/chocolatey/choco) and type **refreshenv** . I found a tool like the **Powershell** really useful when you are programming with the .NET stack but in all other cases is not like the Linux terminal.

Speaking of the **C language**, programming on Windows is a nightmare, yes you can use Visual Studio but you need to set up an entire IDE and you can't use some C libraries missing many functionalities.

## Linux is faster and more secure than Windows

Linux is more powerful, versatile and light-weight, you will notice a significant improvement in speed on a Linux distro when you start working with it.

It is more secure from the moment is open source, everyone can contribute to the code to improve it and someone will find a vulnerability long before hackers can target a Linux distro.

## Installing Linux is hard!

Let's say that you have a PC without Windows, an empty SSD and you want to install **Ubuntu**, the process is really simple and straightforward from the moment you do not need to partion correclty the disks. It's just like a simple installation like on Windows with a step by step on the screen, nothing more.

Installing Linux in Dual Boot is not hard but you need to understand how it works, before UEFI was introduced, installing an OS like Ubuntu was a piece of cake on a Legacy Bios, now many things have changed and you need to pay attention in order to avoid some issues.

When I was looking a good guide about _how to install Ubuntu alongside Windows 10_, I didn't find a tutorial where the author was creating an **EFI partition**. If you don't manually partition the disks, **Grub** will edit the **EFI partition** on Windows 10. Let's say that you want to remove Ubuntu, if you delete its partition from Windows 10 and you reboot nothing will work because Grub was the Windows 10 bootloader. Don't get me wrong, you can do whatever you want but it's not better to create a separate EFI partition for Ubuntu and leave Windows 10 alone ? In this way you can boot in Windows without using Grub from the **UEFI boot menu**, everything is reversible simply by removing the Linux UEFI listing from your UEFI/BIOS settings.

## It's still too complicated, I will unplug my SSD! 

Well congratulations you just harmed your hardware! Seriously don't do this, check [this link](https://askubuntu.com/questions/1033497/dual-boot-windows-10-and-linux-ubuntu-on-separate-ssd/1126970#1126970) for a complete explanation.

## Linux is made for the expert users!

Wait wait, who told you this lie ? Linux is made for everyone, there are so many distributions for a beginner like **Ubuntu, Linux Mint, Pop!_OS, Elementary OS** to name a few. On Ubuntu you can simply install applications with the Ubuntu Store without touching the terminal, of course if you want to install applications which are not listed in the store you have to use the terminal. There are many guides about _how to learn the Linux commands_, I recommend [this one](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview).

## It isn't better install Linux with VBox or VMware ?

It depends what you want to do, if you are going to test some commands that could break the OS or you simply want try some features, the answer is yes. If you want to use it for programming, playing videogames or everything else, the answer is no. Keep in mind that in a VM you will lose many resources that your OS could use, in this case I would recommend to install Linux on your computer without missing anything.

## But I am a gamer and Linux is not fully supported to play Windows games!

Seriously another big lie that someone told you. Speaking of Ubuntu based distros, you have everything that you need to play a game, the graphics drivers ? No problem you can install them during the installation:

![Ubuntu-3rd-Drivers](/images/posts/why-you-should-switch-to-linux/Ubuntu-3rd-Drivers.PNG)

You have many ways to play Windows games on Linux, there is [Protondb](https://www.protondb.com/) which is integrated with the native Steam client, [Lutris](https://lutris.net/), [Playonlinux](https://www.playonlinux.com/en/), [Minigalaxy](https://github.com/sharkwouter/minigalaxy), [Gamehub](https://tkashkin.tk/projects/gamehub/) to name a few.

## What about the other Windows programs ?

You can use [Wine](https://www.winehq.org/) which is a compatibility layer capable of running Windows applications. Of course you should check on the official [AppDB](https://appdb.winehq.org/) to see which programs are compatible, this is also a good reason to keep Windows 10, not everything is going to work.

## TLDR

As you can see Linux opens new opportunities to every user, I learnt so many things in a couple of days but there is still more to learn. Don't be afraid to install Linux and follow different guides to see which one is the best, I would recommend to follow [this guide](https://askubuntu.com/questions/726972/dual-boot-windows-10-and-linux-ubuntu-on-separate-hard-drives?answertab=votes#tab-top) on **AskUbuntu** which is well explained.