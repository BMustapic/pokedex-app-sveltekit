<script lang="ts" context="module">
	import { getPokemon } from "../helpers/getPokemonHelper"

	export async function load({ page }) {
		const pokemon = await getPokemon(0, 151)
		return {
			props: { pokemon: pokemon }
		}
	}
</script>

<script lang="ts">
	import PokeCard from "../components/pokeCard.svelte"

	export let pokemon: {
		name: string
		id: number
		image: string
	}[]

	let currGen = 1

	let searchTerm = ""
	let filteredPokemon: {
		name: string
		id: number
		image: string
	}[] = []

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((mon) => mon.name.includes(searchTerm))
		} else {
			filteredPokemon = [...pokemon]
		}

		if (currGen === 5) {
			getPokemon(494, 155).then((d) => (pokemon = d))
		}

		if (currGen === 4) {
			getPokemon(386, 108).then((d) => (pokemon = d))
		}

		if (currGen === 3) {
			getPokemon(251, 135).then((d) => (pokemon = d))
		}

		if (currGen === 2) {
			getPokemon(151, 100).then((d) => (pokemon = d))
		}

		if (currGen === 1) {
			getPokemon(0, 151).then((d) => (pokemon = d))
		}
	}

	let nextGen = (): void => {
		currGen++
	}

	let prevGen = (): void => {
		currGen--
	}

	let arabToRoman = (arab: number): string => {
		switch (arab) {
			case 1:
				return "I"
			case 2:
				return "II"
			case 3:
				return "III"
			case 4:
				return "IV"
			case 5:
				return "V"
			default:
				return null
		}
	}
</script>

<svelte:head>
	<title>Pokedex App</title>
</svelte:head>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-300"
	placeholder="Search Pokemon..."
	bind:value={searchTerm}
	type="text"
/>
<h1 class="text-4xl text-center my-8 uppercase">This is my Pokedex App</h1>
<h2 class="text-2xl text-center my-8 uppercase">Generation {arabToRoman(currGen)}</h2>

<div class="flex justify-center w-full">
	<button
		class="mx-4 text-lg {currGen === 1
			? 'bg-gray-700'
			: 'bg-blue-500'} text-white font-bold px-4 rounded"
		on:click={prevGen}
		disabled={currGen === 1}>Previous Generation</button
	>
	<button
		class="mx-4 text-lg {currGen === 5
			? 'bg-gray-700'
			: 'bg-blue-500'} text-white font-bold px-4 rounded"
		on:click={nextGen}
		disabled={currGen === 5}>Next Generation</button
	>
</div>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as mon}
		<PokeCard pokemon={mon} />
	{/each}
</div>
