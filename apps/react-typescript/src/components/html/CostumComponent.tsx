import { Greet } from '../Greet'

export const CostumComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props}</div>
}
