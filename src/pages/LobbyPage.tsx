import { useEffect } from 'react'
import { Spacing } from 'sam-react-modal'

import chzzkIcon from '@/assets/images/icons/chzzk.png'
import logo from '@/assets/images/logo/logo.png'
import Button from '@/components/common/Button'
import Img from '@/components/common/Img'
import SettingButtons from '@/components/common/SettingButtons'
import { useBackground } from '@/context/BackgroundContext'

export default function LobbyPage() {
  const { playMusic, setBackgroundImage } = useBackground()
  useEffect(() => {
    playMusic('lobby')
    setBackgroundImage('home-desktop')
  })
  return (
    <div className='h-full py-12 flex flex-col items-center gap-5'>
      <Img
        src={logo}
        alt='Logo'
        className='w-[60dvw] min-w-[320px] max-w-[640px]'
      />
      <Spacing />
      <Button>Random Room</Button>
      <Button>Use Room Code</Button>
      <Button>Create Room</Button>
      <Button icon={<Img width={32} src={chzzkIcon} alt='Chzzk Icon' />}>
        Leaderboard
      </Button>
      <Spacing />
      <SettingButtons />
    </div>
  )
}
