import { useState, type ReactNode } from 'react'
import { useAssets } from './AssetContext'
import { BackgroundContext } from './BackgroundContext'

type Props = { children: ReactNode }

export const BackgroundProvider = ({ children }: Props) => {
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null)

  const [playingMusicKey, setPlayingMusicKey] = useState<string | null>(null)
  const [playingMusic, setPlayingMusic] = useState<HTMLAudioElement | null>(null)
  const [muteMusic, setMuteMusic] = useState(false)
  const [interacted, setInteracted] = useState(false)

  const { images, sounds } = useAssets()

  function playMusic(key: string) {
    if (!interacted) return
    if (muteMusic) return
    if (key === playingMusicKey) return

    if (playingMusic) {
      playingMusic.pause()
    }

    const music = sounds[key]

    if (music) {
      const musicClone = music.cloneNode() as HTMLAudioElement
      musicClone.loop = true
      musicClone.play()
      setPlayingMusic(musicClone)
      setPlayingMusicKey(key)
    }
  }

  function muteMusicToggle() {
    setMuteMusic((prev) => {
      const newMuteState = !prev
      if (newMuteState && playingMusic) {
        playingMusic.pause()
      } else if (!newMuteState && playingMusic) {
        playingMusic.play()
      }
      return newMuteState
    })
  }

  function setBackgroundImage(key: string) {
    if (images[key]) setBgImage(images[key])
  }

  return (
    <BackgroundContext.Provider
      value={{
        interacted,
        setInteracted,
        playMusic,
        muteMusicToggle,
        setBackgroundImage,
      }}
    >
      <div
        className="flex flex-col width-full height-full items-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage.src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </BackgroundContext.Provider>
  )
}
