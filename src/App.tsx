import LoadingScreen from './components/LoadingScreen'
import { AssetProvider } from './context/AssetProvider'
import { BackgroundProvider } from './context/BackgroundProvider'
import Routes from './routes'

function App() {
  return (
    <AssetProvider>
      <BackgroundProvider>
        <Routes />
        <LoadingScreen />
      </BackgroundProvider>
    </AssetProvider>
  )
}

export default App
