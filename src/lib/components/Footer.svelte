<script>
  import IconLink from './IconLink.svelte';
  import { Github, Linkedin, RssIcon, Copyleft } from 'lucide-svelte';
</script>

<footer
  class="mx-auto border-t border-crust max-w-7xl mt-12 flex h-auto
	w-full flex-col items-center justify-center gap-2 p-2"
>
  <div class="flex flex-row gap-2 sm:gap-4">
    <IconLink
      href="https://github.com/HansonSoftware"
      target="_blank"
      title="GitHub"
    >
      <Github class="h-8 w-8" />
    </IconLink>
    <IconLink
      href="https://linkedin.com/in/hansonhayden"
      target="_blank"
      title="LinkedIn"
    >
      <Linkedin class="h-8 w-8" />
    </IconLink>
    <IconLink href="/rss.xml" target="_blank" title="RSS Feed">
      <RssIcon class="h-8 w-8" />
    </IconLink>
  </div>
  <div class="flex items-center gap-2">
    <a
      href="https://github.com/HansonSoftware/haydenhanson.dev"
      target="_blank"
      class="text-secondary"><Copyleft class="h-5 w-5" /></a
    >
    <p class="text-lg">2024 Hayden Hanson</p>
  </div>
</footer>
