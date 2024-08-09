export interface ListPokemons {
  count: number
  next: string
  previous: string | null
  results: ResultPokemos[]
}

export interface ResultPokemos {
  name: string
  url: string
}
