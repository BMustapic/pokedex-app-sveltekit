<script>
	import { navigating } from "$app/stores"
	import Nav from "../components/nav.svelte"
</script>

{#if $navigating}
	<div class="flex justify-center items-center m-auto">
		<div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
	</div>
{:else}
	<div class="p-8 max-w-6xl mx-auto">
		<Nav />
		<slot />
	</div>
{/if}

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
