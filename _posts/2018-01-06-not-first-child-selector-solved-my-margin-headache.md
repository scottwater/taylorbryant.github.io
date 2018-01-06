---
layout: post
title:  ":not(:first-child) selector solved my margin headache"
permalink: /not-first-child-selector-solved-my-margin-headache/
description: 
tags: [first-child,selector,margin,taylor,bryant,web,design,memphis]
---

Throughout my attempted mastery of CSS, one of my biggest pain points has been dealing with margin between text elements (i.e. p, h1, h2, etc.).

First, I tried limiting myself to only using `margin-bottom`.

```css
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
}
  
p {
  margin-bottom: 20px;
}
```

![Bottom margin example](https://s3-us-west-2.amazonaws.com/s.cdpn.io/890531/Screen%20Shot%202018-01-06%20at%202.27.38%20PM.png)
