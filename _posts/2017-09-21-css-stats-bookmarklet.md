---
layout: post
title: CSS Stats bookmarklet
permalink: /css-stats-bookmarklet/
description: CSS Stats is a useful tool for getting a bird's eye view of the state of your website's CSS. 
tags: [css,stats,bookmarklet,bookmarklets,taylor,bryant,web,design,memphis]
---

<a href="http://cssstats.com">CSS Stats</a> is a useful tool for getting a bird's eye view of the state of your website's CSS. By itself, it isn't anything particularly groundbreaking, but using the information it provides, you can get a feel for the quality of the CSS you have written.

## Bookmarklet
I made a nifty little bookmarklet that runs the current page through CSS Stats using the default user agent. To use it, drag <a href="javascript:location.href='http://cssstats.com/stats?url='+window.location.href+'&ua=Browser Default'" title="CSS Stats">`CSS Stats`</a> to your bookmarks bar or use the code snippet below to create the bookmark manually.

```javascript
javascript:location.href='http://cssstats.com/stats?url='+window.location.href+'&ua=Browser Default'
```
