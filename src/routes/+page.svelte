<script lang="ts">
  import type { PostSelectModel } from "$lib/types/post";

  interface PageProps {
    data: {
      posts: PostSelectModel[];
    };
  }

  let { data }: PageProps = $props();
</script>

<section class="flex gap-16 flex-col">
  {#each data.posts as post (post.id)}
    <div class="card bg-base-200 w-96 shadow-sm">
      <div class="card-body">
        <h2 class="card-title">{post.author}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  {:else}
    <p>Keine Posts vorhanden!</p>
  {/each}
</section>
