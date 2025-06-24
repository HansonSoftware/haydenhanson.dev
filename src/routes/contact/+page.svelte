<script>
  import { page } from '$app/stores';
  import IconLink from '$lib/components/IconLink.svelte';
  import {
    Github,
    Linkedin,
    Mail,
    BriefcaseBusiness,
    Globe,
    CreditCard
  } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Hayden Hanson | Contact</title>
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

<section class="grid place-items-center place-content-center max-w-5xl">
  <header class="w-fit flex items-center border-b py-2 border-crust">
    <h1 class="text-4xl sm:text-5xl text-center font-semibold">
      Contact Links
    </h1>
  </header>

  <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4">
    <div class="space-y-4">
      <div class="flex flex-col gap-0 sm:text-center">
        <IconLink
          href="https://github.com/HansonSoftware"
          target="_blank"
          title="GitHub"
        >
          <Github class="h-6 w-6 sm:h-8 sm:w-8 " />
          <h2 class=" font-semibold text-2xl underline">GitHub</h2>
        </IconLink>
        <p class="text-center italic text-sm indent-2">
          Where all my projects live.
        </p>
      </div>

      <div class="flex flex-col gap-0 sm:text-center">
        <IconLink
          href="https://linkedin.com/in/hansonhayden"
          target="_blank"
          title="LinkedIn"
        >
          <Linkedin class="h-6 w-6 sm:h-8 sm:w-8 " />
          <h2 class=" font-semibold text-2xl underline">LinkedIn</h2>
        </IconLink>
        <p class="text-center italic text-sm indent-2">Let's connect!</p>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row gap-8">
      <div class="space-y-4">
        <div class="flex flex-col gap-0 sm:text-center">
          <IconLink
            href="mailto:haydenhansondev@gmail.com"
            target="_blank"
            title="haydenhansondev@gmail.com"
          >
            <Mail class="h-6 w-6 sm:h-8 sm:w-8 " />
            <h2 class=" font-semibold text-2xl underline">Email</h2>
          </IconLink>
          <p class="text-center italic text-sm indent-2">Shoot me an email.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-12 text-center text-md">
    <p>
      Here is my <a href="/pgp.asc" class="text-secondary underline">PGP key</a>
      if that's your thing.
    </p>
  </div>
</section>

<!-- END CONTACT LINKS -->

<!-- <section class="pt-12 grid place-items-center place-content-center max-w-5xl"> -->
<!--   <header class="w-fit flex items-center border-b py-2 border-crust"> -->
<!--     <h1 -->
<!--       class="text-4xl sm:text-5xl text-center font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent" -->
<!--     > -->
<!--       Section Header -->
<!--     </h1> -->
<!--   </header> -->
<!---->
<!--   <div class="flex flex-col gap-4 pt-4 justify-center items-center"></div> -->
<!-- </section> -->

<section class="pt-12 grid place-items-center place-content-center max-w-5xl">
  <header class="w-fit flex flex-col items-center border-b py-2 border-crust">
    <h1
      class="text-3xl sm:text-4xl text-center font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
    >
      Other Links
    </h1>
  </header>

  <div class="flex flex-col gap-4 pt-4 justify-center items-center">
    <div class="flex flex-col gap-0 text-center">
      <IconLink
        href="https://i.capitalone.com/JQ9r0SIcT"
        target="_blank"
        title="Capital One Savor One Referral"
      >
        <CreditCard class="h-6 w-6 sm:h-8 sm:w-8 " />
        <h2 class="font-semibold text-xl underline">Capital One Savor One</h2>
      </IconLink>
    </div>

    <p class="italic text-sm text-center">
      This is mainly here so I can easily share these links with my friends.
    </p>
  </div>
</section>
