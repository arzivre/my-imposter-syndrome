type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome to {props.name},You have {props.messageCount} message
        </h2>
      ) : (
        'Welcome Guest'
      )}
    </div>
  )
}
