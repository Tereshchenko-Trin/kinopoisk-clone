import { NavLink } from 'react-router-dom'
import Logo from '@/assets/images/iconLogoDark.svg'

export function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </NavLink>
      <button className="header__button">Sign in</button>
    </div>
  )
}