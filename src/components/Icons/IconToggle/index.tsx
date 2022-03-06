import { Wrapper } from './styled'
import * as TogglePrimitive from '@radix-ui/react-toggle'

type actionToggleProps = React.ComponentProps<typeof TogglePrimitive.Root> & {
  label?: string
}

const Toggle = ({ children, label, ...props }: actionToggleProps) => {
  return (
    <Wrapper {...props}>
      {children} {label}
    </Wrapper>
  )
}

export default Toggle
