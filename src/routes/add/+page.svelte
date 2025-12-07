<h1>Neuer Post</h1>

<form method="POST" action="?/create" class="max-w-fit">
  <fieldset class="fieldset">
    <legend class="fieldset-legend">Author</legend>
    <input type="text" name="author" required class="input" />
  </fieldset>

  <fieldset class="fieldset">
    <textarea
      class="textarea h-24"
      name="content"
      required
      placeholder="Lorem Ipsum..."
    ></textarea>
  </fieldset>

  <div class="flex justify-between">
    <button type="submit" class="btn btn-primary">Post</button>
    <a href="/" class="btn btn-outline btn-secondary">Zurück</a>
  </div>
</form>
