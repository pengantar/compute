---
{{- $title := replace .Name "-" " " | title }}
title: "{{ $title }}"
date: "{{ .Date }}"
image:
  name: ".jpg"
  description: "{{ $title }}"
---
