---
layout: post
title:  "Keep your CSS cool with CSScomb"
permalink: /keep-your-css-cool-with-csscomb/
description: How to use CSScomb to keep your CSS clean and consistent.
tags: [csscomb,css,formatter,visual,studio,code,taylor,bryant,web,design,memphis]
---

For the past year, I have been using an extension called [CSScomb](http://csscomb.com/) to keep my CSS clean and consistent. CSScomb is a formatter for CSS that can installed as an extension on most popular text editors, including Sublime Text, Atom, and Visual Studio Code.

In this post, I will go over how to install and set up CSScomb. I use VS Code on macOS. However, these same principles apply to other text editors.

## Install CSScomb
Getting CSScomb is very easy to install. 

## Create a custom config file
You can create a custom config on using CSScomb's own generator [here](http://csscomb.com/config). The generator will show you 24 different CSS examples, ask you to pick which formatting you prefer out of the available options, and spit out a chunk of key-value pairs. Copy and paste the key-value pairs in your text editor and save them in a file named `.csscomb.json`.

## Use a config file
Place your custom config file (or [my example config](https://gist.github.com/taylorbryant/1041b80df41a942835942d8351eabb3d)) in `~/.vscode/`. By default, `.vscode` will be hidden. One quick way to find it is to type `~/.vscode/` in Spotlight search.

Now, let's put this file to use:
* Go to **Code** > **Preferences** > **Settings** or press `⌘` + `,` to open the settings window
* Paste the following key-value pair in **User Settings**: `"csscomb.preset": "~/.vscode/your-config.csscomb.json",`
* Replace `your-config.csscomb.json` with your own config's filename
* Press `⌘` + `s` to save the changes to the file


## Use cssComb

## Smile
