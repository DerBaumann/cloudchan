<script lang="ts">
  import { enhance } from "$app/forms";
  import { fly } from "svelte/transition";

  let { data, form } = $props();
</script>

{#if form?.error}
  <p>Error: {form.error}</p>
{/if}

<form method="POST" action="?/create" use:enhance class="max-w-fit mb-16">
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

<section class="flex gap-16 flex-col">
  {#each data.posts as post (post.id)}
    <div
      transition:fly={{ x: -200, duration: 500 }}
      class="card bg-base-200 w-96 shadow-sm"
    >
      <div class="card-body">
        <h2 class="card-title">{post.author}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  {:else}
    <p>Keine Posts vorhanden!</p>
  {/each}
</section>
