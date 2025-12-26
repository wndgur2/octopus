import { createContext, useContext } from 'react'

type AssetMap = Record<string, HTMLImageElement | HTMLAudioElement>

type AssetContextType = {
  assets: AssetMap
  loading: boolean
  progress: number // 0–100
}

export const AssetContext = createContext<AssetContextType | null>(null)

export const useAssets = () => {
  const ctx = useContext(AssetContext)
  if (!ctx) throw new Error('useAssets must be used within AssetProvider')
  return ctx
}
