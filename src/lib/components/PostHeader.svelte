<script lang="ts">
  import type { MarkdownPost } from '../../types';
  import { formatDate } from '$lib/utils/date';

  export let metadata: MarkdownPost['metadata'];
</script>

<header class="p-4">
  <div class="mb-6 w-full sm:w-3/5">
    <div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
      {#if metadata.imgUrl}
        <img src={metadata.imgUrl} alt={metadata.title} class="object-cover" />
      {/if}
    </div>
  </div>

  <div>
    <h1 class="mb-4 text-4xl font-bold">
      {metadata.title}
    </h1>

    <div class="inline-block border-t py-2 dark:border-gray-700">
      <span>Published: </span>
      <time class="font-light" datetime={metadata.publishedAt}>
        {formatDate(metadata.publishedAt)}
      </time>
    </div>
  </div>
</header>
