<script lang="ts">
  import type { MarkdownProject } from '../../types';
  import { formatDate } from '$lib/utils/date';

  export let metadata: MarkdownProject['metadata'];
</script>

<header class="p-4">
  <div class="mb-6 w-full">
    <div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-md">
      {#if metadata.imgUrl}
        <img src={metadata.imgUrl} alt={metadata.title} class="object-fill" />
      {/if}
    </div>
  </div>

  <div>
    <h1 class="mb-4 text-2xl sm:text-5xl font-bold">
      {metadata.title}
    </h1>

    <div class="inline-block border-t py-2 dark:border-gray-700">
      <span>Completed: </span>
      <time class="font-light" datetime={metadata.completedAt}>
        {formatDate(metadata.completedAt)}
      </time>
    </div>
  </div>
</header>
