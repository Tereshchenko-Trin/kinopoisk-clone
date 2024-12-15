import Logo from '@/assets/icons/iconLogoDark.svg'
import { NavLink } from 'react-router-dom'
import { SearchForm } from '@/components/SearchForm'
import { IconButton } from '@/components/shared/IconButton'

export function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </NavLink>
      <div className="header__interface">
        <SearchForm className="header__search" />
        <IconButton type="user" className="header__button">Sign in</IconButton>
        <IconButton type="arrowDown"/>
      </div>
    </div>
  )
}