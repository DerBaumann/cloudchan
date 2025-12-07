<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">CloudChan</a>
  </div>
  <div class="flex-none">
    <a href="/add">Neuer Post</a>
  </div>
</div>

<main class="py-16 px-8">
  {@render children()}
</main>
