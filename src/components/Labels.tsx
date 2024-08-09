import clsx from "clsx"
import { Types } from "../types/pokemon-details"

const Label = ({ name }: { name: string }) => {
  return <span className={clsx("label", name)}>{name}</span>
}

const Labels = ({ types }: { types: Types[] }) => {
  return (
    <div className="labels">
      {types.map(({ type }) => (
        <Label key={type.name} name={type.name} />
      ))}
    </div>
  )
}

export default Labels
