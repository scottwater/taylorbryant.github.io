---
layout: post
permalink: /keep-your-css-cool-with-csscomb/
description: How to use CSScomb to keep your CSS clean and consistent.
title: Keep your CSS cool with CSScomb
tags:
  - csscomb
  - css
  - formatter
  - visual
  - studio
  - code
  - taylor
  - bryant
  - web
  - design
  - memphis
---
*Update: I have since stopped using CSScomb. While CSScomb is an awesome tool, I found that [Prettier](https://prettier.io/) works better for my needs. The benefit of using Prettier is that it works with multiple formats (JavaScript, HTML, CSS, Markdown, and more).*

For the past year, I have been using an extension called [CSScomb](http://csscomb.com/) to keep my CSS clean and consistent based on my own taste.

CSScomb is a formatter for CSS that can be installed as an extension on most popular text editors, including [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), and [VS Code](https://code.visualstudio.com/). It allows you to stop worrying about how your CSS looks and focus on the code. In this post, I will go over how to install and set up CSScomb.

*Note: I use VS Code on macOS. However, these same principles apply to other text editors.*

## Install CSScomb
Installing CSScomb is very easy. See below.

![How to Install CSScomb](/assets/img/keep-your-css-cool-with-csscomb/install-csscomb.gif)

## Create a custom config file
You can create a custom config on CSScomb's own generator [here](http://csscomb.com/config). The generator will show you 24 different CSS examples, ask you to pick which formatting you prefer out of the available options, and spit out a chunk of key-value pairs.

Once you've run through the generator, copy and paste the key-value pairs into your text editor and save them in a file named `.csscomb.json`.

## Use a config file
Place your custom config file (or [my example config](https://gist.github.com/taylorbryant/1041b80df41a942835942d8351eabb3d)) in `~/.vscode/`. By default, `.vscode` will be hidden. One quick way to find it is to type `~/.vscode/` in Spotlight search.

Now, let's put this file to use:
* Go to **Code** > **Preferences** > **Settings** or press `⌘` + `,` to open the settings window
* Paste the following key-value pair in **User Settings**: `"csscomb.preset": "~/.vscode/your-config.csscomb.json",`
* Replace `your-config.csscomb.json` with your own config's filename
* Press `⌘` + `S` to save the changes to the file


## Use CSScomb
Open the command palette by navigating to **View** > **Command Palette...** or press `Shift` + `⌘` + `P`. In the command palette window, type `format` and click **CSSComb: Format Styles**.

![How to Use CSScomb](/assets/img/keep-your-css-cool-with-csscomb/use-csscomb.gif)

There you have it! If you anything is unclear or you just want to say hey, shoot me a message on Twitter ([@tayl_rbryant](https://twitter.com/tayl_rbryant)).
