---
# Remember to set production_url in your _config.yml file!
title : Sitemap
group: foot
---
{% for page in site.pages %}
{{site.production_url}}{{ page.url }}{% endfor %}
{% for post in site.posts %}
{{site.production_url}}{{ post.url }}{% endfor %}
{% for lyrics in site.lyrics %}
{{site.production_url}}{{ lyric.url }}{% endfor %}
{% for review in site.reviews %}
{{site.production_url}}{{ review.url }}{% endfor %}