import { useState, type ReactNode } from 'react'
import { EffectContext } from './EffectContext'
import { useAssets } from './AssetContext'

export default function EffectProvider({ children }: { children: ReactNode }) {
  const [muteSoundEffects, setMuteSoundEffects] = useState(false)

  const { loading, sounds } = useAssets()

  function playSoundEffect(key: string) {
    if (loading) return
    if (muteSoundEffects) return

    const sound = sounds[key]
    if (!sound) return

    const soundClone = sound.cloneNode() as HTMLAudioElement
    soundClone.play()
  }

  function muteSoundEffectToggle() {
    setMuteSoundEffects((prev) => !prev)
  }

  return (
    <EffectContext.Provider value={{ playSoundEffect, muteSoundEffectToggle }}>
      {children}
    </EffectContext.Provider>
  )
}
