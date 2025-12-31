interface Props {
  children?: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return <div className={`bg-white p-4 rounded-xl ${className}`}>{children}</div>
}
