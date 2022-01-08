+++ 
date = "2021-12-24"
title = "Play DOOM 3 natively on Apple M1"
slug = "Play DOOM 3 natively on Apple M1"
tags = []
categories = ["Apple M1"]
series = []

+++

I saw a few resources on Google where you can play DOOM 3 or other old games using some tweaks to play them, however there are better solutions to get these games to work. In the DOOM 3 case, a mod called [dhewm3](https://dhewm3.org) has been created to bring DOOM 3 with the help of SDL to all suitable platforms. But for some reason, there isn't an official release for macOS on the Github page. Nonetheless a user made a build for macOS to play this mod, you can find more info about this topic [here](https://forums.macrumors.com/threads/DOOM-3-for-catalina.2227497/?post=28451177#post-28451177). It's not a big deal to get DOOM 3 working with this mod, you just need to copy the **base** folder from the DOOM 3 installation of Steam and paste this folder into the dhewm3 directory. 

What about DOOM 3 BFG Edition ? I made this post mainly because at the moment there isn't a post or a video which explains how to play the BFG edition on an Apple M1. Besides that, the DOOM 3 resources that you can find on Google explain how to run it using Rosetta 2, but as I said there are better solutions and we're going to discuss about these solutions shortly.

## Download the necessary game files of DOOM 3 with the SteamCMD

There's no need to install Steam on Crossover or Parallels to download a Windows build, the [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD) is the smartest way to download a Windows build.

To install the SteamCMD on macOS, simply follow these two steps as specified on the [documentation](https://developer.valvesoftware.com/wiki/SteamCMD#macOS):

1. Open Terminal.app and create a directory for SteamCMD.

```shell
mkdir ~/Steam && cd ~/Steam
```

2. Download and extract SteamCMD for macOS.

```shell
curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_osx.tar.gz" | tar zxvf -
```

You can download a Windows build by launching the script that you just downloaded:

```sh
./steamcmd.sh +@sSteamCmdForcePlatformType windows +login <YOUR_STEAM_LOGIN_NAME> +force_install_dir ./doom3/ +app_update 9050 validate +quit
```

Of course you have to replace `<YOUR_STEAM_LOGIN_NAME>` with your username, `./doom3/` with another folder name if you don't like it and **9050** with the correct app Id. Wait, how do I find the app Id ? In this case you don't need to change it, but just in case you want to repeat this step with other games, open in a browser the Steam store page of the game that you want to download and look at the URL, you should see a number and that's the app Id, e.g.:

!["Doom App Id"](/images/posts/play_doom_3_natively_on_apple_m1/doom_appid.png)

9050 is the app Id. 

If you get an error like this in the terminal which stops the download:

`Error! App '263300' state is 0x402 after update job.`

just relaunch the previous command to resume the download.

## Download and configure the source port

So far so good, but we still need to do some more tweaks to get the game working. Download the source port of DOOM 3 from [Mac Source Ports](https://macsourceports.com), as specified in the "Installations Instructions", make a "~/Library/Application Support/dhewm3/" directory. Copy the "base" directory from an existing installation of DOOM 3 into it. From here **dhewm3.app** should run and be able to find the data.

## You said in the post title "Play DOOM 3 natively on Apple M1" but I want a proof!

On the official page of [dhewm3](https://dhewm3.org/#getting-dhewm3-executables), it says this:

_If you’re using macOS, MacSourcePorts.com provides signed and notarized dhewm3 binaries for 64bit Intel and Apple Silicon._

And if we check the executable from Mac Source Ports, we get this:

```sh
$ file dhewm3
dhewm3: Mach-O universal binary with 2 architectures: [x86_64:Mach-O 64-bit executable x86_64] [arm64]
dhewm3 (for architecture x86_64):	Mach-O 64-bit executable x86_64
dhewm3 (for architecture arm64):	Mach-O 64-bit executable arm64
```

So as you can see this is not a build just made for arm64 but it's an universal binary, however in this way there isn't the translation process through Rosetta 2 from the moment you just run the game natively.

We could still check from the **Activity Monitor** if the game is running natively, if we see Apple then we know that is not using Rosetta 2:

!["Doom 3"](/images/posts/play_doom_3_natively_on_apple_m1/doom3.png)

## What about the BFG Edition ?

It's just the same process, to summarize everything:

1. Download the game files from Steam through the [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)
2. Download and configure the source port from [Mac Source Ports](https://macsourceports.com) by following the "Install Instructions" for that specific game

## TLDR

There are many ways to play Windows games on macOS which don't necessarily rely on Crossover and Parallels. If you just need to download the files of a Windows game without running directly the executable through Steam, you just need to use the SteamCMD. In all other cases, use Parallels or Crossover, Wineskin does not work very good with Steam unfortunately.