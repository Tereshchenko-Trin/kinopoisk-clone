import Logo from '@/assets/icons/iconLogoDark.svg'
import { useAppDispatch } from '@/hooks/useStore'
import { shownFilterModal } from '@/redux/films-slice'
import { NavLink } from 'react-router-dom'
import { SearchForm } from '@/components/SearchForm'
import { IconButton } from '@/components/shared/IconButton'
import { pagesPaths } from '@/config/pagesPaths'

export function Header() {
  const dispatch = useAppDispatch()
  const handleClickButtonFilter = () => { dispatch(shownFilterModal()) }

  return (
    <>
      <div className="header">
        <NavLink to={pagesPaths.start}>
          <img className="header__logo" src={Logo} alt="logo" />
        </NavLink>
        <div className="header__interface">
          <SearchForm />
          <IconButton type="filter" onClick={() => handleClickButtonFilter()} />
          <IconButton type="user" className="header__button">Sign in</IconButton>
        </div>
      </div>
    </>
  )
}