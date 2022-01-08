+++ 
date = "2021-12-22"
title = "Wineskin Server, a free alternative to Crossover on M1"
slug = "Wineskin Server, a free alternative to Crossover on M1"
tags = []
categories = ["Apple M1"]
series = []
+++

I read many articles online but many of them (most if not all) only mention the same tools to play Windows games on an Apple M1, e.g.:

- [Parallels](http://parallels.com/)
- [Crossover](https://www.codeweavers.com/crossover/)
- Emulation in general, not limited to Parallels but the latter is the only software at the moment which works very good

Boot Camp does not work on an Apple M1 as officially confirmed by Apple. As you can see you don't have many options which are also free, you could also emulate Windows through [UTM](https://mac.getutm.app) but it does not work that great. I wrote a [post](https://malwarewerewolf.com/posts/qemu-parallels-or-utm-which-one-is-the-best-with-apple-m1-chip-/) about the best software to use to emulate an OS if you want to check it out. Wine does not have an official binary for macOS Catalina 10.15 or later as mentioned [here](https://wiki.winehq.org/MacOS), but we can use [this Wineskin Server](https://github.com/Gcenx/WineskinServer) project which supports _MacOSX10.13 to macOS11_. I am currently using macOS 12.0.1 but it works flawlessly.

## Install Wineskin

As specified on the [Github repository](https://github.com/Gcenx/WineskinServer), we just need to run the following command to install Wineskin:

```shell
$ brew install --no-quarantine gcenx/wine/unofficial-wineskin
```

## Which Windows games are supported ?

Steam games don't work very well, I managed to install **Castlevania Lords of Shadow Mirror Fate** but Wineskin was running the game at 30 FPS or even less in some scenarios. However if you install a **GOG game**, it's a complete different story from the moment you don't need a client opened to play a game. You just need to download a game through the offline installer, of course you have to consider that not all games are supported but it's much easier to get a game running. I noticed that some games on GOG which are also available on macOS, can only be downloaded for the Windows platform, in this case if you see the same game on Steam available on macOS, then buy the game on Steam from the moment you'll get a better performance with Rosetta 2.

## Let's setup a Wrapper with Wineskin

When you open Wineskin you get an interface like this:

!["Wineskin First Setup"](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/wineskin_first_setup.png)

Before creating a Wrapper you need to install an engine, you can download the engine WineCX20 or greater. If you don't see the engine from Wineskin, you can download it from [here](https://github.com/Gcenx/WineskinServer/releases). After that you just need to copy and paste the file in the path `~/Library/Application Support/Wineskin/Engines`. Create a Wrapper and navigate to this path `~/Applications/Wineskin` you should see the Wrapper that you just created:

!["Wineskin Wrappers List"](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/wineskin_wrappers_list.png)

Keep in mind that you need to use the correct architecture, if you use a x64 engine on a x86 game it's not going to work. You don't need to use the installer to extract the game files to check the architecture of the exe, I'll show you later another way to install a game without launching the setup.

Right click on the Wrapper and click on **Show package contents**, from here you can manage your Wrapper by copying files inside the **drive_c folder** and other settings through the Wineskin app:

!["Wineskin Wrapper Folder"](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/wineskin_wrapper_folder.png)

## Download the offline installer from GOG

Login into your GOG account and click on games under your profile icon to display your games list:

!["Gog Games List"](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/gog_games_list.png)

Click on a game and download the offline installer files:

!["Offline Installer Files"](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/offline_installer.png)

## Install the game with the offline installer

Follow these steps to install correctly the game:

1. Drag and drop the files in the drive_c folder of your Wrapper
2. Open the Wrapper and click on the advanced options to set the path of the installer, e.g.:

!["Install the game"](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/install_the_game.png)

3. Click on **Test Run** to launch the installer:

!["Test Run](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/test_run.png)

4. After the installation is complete, repeat the step 2 by choosing the exe of the game, in my case is **War2Launcher.exe** keep in mind that if the game is working, you just need to open directly the Wrapper and it'll launch the game without clicking on **Test Run**

If the game is supported and if you used the correct architecture, it should run without any issues:

!["Game Running](/images/posts/wineskin_server_a_free_alternative_to_crossover_on_m1/game_running.png)

## Use innoextract to extract the files from the setup

Another way to play GOG games is to use the [innoextract tool](https://constexpr.org/innoextract/), which is used to unpack installers created with [Inno Setup](https://jrsoftware.org/isinfo.php). From the [documentation](https://constexpr.org/innoextract/install#homebrew), the simplest way to install **innoextract** is using the [Homebrew package](https://formulae.brew.sh/formula/innoextract):

```shell
$ brew update
$ brew install innoextract
```

If the GOG offline installer doesn't include some kind of bin files, you just need to run the following command:

```shell
$ innoextract mysetup.exe
```

If it includes the bin files, run this command (all files need to be in the same directory):

```shell
$ innoextract mysetup.exe --gog
```

The files are extracted but how do we check which architecture the exe is using ? Run this command by passing the exe of the game:

```shell
$ file example.exe
```

Which prints:

```shell
example.exe: PE32 executable (GUI) Intel 80386, for MS Windows
```

After the files are extracted, you just need to choose the correct exe to run in Wineskin and you are ready to play (if there are not other issues to solve first).

## TLDR

Wineskin Server is a good free alternative to Crossover and Parallels. Unless you have a Windows PC, before buying a game should check if that particular game is playable on an Apple M1, there are many websites that you can use, I recommend [AppleGamingWiki](https://www.applegamingwiki.com/wiki/Home). Each game requires different settings and tweaks to make it work, there isn't a standard solution so you'll need to google for some intel.