export interface PokemonDetails {
  abilities: Ability[]
  base_experience: number
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  species: NameUrl
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface NameUrl {
  name: string
  url: string
}

export interface Ability {
  ability: NameUrl
  is_hidden: boolean
  slot: number
}

export interface Move {
  move: NameUrl
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: NameUrl
  version_group: NameUrl
}

export interface Sprites {
  back_default: string
  other: Other
}

export interface Other {
  "official-artwork": OfficialArtwork
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: NameUrl
}

export interface Type {
  slot: number
  type: NameUrl
}
