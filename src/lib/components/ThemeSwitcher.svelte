<script lang="ts">
	import { darkmode } from '$lib/stores/darkmode';
	import { slide } from 'svelte/transition';
	import { MoonStar } from 'lucide-svelte';
	import { Sun } from 'lucide-svelte';

	const inTransition = {
		duration: 400,
		delay: 500
	};

	const outTransition = {
		duration: 400
	};

	function toggleDarkmode() {
		if ($darkmode) {
			$darkmode = false;
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			$darkmode = true;
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}
</script>

<button class="p-2 text-secondary" on:click={toggleDarkmode}>
	{#if $darkmode}
		<div in:slide={inTransition} out:slide={outTransition}>
			<Sun class="h-6 w-6 fill-current" />
		</div>
	{:else}
		<div in:slide={inTransition} out:slide={outTransition}>
			<MoonStar class="h-6 w-6 fill-current" />
		</div>
	{/if}
</button>
