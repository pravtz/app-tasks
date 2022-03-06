import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { ButtonIcon } from './styled'

type actionButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label: string
}

const Icon = ({ label, children, ...props }: actionButtonProps) => {
  return (
    <ButtonIcon type="button" {...props}>
      <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>
    </ButtonIcon>
  )
}

export default Icon
