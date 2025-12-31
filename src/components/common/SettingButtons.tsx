import Button from './Button'
import Icon from './Icon'

export default function SettingButtons() {
  return (
    <div className='flex gap-4 w-full'>
      <Button size='md'>
        <Icon name='translate' />
      </Button>
      <Button size='md'>
        <Icon name='volume_off' />
      </Button>
      <Button size='md'>
        <Icon name='music_off' />
      </Button>
    </div>
  )
}
