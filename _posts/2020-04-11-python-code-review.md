---
date: 2020-4-18
tags:
  - Python
  - code review
  - best practices
author: Modasser Billah
location: Cumilla, Bangladesh
title: Level Up Your Python Code Reviews
description: "A guide to more Pythonic code reviews"
readingTime: 10
image: "https://source.unsplash.com/HdZWKPt7L2o/800x400"
---

In the world of software development, there are many things that classes and books will prepare you for. But there are some topics that are often overlooked in learning resources yet hold immense value for the craft. Code review is a topic very high on that list. Knowing to review Python code well can land you into senior positions in no time.

In modern software development, code reviews play a pivotal role in ensuring the quality of software. This article takes a shot at explaining how to adopt Python philosophies to review code and then perform code reviews in a more Pythonic way.

**At the end of the article, you'll be able to:**

- Understand the different aspects of Python code review
- Develop a process to review code thoroughly and professionally
- Detect areas of improvement in code with a higher probability

::: tip NOTE
This article assumes you know how to use git and how collaborative software development works using Pull Requests. If you're not familiar with git and GitHub, check out the [Hello World GitHub Guide](https://guides.github.com/activities/hello-world/).
:::

Let's get started!

## Objectives of Code Review

Before you dive into how to do a good Python code review, let's first contemplate on why good code reviews are important. Peer review is the scientific process of verifying new knowledge. This is a widely practiced method in the scientific community.

Code review is the equivalent process in the world of software development. No one is perfect. That's the primary reason for code reviews. It always helps to have a fresh pair of eyes go through the code.

The benefits of code review can be broadly categorized in the following 3 categories:

1. Catching bugs
2. Ensuring code quality and maintainability
3. Building relationships

Let's explore how code reviews help us achieve these benefits.

### Catching Bugs

Code review helps catch bugs before they go into production. Performance issues are also addressed in code reviews. This helps enhance the quality of the software in terms of both efficiency and correctness.

### Ensuring Code Quality and Maintainability

Code is read much more often than it is written. Like in any engineering discipline, maintainability matters a lot in software. Code reviews ensure that someone has already read your code and understood it or raised the issue and helped you make it more readable and maintainable.

### Building Relationships

Friendship happens on the way to something else. Think of all the friends you have in your life. You didn't become friends just for the sake of being friends. Rather you shared a pursuit with them and in the process became friends.

This is often overlooked but code reviews can spark conversations. Through collaboration, discussion and sometimes, the disagreements that happen on code reviews, you can often befriend fellow developers if you have the right mindset for code reviews.

## Python Code Review: The Human Aspect

The human aspect is often the one overlooked in code reviews. Good technical reviews can lose effectiveness due to poor communication and lack of empathy. You should try to keep it human. Having a few pointers in mind helps in this regard. Let's try to establish some.

### You're Reviewing Python Code Written by Humans

When reviewing a piece of Python code, it is important to factor in the human aspect. You need to make sure that your legitimate concerns and feedback are not nullified by your lack of empathy.

::: warning NOTE
People often make jokes about developers for lacking social skills which is not entirely true but has some truth to it. So, choose your words carefully and try to be positive. Be critical but courteous.
:::

When you point out an issue, always try to explain why. It may be obvious to you and you may feel inclined to just make a one-liner comment to change this to that. But it may not be obvious to others including the author.

Explaining the why helps you to connect with the authors and gives them a chance to respond correctly. It also serves as a learning point for anyone going through the pull request.

The tone and warmth of the reviewer is lost in transmission on a written medium. As a result, comments with the best of intentions can be perceived as harsh. So, whenever possible, try to keep it warm with appropriate emojis to propagate your good vibes 🙂

However, the other extreme can also occur at times. Sometimes people overdo it to sound less critical and the message loses its meaning. Writing generic comments or always following a certain template can expose the mechanical nature of the review and make the author feel like you don't mean it.

### There's No Exclusively Correct Opinion

While best practices do exist, there are very few binary rights and wrongs in coding. Building software is an art and like any other art, a lot of it is subjective. So, while you should not shy away from expressing and defending your opinion, remember that your opinion is not the last word on the topic.

There may be other perspectives, there maybe flaws in your argument and there may be more convincing argument behind the original proposal. So, keep your mind open while you express your opinion and don't hesitate to change your opinion once there's compelling evidence to do so.

Even if there's none, accept the fact that your opinion can be disregarded. Remember the phrase, **strong opinions loosely held**. You fight for your opinion but don't cling to it like revelation.

At times, developers tend to go overboard in the heat of the moment while defending an opinion. This reduces the objectivity of the discussion and makes the author take it personally.

One trick to avoid this is to make a context switch before you finally post your review. Let's say you wrote a long review and explained how it can be done better. Don't hit the comment button instantly.

Instead, take a moment to get your head out of the zone. Maybe check your mail or twitter feed for a moment or take a sip of the coffee waiting on your desk. Then come back and read your review. More often than not, you'll feel inclined to change a word or two, or rephrase a sentence. It may feel like a small thing but it can do wonders!

You may not know the author in person but you know for sure that it is written by a human. So, be nice and follow the golden rule, **treat others the way you want to be treated**.

### Embrace Feedback Don't Dread It

On the side of the author, code review can be a stressful event, especially for people with less experience. It's easy to feel demoralized and think you don't know how to write code when someone requests some changes.

Imposter syndrome is real and everyone feels it. This can also make people defensive and rigid about accepting reviews. That's why it is important to keep in mind that the reviewer is trying to help.

There's nothing personal and no blame game going on. Objectively taking feedback is a great skill. Whenever it feels personal, remind yourself that the ultimate objective is to improve code quality.

::: tip
If a review is unclear or you don't understand the reason behind it, don't be afraid to ask why. As said before, coding is an artistic endeavor.
:::

So, ask for reasons politely and present your arguments if you disagree with the reviewer. Learning is also an important outcome of the code review process. If you accept all requested changes without asking questions, you are depriving yourself of valuable learning opportunities.

## Python Code Review: The Technical Aspect

This is the most critical part of the review. A review has to be technically sound to add value to the process of building softwares. You should have a rigorous process to sift through the code during a review. Keep iterating over the process to make your review a little better every time. Good news is, you can borrow from the collective wisdom of the developer community in this regard.

### Stand on the Shoulder of Giants

Software engineering has a rich history. A lot of smart people have already figured out a lot of cool things to help you build better software. Be smart and don't reinvent the wheel. Rather, build from what's already in place. Let's dive into some of the first principles you can use all the time.

#### The Zen of Python

Python is much appreciated for the design philosophy behind it. You can build your Python code review muscles by starting from the guiding principles of the language. Much of this is beautifully condensed in **The Zen of Python**.

You can read the *Zen of Python* any time you want from a Python shell:

```shell
>>> import this
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren\'t special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you\'re Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it\'s a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let\'s do more of those!
```

Wisdom and first principles are often simple but not simplistic. That's why it's easy to overlook them. But sticking to them can really improve the quality of both the code and the review.

For example, you can often come around code like this:

```python
if is_authenticated:
    return some_private_data()
else:
    return not_allowed()
```

But *Zen of Python* teaches you that _flat is better than nested_, so you can suggest this to be done this way:

```python
if not is_authenticated:
    return not_allowed()

return some_private_data()
```

The example above is over simplified but you get the point.

#### Readability

Readability is often underestimated but it's very important for maintainability. It is a central philosophy that guided the development of Python as a language. Think about the ideas of indentation based scoping and no semicolons. Remember, the first consumer of your code is you. So make it readable for your future self.

When you're new to Python and learning a lot of cool tricks, it's easy to assume that writing complex one-liner code demonstrates that you're a good Python developer. Same can be said about reviewers, you can feel that you have suggested an improvement by recommending a one-liner in place of a code block. Look at the following snippet for example:

```python
print("x is 3" if x == 3 else "x is not 3")
```

It's only one of line of code but takes the reader longer to understand what it does. Whereas you can just write:

```python
if x == 3:
    print("x is 3")
else:
    print("x is not 3")
```

This is easier to read and understand but you may not feel like a genius when you write it. That's where you need to be more careful.

**Code is communication.** Computers only do maths and shuffle bits around. There are infinite ways to make a computer take a certain input and create a certain output.

The code you choose to use should mainly and most importantly tell other developers what it does. That's why Python is such a great programming language, it's readable. The *Zen of Python* backs it up as well.

#### Best Practices

Best practices exist for a reason. It helps you to benefit from the experiences of the people who figured things out before you. So, use them as guiding lights. If you see a single letter variable name while doing a Python code review, then ask why. Don't stop on why, suggest a better descriptive name.

Similarly, when you read a code block and understand what and how it does but not the why, ask why. Suggest that the why should be included as a code comment.

#### Tests

In a Python code review, it's important to ensure that the piece of code under review is well tested and documented. Tests ensure integrity of the code. If the Python code you're reviewing has new functions or classes added but no tests, then politely ask why. One hundred percent code coverage is not always feasible, so it's important to understand the author's perspective and suggest writing tests based on the case in hand.

There are different well accepted testing libraries like [`pytest`](https://docs.pytest.org/en/latest/) and Python's own [`unittest`](https://docs.python.org/3/library/unittest.html) library. It is better to choose one instead of mixing different approaches together.

#### Documentation

Tests are a good documentation of what the code does. But it is also important to document Python code, especially public APIs. That's why you should check functions, classes and methods for docstrings and suggest adding one if there's none.

There are a few accepted styles of documentation. For example, [NumPy-style](https://numpydoc.readthedocs.io/en/latest/format.html), [Google Docstring convention](https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings) and so on. Any of these should be good to follow but it is important to remain consistent throughout the project.

#### Style Guides

One other important resource that you can readily borrow from others and put to use is style guides. Style guides keep code organized. Remember, coding is akin to art and art is subjective. If an agreed upon style is not enforced, the codebase can become messy and hard to maintain.

[PEP 8](https://pep8.org/) is the guiding principle in this respect and you should refer back to it from time to time. Most IDEs come with linters. Linters check for style violations and display errors. Using a Python linter like [Flake8](https://flake8.pycqa.org/en/latest/) can help reduce a lot of style related errors. You can also use a formatter like [black](https://black.readthedocs.io/en/stable/) to handle formatting for you.

Nevertheless, it is essential to have a good grasp on the PEP 8 guidelines and look out for related issues when you're doing a Python code review. [Flake8 Rules](https://www.flake8rules.com/) is a great resource to learn about it from examples.

### Value Structure and Encourage Systems Thinking

So far, this article focused on how you can benefit from the collective wisdom of Python developers in your Python code reviews. **But each project is different and strictly sticking to any guideline out of context can cause more troubles than it solves. That's where your situational awareness comes in.**

You need to know the objectives of the project. The type of the project, the deadlines you need to meet, the people that will be using your product -- all should be factored in your overall strategy.

For example, if you're working at a start up and building a prototype, then functionality may be prioritized over maintainability. Code with less test coverage may be allowed to go through. In this case, your Python code review should be more focused on functionality and testing.

But if you're working on an enterprise solution, then you may need to focus more on maintainability and quality. Issues that could have been overlooked for a small project may not be allowed to go through in an enterprise solution. You may also need to be more rigorous in following up on style guides and internal coding standards.

Similarly, you may need to adapt your reviews depending on whether the product is in production already or not.

#### Be Aware of the Structure of the Project

This is where another *Zen of Python* principle comes into play, _practicality over purity_. You need to be pragmatic about your approach. **Have a clear idea about which parts of the codebase can be more flexible and which parts need to be more airtight**.

Disregarding principles is a bad idea and in most cases, _special cases aren't special enough to break the rules_(Yet another *Zen of Python* wisdom). But irrational adherence to them is not ideal either. So, keep the trade-off in mind when you suggest a change in your Python code review. **Keep an eye out to ensure that the codebase is modular and well structured.** One component should only do one thing. Otherwise, soon every module will have a dependency on every other module and the codebase will start looking like a big ball of mud.

**Don't let perfect be the enemy of good.** Sometimes it's better to get something merged and improve on that work in future pull requests.

Code in isolated components, modules, or packages often shouldn't be held back for minor issues. Instead of holding back the pull request, point out the area of improvements and approve the existing work on the condition that your points be considered during future iterations on this. Importantly, be sure that you always highlight these desired changes and follow up on them.

In general, you can be more lenient regarding the _how_ of a system than the _what_. For example, what a public method does should be thoroughly inspected but the implementation of the method can be improved upon iteratively. This is because future improvements should only have effects within the system not with the outside world.

**But know when to stand your ground.** Contrary to the case of isolated components, shareable components should be held to a higher standard. Unclear naming or overly complicated interactions between parts of the system are a very real problem and will quickly become difficult to alter.

It's still important to avoid letting perfect be the enemy of good, but if significant changes will be difficult to perform later due to widespread usage, it's usually worth spending a little time on that early in the development process.

::: warning NOTE
Public code (for example, public interfaces, APIs) should be critically evaluated for ease of use and understanding before releasing because future changes may require changing every interaction throughout the system.
:::

Often times, people come into a project and start suggesting changes that are Pythonic in principle but may not be in accordance with the existing codebase. No one and no codebase is ideal but you need to ensure local consistency before you suggest a change otherwise.

For example, a codebase may have been using single quote docstrings but you prefer the NumPy docstring style of double quotes. It is important to not introduce a change that creates confusion and parallel conventions in the codebase. Remember this from PEP 8:

> "A Foolish Consistency is the Hobgoblin of Little Minds."
>
> --- *Guido van Rossum* ([source](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds))

So, make sure you're locally consistent before trying to achieve a general consistency.

#### Leverage Systems Thinking

Systems thinking is the ability or skill to perform problem solving in complex systems. **Software systems are inherently complex.** In order to provide useful feedback, you need to be able to identify the constituent parts of the system and the interactions between them. Developing a mental model for systems thinking can help you detect areas of improvement in your Python code reviews. Think of code as a collection of systems and the interaction among them. This applies to reviews as well.

> The whole is greater than the sum of the parts.
>
> --- Aristotle

It's easy to get pulled into the code block under review and forget the bigger picture. So, it's important to step back and think about what the code does without getting into the how immediately. That's where the quote from Aristotle comes into play. The code may work fine in isolation but cause issues when it runs as a part of a system.

Reflect on how the feature could fail. Think about ways to break the code. Many a times, developers code for the happy path. That is, they write code in such a way that it only handles the best possible path.

But real world is messy. Users can do stupid things, machines can fail and cause errors. So, look out for scenarios that are likely to happen but not considered in the solution. Here's a very simple example:

```python
def calculate_velocity(distance, time):
    return distance / time
```

The function above calculates velocity. It works well for most cases except when `time` is `0`. So, it will throw an error in that case but the code doesn't handle that error.

This is bad and no foreseeable errors should go unhandled. So, thinking like a hacker can help you provide good insights in your Python code reviews.

Similarly, you should try to think of the problem without being influenced by the solution of the author. This helps to point out the assumptions made by the author in the solution. This conforms to another *Zen of Python* principle: _In the face of ambiguity, refuse the temptation to guess_.

For example, look at the following code block:

```python
import random

def assign_random_numbers(users):
    result = {}
    for user in users:
        result[user] = random.randint(1, 10)
    return result
```

The function above assigns a random number to each user in the list of users passed in the argument. It creates a dictionary mapping between the users and a random number and returns the dictionary.

It may look like a good solution at first glance but it has two assumptions attached to it.

Let's look into the assumptions:

1. It uses `user` as the key for the dictionary. But for that to hold true, the elements in the `users` list must be hashable.
2. This solution assumes that all the user names in the passed `users` list argument will be unique. But names can be duplicate in real world and in case of a duplicate name, values for the same key would be overwritten.

::: tip NOTE
**Developers often want to solve problems and impulsively make assumptions to go through the problem at hand.** Be aware of this in your Python code reviews and you will be able to provide important feedbacks and prevent untested assumptions sneaking into production code.
:::

Performance is also an important topic to review. Depending on the scope of the project, performance can be critical. Even when it's not so, it is good to not let non-performant code go through.

For example, if you see nested `for` loops, ask why the author wrote the code this way and suggest an alternative approach if one exists.

Using profiling to test the performance of the code may also uncover insights into performance issues. These may be more applicable to api responses and complex queries.

### General Technical Considerations

There are some general issues to consider as well that are not necessarily related to Python but are important in terms of code reviews.

Keep the following in the back of your mind when doing a Python code review:

 1. **A Pull Request Should Do a Single Atomic Thing:** Code reviews are mainly done on pull requests. So, the number of commits in a pull request or the scope of the pull request is important for review. Ideally, it should be a unit of functionality that can be tested in isolation. This makes reviews easier and reduces the probability of bugs sneaking into production. If you see a pull request with 30 commits and 50 files changed, then it is a good idea to suggest that the pull request be broken into several smaller pull requests.
 2. **Commit Messages Should be Relevant and Meaningful:** Commit messages should be reviewed as well. Commit messages preserve the history of the project. So,  if you see a lot of work in progress commits, then you can request squashing the commits to keep the history clean and coherent. If you see meaningless commit messages like `bug fix` or `wip` and so on, then you should ask to modify the messages to something more meaningful. It is good to know [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).
 3. **Typos and Grammatical Mistakes Should Not be Overlooked:** Developers can code from all parts of the world and that means grammar issues in variable names, code comments, documentation and git commits are a common occurrence. Typos are frequent as well. It is important to point these out in a friendly manner but not hold back important features that need to get through.

It's a good idea to start your review with these items. That way, you get a good overview of the pull request under review and can dive deep into the details.

## Python Code Review: The Organizational Aspect

Code reviews happen in a collaborative environment and successful collaboration needs careful organization. Setting up clearly defined processes around code review can speed up the development workflow and increase productivity and quality.

If you've read this far, then you may have already noticed that there is a pattern. **It is possible to automate and standardize parts of the Python code review process to raise the level of productivity as a team.**

Standards and guidelines can help align all the team members to produce coherent code and reviews. You can further raise the bar of reviews by incorporating checks like **continuous integration**, code coverage, linters and so on.

For example, style guides are mostly static. So, style checks can be automated using bots like [Lintly](https://github.com/grantmcconnaughey/Lintly), [GitHub actions](https://github.com/features/actions) or [pre-commit hooks](https://pre-commit.com/). These checks will automate parts of the things you need to review and allow you to focus on the code more.

Developing a pull request description template is also very useful for Python code reviews. A description template helps the author to present his pull request in a systematic fashion. It also helps the reviewer to learn the overall scope of the pull request before delving into the code. An example pull request template can be like this:

```markdown
## Problem
Small description of the problem

## Accepted Solution
A small summary of the approach taken to solve the problem

## Instructions to Test
Some step by step instructions or automated commands to test out the solution

## Links to related work
Links to dependent pull requests, user stories, bug reports,
support tickets and so on
```

[Creating a pull request template for your repository](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository) is very helpful. This way, everyone creating PRs on the repo will automatically get the template in their PR body to fill in the sections.

You have been introduced to a number of aspects to consider during your Python code review. Remembering all of this can be hard initially. Using checklists for reviews can help you approach your Python code review tasks more systematically.

You can prepare a personal checklist to go through during your reviews. Here's an example of what it can look like:

- There are tests for new code being added.
- There are no typos, grammar issues.
- Code is readable and variables and functions have meaningful names.
- There is documentation for public methods.
- The solution handles errors properly.
- Overall, the code conforms to the *Zen of Python* and best practices.

These aspects are organizational because these make the most impact when adopted across the whole team. Knowing about this also provides you an opportunity to suggest organizational processes to the team. This can optimize overall Python code review workflow and enable you to contribute more to the team.

## Conclusion

Hopefully, you've come across a lot of new concepts in this article. Learning and applying it well can help you become a better reviewer and in the process a better technical leader.

To summarize, this article expanded on how to:

- Analyze the process of Python code review
- Approach each part of the process accordingly
- Look back at the whole process to optimize it for you and the team

It is easy to get bogged down into the details and lose focus on the bigger picture. So, let's revisit the proper scope for Python code reviews one last time. **Gratitude multiplies, so does frustration**. So, be generous, kind and empathetic in your reviews.

Don't overcomplicate things, rather keep it simple and encourage others to write more Pythonic code. Be receptive to feedback when you're on the receiving end and consciously iterate on feedback to improve. Lastly, remember that the goal is to come out of the Python code review process a bit better, for all the 3 entities involved: the author, the reviewer and the codebase. Now, go perform Python code reviews like a pro!

*Acknowledgements: I have drawn a lot of inspirations for this article from my time at BriteCore. Some ideas are directly from Lennart Regebro and Daniel and Audrey Feldroy. Thanks to all my colleagues there, past and present, who have put in place wonderful processes and standards for code review.*
