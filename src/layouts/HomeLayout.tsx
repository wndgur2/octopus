import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import logo from '@/assets/images/logo/logo.png'
import Img from '@/components/common/Img'
import SettingButtons from '@/components/common/SettingButtons'
import { useBackground } from '@/context/BackgroundContext'

export default function HomeLayout() {
  const { playMusic, setBackgroundImage } = useBackground()

  useEffect(() => {
    playMusic('lobby')
    setBackgroundImage('home-desktop')
  })

  return (
    <div className='h-full w-full max-w-[720px] p-16 md:p-12 flex flex-col items-center gap-4 md:gap-5'>
      <Img
        src={logo}
        alt='Logo'
        className='w-[50dvw] min-w-[400px] max-w-[600px]'
      />
      <Outlet />
      <SettingButtons />
    </div>
  )
}
