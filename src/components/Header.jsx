import Logo from '@/assets/images/iconLogoDark.svg'

export function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <button className="header__button">Sign in</button>
    </div>
  )
}