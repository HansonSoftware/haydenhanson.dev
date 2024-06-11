<script lang="ts">
  import { page } from '$app/stores';
  import PostListing from '$lib/components/PostListing.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<section
  class="mx-auto max-w-md sm:max-w-xl md:max-w-3xl grid place-content-center px-4 pt-20"
>
  <div class="text-center">
    <h1 class="font-bold text-4xl sm:text-5xl md:text-7xl">
      I'm Hayden,<br />A Developer.
    </h1>
    <p class="py-4 text-lg sm:text-xl md:text-2xl">
      {`My approach to building software is grounded in a commitment to `}
      <span
        class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        craftsmanship.
      </span>
    </p>
  </div>
</section>

<section
  class="pt-24 max-w-5xl grid place-items-center place-content-center mx-2"
>
  <header
    class="mb-4 w-fit flex items-center
    border-b py-2 border-gray-400 dark:border-gray-700"
  >
    <h2 class="text-3xl sm:text-5xl text-center font-semibold">Recent Posts</h2>
  </header>

  <section class="divide-y dark:divide-gray-700 grid grid-cols-1">
    {#each data.posts as post}
      <PostListing {post} />
    {/each}
  </section>
</section>
