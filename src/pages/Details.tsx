import { useQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { useParams } from "react-router-dom"
import "../assets/css/details.css"
import Labels from "../components/Labels"
import { getDetails } from "../services"
import { PokemonDetails } from "../types/details"

const Details = () => {
  // Recuperar los parametros de la ruta con react router
  const { name = "" } = useParams()
  const { data = {} as PokemonDetails, isLoading } = useQuery<PokemonDetails>({
    queryKey: ["pokemon-details"],
    queryFn: () => getDetails(name),
  })

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <section className={clsx("pokemon-details", data.types[0].type.name)}>
          <article id="image" className="content-image">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
              className="image"
            />
          </article>

          <article id="name">
            <h1 className="title">{data.name}</h1>
            <ul className="slats">
              <Labels types={data.types} />
            </ul>
          </article>

          <article id="characteristics">
            <h3 className="sub-title">Characteristics</h3>
            <ul className="characteristics">
              <li>
                <strong className="key">height</strong>
                <span className="value">{data.height}</span>
              </li>
              <li>
                <strong className="key">weight</strong>
                <span className="value">{data.weight}</span>
              </li>
              <li>
                <strong className="key">base experience</strong>
                <span className="value">{data.base_experience}</span>
              </li>
              <li>
                <strong className="key">order</strong>{" "}
                <span className="value">{data.order}</span>
              </li>
              <li>
                <strong className="key">species</strong>
                <span className="value">{data.species.name}</span>
              </li>
            </ul>
          </article>

          <article id="slats">
            <h3 className="sub-title">Stats</h3>
            <ul className="slats">
              {data.stats.map(({ stat, base_stat }) => (
                <li key={stat.name}>
                  <label className="key">{stat.name}</label>
                  <progress value={base_stat} max={100} className="value">
                    {base_stat}
                  </progress>
                </li>
              ))}
            </ul>
          </article>
        </section>
      )}
    </>
  )
}

export default Details
