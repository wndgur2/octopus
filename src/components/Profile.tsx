type Props = {
  name: string
  img?: HTMLImageElement
  className?: string
}

export default function Profile({ name, img, className }: Props) {
  if (img) {
    return (
      <img
        src={img.src}
        alt={name}
        className={className ?? 'w-7 h-7 rounded-full object-cover'}
      />
    )
  }

  return <div className={className ?? 'w-7 h-7 rounded-full bg-black/15'} />
}
