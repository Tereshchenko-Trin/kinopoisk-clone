import Logo from '@/assets/icons/iconLogoDark.svg'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/shared/Button'

export function Introduction() {
  return (
    <div className="introduction">
      <div className="introduction__logo-container">
        <NavLink to="/">
          <img className="introduction__logo" src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className="introduction__content">
        <h1 className="introduction__title">Movies and TV series without restrictions on pixema</h1>
        <NavLink to="home/films">
          <Button type="button" className="introduction__button">Get started</Button>
        </NavLink>
      </div>
    </div>
  )
}