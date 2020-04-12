---
date: 2020-4-12
tags:
  - Python
  - fun
  - code challenge
author: Modasser Billah
location: Cumilla, Bangladesh
title: Crack the Code
description: "A fun challenge for the weekend."
readingTime: 5
image: "https://source.unsplash.com/3y1zF4hIPCg/800x400"
---

With quarantines and lock-downs, most people around the world are stuck and bored in their houses. A lot of fun riddles are circulating in news feeds on social medias. Here's one of those.

![riddle](/images/quiz.jpg)

Can you crack the code? It's fun to solve by hand but can you crack it using Python? Here's how I did it:

```python
from itertools import product


def first_fifth_condition(candidate, condition):
    common_elements = [digit for digit in candidate if digit in condition]
    return (len(common_elements) == 1) and (
        candidate.index(common_elements[0]) != condition.index(common_elements[0])
    )


def second_condition(candidate):
    condition = (1, 8, 9)
    common_elements = [digit for digit in candidate if digit in condition]
    return (len(common_elements) == 1) and (
        candidate.index(common_elements[0]) == condition.index(common_elements[0])
    )


def third_condition(candidate):
    condition = (9, 6, 4)
    common_elements = [digit for digit in candidate if digit in condition]
    if len(common_elements) != 2:
        return False
    for digit in common_elements:
        if candidate.index(digit) == condition.index(digit):
            return False
    return True


def fourth_condition(candidate):
    condition = (5, 2, 3)
    common_elements = [digit for digit in candidate if digit in condition]
    return len(common_elements) == 0


def find_code():
    # for completeness test all possible permutations with repetition of digits for length 3.
    # We can further optimize by eliminating 0,5,2,3 from the possible candidate calculation.
    for candidate in product(range(10), repeat=3):
        if (
            first_fifth_condition(candidate, (1, 4, 7))
            and second_condition(candidate)
            and third_condition(candidate)
            and fourth_condition(candidate)
            and first_fifth_condition(candidate, (2, 8, 6))
        ):
            return "".join(map(str, candidate))
    return "No solution found."


if __name__ == "__main__":
    print(find_code())

```

Got better code to crack the code? Share links to your solution in the comments! Happy hacking!  
