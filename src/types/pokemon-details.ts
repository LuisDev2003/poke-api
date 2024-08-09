export interface Other {
  "official-artwork": {
    front_default: string
    front_shiny: string
  }
}

export interface Types {
  slot: number
  type: Type
}

export interface Type {
  name: string
  url: string
}

export interface Sprites {
  front_default: string
  other: Other
}

export interface PokemonDetails {
  id: number
  name: string
  sprites: Sprites
  types: Types[]
  order: number
  weight: number
  height: number
}
