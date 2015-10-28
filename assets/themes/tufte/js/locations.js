---
---

{% capture locations %}
	[
		{% for post in site.posts %}
		 	{% for tag in post.location %}
				"{{tag}}"
				{% if forloop.last %}{% else %},{% endif %}
			{% endfor %}
			{% if forloop.last %}{% else %},{% endif %}
		{% endfor %}
	]
{% endcapture %}

var locationArray = {{locations}}


