import type { PokeAPI } from "./types/PokeAPI.type"

export async function getPokemon(start: number = 0, limit: number = 151) {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${start}`
	const response = await fetch(url)
	const data: PokeAPI = await response.json()
	const loadedPokemon = data.results.map((res, index) => {
		return {
			name: res.name,
			id: start + index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				start + index + 1
			}.png`
		}
	})

	return loadedPokemon
}
