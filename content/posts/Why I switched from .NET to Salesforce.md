+++ 
date = "2021-01-19"
title = "Why I switched from .NET to Salesforce"
slug = "Why I switched from .NET to Salesforce"
tags = []
categories = []
series = []
authors = ["Davide Dolce"]
+++

I spent almost two years working in .NET technologies and I dediced to change for a few reasons and I wanted to share my experience.

I've developed a range of web applications and tools using the Microsoft stack, I also developed a [Desktop application](https://github.com/Cramenorn/W3SuperAdmin) for the Warcraft III videogame to manage different game patches.

## Now the real question, why I decided to switch ?

The main reason is because I didn't like some of these technologies, I always wanted to work with the Java stack not just because is the programming language that I used most but also because I really liked the syntax and the way you can write a program.

Speaking of Microsoft stack, I want to mention the Azure Documentation which is not the best, if you need to practise for basic stuff, it's perfect, it's well documented and you will usually find the right answer to your problem.

The real issue comes out when you are doing something of more complex and the documentation is not going to help you, I remember when my project manager asked me to use the [Microsoft Indentity Platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/) as the login method for an ASP.NET Core application. This was not hard to implement, the problem came out when he asked me to make a custom logout page. I did not follow the latest Microsoft updates but when I was developing the application, there was no way to implement the custom logout without cloning the repo on Github, make some changes to the code and generate the corresponding **NuGet** package to get the desired logout page. As you might imagined there was nothing in the documentation that could be helpful.

During my first job experience I decided to change job, I am not explaining every single detail but the main reason is because I wanted to work in a bigger project in order to face more complex challenges.

## My experience with Dynamics CRM

In my second job experience I worked with [Dynamics CRM](https://dynamics.microsoft.com/en-us/crm/what-is-crm/), I am talking about the 2016 version from the moment I didn't work with the 365 version. I had the possibility to work in a bigger project, but the catch were the old technologies. I never liked the idea to work on old technologies, this does not help you to be competitive and it does not help you to grow in your career.

Speaking of Dynamics 2016 with my old team we used **TFS** as versioning control system and in my opinion is really terrible. Yes it has a good UI in Visual Studio but one of the biggest issues is the impossibility to directly merge all files between branches, in TFS if you need to do that, you have to merge one single file one by one. I am not surprised that Microsoft dropped the support and started to use Git as the main versioning control system. 

In Dynamics I didn't like many things, first of all if you want to update a plugin you need to download a separate tool called XrmToolBox, why not make a function in Visual Studio to directly update the plugin on the platform ? In Azure you could do this for a web application. Besides the tool you can't update more environments at once, you need to do it one by one with the "Solutions", in short they are some kind of zip files that you use to update the plugins, the entities etc. across these environments.

You can't update at once a certain number of data with a **Workflow** or a **Plugin**, you need to do it one by one, in fact most of the time when I needed to update 5000 records nothing was working. You needed to make a separate console application to do that and schedule the execution manually on a server, in other words a nightmare.

## The transition to Salesforce

When I read about a **Salesforce** application at **Accenture**, I did not even know what Salesforce was, after searching on Google I fell in love with the platform and I wanted to get a job in the field. Not only everything is working on the cloud but [Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm) is a Java based language so this is what I was looking for, work on bigger projects, more complex challenges and learn the greatest and the newest technologies.

## Trailhead is awesome

[Trailhead](https://trailhead.salesforce.com/en/home) is a learning platform that helps you to learn the entire Salesforce platform like a game, you study, you earn some points if you answer correctly to the questions, you earn ranks and you face real world challenges, in other words this platform is awesome!

## What's next ?

So yeah, so far so good, I started my career on the Salesforce platform and there are many things to learn and many certifications to earn. For now is a good carrer starting point and I want to recommend to anyone to learn and get a job related to the Salesforce platform.