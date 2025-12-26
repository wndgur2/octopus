import { useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import './HomePage.css'
import LoadingScreen from '../components/LoadingScreen'
import useAvatar from '../hooks/useAvatar'
import useMusic from '../hooks/useMusic'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/ROUTES'

export default function HomePage() {
  const [name, setName] = useState('')
  const avatarUrl = useAvatar(name)
  useMusic('lobby')
  return (
    <div className="flex flex-col width-full height-full items-center home__page">
      <LoadingScreen />
      <img src={logo} alt="Logo" style={{ width: '32vw', minWidth: '320px' }} />
      <div className="flex items-center">
        <input
          className="bg-white"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <img src={avatarUrl.current} alt="Avatar" width={240} />
      </div>
      <div className="bg-white p-4">
        <Link to={ROUTES.lobby}>Go to Lobby</Link>
      </div>
    </div>
  )
}
