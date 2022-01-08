+++ 
date = "2021-11-14"
title = "The downsides of Salesforce Marketing Cloud"
slug = "The downsides of Salesforce Marketing Cloud"
categories = ["Reviews"]
+++

So this is going to be some kind of review of the platform on a developer side prospective. I will not talk about administration, SSO and other stuff more related on the configuration of the platform.

Of course this is my opinion and my experience with the platform so you might not agree with me.

## It's a nightmare to develop with AMPScript

I know that this language is not something like **Python** or **C#** but at least I would like to have a good editor to develop as quickly as possible, instead we get a terrible interface like this:

!["AMPScript Interface"](/images/posts/the-downsides-of-salesforce-marketing-cloud/ampscript-interface.png)
_Image from [Datarati - Implementation Guru](https://www.youtube.com/watch?v=HsrGTSiXMNw)_ 

And it gets even worse when you have a lot of code to manage because you can't indent code properly, I don't understand why Salesforce just decided to put an option like "**Format HTML**" (you have to right click on the editor to get the option) which simply formats the HTML code while the AMPScript code remains the same with no indentation.  

### Finding a bug in your code, it's hard

You get your code ready and hit preview and test but here comes an error which doesn't say anything of useful. Many times when you call a web service and there's an error, the platform doesn't tell you what line in your code could cause this issue. Sure if you are just calling one single REST Service it's easy to know what went wrong, but when you are using multiple APIs, well you have to "debug" your code with **SSJS**.

I don't have much to say about SSJS because it's basically Javascript on server side and it works just like Javascript or almost, as always you have to follow a syntax like this:

```javascript
<script  runat="server">

    Platform.Load("core","1");

    try {

    var caslDE = DataExtension.Init("6C119FFD-0EF5-476A-8127-E2E70D80ED04");

    caslDE.Rows.Update({Source:"EXACT"}, ["Prospect Type"], ["A"]);

    } catch (ex) {
        Write("An error has occurred: " + Stringify(ex));
        Variable.SetValue("@Result", Stringify(ex));  //sets above ampscript variable
    }

</script>
```

### Nothing of important is highlighted

At this point you can "debug" your code, but the editor makes really hard to understand where your AMPScript code is, because there are no colors to distinguish the instructions and it becomes a mess in a matter of time.

For example in a language like C#, I can type something like this in an editor:

```csharp
int x = 5;
int y = 6;

return x * y;
```

As you can see everything gets highlighted, so it's much more clear to distinguish what you wrote in your code and it doesn't become a mess. Now compare the C# code to this:

!["AMPScript Not Highlighted"](/images/posts/the-downsides-of-salesforce-marketing-cloud/ampscript-not-highlighted.png)

_Image from [SFMC Trailblazers](https://www.youtube.com/watch?v=x3-gVLVINXA)_

I also worked with the Salesforce CRM and the keywords are highlighted in the developer console and the code is indented properly (basically in AMPScript everything is on the same column):

!["Developer Console"](/images/posts/the-downsides-of-salesforce-marketing-cloud/sfdc-developer-console.png)
_Image from [Suresh Dazari](https://www.youtube.com/watch?v=B8jbq4-8RPs)_ 

But wait we can develop AMPScript code on VSCode! Well that's not quite correct, sure you can develop your code in VSCode with [this plugin](https://marketplace.visualstudio.com/items?itemName=sergey-agadzhanov.AMPscript) (which is not developed and mantained by Salesforce), but if you want to edit your code on the platform, you have to do each time copy and paste. You could also connect the plugin directly with your platform and you get all the emails and mobile messages in VSCode, but as soon as you change something and you hit mistakenly `CTRL + S` to save the file, it gets automatically uploaded on the platform. Another issue is that you can't test your code locally so you have to copy and paste the AMPScript code on the platform in any case. This entire useless process can lead to mistakes most of the time.

## SQL has many restrictions

Just like AMPScript, you can write SQL code on the platform, the problem is that SQL comes with different restrictions. For example you can't use variables, store procedures, if statements and many other useful things in a language like **Transact-SQL**. These are just a few of the restrictions with SQL on Marketing Cloud and this leads to many problems related to the performance because sometimes you can't optimize queries because of these restrictions.

## At some point, Internet becomes useless

If you get an error and you have to fix it, forget about Internet and Google because you will not find anything of useful. You can't use the mindset of a Java Developer or a .NET Developer where you get an error or something is not working and you begin to search on Google for an answer. Many times you have to understand what's wrong on your own.

## You will struggle to get a new job

Finding a new job as a Salesforce Marketing Cloud Developer is a challenge, these are the numbers of available jobs on Linkedin worldwide:

!["You will struggle to get a new job"](/images/posts/the-downsides-of-salesforce-marketing-cloud/linkedin-job-search-worldwide.png)
<br>
_Image from Linkedin_

Almost 4k jobs, not bad you might think, let's search in the European Union:

!["You will struggle to get a new job European Union"](/images/posts/the-downsides-of-salesforce-marketing-cloud/linkedin-job-search-european-union.png)
<br>
_Image from Linkedin_

Only 544 results and most of these jobs aren't even related to Marketing Cloud. Now compare these results, to a .NET Developer role:

!["Dotnet Developer European Union"](/images/posts/the-downsides-of-salesforce-marketing-cloud/dotnet-developer-european-union.png)

!["Dotnet Developer Worldwide"](/images/posts/the-downsides-of-salesforce-marketing-cloud/dotnet-developer-worldwide.png)
<br>
_Image from Linkedin_

It doesn't have to be a problem, but I think that if you need to change job and you are good at coding, you can find a job wherever you want with a good portfolio. So the fact that there is more competition in a .NET Developer role is a challenge to show that you can distinguish from the big crowd.

## TLDR

I think that coding is much harder and it offers new challenges every day, unfortunately this is not case for Marketing Cloud. Sure you get to see new stuff every day, but the tasks are very easy to do when you understand even a little bit how the platform works. The only few times where I struggled, were related to the issues that I mentioned before and the fact that debugging your code is a nightmare.

So in my opinion if you like coding, this is not career for you, it's much more an analyst job which I don't like. Salesforce should correct these issues and improve the development on the platform because right now, it's not the best. I did this switch as a .NET Developer because I thought that it could have been interesting to work on a platform which is hosted on the cloud. I learnt many new things even if the platform is not that great, so if you want to pursue a career in this field, think about that twice. For me it'll be the last time on the platform.