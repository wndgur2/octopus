import Card from './Card'

interface Props {
  className?: string
  onClick?: () => void
  disabled?: boolean
  children?: React.ReactNode
}

export default function Button({ className, onClick, disabled, children }: Props) {
  return (
    <button onClick={onClick} disabled={disabled}>
      <Card
        className={`w-full lg:w-auto active:scale-95 transition-transform flex items-center justify-center gap-2  ${className}`}
      >
        {children}
      </Card>
    </button>
  )
}
