---
title: About Us
full: true
---

<div class = 'grid-4'>                  
  {{- range $index, $item := .Site.Data.about.home -}}
  <a href = '/about-us/{{ $item }}/' class = 'card'>
    <img src = '/about/{{ $item }}{{ if eq $index 3 }}.png{{ else }}.jpg{{ end }}' alt = '{{ $item }}'>
    <span class = 'overlay'>
      {{ upper $item  }}
    </span>
  </a>
  {{- end -}}
</div>    

