import logo from '../assets/images/logo/logo.png'

export default function HomePage() {
  return (
    <div className="flex flex-col width-full height-full items-center">
      <img src={logo} alt="Logo" style={{ width: '32vw', minWidth: '320px' }} />
    </div>
  )
}
