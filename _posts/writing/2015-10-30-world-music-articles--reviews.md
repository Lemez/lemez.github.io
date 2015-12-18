---
layout: post
category: print
title: "World music reviews, guides and sleeve notes"
original_date: 2005-2010
source: Songlines
description: "Or why music criticism is pointless"
image: hack.jpg
location: [UK]
genre: [world music]
artist: [Klezmatics, Goran Bregovic, BeshoDrom]
topic: [music reviews, world music]
tags: [Klezmatics, Goran Bregovic, BeshoDrom, music reviews, world music, UK]
---
{% include JB/setup %}

I was an in-house reviewer for Songlines magazines for several years, and also wrote for fRoots, The Rough Guide to World Music and others. I liked being up to date with new releases, I got plenty of good music through the post and it kept me in sandwiches while I was writing them.

But reviewing other people's music in print is a terrible thing to do, for three key reasons:

(1) What anyone thinks about a piece of art can change from day to day   
(2) In a small scene like world music, you often have personal relatioships with many of the artists and label owners whose music gets sent to you  
(3) The ratio between how much time artists spend thinking about reviews, and how much time reviewers spend writing them is at least a thousand to one.  

Sometimes, like on the Ersatz Musika review below, I really screwed up - not liking the CD on the day it came, and then realising how wonderful it actually was later on. 

After that experience, I graded my reviews on one thing alone - how geniune I thought the release was. If it felt like a labour of love, no matter what I thought of the actual music, I'd grade it high, and if it felt cynical, I had no mercy. As you can see below, I was generally pretty kind. 


{% assign kkb = site.posts | where: "title", "Kharkov Klezmer Band" %}
{% assign besh = site.reviews | where: "source", "liner notes for album release" %}
{% assign rough_ukr = site.reviews | where: "source", "The Rough Guide To World Music (Vol 2, 3rd Edition): Europe and Asia" %}

<h3>Rough Guide To World Music</h3>
<ul class='review'>
<li><a href="{{rough_ukr[0].url}}">Ukraine discography and reviews</a>, The Rough Guide to World Music, (Vol 2, 3rd Edition): Europe and Asia</li>
<li><a href="{{besh[0].url}}"></a></li>
</ul>

<h3>Sleeve Notes</h3>
<ul class='review'>
<li><a href="{{kkb[0].url}}">Kharkov Klezmer Band, Ticking Again</a></li>
<li><a href="{{besh[0].url}}">BeshoDrom, Gyi!</a></li>
</ul>

<h3>Artist Guides</h3>
<ul class='review'>
<li><a href="{{ASSET_PATH}}/articles/GoranBregovic.pdf">Beginner's Guide to Goran Bregovic, Songlines</a></li>
<li><a href="{{ASSET_PATH}}/articles/Klezmatics.pdf">Beginner's Guide to The Klezmatics, Songlines</a></li>
</ul>

{% assign reviews = site.reviews | where: "source", "Songlines" %}
{% assign reviewsl = reviews | sort: "rating" | group_by: "rating" %}

<h3>Reviews (Songlines) </h3> 
<ul class='review'>
{% for area in reviewsl reversed %}
	{% assign group = (area.items | sort: "title") %}
	{% for review in group %}
		<li><a href="{{review.url}}">{{review.rating}}  {{review.artist}} &#8212; {{review.album}}</a></li>
	{% endfor %}
	<br>
{% endfor %}
</ul>

{% assign reviews = site.reviews | where: "source", "fRoots" %}
{% assign reviewsf = reviews | sort: "title" %}

<h3>Reviews (fRoots) </h3> 
<ul class='review'>
{% for review in reviewsf %}
	<li><a href="{{review.url}}"> {{review.artist}} &#8212; {{review.album}}</a></li>
{% endfor %}
</ul>






