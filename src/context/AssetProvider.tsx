import { useEffect, useState, type ReactNode } from 'react'
import { avatarAssets, bgAssets } from '../assets'
import { loadImage } from '../utils/loaders'
import { AssetContext } from './AssetContext'

type Props = { children: ReactNode }

export const AssetProvider = ({ children }: Props) => {
  const [assets, setAssets] = useState({})
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadAll = async () => {
      const entries = [
        ...Object.entries(avatarAssets).map(([k, v]) => ({
          key: k,
          loader: () => loadImage(v),
        })),
        ...Object.entries(bgAssets).map(([k, v]) => ({
          key: k,
          loader: () => loadImage(v),
        })),
      ]

      const total = entries.length
      let loaded = 0
      const result: Record<string, HTMLImageElement> = {}

      for (const item of entries) {
        result[item.key] = await item.loader()
        loaded++
        console.log(`Loaded ${item.key} (${loaded}/${total})`)
        setProgress(Math.round((loaded / total) * 100))
      }

      setAssets(result)
      setLoading(false)
    }

    loadAll()
  }, [])

  return (
    <AssetContext.Provider value={{ assets, loading, progress }}>{children}</AssetContext.Provider>
  )
}
