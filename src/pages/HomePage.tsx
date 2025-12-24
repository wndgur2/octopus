import { useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import './HomePage.css'
import LoadingScreen from '../components/LoadingScreen'
import useAvatar from '../hooks/useAvatar'

export default function HomePage() {
  const [name, setName] = useState('')
  const avatarUrl = useAvatar(name)
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
    </div>
  )
}
