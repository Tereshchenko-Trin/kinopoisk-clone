import { NavLink } from 'react-router-dom'
import { IconButton } from '@/components/shared/IconButton'
import { pagesPaths } from '@/config/pagesPaths'

export function Menu() {
  return (
    <div className="menu">
			<nav className="menu__nav-list">
				<NavLink to={pagesPaths.home}>
					<IconButton type="home">Home</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.films}>
					<IconButton type="top">Films</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.series}>
					<IconButton type="top">Series</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.trends}>
         <IconButton type="trends">Trends</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.new}>
          <IconButton type="new">New</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.favorites}>
          <IconButton type="favorites">Favorites</IconButton>
				</NavLink>
				<NavLink to={pagesPaths.settings}>
         <IconButton type="settings">Settings</IconButton>
				</NavLink>
			</nav>

      <div className="menu__footer">
        <p className="menu__text">© All Rights Reserved</p>
      </div>
		</div>
  )
}