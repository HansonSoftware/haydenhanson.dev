<script lang="ts">
  export let href: string;
  export let title: string;
  export let target: '_self' | '_blank' = '_self';
</script>

<a
  class="rounded-lg p-2 hover:bg-crust flex flex-row gap-2 items-center justify-center sm:gap-4 z-30"
  {href}
  {target}
  {title}
>
  <slot />
</a>
