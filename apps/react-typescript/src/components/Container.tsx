type ContainerProps = {
  styles: React.CSSProperties
}

export default function Container({ styles }: ContainerProps) {
  return <div style={styles}>Text Content Goes Here</div>
}
