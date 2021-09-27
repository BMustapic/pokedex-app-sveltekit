<script lang="ts">
	export let pokemon: {
		name: string
		image: string
		id: number
	}
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href="/pokemon/{pokemon.id}"
>
	<h2>{pokemon.id}. {pokemon.name}</h2>
	<img src={pokemon.image} alt={pokemon.name} />
</a>
