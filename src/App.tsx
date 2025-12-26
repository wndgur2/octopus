import { AssetProvider } from './context/AssetProvider'
import { BackgroundProvider } from './context/BackgroundProvider'
import Routes from './routes'

function App() {
  return (
    <AssetProvider>
      <BackgroundProvider>
        <Routes />
      </BackgroundProvider>
    </AssetProvider>
  )
}

export default App
