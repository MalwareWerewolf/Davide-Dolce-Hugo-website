+++ 
date = "2021-04-10"
title = "Gimme The Steam App Id By Name a tool made with .NET Framework"
slug = "Gimme The SteamApp Id By Name a tool made with .NET Framework"
tags = []
categories = ["CSharp"]
series = []
+++

!["UI Overview"](/images/posts/gimme-the-steam-app-id-by-name/UI-Overview.png)

So the first question might be, why did you make a program like this ? Well there are different reasons that you could have to get the **Steam APP ID**, many websites use this ID to print data about a game. Even on the **Steam** website you can use the ID to search for a game in the store, another reason about why I made this tool is because it was a little bit challenging to implement on a Windows Forms application. You can find the source code on [Github](https://github.com/MalwareWerewolf/GimmeSteamAppIdByName).

## The JSON body contains all the available games on Steam

The following [GET Request](https://api.steampowered.com/ISteamApps/GetAppList/v2/) contains exactly **113347 records**, it would not be very smart to call every time we press a button this request instead I prefered to call it only one time when I needed to open the program before the InitializeComponent() call in the constructor.

## Code overview

This is the Form code:

```cs
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SteamAppIdIdentifier
{
    public partial class SteamAppId : Form
    {
        protected DataTableGeneration dataTableGeneration;

        public SteamAppId()
        {
            dataTableGeneration = new DataTableGeneration();
            Task.Run(async() => await dataTableGeneration.GetDataTableAsync(dataTableGeneration)).Wait();
            InitializeComponent();
        }

        private void SteamAppId_Load(object sender, EventArgs e)
        {
            dataGridView1.DataSource = dataTableGeneration.DataTableToGenerate;
        }

        private void btnShowAll_Click(object sender, EventArgs e)
        {
            searchTextBox.Text = string.Empty;
            ((DataTable)dataGridView1.DataSource).DefaultView.RowFilter = string.Format("Name like '%{0}%'", searchTextBox.Text);
        }

        private void btnSearch_Click(object sender, EventArgs e)
        {
            try
            {
                ((DataTable)dataGridView1.DataSource).DefaultView.RowFilter = string.Format("Name like '%{0}%'", searchTextBox.Text.Replace("'", "''"));
            }
            catch (Exception ex) { }
        }
    }
}
```

This is the code that deserializes the JSON and generates the Data Table which will be used to show the Grid View content:

```cs
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SteamAppIdIdentifier
{
    public class DataTableGeneration
    {
        private DataTable dataTable;

        public DataTableGeneration() { }

        public async Task<DataTable> GetDataTableAsync(DataTableGeneration dataTableGeneration) {
            HttpClient httpClient = new HttpClient();
            string content = await httpClient.GetStringAsync("https://api.steampowered.com/ISteamApps/GetAppList/v2/");
            SteamGames steamGames = JsonConvert.DeserializeObject<SteamGames>(content);

            DataTable dt = new DataTable();
            dt.Columns.Add("Name", typeof(String));
            dt.Columns.Add("AppId", typeof(int));

            foreach (var item in steamGames.Applist.Apps)
            {
                dt.Rows.Add(item.Name, item.Appid);
            }

            dataTableGeneration.DataTableToGenerate = dt;
            return dt;
        }

        #region Get and Set
        public DataTable DataTableToGenerate{
            get { return dataTable; }   // get method
            set { dataTable = value; }  // set method
        }
        #endregion

        #region JSON Properties
        public partial class SteamGames
        {
            [JsonProperty("applist")]
            public Applist Applist { get; set; }
        }

        public partial class Applist
        {
            [JsonProperty("apps")]
            public App[] Apps { get; set; }
        }

        public partial class App
        {
            [JsonProperty("appid")]
            public long Appid { get; set; }

            [JsonProperty("name")]
            public string Name { get; set; }
        }
        #endregion
    }
}

```

## Use Wait() to block the Thread

This is not very recommend because it blocks the current Thread, but in this case to stop the application from loading the entire UI, this was exactly what I needed. Not only that, the function used to generate the Data Table needed to be async, from the moment the HTTP Get can extract more than 100k records.

More info are available on the Microsft docs about the [Wait()](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.wait?view=net-5.0) method.

## Generate the JSON properties with quicktype

An example of a JSON body used is the following:

```json
{
    "applist": {
        "apps": [
            {
                "appid": 216938,
                "name": "Pieterw test app76 ( 216938 )"
            },
            {
                "appid": 660010,
                "name": "test2"
            },
            {
                "appid": 660130,
                "name": "test3"
            },
            {
                "appid": 1118314,
                "name": ""
            },
            {
                "appid": 1083100,
                "name": "Zaccaria Pinball - Tropical 2019 Table"
            }
        ]
    }
}
```
There is a collection called **apps** which is nested into **applist**, if we paste the code on the **quicktype editor**, we get this:

!["JSON Properties"](/images/posts/gimme-the-steam-app-id-by-name/QuickType-JSON.png)

Which is exactly what we need to use to get the Name and the APP ID from the JSON Body without using Dictionaries, Enumerables etc.

## Filter the data inside the Grid View

So far so good, we generated the Grid View based on the JSON Body but there are too many rows to view, it would be better to filter these rows. We could use the RowFilter property to do this, besides using a button to restore the rows that we filtered:

```cs
private void btnShowAll_Click(object sender, EventArgs e)
{
    searchTextBox.Text = string.Empty;
    ((DataTable)dataGridView1.DataSource).DefaultView.RowFilter = string.Format("Name like '%{0}%'", searchTextBox.Text);
}

private void btnSearch_Click(object sender, EventArgs e)
{
    try
    {
        ((DataTable)dataGridView1.DataSource).DefaultView.RowFilter = string.Format("Name like '%{0}%'", searchTextBox.Text.Replace("'", "''"));
    }
    catch (Exception ex) { }
}
```

## Let's try to search some of these IDs on the Steam Store

One last we thing that I would like to try is to search a game by name, then I can copy its ID and paste it in the browser to see if it's correct. The Steam Store should load the correct page, let's try with **Dota 2**:

!["Dota 2 Search"](/images/posts/gimme-the-steam-app-id-by-name/Dota2Search.png)

Copy the ID 570 and append it to the following url https://store.steampowered.com/app/ right after **app/** you should get something like this:

!["Dota 2 Store Page"](/images/posts/gimme-the-steam-app-id-by-name/SteamStorePage.png)
*Screenshot made from the Steam Store Page*

If we press the **Show All** button the search bar becomes empty and we restore the Grid View:

!["Restore"](/images/posts/gimme-the-steam-app-id-by-name/Restore.png)

## TLDR

I made this post not only to show my tool, but also to show I approached some problems and how to use some of the Steam APIs which are always useful to learn. You should now have a good overview about the Steam APIs and how to create a Windows Forms application for this kind of purposes.