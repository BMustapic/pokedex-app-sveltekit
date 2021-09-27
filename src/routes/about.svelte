<script lang="ts">
	let description = "This is my pokedex about page."

	const changeText = () => {
		description = "WOW! Text changed!"
	}
</script>

<svelte:head>
	<title>Pokedex App - About</title>
</svelte:head>

<p>{description}</p>

<button on:click={changeText}>Change text</button>
