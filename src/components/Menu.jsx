import { NavLink } from 'react-router-dom'
import { IconButton } from '@/components/shared/IconButton'

export function Menu() {
  return (
    <div className="menu">
			<nav className="menu__nav-list">
				<NavLink to="/home/films">
					<IconButton type="home">Home</IconButton>
				</NavLink>
				<NavLink to="/home/trends">
         <IconButton type="trends">Trends</IconButton>
				</NavLink>
				<NavLink to="/home/favorites">
          <IconButton type="favorites">Favorites</IconButton>
				</NavLink>
				<NavLink to="/home/settings">
         <IconButton type="settings">Settings</IconButton>
				</NavLink>
			</nav>

      <div className="menu__footer">
        <p className="menu__text">© All Rights Reserved</p>
      </div>
		</div>
  )
}