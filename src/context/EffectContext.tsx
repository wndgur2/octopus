import { createContext, useContext } from 'react'

type EffectContextType = {
  playSoundEffect: (key: string) => void
  muteSoundEffectToggle: (key: string) => void
}

export const EffectContext = createContext<EffectContextType | null>(null)

export const useEffect = () => {
  const ctx = useContext(EffectContext)
  if (!ctx) throw new Error('useEffect must be used within EffectProvider')
  return ctx
}
