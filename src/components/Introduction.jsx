import { NavLink } from 'react-router-dom'

export function Introduction() {
  return (
    <div className="introduction">
      <h1 className="introduction__title">Movies and TV series without restrictions on pixema</h1>
      <NavLink to="home">
        <button className="introduction__button" type="button">Get started</button>
      </NavLink>
    </div>
  )
}