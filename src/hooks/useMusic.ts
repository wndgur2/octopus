import { useAssets } from "../context/AssetContext";


export default function useMusic (musicKey: string): void {
  const { assets } = useAssets()
  const music = assets[musicKey] as HTMLAudioElement | undefined
  if (music) {
    music.play().catch((error) => {
      console.error('Error playing music:', error)
    })
  } else {
    console.warn(`Music with key "${musicKey}" not found.`)
  }
}