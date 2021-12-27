+++ 
date = "2021-06-11"
title = "QEMU, Parallels or UTM, which one is the best with Apple M1 chip ?"
slug = "QEMU, Parallels or UTM, which one is the best with Apple M1 chip ?"
+++

I always used PCs with Windows already pre-installed but I never tried a Macbook before. I was also curious about the new Apple M1 chip and from the moment it was released recently, I thought it was a good time to discover new features to help the community to use efficiently these Macbooks with the new chip. We are going to analyze each tool in order to declare a winner.

## QEMU

Before the version 6.0.0 to make a VM work, you had different options:

- The easiest option was to download [this tool](https://github.com/KhaosT/ACVM) on Github and simply drag and drop the image and press start, pretty simple right ? Not really, I was only able to make the **Windows ARM** version work with this tool, for some reason it was not working with **Ubuntu Server**. I made a [video](https://www.youtube.com/watch?v=izftkebufnk&t=280s) about the emulation with QEMU where I also talk about this issue, it's probably caused by some wrong parameters used when the **qemu-img** command is executed.

- Do everything manually from compiling the QEMU source code to build the VM, there are many other posts where they teach you how to do this. The following posts are outdated but they give a good overview about how to compile the source code of QEMU:

    -  [Virtualize Windows 10 for ARM on M1 with Alexander Graf's qemu hypervisor patch](https://forums.macrumors.com/threads/success-virtualize-windows-10-for-arm-on-m1-with-alexander-grafs-qemu-hypervisor-patch.2272354/)

    - [How to run Windows 10 on ARM or Ubuntu for ARM64 in QEMU on Apple Silicon Mac
](https://gist.github.com/niw/e4313b9c14e968764a52375da41b4278)
    
    - [Running Linux and Windows on M1 with QEMU
](https://gist.github.com/citruz/9896cd6fb63288ac95f81716756cb9aa)

- Download a **QEMU fork** (for those who don't know what is a fork, it's simply a copy of a repository) with **Alexander Graf's qemu hypervisor patch installed** and launch the VM from the terminal always using QEMU (not the one installed with **homebrew**). For example this is the script that I used with Ubuntu Server:

```sh
./qemu-system-aarch64 \
  -serial stdio \
  -M virt,highmem=off \
  -accel hvf \
  -cpu cortex-a72 \
  -smp 4,cores=4 \
  -m 4096 \
  -bios "/Applications/ACVM.app/Contents/Resources/QEMU_EFI.fd" \
  -device virtio-gpu-pci \
  -display default,show-cursor=on \
  -device qemu-xhci \
  -device usb-kbd \
  -device usb-tablet \
  -device intel-hda \
  -device hda-duplex \
  -drive file="myPathHere/ubuntu-server.qcow2",if=virtio,cache=writethrough \
  -cdrom "myPathHere/ubuntu-server.iso"
```

But wait where can I find a fork with this patch already installed ? [ACVM](https://github.com/KhaosT/ACVM) already contains a QEMU build with this patch installed, there is also [this link](https://mega.nz/file/QYB0QTrC#p6IMBJlFqqNKuGonwrDkPOVKQj8yHCVgiLOYVaGvs4M) where you can find another fork (you can also find the link on [this post](https://forums.macrumors.com/threads/success-virtualize-windows-10-for-arm-on-m1-with-alexander-grafs-qemu-hypervisor-patch.2272354/)).

## UTM

The process to create a VM is more simple, for example to create a Windows VM you can take a look on the [official website](https://mac.getutm.app/gallery/windows-10). There is also a [gallery page](https://mac.getutm.app/gallery/) where you can get a good explanation about how to install different OS if you are not interested in Windows 10. 

Unfortunately there is a catch, at least for Windows 10, I didn't test other operative systems. For some reason the Edge Browser continuously open again and again, besides that the cursor flickers constantly and it's very annoying. Is there a way to fix this ? I didn't found a solution but if you have found it, you can share it in the comment section below (or if I found a solution I will update this post). As you might imagined Windows 10 does not work very well with UTM but these issues are also present in QEMU (I mean QEMU standalone, of course UTM is built around QEMU).

### Update 27/12/2021

Apperantly the issue with the mouse flickering was fixed with the [release 2.4.1](https://github.com/utmapp/UTM/releases/tag/v2.4.1), you just need to use the latest SPICE tools ISO. Nonetheless there are still some performance issues.

## Parallels

No matter what you might think, if you want to use Parallels, buy a licence (or at least try before you buy). It's very simple to create a VM, you just need to select the file in the **Finder** and Parallels will do the rest, no terminal, no strange tricks, no drivers to install, nothing. [In this video](https://www.youtube.com/watch?v=-DFdF6zIx-Y) there is an example.

## TLDR

UTM could be a good alternative, but unfortunately it's not fully usable. You could use it to run simple applications, but don't expect to play games or to do other complex stuff, for that purpose there is Parallels which works much better. 

Virtualbox is probably never going to get a release to support the M1 chip, from the moment it's a general-purpose full virtualizer for x86 hardware, which the M1 or M1X are not part of this.

Virtualbox is currently in a technical preview like Parallels was a few months ago, it's too early to say if it'll be a good alternative or not.

This post was simply made to give an overview to everyone who is going to virtualize an OS on an **Apple M1 chip**, if I would declare a winner, I would choose **Parallels**, why you may ask ? The answer should be obvious but it's because of its simplicity and the fact that many features are perfectly working, you can also play 3D games!

!["parallels-screen"](/images/posts/parallels-or-UTM-which-one-is-the-best-with-the-apple-m1-chip/Parallels-Screen.png)