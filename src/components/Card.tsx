import clsx from "clsx"
import { Link } from "react-router-dom"
import { PokemonDetails } from "../types/pokemon-details"
import Labels from "./Labels"

const Card = ({ data }: { data: PokemonDetails[] }) => {
  return (
    <>
      {data?.map(({ name, types, sprites, order }) => (
        <li key={name} className="card">
          <Link to={`/pokemon/${name}`}>
            <div className={clsx("content-image", types[0].type.name)}>
              <img
                src={sprites.other["official-artwork"].front_default}
                alt={name}
                className="image"
              />
              <span className="order">{order}</span>
            </div>
            <div className="info">
              <h3 className="name">{name}</h3>
              <Labels types={types} />
            </div>
          </Link>
        </li>
      ))}
    </>
  )
}

export default Card
