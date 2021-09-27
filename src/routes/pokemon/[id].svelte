<script context="module" lang="ts">
	export async function load({ page }) {
		const id = page.params.id
		const url2 = `https://pokeapi.co/api/v2/pokemon-species/${id}`
		const res2 = await fetch(url2)
		const varietiesArr = (await res2.json()).varieties

		const varieties = []

		for (let v of varietiesArr) {
			const res3 = await fetch(v.pokemon.url)
			const pVar = await res3.json()
			varieties.push(pVar)
		}

		return { props: { varieties } }
	}
</script>

<script lang="ts">
	export let varieties: {
		types: { type: { name: string } }[]
		name: string
		height: any
		weight: any
		sprites: { [x: string]: string }
	}[]
</script>

<div class="p-8 max-w-6xl mx-auto">
	{#if varieties.length > 0}
		{#each varieties as pokeVar}
			<div>
				<h1 class="text-4xl text-center my-8 uppercase">{pokeVar.name}</h1>
				<p>
					Type: <strong
						>{pokeVar.types
							.map((t) => t.type.name)
							.join("-")
							.toUpperCase()}</strong
					>
					| Height: {pokeVar.height} | Weight: {pokeVar.weight}
				</p>
				<div class="flex justify-center">
					<img class="card-image" src={pokeVar.sprites["front_default"]} alt={pokeVar.name} />
					<img class="card-image" src={pokeVar.sprites["front_shiny"]} alt={pokeVar.name} />
				</div>
			</div>
		{/each}
	{/if}

	<a href="/">
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Back to PokeDex
		</button>
	</a>
</div>
