import React from 'react'
import { ButtonMain } from './styled'

type actionButtonProps = React.HTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: actionButtonProps) => {
  return (
    <ButtonMain type="button" {...props}>
      {children}
    </ButtonMain>
  )
}
export default Button
