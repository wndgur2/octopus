interface Props {
  children?: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Form({ children, onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(e)
      }}
    >
      {children}
    </form>
  )
}
