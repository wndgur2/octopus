import { useEffect, useRef, type RefObject } from "react"
import { useAssets } from "../context/AssetContext"

const avatarCache: Record<string, string> = {}

export default function useAvatar (name: string): RefObject<string> {
  const avatarUrl = useRef<string>('')
  const { images, loading } = useAssets()

  useEffect(() => {
    if (loading) return

    const skinIndex = name
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % 36

    const accessoryIndex = name
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0) * 7, 0) % 31

    const cacheKey = `${skinIndex}-${accessoryIndex}`

    if (avatarCache[cacheKey]) {
      avatarUrl.current = avatarCache[cacheKey]
    } else {
      const skinImage = images[`skin${skinIndex.toString().padStart(2, '0')}`] as HTMLImageElement
      const accessoryImage = images[`top${accessoryIndex.toString().padStart(2, '0')}`] as HTMLImageElement

      const canvas = document.createElement('canvas')
      canvas.width = 640
      canvas.height = 640
      const ctx = canvas.getContext('2d')

      ctx?.drawImage(skinImage, 0, 0, 640, 640)
      ctx?.drawImage(accessoryImage, 0, 0, 640, 640)
      avatarCache[cacheKey] = canvas.toDataURL()
      avatarUrl.current = avatarCache[cacheKey]
    }
  }, [name, images, loading])

  return avatarUrl
}