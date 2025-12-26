import { useAssets } from "../context/AssetContext";


export default function useMusic (musicKey: string): void {
  const { sounds } = useAssets()
  const music = sounds[musicKey] as HTMLAudioElement | undefined
  if (music) {
    music.play().catch((error) => {
      console.error('Error playing music:', error)
    })
  } else {
    console.warn(`Music with key "${musicKey}" not found.`)
  }
}