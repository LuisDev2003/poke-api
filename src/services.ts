import { ListPokemons } from "./types"

const BASE_URL = "https://pokeapi.co/api/v2"

export const getPokemonDetails = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const getPokemons = async () => {
  const response = await fetch(BASE_URL + "/pokemon")
  const data: ListPokemons = await response.json()

  const details = await Promise.all(
    data.results.map(async (pokemon) => {
      const details = await getPokemonDetails(pokemon.url)
      return details
    }),
  )

  return details
}

export const getDetails = async (name: string) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
  const data = await response.json()

  return data
}
