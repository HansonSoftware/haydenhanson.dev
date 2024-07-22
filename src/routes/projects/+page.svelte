<script lang="ts">
  import { page } from '$app/stores';
  import ProjectTile from '$lib/components/ProjectTile.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Hayden Hanson | Projects</title>
  <meta
    name="description"
    content="I am passionate about beautiful yet minimalistic websites, increasing server performance, developer workflows, problem solving and Linux. Most importantly, I love to learn!"
  />
  <meta property="og:title" content="Hayden Hanson" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="" />
  <meta property="og:url" content={$page.url.href} />
  <meta
    property="og:description"
    content="I am passionate about beautiful yet minimalistic websites, increasing server performance, developer workflows, problem solving and Linux. Most importantly, I love to learn!"
  />
</svelte:head>

<section
  class="grid place-items-center place-content-center max-w-5xl mx-2 z-20"
>
  <header
    class="mb-4 w-fit flex items-center
    border-b py-2 border-gray-400 dark:border-gray-700"
  >
    <h1 class="text-3xl sm:text-5xl text-center font-semibold">
      Project Showcase
    </h1>
  </header>

  <section class="divide-y dark:divide-gray-700">
    {#each data.projects as project}
      <ProjectTile {project} />
    {/each}
  </section>
</section>
