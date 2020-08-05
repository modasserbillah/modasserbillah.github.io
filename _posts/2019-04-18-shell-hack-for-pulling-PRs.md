---
date: 2019-4-18
tags:
  - hacks
  - bash
  - shell
author: Modasser Billah
location: Cumilla, Bangladesh
title: Shell Function for Pulling PRs
description: "Quick utility function to boost productivity."
readingTime: 2
image: "https://source.unsplash.com/feXpdV001o4/800x400"
---

Fetching PRs opened by others for reviewing or testing new functionalities is a common task. Generally, you'd do the following for this:

```bash
  git fetch upstream pull/<PR_NUMBER>/head:<BRANCH>\
  && git checkout <BRANCH>
```

Typing this every time can soon become irritating and you can't have an alias for it because PR number and branch name will vary.

So, shell function to the rescue! Functions can take parameters, so it makes our lives easier in this case.

So, if you want a shorthand for the above commands, try the following:

* Put this in your shell configuration file like, .bashrc or .zshrc :

```bash
pr(){
      br=$(echo "$2" | cut -d ":" -f 2)
      git fetch upstream pull/"$1"/head:"$br" && git checkout "$br"
}
```

* Source the config file with
```bash
  source ~/<Shell_Config_File_Name>
```

* Fetch and checkout a PR branch with:
```bash
  pr <PR_NUMBER> <USER:BRANCH>
```

The shell function is a bit opinionated. I prefer to name branches as originally named by the author in their fork. This helps keep track when you have a lot of branches.

GitHub has recently introduced a copy button beside the branch name.

![copy_button](/images/github_copy_button.png)

So, it makes it easier just to click that button to copy the branch name but it comes with a user name as well. But you don't have to worry about it, just copy it as it is with the button and use that as the second variable to call the shell function. The first line of the function splits and takes only the branch name to use it as the new branch name.

Happy hacking!
