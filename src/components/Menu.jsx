import { NavLink } from 'react-router-dom'
import { IconButton } from '@/components/shared/IconButton'
import { pagesPaths } from '@/config/pagesPaths'

export function Menu() {
  return (
    <div className="menu">
			<nav className="menu__nav-list">
				<NavLink to={pagesPaths.films}>
					<IconButton type="home">Home</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.trends}>
         <IconButton type="trends">Trends</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.favorites}>
          <IconButton type="favorites">Favorites</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.settings}>
         <IconButton type="settings">Settings</IconButton>
				</NavLink>
				<NavLink to="/home/filter/">
         <IconButton type="settings">Filter</IconButton>
				</NavLink>
			</nav>

      <div className="menu__footer">
        <p className="menu__text">© All Rights Reserved</p>
      </div>
		</div>
  )
}