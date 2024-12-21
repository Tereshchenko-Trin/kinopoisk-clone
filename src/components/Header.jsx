import Logo from '@/assets/icons/iconLogoDark.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SearchForm } from '@/components/SearchForm'
import { IconButton } from '@/components/shared/IconButton'
import { pagesPaths } from '@/config/pagesPaths'

export function Header() {
  const dispatch = useDispatch()

  const handleClickButtonFilter = () => {
    console.log('click')
  }

  return (
    <div className="header">
      <NavLink to={pagesPaths.start}>
        <img className="header__logo" src={Logo} alt="logo" />
      </NavLink>
      <div className="header__interface">
        <SearchForm className="header__search" />
        <IconButton type="filter" onClick={handleClickButtonFilter} />
        <IconButton type="user" className="header__button">Sign in</IconButton>
      </div>
    </div>
  )
}