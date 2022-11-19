+++ 
date = "2022-11-18"
title = "Install Node js on Windows without admin rights"
slug = "Install Node js on Windows without admin rights"
tags = []
categories = ["Node js"]
series = []
+++

If you have your own laptop with **admin rights**, you don't need to read this article further. On the contrary if you are working in an **IT company** where you can't run any application with an admin account, it may save your time having **Node js** installed in a separate folder so you can freely change or update its content.

I had an old version of Node js installed on my laptop and I needed to update it in order to use the **Angular CLI**, which is requiring a minimum version of Node js to work.

## Setting the environment variables in Windows for Node js

[Download the Windows Binary](https://nodejs.org/en/download/) and unzip its content in the ```C:\``` drive or another folder that is easily accessible to you. The **environment variables editor** can also be launched with the following command from the **Windows command-line prompt (CMD)**:

```cmd
C:\> rundll32 sysdm.cpl,EditEnvironmentVariables
```

Now we need need to add a new variable to the **Path** variable inside the **User variables**. Just put the path where you unzipped the content of the **Windows Binary**.

## Setting another environment variable for ng

This step is not necessary, but as soon as you install a global package and you want to run it from the command line, you might get an error such as:

```
'ng' is not recognized as an internal or external command, operable program or batch file
```

Assuming you don't have admin rights, there's a folder in **Appdata** which is holding the node modules being installed, simply put the following path in the system variables to solve the issue (put your username in the path):

```
C:\Users\your username here\AppData\Roaming\npm%
```

Just reopen again the CMD and you can again use both global packages and Node js from the command line without admin rights. 

## TLDR

This is the only working fix that I found without using admin rights, there are ways to solve the issue related to packages missing and not usable through command line like changing the Node js prefix, but they still require admin rights to work.