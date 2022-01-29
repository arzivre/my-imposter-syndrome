import { personProps } from './Person.types'

export default function Person(props: personProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}
