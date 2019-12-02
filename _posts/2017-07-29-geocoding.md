---
date: 2017-7-29
tags:
  - geocoding
  - data science
  - Python
  - data journalism
author: Modasser Billah
location: Cumilla, Bangladesh
title: Geocoding places using Google Geocode API in python
description: "A useful code snippet for data visualisation work."
readingTime: 5
image: "https://source.unsplash.com/TrhLCn1abMU/800x400"
---

For a recent project, I had to get latitudes and longitudes of a lot of places given in a csv file. So, I looked for a quick hack and found Google's geocoding API the coolest one around. If you're working with pandas dataframes you can follow along the exact same way, otherwise you can just use the function for geocoding for your desired address(es).

**Step 1:** Load the csv file with addresses into a pandas dataframe.

````python
import pandas as pd
import requests

data = pd.read_csv('Enter your csv file location here')
````

**Step 2:** Apply the geocoding function to the address column of your dataframe and add the  geocodes in another column of the dataframe. We name this column latlong.

```python
data['latlong'] = data[ENTER ADDRESS COLUMN NAME HERE].apply(getLatLong)

```
When we use an apply function to a column of dataframe, it runs the function for each cell in that column and returns the corresponding results.

**Step 3:** Now let's take a look at the geocoding function.

```python
def getLatLong(address):
    url = 'https://maps.googleapis.com/maps/api/geocode/json' # api endpoint to hit
    mysensor = 'false'
    api_key = 'ADD YOUR API KEY HERE'       # you can choose to not use an api key as well.
    payload = {'address':address, 'sensor':mysensor, 'key': api_key}
    r = requests.get(url, params=payload)

    json = r.json()


    lat = json['results'][0]['geometry']['location']['lat']
    lng = json['results'][0]['geometry']['location']['lng']

    return lat, lng


```
We just define the url, add the address, sensor and api_key parameter and send the request to the Google geocoding api using the requests library in python. We can also remove the api key part if we want. Google's geocoding API allows 2500 requests/day for a user for free. So, if you don't use an api key, you are limited to 2500 addresses per day for free but you can pay to get more requests done and faster (On the free plan, the api processes 1 request/second). If you use an api key you are still limited to 2500 requests per day but you can use different api keys to get more requests done for free! You can get an api key  against a gmail id (more on this below) and for multiple gmail accounts you can get multiple keys and use them alternatively if you have more than 2500 addresses to process in one day. The api sends back a truckload of data but we are only interested in the latitudes and longitudes. So, we parse them from the json response and return them as a tuple. You can print the json response to explore the full response that the api sends you back.

*Getting an API key*: To get an api key for this purpose, follow these steps:

- Go to [Google Developers API Console](https://console.developers.google.com/apis/)

- Log in to your gmail account if you're not logged in already.

- Under Google Maps APIs, click more and then click on **Google Maps Geocoding API**.
- Then add a new project in your dashboard, and enable the api key.

- Then click on the *Credentials* tab on the left navbar and copy the api key from there and paste it in the above function and you're done!

**Step 4**: Following the above process, you will get the latitudes and longitudes in the form of a tuple. If you want separate columns of latitudes and longitudes, just use this trick:

```python
data['Lat'], data['Long'] = map(list, zip(*list(data['latlong'])))

```

Finally, save it back to a csv file for later use.

```python
data.to_csv('ADD YOUR FILE NAME HERE')

```

To see a live demonstration you can check out my [recent visualization project.](/2017/07/03/lynching-india/)


**Bonus**

So, now you have all the geographic coordinates for the places you want. What if you want to mark them on a map? Turns out it's really quick and easy using google maps.

- Go to mymaps.google.com

- Create a new map

- On the left side of the map, click *import*

- Now import your csv from your hard drive.

- Click on lat, long or latlong column in the dialogue box that pops up to specify the columns that has your latitudes and longitudes values.

- Click finish  and google will place markers on the map corresponding to the coordinates in  your csv file for you.

So, you can geocode and visualize them on a map in no time! Or if you want an interactive map as a web app, try out the dash library from plotly that I used in [this project.](/2017/07/03/lynching-india/)

Happy (geo)coding!
