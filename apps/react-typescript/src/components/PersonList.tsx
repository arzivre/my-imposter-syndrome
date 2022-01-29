import { Name } from './Person.types'
// * Array Types
type PersonListProps = {
  names: Name[]
}

export default function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {names.map((name) => (
        <h2>
          {name.first}
          {name.last}
        </h2>
      ))}
    </div>
  )
}
