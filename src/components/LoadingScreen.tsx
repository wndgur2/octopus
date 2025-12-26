import { useAssets } from '../context/AssetContext'
import { useBackground } from '../context/BackgroundContext'

export default function LoadingScreen() {
  const { progress } = useAssets()
  const { interacted, setInteracted } = useBackground()
  return (
    <div
      className={`absolute flex items-center justify-center inset-0 bg-black flex-col text-white ${
        interacted && progress === 100 ? 'hidden' : 'flex'
      }`}
      onClick={() => setInteracted(true)}
    >
      <h2>Loading...</h2>
      <progress value={progress} max={100} />
      <p>{progress}%</p>
      {progress === 100 && <p>press anywhere to continue</p>}
    </div>
  )
}
