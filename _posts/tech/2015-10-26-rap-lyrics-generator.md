---
layout: tech
category: "tech"
area: machine learning
year: 2015
title: "Hip-Hop Machine"
description: "Can machine learning make decent hip-hop?"
image: garkov.png
icon: "jonascii.png"

github: markov-lyrics

tags: [rap, tech, machine learning]
---
{% include JB/setup %}

Back in September 2014 I did a week-long course in London on the basics of statistical machine learning. Since Google bought a startup that plays <a href="http://www.deepmind.com">video games better than any human being</a> , everyone in the <a href="http://www.hackernewsletter.com">tech community</a> was buzzing about artificial intelligence and machine learning.

{% include video id='yY1FSsUV-8c' text="Having been impressed by live coding and had a go at writing simple music making programmes in Javascript and Ruby, I wanted to try out working with rhythm, word stress and intonation too." %}

I had been interested in machine music-making and creativity for some time now, but machine learning seemed to open up all sorts of interesting new avenues.

At a lecture in City University, I met Dan Stowell, who uses computational analysis for wildlife conservation of birds - <a href="http://www.mcld.co.uk/research/">machine listening</a> - and heard about how you can use statistical machine learning, and specifically Hidden Markov Models, to count bird populations and identify species in jungle environments where visibility is next to zero.

Thinking about how I could apply these ideas, I decided to build a site that writes and performs its own hip-hop, using the following steps:

- train a model on a database of existing pop lyrics
- create rules for what constitutes good hiphop (poetic metre, assonance, strong and weak rhymes)
- create patterns for what constitutes good performance delivery, or 'flow'
- Use a Text to Speech engine to perform the lyrics over a beat of a certain BPM

{% assign rebeats = site.posts | where: "title", "ReBeats" %}

I already had a starting point - the 1000 song hit pop database that we used to build <a href="{{rebeats[0].url}}">ReBeats</a>, and in my search for ways to train it, cames across Markov Chains, which have been explained much better elsewhere than I can here. Markov Chains work well as generators for all sorts of things, most notably <a href="http://joshmillard.com/garkov/">here</a>, writing new Garfield cartoon strips. 

It is still a work in progress, and the hip-hop flow needs some work, but I'lll put up a working version as soon as I get the time. 

<h3>More</h3>
For another project that creates machine lyrics using whole lines from existing songs, see <a href="http://www.deepbeat.org/">this app from Finland</a>. 

