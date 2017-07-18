---
title:  "Consider using system fonts"
permalink: consider-using-system-fonts
layout: post
---

# <a name="top"></a>Consider using system fonts

Next time you find yourself reaching for Google Fonts or Typekit, stop for a moment, and consider using system fonts. Defaulting to system fonts provides a performance boost and provides a comfortable, consistent experience for the end user. Loading a system font instead of a web font will save you at least one HTTP request and the headache of finding a nice looking font for your project.

## Medium's approach
Here's an approach I borrowed from <a href="https://medium.com">Medium</a>. It provides support for versions of Mac OS X, Windows, Android, and Ubuntu.

```css
body {
    font-family: -apple-system, BlinkMacSystemFont,
    	"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
}
```