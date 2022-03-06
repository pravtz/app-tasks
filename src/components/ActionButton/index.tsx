import React from 'react'
import { ActionButtonMain } from './styled'

type actionButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label: string
}

const ActionButton = ({
  label,
  ...props
}: actionButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ActionButtonMain {...props}>{label}</ActionButtonMain>
}
export default ActionButton
