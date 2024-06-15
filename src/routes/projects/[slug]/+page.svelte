<script lang="ts">
  import '../../../prism/prism-night-owl.css';
  import type { PageData } from './$types';
  import CopyCodeInjector from '$lib/components/CopyCodeInjector.svelte';
  import ProjectHeader from '$lib/components/ProjectHeader.svelte';
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
  import { page } from '$app/stores';

  export let data: PageData;

  const { metadata, project: Project } = data;
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.summary} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={metadata.summary} />
  <meta property="og:image" content={metadata.imgUrl} />
  <meta property="og:url" content={$page.url.href} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="max-w-[22rem] sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
  <ProjectHeader {metadata} />

  <div
    class="prose prose-headings:text-foreground rose-p:text-foreground max-w-none px-4 py-4 dark:prose-invert md:prose-lg"
  >
    <CopyCodeInjector>
      <Project />
    </CopyCodeInjector>
  </div>
</article>
