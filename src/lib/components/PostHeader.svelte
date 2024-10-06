<script lang="ts">
  import type { MarkdownPost } from '../../types';
  import { formatDate } from '$lib/utils/date';

  export let metadata: MarkdownPost['metadata'];
</script>

<header class="p-4">
  <div class="mb-6 w-full">
    <div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
      {#if metadata.imgUrl}
        <img src={metadata.imgUrl} alt={metadata.title} class="object-cover" />
      {/if}
    </div>
  </div>

  <div>
    <h1 class="mb-4 text-3xl sm:text-5xl font-bold">
      {metadata.title}
    </h1>

    <div class="inline-block border-t py-2 dark:border-gray-700">
      <b>Published: </b>
      <time class="font-light" datetime={metadata.publishedAt}>
        {formatDate(metadata.publishedAt)}
      </time>
    </div>

    <br />

    <div class="inline-block py-2">
      <b>Read Time: </b>
      <span class="font-light">
        {metadata.readTime}
      </span>
    </div>

    <br />

    <div
      class="flex flex-row gap-2 justify-start items-center border-b pt-1 pb-2 dark:border-gray-700"
    >
      <img
        class="rounded-full max-w-8 border dark:border-gray-700"
        src="/favicon.png"
        alt="Hayden Hanson"
      />
      <span class="font-light"> Hayden Hanson</span>
    </div>
  </div>
</header>
