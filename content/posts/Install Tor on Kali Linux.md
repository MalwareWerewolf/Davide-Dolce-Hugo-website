+++ 
date = "2019-10-21"
title = "Install Tor on Kali Linux"
slug = "Install tor on Kali Linux"
tags = []
categories = ["Linux"]
series = []
+++

I am big fan of open source, one of my favourite Linux distros is **Kali Linux**. It is designed for penetration testing, I used it for several years but I still have more things to learn. It helped me to understand more about penetration testing and the different tools used to hack different systems. Many tools require root privilegies and on Kali you are permanently logged in as root, for security reasons you can't use Tor if you have administrator privilegies.

## It is easy to install Tor, why make a post for this topic ?

Well not really, it depends how you install it, of course there is a dedicated package, you just need to type **apt install tor**, but the Tor docs don't recommend to do this. The reason is because the distro repositories are not updated to the latest Tor version, so they are not very reliable.

Kali is particular as distro, it is not easy to use, everything you are going to do requires a big knowledge of Linux terminal. I faced many problems that put my skills to the test and sometimes it's very hard to figure out what is the real problem.

## Why is Tor so important ?

As mentioned on the offical [page](https://www.torproject.org/about/overview.html.en), Tor protects you against a common form of Internet surveillance known as **traffic analysis**, which can be used to infer who is talking to whom over a public network. In other words some people can know behavior and interests, so this is the main reason about why you should use Tor.

## First option

This is the easiest way to install Tor but as I mentioned before, the Tor documentation says clearly to not use this method because you are downloading untrustable and obsolete versions. I will show in the next paragraph the second method:

```
$ sudo add-apt-repository ppa:webupd8team/tor-browser
$ sudo apt update
$ sudo apt install tor
```

## Second option

This is the recommended method to use, visit the [Tor website](https://www.torproject.org/docs/debian.html.en) and choose a Debian version, I am using the stable one, copy the following lines and paste them in this file **"/etc/apt/sources.list"**

```
deb https://deb.torproject.org/torproject.org stretch main
deb-src https://deb.torproject.org/torproject.org stretch main
```

In order to avoid file certification problems, you need to import the **GPG keys**, copy and paste those two lines in the terminal:

```
$ curl https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --import
$ gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | apt-key add -
```

Run the following commands to keep your current signing key:

```
$ apt update
$ apt install tor deb.torproject.org-keyring
```

## Create another user

From the moment on Kali you are always logged in as root, Tor can't work, you need to use the **adduser** command to add a new user to your system, replace **myNewUsername** with the user that you want to create:

```
$ adduser myNewUsername
```

Set the new password for the user and run the following command to switch:

```
$ su - myNewUsername
```

## Check if the tor service is working

Run the following commands to check if Tor has been installed correctly:

```
$ sudo service tor start
$ service tor status
```

The status should be set to **Active(running)**, to stop it type:

```
$ sudo service tor stop
```

## TLDR

Tor will help you to stay anonymously online along with **DuckDuckGo**, but there are some rules to respect in order to prevent IP leak, but that's another story. 

As Tor is a hidden network so you may come across a few sites that are illegal or promote shady/illegal activities. Try to stay away from these kind of websites.