<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>CloudChan</title>
</svelte:head>

<main class="py-16 px-8">
  {@render children()}
</main>
