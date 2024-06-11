<script lang="ts">
  import { page } from '$app/stores';
  import PostListing from '$lib/components/PostListing.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Hayden Hanson | Blog</title>
  <meta
    name="description"
    content="Software developer passionate about beautiful yet minimalistic websites, fast backend code, problem solving and linux workflows."
  />
  <meta property="og:title" content="Hayden Hanson" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="" />
  <meta property="og:url" content={$page.url.href} />
  <meta
    property="og:description"
    content="Software developer passionate about beautiful yet minimalistic websites, fast backend code, problem solving and linux workflows."
  />
</svelte:head>

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
  <header class="w-fit flex items-center border-b py-2 border-crust">
    <h1 class="text-3xl sm:text-4xl text-center font-semibold">Recent Posts</h1>
  </header>

  <section class="pt-4 divide-y dark:divide-gray-700 grid grid-cols-1">
    {#each data.posts as post}
      <PostListing {post} />
    {/each}
  </section>
</section>
