import { AssetProvider } from './context/AssetProvider'
import Routes from './routes'

function App() {
  return (
    <AssetProvider>
      <Routes />
    </AssetProvider>
  )
}

export default App
