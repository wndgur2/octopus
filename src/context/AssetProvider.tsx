import { useEffect, useState, type ReactNode } from 'react'
import { avatarAssets, bgAssets, musicAssets, soundEffectsAssets } from '../assets'
import { loadAudio, loadImage } from '../utils/loaders'
import { AssetContext } from './AssetContext'

type Props = { children: ReactNode }

export const AssetProvider = ({ children }: Props) => {
  const [images, setImages] = useState<Record<string, HTMLImageElement>>({})
  const [sounds, setSounds] = useState<Record<string, HTMLAudioElement>>({})
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const [muteSoundEffects, setMuteSoundEffects] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      const imageEntries = [
        ...Object.entries(avatarAssets).map(([k, v]) => ({
          key: k,
          loader: () => loadImage(v),
        })),
        ...Object.entries(bgAssets).map(([k, v]) => ({
          key: k,
          loader: () => loadImage(v),
        })),
      ]
      const soundEntries = [
        ...Object.entries(soundEffectsAssets).map(([k, v]) => ({
          key: k,
          loader: () => loadAudio(v),
        })),
        ...Object.entries(musicAssets).map(([k, v]) => ({
          key: k,
          loader: () => loadAudio(v),
        })),
      ]

      const total = imageEntries.length + soundEntries.length

      let loaded = 0
      const images: Record<string, HTMLImageElement> = {}
      const sounds: Record<string, HTMLAudioElement> = {}

      for (const item of imageEntries) {
        images[item.key] = await item.loader()
        loaded++
        console.log(`Loaded ${item.key} (${loaded}/${total})`)
        setProgress(Math.round((loaded / total) * 100))
      }

      for (const item of soundEntries) {
        sounds[item.key] = await item.loader()
        loaded++
        console.log(`Loaded ${item.key} (${loaded}/${total})`)
        setProgress(Math.round((loaded / total) * 100))
      }

      setImages(images)
      setSounds(sounds)

      setLoading(false)
    }

    loadAll()
  }, [])

  function playSoundEffect(key: string) {
    if (loading) return
    if (muteSoundEffects) return

    const sound = sounds[key]
    if (!sound) return

    const soundClone = sound.cloneNode() as HTMLAudioElement
    soundClone.play()
  }

  function muteSoundEffectsToggle() {
    setMuteSoundEffects((prev) => !prev)
  }

  return (
    <AssetContext.Provider
      value={{
        images,
        sounds,
        loading,
        progress,
        playSoundEffect,
        muteSoundEffectsToggle,
      }}
    >
      {children}
    </AssetContext.Provider>
  )
}
