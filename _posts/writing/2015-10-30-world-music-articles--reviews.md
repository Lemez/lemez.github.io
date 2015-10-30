---
layout: post
title: "World music articles & reviews"
original_date: 2005-2010
source: Songlines
description: "for Songlines Magazine"
image: ""
category: review
location: [UK]
genre: [world music]
artist: [Klezmatics, Goran Bregovic]
topic: [music reviews, world music]
tags: [Klezmatics, Goran Bregovic, music reviews, world music, UK]
---
{% include JB/setup %}

I was an in-house review for Songlines magazines for several years. I liked being up to date with new releases, I got plenty of good music through the post and it kept me in sandwiches while I was writing them.

But reviewing other people's music in print is a terrible thing to do, for three key reasons:

1. What anyone thinks about a piece of art can change from day to day
2. In a small scene like world music, you often have personal relatioships with many of the artists and label owners whose music gets sent to you
3. The ratio between how much time artists spend thinking about reviews, and how much time reviewers spend writing them is at least a thousand to one.

Sometimes, like on the Ersatz Musika review below, I really screwed up - not liking the CD on the day it came, and then realising how wonderful it actually was later on. 

After that experience, I graded my reviews on one thing alone - how geniune I thought the release was. If it felt like a labour of love, no matter what I thought of the actual music, I'd grade it high, and if it felt cynical, I had no mercy. As you can see below, I was generally pretty kind. 

<h3>Beginner's Guides</h3>
- <a href="{{ASSET_PATH}}/articles/GoranBregovic.pdf">Goran Bregovic</a>
- <a href="{{ASSET_PATH}}/articles/Klezmatics.pdf">The Klezmatics</a>

{% assign reviews = site.reviews | sort: "rating" %}

<h3>Reviews</h3> 
<ul>
{% for review in reviews reversed %}
<li><a href="{{review.url}}">{{review.artist}} >> {{review.album}}</a></li>
{% endfor %}
</ul>






