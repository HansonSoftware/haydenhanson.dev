<script lang="ts">
  import type { MarkdownPostMetadataAndSlug } from '../../types';
  import { formatDate } from '$lib/utils/date';

  export let post: MarkdownPostMetadataAndSlug;

  const href = `/blog/${post.slug}`;
</script>

<article class="p-4 sm:flex sm:space-x-4">
  <a {href} class="block sm:w-72">
    <div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-md">
      <img
        src={post.metadata.imgUrl}
        alt={post.metadata.title}
        class="object-cover"
      />
    </div>
  </a>

  <div class="flex-1 py-2 sm:py-0">
    <a {href}>
      <h3 class="mb-1 text-2xl font-semibold">
        {post.metadata.title}
      </h3>
      <p class="text-gray-60 font-light dark:text-gray-300">
        <span>Published: </span>
        <time datetime={post.metadata.publishedAt}>
          {formatDate(post.metadata.publishedAt)}
        </time>
      </p>

      <p class="text-gray-60 font-light dark:text-gray-300">
        <span>Read Time: </span>
        <span class="font-light">
          {post.metadata.readTime}
        </span>
      </p>

      <p class="py-2 font-light">
        {post.metadata.summary}
      </p>
    </a>

    <div
      class="flex space-x-4 font-light text-gray-600 underline
          dark:text-gray-300"
    ></div>
  </div>
</article>
