+++
title = "Challenges"
+++

<img src="/images/challenges.jpeg" alt="Challenges" width="900" height="250">

<p>
    During my career path in <b>Software Engineering</b> and <b>Cybersecurity</b>, I thought it would've been useful to
    make some challenges that I also faced in order to help other people to practice with the same challenges that
    helped me to learn.
</p>

<p>
    At the moment there are only challenges related to <b>Reverse Engineering</b> but I'm planning to release other
    challenges for topics like <b>Penetration Testing</b>. Don't worry if you can't complete a challenge, just click on
    the solution on the right to get a complete explanation. 
    If there isn't a solution, it simply means that I didn't make a video or a post yet :)
</p>

<h1>Reverse Engineering</h1>

<p>
    The programs in these Reverse Engineering challenges are not real or designed to harm your system in
    anyway. It is still a good idea to always run untrusted code in a virtual machine (even if I tell you it's safe!).
</p>

<p>
    Some challenges emulate techniques used in real malware, which may cause antivirus detections. Don't contact me
    about AV detection, treat all files as if you were reversing malicious code.
</p>

<h2>[Unpackme]</h2>

Each program is packed by another tool, find a way to unpack the program and remove the protection. If the program is
unpacked correctly when you click on the excutable, it should work without any issues, otherwise you did something
wrong. Use the tools that you think are necessary to unpack these programs.

<ul>
    <li><a href="/files/reverse-engineering/upx/upx-unpackme.zip">UPX Unpackme</a> - <a
            href="https://www.youtube.com/watch?v=BiqcJI_ooKg&t=335s">Solution</a> - &starf;&star;&star;&star;&star;
    </li>
    <li><a href="/files/reverse-engineering/vmp/vmp-unpackme-fix-imports.zip">VMP Unpackme</a> - <a
            href="https://www.youtube.com/watch?v=R5astw-GxzY">Solution</a> - &starf;&starf;&starf;&star;&star;</li>
    <li><a href="/files/reverse-engineering/themida/Themida-Unpackme-No-API-Wrapping.zip">Themida Unpackme</a> - <a
            href="https://www.youtube.com/watch?v=8H5p8FKFFxQ">Solution</a> - &starf;&starf;&starf;&star;&star;</li>
</ul>

<h2>[CTF Static Analysis]</h2>

Unlike the <b>Unpackme challenges</b>, you can't use a debugger to solve these challenges. Use the tools for static
analysis like the free version of IDA Pro to complete them.

<h4>Unencrypted String</h4>

The task is simple, find the hidden flag without debugging the program. It shouldn't be necessary but if you want to
check if the flag is correct, you just need to run the exe from the CMD or the Powershell by entering the correct
string.

<ul>
    <li><a href="/files/reverse-engineering/CTF/Unencrypted-String/CTF-Unencrypted-String-1.zip">String1</a> -
        &starf;&star;&star;&star;&star;</li>
    <li><a href="/files/reverse-engineering/CTF/Unencrypted-String/CTF-Unencrypted-String-2.zip">String2</a> -
        &starf;&star;&star;&star;&star;</li>
    <li><a href="/files/reverse-engineering/CTF/Unencrypted-String/CTF-Unencrypted-String-3.zip">String3</a> -
        &starf;&starf;&star;&star;&star;</li>
</ul>