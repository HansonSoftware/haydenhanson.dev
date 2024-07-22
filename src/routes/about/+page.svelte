<script lang="ts">
  import { page } from '$app/stores';
  const work: string = 'in Web Dev and AI Training';

  import Modal from '$lib/components/Modal.svelte';
  import WorkButton from '$lib/components/WorkButton.svelte';
  const modals = [
    { showModal: false },
    { showModal: false },
    { showModal: false },
    { showModal: false }
  ];

  function toggleModal(index: number) {
    modals[index].showModal = !modals[index].showModal;
  }
</script>

<svelte:head>
  <title>Hayden Hanson | About</title>
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
<div class="grid max-w-5xl place-content-center place-items-center mx-4">
  <header class="w-fit flex items-center border-b py-2 border-crust">
    <h1 class="text-4xl sm:text-5xl text-center font-semibold">About Me</h1>
  </header>

  <section
    class="flex flex-col items-center justify-center gap-8 md:flex-row pt-4"
  >
    <img
      src="/me.jpg"
      alt="Hayden"
      class="h-60 w-60 rounded-3xl border-2 border-gray-400 shadow-2xl
			dark:border-gray-700 sm:h-72 sm:w-72"
    />
    <div
      class="flex h-auto w-full max-w-lg flex-col items-center justify-start gap-4 p-2"
    >
      <h2
        class="mx-auto text-center text-xl font-semibold sm:text-left sm:text-2xl"
      >
        I'm a Software Developer currently working {work}.
      </h2>
      <p>
        I am passionate about beautiful yet minimalistic websites, increasing
        server performance, developer workflows, problem solving and Linux. Most
        importantly, I love to learn!
      </p>
      <p>
        This site is meant to be my little corner of the internet, I update it
        from time to time. I recently started to blog about computer science
        topics, books and software/hardware.
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center pt-12">
    <header class="w-fit flex items-center border-b py-2 border-crust">
      <h1 class="text-4xl sm:text-5xl text-center font-semibold">
        Work History
      </h1>
    </header>

    <!-- MODAL GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
      <WorkButton
        {toggleModal}
        i={0}
        jobTitle="Software Developer Intern"
        company="DevX"
        datesWorked="Jan 2024 - May 2024"
      />

      <Modal bind:showModal={modals[0].showModal}>
        <h2
          class="text-xl font-semibold border-b border-foreground text-center"
          slot="header"
        >
          Software Developer Intern
        </h2>

        <ol class="list-disc space-y-2">
          <li>
            Developed features for the Active Documentation IntelliJ plugin, a
            static analysis tool for Java projects.
          </li>
          <li>
            Contributed to porting the plugin to VSCode, expanding its reach and
            usability across different IDEs.
          </li>
          <li>
            Maintained comprehensive documentation of frontend code and
            submitted pull requests on GitHub.
          </li>
        </ol>
      </Modal>

      <WorkButton
        {toggleModal}
        i={1}
        jobTitle="Teaching Assistant"
        company="GMU"
        datesWorked="Aug 2022 - May 2024"
      />

      <Modal bind:showModal={modals[1].showModal}>
        <h2
          class="text-xl font-semibold border-b border-foreground text-center"
          slot="header"
        >
          Teaching Assistant
        </h2>

        <ol class="list-disc space-y-2">
          <li>
            Helped students grasp complex material during in-class discussions,
            group meetings, and emails.
          </li>
          <li>
            Assisted with grading large coding assignments, papers, and
            presentations.
          </li>
          <li>
            Created testing scripts with Bash and made example code snippets in
            Java and JavaScript.
          </li>
          <li>
            I worked in the following classes: <em
              >SWE 637 - Software Testing, SWE 432 - Web App Development, and
              SWE 205 - Usability Analysis and Design</em
            >
          </li>
        </ol>
      </Modal>

      <WorkButton
        {toggleModal}
        i={2}
        jobTitle="Research Assistant"
        company="DevX"
        datesWorked="June 2023 - Aug 2023"
      />

      <Modal bind:showModal={modals[2].showModal}>
        <h2
          class="text-xl font-semibold border-b border-foreground text-center"
          slot="header"
        >
          Research Assistant
        </h2>

        <ol class="list-disc space-y-2">
          <li>
            Created features for a debugger that helps developers reason about
            their web applications.
          </li>
          <li>
            Achieved the integration of LLM’s into the workflow through research
            and use of the OpenAI API.
          </li>
          <li>
            Built command line tooling in python that queried our database and
            made data easier to interact with.
          </li>
          <li>
            Wrote multiple web applications in React for testing and created
            concise demos for presentations.
          </li>
        </ol>
      </Modal>

      <WorkButton
        {toggleModal}
        i={3}
        jobTitle="Web Developer"
        company="Pandora Solutions"
        datesWorked="Freelance"
      />

      <Modal bind:showModal={modals[3].showModal}>
        <h2
          class="text-xl font-semibold border-b border-foreground text-center"
          slot="header"
        >
          Web Developer
        </h2>

        <ol class="list-disc space-y-2">
          <li>
            Worked with small businesses to optimize their online presence.
          </li>
          <li>
            Developed high end custom websites, from initial design to
            deployment and hosting.
          </li>
          <li>
            Adhered to industry best practices, including prioritizing SEO and
            ensuring accessibility for all users.
          </li>
        </ol>
      </Modal>
    </div>
    <!-- MODAL GRID -->
  </section>

  <section></section>
</div>
