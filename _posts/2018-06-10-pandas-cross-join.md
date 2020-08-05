---
date: 2018-6-10
tags:
  - data science
  - Python
  - pandas
  - tools
  - hacks
author: Modasser Billah
location: Cumilla, Bangladesh
title: Cross Join in Pandas
description: "An ugly work-around to make cross joins work in Pandas"
readingTime: 1
image: "https://source.unsplash.com/MlpVwIvHyGM/800x400"
---

Pandas is a neat tool and covers nearly  all operations you need for data analysis. However, a cross join feature is missing from the current API.

Although computationally expensive, at times, we need to do a cross join between dataframes, well, at least I needed it recently. So, I quickly hacked a solution and thought maybe I can share here in case it helps someone out there.



```python
  pandas.merge(
    df1.assign(dummy=1),
    df2.assign(dummy=1),
    on='dummy').drop('dummy', axis=1)
```

Here, we are just assigning a common key column to both the dataframes and then merging them together and finally dropping the dummy common key column that we just created.
