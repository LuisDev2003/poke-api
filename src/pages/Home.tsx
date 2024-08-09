import { useQuery } from "@tanstack/react-query"
import "../assets/css/home.css"
import Card from "../components/Card"
import { getPokemons } from "../services"
import { PokemonDetails } from "../types/pokemon-details"

function Home() {
  const { data = [], isLoading } = useQuery<PokemonDetails[]>({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(),
  })

  return (
    <>
      <main>
        {isLoading && <p>Loading...</p>}
        <ul className="list-pokemons">{!isLoading && <Card data={data} />}</ul>
      </main>
    </>
  )
}

export default Home
