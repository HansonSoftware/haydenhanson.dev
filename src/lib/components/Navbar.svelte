<script lang="ts">
  import { page } from '$app/stores';
  import ThemeSwitcher from './ThemeSwitcher.svelte';

  let previousY: number;
  let currentY: number;
  let clientHeight: number;

  // decides whether client is scrolling down or up
  const deriveDirection = (y: number) => {
    const direction = !previousY || previousY < y ? 'down' : 'up';
    previousY = y;

    return direction;
  };

  $: scrollDirection = deriveDirection(currentY);
  $: offscreen = scrollDirection === 'down' && currentY > clientHeight * 8;

  $: url = $page.url.href;
  $: routeId = $page.url.pathname;

  const links = [
    {
      title: 'Blog',
      href: '/'
    },
    {
      title: 'Projects',
      href: '/projects'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ];
</script>

<svelte:window bind:scrollY={currentY} />

<nav
  class="fixed inset-x-0 z-50 mx-auto mt-6 flex h-16 w-fit items-center justify-between
	rounded-3xl border border-crust bg-background backdrop-blur-3xl dark:bg-transparent
	transition-transform ease-in sm:justify-center gap-4 sm:gap-8 px-4 sm:px-12"
  class:offscreen
  bind:clientHeight
>
  {#each links as { title, href }}
    {#if title === 'Blog'}
      <a
        {href}
        {title}
        class:active={(href === '/' ? routeId === '/' : url.includes(href)) ||
          url.includes('/blog/')}
        class="flex flex-row items-center justify-center gap-2 text-sm sm:text-lg"
      >
        {title}
        <span
          class="hidden h-5 w-5 border-crust font-normal rounded-md border text-center text-sm sm:block"
          >{`/`}</span
        >
      </a>
    {:else}
      <a
        {href}
        {title}
        class:active={href === '/' ? routeId === '/' : url.includes(href)}
        class="text-sm sm:text-lg"
      >
        {title}
      </a>
    {/if}
  {/each}

  <ThemeSwitcher />
</nav>

<style lang="postcss">
  nav {
    transition: transform 0.3s ease-in-out;
  }

  .offscreen {
    transform: translateY(-140%);
  }

  .active {
    color: theme(colors.primary);
    font-weight: 525;
  }
</style>
