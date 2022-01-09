+++ 
date = "2021-05-09"
title = "Use the VMProtect SDK to protect your application"
slug = "Use the VMProtect SDK to protect your application"
tags = []
categories = ["Reverse Engineering", "C++"]
series = []
+++

If you want to protect your application from a reverse engineering analysis, you may have heard about **VMProtect**; a tool made to protect your applications using **virtualization**, the **generation** and **verification** of **serial numbers**, **packing**, **mutation**, **obfuscation** and more. Learn the **SDK** will help you not only to understand how the protection work, but it will also help you to virtualize only certain areas of code that you want to protect. Let's say that you have a method which is going to manage a licence for your application, you do not want someone to reproduce your code or to create a keygen to bypass the registration. You can have a good control of your code by using the SDK, keep in mind that the virtualization will impact on the performance, not only that you should use VMProtect on a **C** or **C++** application. On **.NET** it's very easy to remove the protection, so keep that in mind.

## Prerequisites

This post will focus on how to integrate the VMProtect SDK in a simple console application for the **Windows platform**. You will need Visual Studio (possibly the most recent release) with the **Desktop Development with C++** component installed and the [VMProtect Demo](https://vmpsoft.com/) version.

## Useful links

You can find these links by searching on Google, but I prefered to list them here:

- [SDK Functions](http://vmpsoft.com/support/user-manual/working-with-vmprotect/preparing-a-project/sdk-functions/)
- [Project section](http://vmpsoft.com/support/user-manual/working-with-vmprotect/main-window/project-section/)
- [Options section](http://vmpsoft.com/support/user-manual/working-with-vmprotect/main-window/project-section/options-section/)

The **Project section** will list you all the different sections in VMProtect, in particular you should check the **Options section** which will explain to you the different features that you can use in more detail.

## Buy an edition if you are going to distribute your application

The demo version is enough for this walkthrough, but you will need to purchase the right edition if you want to distribute your application without this pop-up:

!["Pop Up"](/images/posts/use-the-vmprotect-api-to-protect-your-application/demo-pop-up.png)

Besides this annoying pop-up, there are other things to consider, if we navigate to the [FAQ page](http://vmpsoft.com/support/faq/) on the VMPprotect website, there is an interesting question and an interesting answer:

_Files protected with the demo version are detected as suspicious. Why?_

_The demo version is public and bad guys try to use it for protecting malware. That’s why sometimes antivirus applications detect files protected by the demo. This usually doesn’t happen with the full version of VMProtect which has completely different protected code structure._

Do you really want to protect your application in the best way ? Buy a licence.

Do you want to avoid spending money and distribute your application in any case ? Reconsider to buy a licence.

There is also a [comparison chart](http://vmpsoft.com/products/matrix/) to help you choose the right edition.

## Set up the C++ project

There are different ways to set up a C++ project, I prefered to keep everything in the same folder without the need to install VMProtect on different systems but you are free to do as you wish.

First of all, open Visual Studio and create a Console Application in C++, if you already installed the VMProtect Demo, navigate to the following path "**C:\Program Files\VMProtect Demo**". There are three files that we need and these files are located in two different directories:

- "**Include\C**" copy **VMProtectSDK.h** into your project;
- "**Lib\Windows**" copy **VMProtectSDK64.lib** and **VMProtectSDK64.dll** into your project, make sure to set the Content property to true for the dll:

!["VMP SDK content to true"](/images/posts/use-the-vmprotect-api-to-protect-your-application/vmp-sdk-dll-content-to-true.png)

Why you need to copy **VMProtectSDK64.dll** in the first place ? Because the application can't work without this dll from the moment it contains the functions that we are using in our project. The structure should be something like this, depending on how you set up the project:

!["Project structure"](/images/posts/use-the-vmprotect-api-to-protect-your-application/project-structure.png)

The code that I used is the following but you are free to change or to use what you want:

```cpp
#include <iostream>
#include "VMProtectSDK.h"
#include <Windows.h>

int main()
{
    VMProtectBegin("main");
    ::ShowWindow(::GetConsoleWindow(), SW_HIDE);

    if (VMProtectIsProtected()) {
        MessageBox(
            NULL,
            (LPCWSTR)L"THIS IS PACKED",
            (LPCWSTR)L"Unpackme",
            MB_ICONINFORMATION | MB_OKCANCEL | MB_DEFBUTTON2
        );
    }
    else
    {
        MessageBox(
            NULL,
            (LPCWSTR)L"THIS IS UNPACKED",
            (LPCWSTR)L"Unpackme",
            MB_ICONINFORMATION | MB_OKCANCEL | MB_DEFBUTTON2
        );

    }

    VMProtectEnd();
    return 0;
}
```

## A quick analysis about the functions used

We start to invoke the function **VMProtectBegin** and we pass a string which is the name of a method, the **main** in this case, it will simply identify the beginning of the protected area of the code. It is better to use the function name, otherwise there will be a duplicate name conflict.

**VMProtectEnd** marks the end of the protected area of the code and **VMProtectIsProtected** will check if our application is protected or not.

## Compile the project and create the protected file

Set the platform to x64 and the configuration to Release just like this:

!["vmp platform"](/images/posts/use-the-vmprotect-api-to-protect-your-application/vmp-platform.png)

After you compiled the project, open **VMProtect Demo** and select the output file that has been generated by Visual Studio. You can simply check the output path when you compile the project to find it quickly:

!["output-dir"](/images/posts/use-the-vmprotect-api-to-protect-your-application/output-dir.png)

On the left bar under **Functions for Protection** there is a folder and an entry named **VMProtectMarker "main"**, if we click on this entry we can see the **code**, the **Compilation Type** and other records:

!["vmprotect-menu"](/images/posts/use-the-vmprotect-api-to-protect-your-application/vmprotect-menu.png)

Let's pack the file by clicking on the following icon:

!["compile-icon"](/images/posts/use-the-vmprotect-api-to-protect-your-application/compile-icon.png)

## Let's check if the file is protected

A new file has been created in the directory where the unpacked file was compiled, if we execute these two files, we get two different messages:

!["messages-pop-up"](/images/posts/use-the-vmprotect-api-to-protect-your-application/messages-pop-up.png)

It appears to be correct but we could check in **IDA Pro** if our code is virtualized, as soon as IDA loads the file we can clearly see from the **graph view** that something is not right. There are a lot of useless instructions repeated continuosly so this is clearly a sign about a possible virtualized code:

!["ida-graph"](/images/posts/use-the-vmprotect-api-to-protect-your-application/ida-graph.png)

## TLDR

From now you should have a clear view about how to use the VMProtect SDK in your project and how this stuff is working. On another OS the process is literally the same, remember to buy an edition if you are going distribute your application from the moment it removes some limitations like the antivirus detection.