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

var locationArray1 = {{locations}}

{% capture relocations %}
	[
		{% for post in site.reviews %}
		 	{% for tag in post.location %}
				"{{tag}}"
				{% if forloop.last %}{% else %},{% endif %}
			{% endfor %}
			{% if forloop.last %}{% else %},{% endif %}
		{% endfor %}
	]
{% endcapture %}

var JsLocationArray = locationArray1.concat({{relocations}})
