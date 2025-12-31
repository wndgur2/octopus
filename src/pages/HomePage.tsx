import { useEffect } from 'react'
import { Spacing } from 'sam-react-modal'

import chzzkIcon from '@/assets/images/icons/chzzk.png'
import logo from '@/assets/images/logo/logo.png'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Form from '@/components/common/Form'
import Img from '@/components/common/Img'
import Input from '@/components/common/Input'
import SettingButtons from '@/components/common/SettingButtons'
import { useBackground } from '@/context/BackgroundContext'

export default function HomePage() {
  const { playMusic, setBackgroundImage } = useBackground()

  useEffect(() => {
    playMusic('lobby')
    setBackgroundImage('home-desktop')
  })
  return (
    <div className='h-full w-dvw max-w-[720px] p-12 flex flex-col items-center gap-6 md:gap-8'>
      <Img
        src={logo}
        alt='Logo'
        className='w-[60dvw] min-w-[360px] max-w-[560px]'
      />
      <Card size='lg'>
        <Form
          onSubmit={() => {}}
          className='flex flex-col items-center gap-4 md:gap-6'
        >
          <Input placeholder='Your name?' className='w-full' />
          <Button size='sm' type='submit'>
            Enter
          </Button>
        </Form>
      </Card>
      <Button
        size='lg'
        icon={<Img width={32} src={chzzkIcon} alt='Chzzk Icon' />}
      >
        Live Streamer
      </Button>
      <Spacing />
      <SettingButtons />
    </div>
  )
}
