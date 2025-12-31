import { useEffect, useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import useAvatar from '../hooks/useAvatar'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes/ROUTES'
import { useBackground } from '../context/BackgroundContext'
import Icon from '../components/common/Icon'
import Button from '../components/common/Button'
import { Border, Spacing, useModal } from 'sam-react-modal'
import Img from '../components/common/Img'
import Input from '../components/common/Input'
import AlertModal from '../components/common/AlertModal'
import ConfirmModal from '../components/common/ConfirmModal'

export default function HomePage() {
  const [name, setName] = useState('')
  const avatarUrl = useAvatar(name)
  const { playMusic, setBackgroundImage } = useBackground()
  const navigate = useNavigate()
  const { openModal } = useModal()

  useEffect(() => {
    playMusic('lobby')
    setBackgroundImage('home-desktop')
  })
  return (
    <div className="flex flex-col items-center gap-4">
      <Img src={logo} alt="Logo" className="w-[60dvw] min-w-[320px] max-w-[640px]" />
      <div className="flex items-center">
        <Input
          className="bg-white"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Img src={avatarUrl} alt="Avatar" width={240} />
      </div>
      <Border height={10} width={'100%'} className="bg-black" />
      <Spacing />
      <Border height={10} width={'100%'} className="bg-white" />
      <Button onClick={() => navigate(ROUTES.LOBBY)}>
        Go to Lobby
        <Icon name="group" />
        <Icon name="close_small" />
        <Icon name="arrow_forward" />
      </Button>
      <Button
        onClick={() => {
          openModal(<AlertModal>alert ! </AlertModal>)
        }}
      >
        open alert modal
      </Button>
      <Button
        onClick={async () => {
          if (await openModal(<ConfirmModal>confirm ! </ConfirmModal>)) alert('confirmed')
          else alert('canceled')
        }}
      >
        open confirm modal
      </Button>
    </div>
  )
}
