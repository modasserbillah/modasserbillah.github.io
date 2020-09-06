---
date: 2020-8-5
tags:
  - Python
  - Django
  - Databases
  - Book Review
author: Modasser Billah
location: Cumilla, Bangladesh
title: Book Review-The Temple of Django Database Performance
description: ""
readingTime: 9
image: "https://spellbookpress.com/img/torch.jpg"
---

I recently bought an interesting tech book themed on fantasy adventure. And it was money well spent. [***The Temple of Django Database Performance***](https://spellbookpress.com/books/temple-of-django-database-performance/) was a great read.
> The only way to master Django is to master database performance. The difference between junior, mid-level and senior Django engineers is usually a function of this mastery.

The author starts his book with the bold claim above. But I'd say the content applies beyond Django and helped me get more low-level with databases than before. I encourage django devs to read this book. If you need a glimpse into it, here's my notes from the book:

## Profiling: The Yardstick
- Before you start your ritual of performance tuning, you must be initiated in **profiling**. In human terms, profiling is all about measuring your results. Without profiling you have no way to measure if your tuning pleased the database deity.
- APMs or **Application Performance Monitoring** tools are your friend here. Think New Relic, Datadog or more recently Sentry. The book touches on details in New Relic, but I'll skip that part as that is too application specific. You can get up to speed with any of these quickly.
- Slow Query Logs can help as well but not at the level of APMs.
- For locally producing issues and gauging performance, use **Django Debug Toolbar** and/or **Silk**
- **Query Plan**: The query plans details how a database intends to execute a query. Get comfortable reading these. The book is chalk-full of examples of query plans.

## Indexes: The Magic Wand
- Without indexes, databases have to do sequential searches every time. O(n) every time, oh no! :worried:
- B- Tree to the rescue. Indexes are generally _B-trees_. B-tree maintains a tree whose leaf nodes are pointers to the disk locations of table records.

::: tip Fun fact
:small_airplane: Engineers at Boeing invented the B-tree data structure. But no one knows what the `B` in `B-tree` stands for.
:::

- Databases store data in units called `pages`. `Page size` is also used for index storage. In theory, the speed of the index is proportional to page size. But it has a lot of external factors like storage medium and application. So, when in doubt or in the mood to tinker, **profile**!

::: tip Postgres Tip
:pushpin: You can see indexes defined on a table by executing `\d <table name>` command in the `psql` shell.
:::

:question: Django ORM question: How do you add an index to your Django model?

:bulb: Specify `indexes` field inside the `Meta` class:

```py
Class Event(models.Model):
	... # omitted for brevity
	name = models.CharField(max_length=255)
	...
	...
	class Meta:
		indexes = [
					models.Index(fields=['name'],
                    name='my_first_index')
                ]
```

::: tip Note
:large_blue_circle: The `name` attribute of the index is optional but helpful for later use.
:::

::: tip Postgres Tip
:unlock: Postgres locks the table for write operations by default during the indexing process. This can take a long time  on large tables and cause headaches for your live system. Way around? Use, `CREATE INDEX CONCURRENTLY`
:::

:point_up: This is called an _Online DDL operation_.

- DDL: Data Definition Language => modifies the schema of the database.
- DML: Data Manipulation Language => acts on data
- In relational databases, both DDL and DML are just two tribes of SQL commands.
- MySQL InnoDB engine doesn't lock by default.
::: tip Postgres Tip
:gem: Force it to update statistics by `VACUUM ANALYZE`, then check performance with `EXPLAIN ANALYZE`
:::

::: warning
:rotating_light: **In general, indexes slow down write operations.**
:::

- For write-heavy applications, you need LSM Trees or SSTables instead of B-trees. Checkout **Cassandra** and **RocksDB** for these. ***If you're using Django+MySQL, check out MyRocks from Facebook***.



> Most columns do well with B-tree indexes. However, if you are storing exotic data, you may benefit from alternative index types

- GIN indexes for JSON data, Postgres
- GiST indexes for spatial data, Postgres
- BRIN indexes for very large tables, Postgres
- Hash indexes for in-memory tables, MySQL
- R-tree indexes for spatial data, MySQL
- GIN = Generalized Inverted Index
	- Works well with `contains` logic for JSON data and full-text search
	- Only available in Postgres
- Indexes are not a silver bullet (well, almost)
- The query planner may ignore an index and not use it! :open_mouth:

:question: Why?

:bulb: There can be many reasons. For appetisers, check your query plans after introducing an index to confirm whether the query plan chose to use the index.


- Tuning parameters/configs of the database can help, too. [This article](https://www.revsys.com/writings/postgresql-performance.html) has some nice pointers about this in Postgres.
- If everything fails and indexes don't heal you, it may be a sign that you need to move some work out of the database and into your application, denormalise or move it into an asynchronous task.
- ***Covering Indexes***: An index is said to _cover_ a query if the database can return all the data needed for the query directly from the index, without having to search through the table data.

:question: How do you create a _Covering Index_?

:bulb: Multi-column indexes

```
CREATE INDEX CONCURRENTLY le_index_name
ON le_table_name(le_attribute_1, le_attribute_2);
```

::: warning Note
:heavy_exclamation_mark: Order of the attributes matter! An index on `(id, name)` is not the same as the index on `(name, id)`
:::

:bulb: Using the _INCLUDE_ parameter

```
CREATE INDEX CONCURRENTLY le_index_name
ON le_table_name(le_attribute)
INCLUDE (le_another_attribute);
```

- ***Partial Indexes***: An index with a `WHERE` clause is a partial index. It limits which rows in the table get added to the index.

```
CREATE INDEX le_index_name
ON le_table_name(le_attribute)
INCLUDE (le_another_attribute)
WHERE le_attribute = 'le_frequently_used_value';
```

### Clustering

 > If the table changes infrequently and most of your queries filter on the same set of columns, you have another option: Clustering.

- Clustering restructures the table data on disk in accordance to the structure in the index.
- Clustering is a one-time operation. Postgres does not maintain the structure of the table, so the structuring gets violated with new writes.
- It also requires an `ACCESS EXCLUSIVE` lock on the table, which blocks reads and writes.
- So, before you say I do to Clustering, read the quote above again and decide whether you should.

::: tip MySQL Tip
:gem: Tables are automatically clustered by primary keys in MySQL InnoDB engine. And no, you can not cluster by a secondary index.
:::

## Querying: The Weapons and the AMMOs

- The `n+1 problem`
	- 1 query fetches `n` records
	- Then you do 1 query for each of those records to fetch some related data.
	- `1` (the original ~~sin~~ query) + (One additional query for each record) `1 * n` = `n + 1 `
- Healing potion?

    :bulb: Django uses lazy fetching, that's why it doesn't fetch related models in the original query.

    :bulb: Force it to be not lazy, use `select_related`.

	> `select_related` makes a JOIN to get data for each field name you pass in.

	```py
    events = Event.objects.select_related('user').all()
    ```

	::: warning Note
    :heavy_exclamation_mark: Joins can negatively impact performance. So, like any other super power, use `select_related` with care and only when you need to.
    :::

	- `select_related` only works with single value relationships like `ForeignKey`.

    :thinking: What about `many-to-many` and `many-to-one` relationship (i.e, reversing a ForeignKey relationship)?

	:bulb: `prefetch_related` to the rescue!

	```py
    User.objects.all().prefetch_related('events')
    ```

	::: tip Relevant Resource
    :books: [This article](https://schegel.net/posts/optimizing-django-orm-queries/) is a great place to start on `select_related` and `prefetch_related`.
    :::

- More ammunitions:
    - Use `only()` to specify which columns/attributes of a table/model to fetch
    ```py
    User.objects.only('name')
    ```
    - `defer()` is the opposite of `only()`. Defer fetching all columns that you don't need immediately.
    - `values()` fetches data without instantiating any models. You get the data as a dict.
    - Consider using `values()` when you're willing to trade Django models for more speed and lower memory usage.
    - For large set of data use `iterator()` to read data in chunks.
    - Use `update()` when
        - Updating all objects in a query set to the same set of values
        - The update does not need any signals or custom save() methods.
    - use `bulk_update()` when
        - The query set is large
        - Objects in the query set are updated to different values
        - The update does not need any signals or custom save() methods
    - `F()` expressions allow you to refer to a value of a column in the database without querying for that data.
    - `func()`, `annotate`, `aggregate` are some more advanced weaponry. Skipping details, just remember they exist and pick up as needed.

	::: tip Relevant Resource
    :books:  [Haki Benita's blog](https://hakibenita.com/) has some great articles on databases, Django ORM and Python.
    :::


### Pagination

- Pagination if often overlooked when building a new system. But it bites you eventually when the data grows in size.
	- Offset pagination
	- Keyset pagination a.k.a _infinite scroll_
- Offset Pagination
	- Django comes with a `Paginator` class that does offset pagination off-the-shelf.
	- Flaws

        :x: Results can be inconsistent. This can happen because of new insertions while a user is viewing a paginated page.

        :x: For large set of data, pages in the tail end can take longer to be queried.

- Keyset Pagination
	- The client sends a `keyset` representing the last item in a page (instead of an offset and a limit). The next page is then defined as the records following that last item in sorted order.
	- `keyset` is a set of columns that can be used to sort records in a stable order.
	- Make sure an index exists for the columns used in the `keyset`
	- DRF has it built-in,  use `CursorPagination`!
	- `django-keyset-pagination` is another third party library for this.
	- Flaws

		:x: Lack of tooling support in vanilla Django

		:x: Can not select arbitrary pages, only the next page or the previous page.

I enjoyed the technical tidbits as much as I enjoyed the accompanying fantasy adventure. If you're interested to buy the book, head over to [Spellbook Press website](https://spellbookpress.com/books/temple-of-django-database-performance/). Support indie publishers!

_Cover Image Credit: Spellbook Press web page of the book_
