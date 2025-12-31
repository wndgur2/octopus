import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/ROUTES'
import { useBackground } from '../context/BackgroundContext'
import { useEffect } from 'react'

export default function LobbyPage() {
  const { playMusic } = useBackground()
  useEffect(() => {
    playMusic('citymafia')
  })
  return (
    <div>
      Lobby Page
      <div>
        <Link to={ROUTES.home}>Go to Home</Link>
      </div>
      <div>
        <Link to={ROUTES.leaderboard}>Go to Leaderboard</Link>
      </div>
    </div>
  )
}
