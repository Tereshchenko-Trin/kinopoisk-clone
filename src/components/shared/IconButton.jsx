import Arrow from '@/assets/icons/iconArrow.svg'
import ArrowDown from '@/assets/icons/iconArrowDown.svg'
import ArrowRight from '@/assets/icons/iconArrowRight.svg'
import Check from '@/assets/icons/iconCheck.svg'
import Close from '@/assets/icons/iconClose.svg'
import Delete from '@/assets/icons/iconDelete.svg'
import Favorites from '@/assets/icons/iconFavorites.svg'
import Filter from '@/assets/icons/iconFilter.svg'
import Home from '@/assets/icons/iconHome.svg'
import Menu from '@/assets/icons/iconMenu.svg'
import Settings from '@/assets/icons/iconSettings.svg'
import Share from '@/assets/icons/iconShare.svg'
import Trends from '@/assets/icons/iconTrends.svg'
import User from '@/assets/icons/iconUser.svg'

export function IconButton({ type, children, onClick }) {
  switch (type) {
    case 'home':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Home} alt="home" className="icon" />
          {children}
        </button>
      )

    case 'trends':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Trends} alt="trends" className="icon" />
          {children}
        </button>
      )

    case 'favorites':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Favorites} alt="favorites" className="icon" />
          {children}
        </button>
      )

    case 'settings':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Settings} alt="settings" className="icon" />
          {children}
        </button>
      )

      case 'user':
        return (
          <button type="button" className="icon-button icon-button_user" onClick={onClick}>
            <div>
              <img src={User} alt="user" className="icon icon_user" />
            </div>
            {children}
          </button>
        )

    case 'arrowDown':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={ArrowDown} alt="arrow down" className="icon" />
          {children}
        </button>
      )

    case 'filter':
      return (
        <button type="button" className="icon-button icon-button_filter" onClick={onClick}>
          <img src={Filter} alt="filter" className="icon icon_filter" />
          {children}
        </button>
      )
  }
}