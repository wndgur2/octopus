import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spacing } from 'sam-react-modal'

import chzzkIcon from '@/assets/images/icons/chzzk.png'
import Button from '@/components/common/Button'
import Img from '@/components/common/Img'
import { useBackground } from '@/context/BackgroundContext'
import { ROUTES } from '@/routes/ROUTES'

export default function LobbyPage() {
  const { playMusic, setBackgroundImage } = useBackground()
  const navigate = useNavigate()

  useEffect(() => {
    playMusic('lobby')
    setBackgroundImage('home-desktop')
  })
  return (
    <>
      <Spacing />
      <Button>Random Room</Button>
      <Button>Use Room Code</Button>
      <Button onClick={() => navigate(ROUTES.HOME)}>Go Home</Button>
      <Button icon={<Img width={32} src={chzzkIcon} alt='Chzzk Icon' />}>
        Leaderboard
      </Button>
      <Spacing />
    </>
  )
}
