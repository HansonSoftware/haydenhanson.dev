<script lang="ts">
	import { page } from '$app/stores';
	import ProjectTile from '$lib/components/ProjectTile.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="grid place-items-center place-content-center max-w-5xl mx-2 z-20">
	<header
		class="mb-4 w-fit flex items-center
    border-b py-2 border-gray-400 dark:border-gray-700"
	>
		<h1 class="text-3xl sm:text-5xl text-center font-semibold">Project Showcase</h1>
	</header>

	<section class="divide-y dark:divide-gray-700">
		{#each data.projects as project}
			<ProjectTile {project} />
		{/each}
	</section>
</section>
