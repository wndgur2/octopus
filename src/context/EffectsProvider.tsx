import { useState, type ReactNode } from 'react'

import { useAssets } from './AssetContext'
import { EffectsContext } from './EffectsContext'

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
    setMuteSoundEffects(prev => !prev)
  }

  return (
    <EffectsContext.Provider
      value={{
        isMuted: muteSoundEffects,
        playSoundEffect,
        muteSoundEffectToggle,
      }}
    >
      {children}
    </EffectsContext.Provider>
  )
}
