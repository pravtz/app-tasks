import React from 'react'
import { ActionButtonMain, LabelSpan } from './styled'

type actionButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label: string
}

const ActionButton = ({
  label,
  ...props
}: actionButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ActionButtonMain {...props}>
      <LabelSpan>{label}</LabelSpan>
    </ActionButtonMain>
  )
}
export default ActionButton
