import { writable } from "svelte/store"

export const pokemon = writable([])

type PokeAPI = {
	count: number
	next: string
	previous: string
	results: {
		name: string
		url: string
	}[]
}

const fetchPokemon = async (num: number) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`
	const response = await fetch(url)
	const data: PokeAPI = await response.json()
	const loadedPokemon = data.results.map((res, index) => {
		return {
			name: res.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		}
	})
	pokemon.set(loadedPokemon)
}
fetchPokemon(151)
