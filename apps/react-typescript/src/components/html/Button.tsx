type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link'
  children:string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CostumButton = ({variant,children,...rest}:ButtonProps) => {
  return (
    <button
      className={`class-with-${variant}`}
      {...rest}
    >
      {children}
    </button>
  )
}
