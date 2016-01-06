---
layout: tech
category: "tech"
area: art
year: 2015
title: "British Newspaper Negativity Index"
description: "A vaguely scientific way to check who is poisoning your mind this morning"
image: racistpaper.jpg
icon: "jonascii.png"

github: serenity-padrino

tags: [media, negativity, racism]
---
{% include JB/setup %}

{% include sideimage img="negativity.jpg" text="You are what you read." %}

"It's good to stay informed" is a platitude I grew up on. I turn to the Guardian online several times a day to kill spare moments. But what does this do to my mood? Apart from the story itself, what other information am I getting? This project is a humble attempt to find out.

<h3>How?</h3>
Once every hour, it takes the RSS feed from Britain's 'top' newspapers, and runs the first ten headlines through sentiment analysis to see how they score. Stories are assessed for 'positivity' or 'negativity', according to two sentiment analysis dictionaries, AFINN and MPQA.  

Each word in the headline is given a score, according to its strength or weakness, such as 'charming': +3; 'terrifying': -3, and each headline score is added together, and then averaged out across all ten stories. 

Three different tools were tested, and manually assessed to check efficacy (click for more info): 
<ol class='analysers'>
	<li><a href="http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010" target="_blank">AFINN-111</a></li>
<li><a href="http://mpqa.cs.pitt.edu/lexicons/subj_lexicon/" target="_blank">MPQA Subjectivity Lexicon</a></li>
<li><a href="https://github.com/malavbhavsar/sentimentalizer" target="_blank">Naive Bayes Classifier (Sentimentalizer)</a> </li>
</ol>

<p>Currently, calculation of overall sentiment score for each story is simply made by averaging the per-word score of tools 1 and 2 above, normalised between -1(negative) and +1(positive) . </p>

<p>In the first test, sixty headlines were checked against the three tools. Ultimately, sentiment analysis is a rather subjective exercise, so I went down the list of scores and picked out the stories <em>I </em> thought were particularly offensive, and compared the scores. The full csv of initial data for comparison is <a href="https://www.dropbox.com/s/tngc6yqcff9ylve/rss2mixed.csv?dl=1">here</a> (key: Wiebe-MPQA, Sent-Naive Classifier). Taken alone, Wiebe and AFINN got the score badly wrong (ie weren't offended by something I found grossly offensive, or were offended by something harmless) around 20% of the time, but averaged together, the rate dropped dramatically in the test data. </p>

<p>As usual, the code is all open source - feel free to fork and improve.</p>



