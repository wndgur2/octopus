import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/ROUTES'

export default function LobbyPage() {
  return (
    <div>
      Lobby Page
      <Link to={ROUTES.home}>Go to Home</Link>
    </div>
  )
}
