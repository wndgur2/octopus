import { useEffect, useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import useAvatar from '../hooks/useAvatar'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/ROUTES'
import { useBackground } from '../context/BackgroundContext'

export default function HomePage() {
  const [name, setName] = useState('')
  const avatarUrl = useAvatar(name)
  const { playMusic, setBackgroundImage } = useBackground()
  useEffect(() => {
    playMusic('lobby')
    setBackgroundImage('home-desktop')
  })
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={logo} alt="Logo" style={{ width: '60dvw', minWidth: '320px', maxWidth: '640px' }} />
      <div className="flex items-center">
        <input
          className="bg-white"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <img src={avatarUrl} alt="Avatar" width={240} />
      </div>
      <Link to={ROUTES.lobby} className="p-4 text-center bg-white w-full">
        Go to Lobby
      </Link>
    </div>
  )
}
