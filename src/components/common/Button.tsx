import type { ReactNode } from 'react'

import Card from './Card'

interface Props {
  icon?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  icon,
  type = 'button',
  size = 'md',
  className,
  onClick,
  disabled,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-transparent overflow-hidden
          ${size === 'sm' ? 'w-fit' : 'w-full'}
        `}
    >
      <Card
        size={size}
        className={`lg:w-auto active:scale-95 transition-transform flex items-center justify-center gap-4 ${className}`}
      >
        {icon}
        {children}
      </Card>
    </button>
  )
}
