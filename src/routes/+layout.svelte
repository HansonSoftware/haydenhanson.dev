<script lang="ts">
  import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { fly } from 'svelte/transition';
  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
  $: pagePath = data.pathname;
</script>

<ThemeInitializer>
  <Navbar />
  {#key pagePath}
    <main
      in:fly={{ y: -15, duration: 200, delay: 300 }}
      out:fly={{ y: 15, duration: 200 }}
      class="relative mx-auto grid max-w-7xl place-content-center place-items-center pt-28"
    >
      <slot />
    </main>
  {/key}
  <Footer />
</ThemeInitializer>
