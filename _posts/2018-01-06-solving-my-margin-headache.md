---
layout: post
title:  "Solving my margin headache"
permalink: /solving-my-margin-headache/
description: 
tags: [first-child,last-child,selector,margin,taylor,bryant,web,design,memphis]
---

Throughout my attempted mastery of CSS, one of my biggest pain points has been dealing with margin between text elements (i.e. p, h1, h2, etc.).

## Bottom margin only
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

While this doesn't look awful, it introduces a couple of issues:
* The last paragraph in a section has an unnecessary bottom margin.
* If you're like me and prefer more space between the last paragraph of a section and the next heading, you're out of luck.

## :first-child & :last-child selectors

<p data-height="400" data-theme-id="32204" data-slug-hash="YYEeMW" data-default-tab="css,result" data-user="taylorbryant" data-embed-version="2" data-pen-title="Example #2 - :first-child & :last-child selectors" class="codepen">See the Pen <a href="https://codepen.io/taylorbryant/pen/YYEeMW/">Example #2 - :first-child & :last-child selectors</a> by Taylor Bryant (<a href="https://codepen.io/taylorbryant">@taylorbryant</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Okay, so this solves the issues introduced with the last approach. However, I can't help but get code smells, because:
1. `margin-top` is declared twice on heading elements
2. `margin-bottom` is declared twice on the paragraph element

Is there a better way to approach this? Yes!

## :not(:first-child) & :not(:last-child) selectors
```css
h1:not(:first-child), h2:not(:first-child), h3:not(:first-child), h4:not(:first-child), h5:not(:first-child), h6:not(:first-child) {
  margin-top: 40px;
}
  
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
}

p:not(:last-child) {
  margin-bottom: 20px;
}
```
