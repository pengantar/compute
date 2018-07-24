<span class = 'form_toggle'>Comment</span>
<form method="POST" action="https://api.staticman.net/v2/entry/{{site.github}}/{{site.repo}}/{{site.branch}}/comments" class  = "form form-comments" id = 'comments-form'>
  <input name="options[slug]" type="hidden" value="{{ page.slug }}">
  <label class = "form_label">Name</label>
  <input name="fields[name]" type="text" placeholder = "Name" class = "form_input" required>
  <label class = "form_label">E-mail</label>
  <input name="fields[email]" type="email" placeholder = "Email" class = "form_input" required>
  <label class = "form_label">Comment</label>
  <textarea name="fields[message]" placeholder = "Type in a comment ..." class = "form_input form_input-message" required></textarea>
  <input type="submit" value = "Comment" class = "form_input form_input-submit">
</form>