---
date: 2020-6-15
tags:
  - Python
  - generators
  - hack
author: Modasser Billah
location: Cumilla, Bangladesh
title: Generate Generators Repeatedly
description: "Hack a generator to produce results repeatedly."
readingTime: 5
image: "https://source.unsplash.com/daTYdZHaDWg/800x400"
---

Generators are great. We all know it. They save us all the memory lists take up yet give us the same results and more. Well, almost. 

The only catch with generators is that they generate the values only once. Let's look at an example.

```python
def generate_numbers(num):
    while num > 0:
        yield num
        num -= 1
```

The function above gives us a generator. It takes a number as an argument and produces all the numbers from there down to 1. 

```py
generate5 = generate_numbers(5)
```

If we print `generate5` it will show us that it holds a generator.

```py
print(generate5)
>>> <generator object generate_numbers at 0x10dcb2b88>
```

Now we can do something like the following to generate the numbers:

```py
for number in generate5:
    print(number)
```

And this will print:

```py
5
4
3
2
1
```

But if you run it again

```py
for number in generate5:
    print(number)
```

You won't see any output.

![Where did it go?](https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif)


Well, this is what generators do. They generate values on the fly and then stop. You can't run them again and again unless you run `generate5 = generate_numbers(5)` each time. Generally people will tell you in cases like this you should use a list. 

But there's a way around if you insist on using generators yet want repeated outputs. Let's see how.

```py
class NumberGenerator:
    def __init__(self, num):
        self.num = num
        
    def __iter__(self):
        count = self.num
        while count > 0:
            yield count
            count -= 1
```

The code from the `generate_numbers` function is copied over (well, almost with slight class related modifications) to the `__iter__` method for the `NumberGenerator` class. Whenever we loop through an object, it looks up the `__iter__` method. If it's there, Python will use it to return an iterator. 

So, now you can do something like this to instantiate the class:

```py
generate5 = NumberGenerator(5)
```

And then loop over it as many times as you want using:

```py
for number in generate5:
    print(number)
```

Note that this may not be the optimal thing to do all the time but it's an interesting tidbit to know that you can hack a generator this way to work more than once. 

Happy hacking!