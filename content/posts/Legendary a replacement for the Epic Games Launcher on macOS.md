+++ 
date = "2021-12-24"
title = "Legendary, a replacement for the Epic Games Launcher on macOS"
slug = "Legendary, a replacement for the Epic Games Launcher on macOS"
tags = []
categories = ["Apple M1"]
series = []
+++

This is going to be a pretty straight forward overview of Legendary. Unlike the Epic Games launcher, Legendary is a command line application and with it you can install games, synch saves, play multiplayer and many other features. If you want to know more you can check the repo on [Github](https://github.com/derrod/legendary).

I'm using an Apple M1 and I didn't encounter problems so far, of course it depends what game you're playing but generally speaking Legendary is better than the original Epic Games launcher, the latter doesn't run very well.

## Steps to download and install a game

Download from the releases page on Github the macOS build, after that open the terminal and make the file an executable:

```sh
chmod +x legendary
```

At this point you can launch the executable in this way:

```sh
./legendary
```

Or you could add an entry to the **PATH** environment variable, in this way you can launch the executable from every folder in your terminal. In the most recent macOS versions, you just need to add a line in your "~/.zshrc", e.g.:

```sh
export PATH=$PATH:/path/to/directory
```

After you downloaded and set the environment variable, you can download and install a game by following these steps:

1. Login into your Epic Games account, the command should open a new tab in your browser:

```sh
legendary auth
```

2. To install a game you may want to check your library:

```sh
legendary list-installed
```

3. Install a game by passing the exact name displayed by the previous command (replace "Torchlight II" with your game):

```sh
legendary install "Torchlight II"
```

4. Launch the game:

```sh
legendary launch "Torchlight II"
```

That's it, you can play your games from the Epic Games Store without the launcher!