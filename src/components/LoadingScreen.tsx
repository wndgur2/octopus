import { useAssets } from '../context/AssetContext'

export default function LoadingScreen() {
  const { progress } = useAssets()

  return (
    <div style={{ textAlign: 'center', paddingTop: 100 }}>
      <h2>Loading...</h2>
      <progress value={progress} max={100} />
      <p>{progress}%</p>
    </div>
  )
}
