import { useState } from "react"

export default function useAvatar (name: string): string {
  const [avatarUrl, setAvatarUrl] = useState<string>('')

  if (!name)
    return ''

  // map name into 0~35 (for skin) and 0~31 (for accessory)
  const skinIndex = name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 36
  const accessoryIndex = name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0) * 7, 0) % 32

  // get assets
  const skin = `/avatar/skin/skin${skinIndex.toString().padStart(2, '0')}.png`
  const accessory = `/avatar/top/top${accessoryIndex.toString().padStart(2, '0')}.png`

  // combine image

  const skinImage = new Image()
  skinImage.src = skin
  const accessoryImage = new Image()
  accessoryImage.src = accessory

  const canvas = document.createElement('canvas')
  canvas.width = 640
  canvas.height = 640
  const ctx = canvas.getContext('2d')

  skinImage.onload = () => {
    accessoryImage.onload = () => {
      ctx?.drawImage(skinImage, 0, 0, 640, 640)
      ctx?.drawImage(accessoryImage, 0, 0, 640, 640)
      setAvatarUrl(canvas.toDataURL())
    }
  }

  return avatarUrl
}