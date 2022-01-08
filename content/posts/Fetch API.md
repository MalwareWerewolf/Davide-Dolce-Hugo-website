+++ 
date = "2019-09-06"
title = "Fetch API, a good alternative to Ajax and jQuery"
slug = "Fetch API"
tags = []
categories = ["Javascript"]
series = []
+++

The **Fetch Api** offers you a simple way to make any kind of request you wish to do using Javascript. The Fetch code I am going to show you, works with [Node.js](https://nodejs.org/en/) or a browser console, in other words you do not necessarily need to install [Node.js](https://nodejs.org/en/) and the Fetch package on your computer to get the code work. If you decide to use the browser console you do not need to import the module, in this post I show how to implement the code with [Node.js](https://nodejs.org/en/).

## Working with Node.js

The first thing you need to do is install [Node.js](https://nodejs.org/en/), when the installation is complete open the command line and navigate to the path where you want launch your script. If you are using Linux or Mac type **ls** to display the files in the current directory, on Windows type **dir**, use **cd** to change directory, it works on every OS. After that launch the following command:

```
$ npm install node-fetch
```

## Get request

Create a file named **get.js**, copy and paste the following code:

```javascript
var fetch = require("node-fetch");
fetch("https://api.github.com/users/MalwareWerewolf")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(error => console.error(error));
```
Launch the js file from the command line:

```
$ node get.js
```

You should get the following output in the terminal (or something similar at least):

```json
{ 
    login: "MalwareWerewolf",
    id: 43040746,
    node_id: "MDQ6VXNlcjQzMDQwNzQ2",
    avatar_url: "https://avatars2.githubusercontent.com/u/43040746?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/MalwareWerewolf",
    html_url: "https://github.com/MalwareWerewolf",
    followers_url: "https://api.github.com/users/MalwareWerewolf/followers",
    following_url: "https://api.github.com/users/MalwareWerewolf/following{/other_user}",
    gists_url: "https://api.github.com/users/MalwareWerewolf/gists{/gist_id}",
    starred_url: "https://api.github.com/users/MalwareWerewolf/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/MalwareWerewolf/subscriptions",
    organizations_url: "https://api.github.com/users/MalwareWerewolf/orgs",
    repos_url: "https://api.github.com/users/MalwareWerewolf/repos",
    events_url: "https://api.github.com/users/MalwareWerewolf/events{/privacy}",
    received_events_url: "https://api.github.com/users/MalwareWerewolf/received_events",
    type: "User",
    site_admin: false,
    name: "",
    company: "",
    blog: "https://www.linkedin.com/in/davidedolce/",
    location: "Torino Italia",
    email: null,
    hireable: null,
    bio: "",
    public_repos: 6,
    public_gists: 0,
    followers: 2,
    following: 3,
    created_at: "2018-09-06T15:07:27Z",
    updated_at: "2019-03-02T19:08:51Z" 
}
```

## Token authorization

I am using my own Get request, you do not need to create it because the process is the same for other kind of Get request, obviously it depends what you want to do. Create a file named **getToken.js** and copy and paste the following code:

```javascript
var fetch = require('node-fetch');
fetch("http://localhost:5000/api/token", {
    credentials: 'include'
    headers: { //define the headers
        "Authorization": "Bearer myPersonalToken" //change myPersonalToken to another valid token
    }
}).then(res => res.json()).then(response => console.log('Success:' JSON.stringify(response))).catch(error => console.error('Error:', error));
```
## Post request

I created a Post request here, you need to change body content, create a file named **post.js** and copy and paste the following code:

```javascript
var fetch = require('node-fetch');
fetch("http://localhost:5000/api/token", {
    method: "post", //type of request
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ //this is where you put your json body, with a key and a value the request should receive from the response
        username: "mario",
        password: "secret"
    })
}).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response))).catch(error => console.error('Error:', error));
```

## Syntax explaining

As you can see the syntax is very simple, you import the module at the top of your file, then you use the fetch variable to call the function with a url as parameter. You use the keyword then for handling the data you get from the api and the catch keyword to handle exceptionts that the server could return. Here is an example to help you remember really well the syntax:

```javascript
fetch(url) //call the fetch function and pass a url
    .then(function() {
        // handle the data from the api
    })
    .catch(function(){
        // handle any kind of exception
    })
```

## TLDR

There are other ways to do these kind of requests, but now you should have a clear idea about how to implement them. Unfortunately not all browsers are supporting Fetch, but it still remains a good alternative not only to jQuery and Ajax but even to XMLHttpRequest.

Visit the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [Github.io](https://github.github.io/fetch/) for more info.