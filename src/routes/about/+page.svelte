<script lang="ts">
  import { page } from '$app/stores';

  import Modal from '$lib/components/Modal.svelte';
  import WorkButton from '$lib/components/WorkButton.svelte';
  const modals = [
    { showModal: false },
    { showModal: false },
    { showModal: false },
    { showModal: false },
    { showModal: false }
  ];

  function toggleModal(index: number) {
    modals[index].showModal = !modals[index].showModal;
  }

  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;

    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;

    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusSVG;
    }
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
        Software Developer currently working in Mobile App Development at
        <a
          target="_blank"
          href="https://www.indexarsolutions.com/"
          class="hover:underline">Index</a
        >.
      </h2>
      <p class="indent-4 sm:indent-0">
        I am passionate about beautiful yet minimalistic websites, developer
        workflows, problem solving, Linux and digital privacy. Most importantly,
        I love to learn!
      </p>
      <p class="indent-4 sm:indent-0">
        This site is meant to be my little corner of the internet, I update it
        from time to time. I recently started to blog about computer science
        topics, books and software.
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center pt-12">
    <header class="w-fit flex items-center border-b py-2 border-crust">
      <h2 class="text-4xl sm:text-5xl text-center font-semibold">
        Work History
      </h2>
    </header>

    <!-- MODAL GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
      <WorkButton
        {toggleModal}
        i={0}
        jobTitle="Application Engineer"
        company="Index AR Solutions"
        datesWorked="Sep 2024 - Present"
      />

      <Modal bind:showModal={modals[0].showModal}>
        <h2
          class="text-xl font-semibold border-b border-foreground text-center"
          slot="header"
        >
          As an Application Engineer I...
        </h2>

        <ol class="list-disc space-y-2">
          <li>
            Work closely with and travel out to clients in order to bring their
            ideas to life in our mobile applications.
          </li>
          <li>
            Program in C# to implement unique solutions for mobile applications
            tailored for multiple platforms.
          </li>
          <li>
            Maintain many git repositories, utilizing conventional commits and
            semantic versioning. Merge pull requests in bitbucket with my team.
          </li>
        </ol>
      </Modal>
      <WorkButton
        {toggleModal}
        i={1}
        jobTitle="Software Developer Intern"
        company="DevX"
        datesWorked="Jan 2024 - May 2024"
      />

      <Modal bind:showModal={modals[1].showModal}>
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
        i={2}
        jobTitle="Teaching Assistant"
        company="GMU"
        datesWorked="Aug 2022 - May 2024"
      />

      <Modal bind:showModal={modals[2].showModal}>
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
        i={3}
        jobTitle="Research Assistant"
        company="DevX"
        datesWorked="June 2023 - Aug 2023"
      />

      <Modal bind:showModal={modals[3].showModal}>
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
        i={4}
        jobTitle="Web Developer"
        company="Pandora Solutions"
        datesWorked="Freelance"
      />

      <Modal bind:showModal={modals[4].showModal}>
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

  <section
    class="flex flex-col w-full items-center max-w-4xl justify-center pt-12"
  >
    <header class="w-fit flex items-center border-b py-2 border-crust">
      <h2 class="text-4xl sm:text-5xl text-center font-semibold">Uses</h2>
    </header>

    <p class="p-4 text-lg md:text-xl max-w-3xl indent-4 md:indent-8">
      I have spent countless hours tweaking my computer hardware and software to
      be tailored to my liking. This section of my website is dedicated to
      explaining my development environment, which is entirely motivated by <span
        class="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
        >efficiency</span
      >.
    </p>

    <div
      class="text-3xl max-w-3xl flex flex-col p-4 justify-start w-full hover:text-popover"
    >
      <!-- Hardware -->
      <div class="hover:text-foreground">
        <button
          on:click={() => toggleAccordion(1)}
          class="w-full flex border-b border-popover justify-between items-center py-5 font-bold"
        >
          <!-- Header -->
          <span>Hardware</span>
          <span id="icon-1" class="transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-1"
          class="max-h-0 overflow-hidden transition-all pt-4 duration-300 ease-in-out"
        >
          <!-- Content -->
          <div class="pb-5 text-lg">
            <ul class="flex flex-col gap-2">
              <span>
                <li class="text-xl font-semibold">Desktop:</li>
                <ul class="list-disc ml-8">
                  <li>Ryzen 7 5700x</li>
                  <li>Nvidia RTX 3060ti</li>
                  <li>32GB Corsair Vengance DDR4 RAM</li>
                  <li>Asrock B450M Steel Legend</li>
                  <li>4TB SSD Storage</li>
                  <li>4TB HDD Storage</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Laptops:</li>
                <ul class="list-disc ml-8">
                  <li>Thinkpad T480</li>
                  <li>M1 Macbook Pro</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Keyboards:</li>
                <ul class="list-disc ml-8">
                  <li>Keychron Q1 Pro</li>
                  <li>Corne v4 MX (currently building!)</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Mice:</li>
                <ul class="list-disc ml-8">
                  <li>Logitech GPro Superlight</li>
                  <li>Glorious Model O</li>
                  <li>Corsair M65 Wireless Mouse</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Chair:</li>
                <ul class="list-disc ml-8">
                  <li>Herman Miller Caper</li>
                </ul>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <!-- Software -->
      <div class="hover:text-foreground">
        <button
          on:click={() => toggleAccordion(2)}
          class="w-full flex border-b border-popover justify-between items-center py-5 font-bold"
        >
          <!-- Header -->
          <span>Software</span>
          <span id="icon-2" class="transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-2"
          class="max-h-0 overflow-hidden transition-all pt-4 duration-300 ease-in-out"
        >
          <!-- Content -->
          <div class="pb-5 text-lg">
            <ul class="flex flex-col gap-2">
              <span>
                <li class="text-xl font-semibold">Operating System:</li>
                <ul class="list-disc ml-8">
                  <li>Arch Linux</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">DE's / WM's:</li>
                <ul class="list-disc ml-8">
                  <li>KDE</li>
                  <li>Hyprland</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Terminal:</li>
                <ul class="list-disc ml-8">
                  <li>Alacritty</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Browsers:</li>
                <ul class="list-disc ml-8">
                  <li>Brave</li>
                  <li>Firefox with custom User.js</li>
                </ul>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <!-- Applications -->
      <div class="hover:text-foreground">
        <button
          on:click={() => toggleAccordion(3)}
          class="w-full flex border-b border-popover justify-between items-center py-5 font-bold"
        >
          <!-- Header -->
          <span>Applications</span>
          <span id="icon-3" class="transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-3"
          class="max-h-0 overflow-hidden transition-all pt-4 duration-300 ease-in-out"
        >
          <!-- Content -->
          <div class="pb-5 text-lg">
            <ul class="flex flex-col gap-2">
              <span>
                <li class="text-xl font-semibold">Text Editor:</li>
                <ul class="list-disc ml-8">
                  <li>Neovim</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Terminal Multiplexer:</li>
                <ul class="list-disc ml-8">
                  <li>Tmux</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Git TUI:</li>
                <ul class="list-disc ml-8">
                  <li>Lazygit</li>
                </ul>
              </span>

              <span>
                <li class="text-xl font-semibold">Notes:</li>
                <ul class="list-disc ml-8">
                  <li>Obsidian</li>
                </ul>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <em class="pt-8 text-center"
      >Check out my <a
        href="https://github.com/HansonSoftware/dotfiles"
        target="_blank"
        class="text-primary hover:underline">dotfiles</a
      >!</em
    >
  </section>
</div>
