<script lang="ts">
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';
</script>

<ThemeInitializer>
	<Navbar />
	<main
		in:fly={{ y: -15, duration: 200, delay: 300 }}
		out:fly={{ y: 15, duration: 200 }}
		class="relative mx-auto grid max-w-7xl place-content-center place-items-center pt-32"
	>
		<slot />
	</main>
	<Footer />
</ThemeInitializer>
