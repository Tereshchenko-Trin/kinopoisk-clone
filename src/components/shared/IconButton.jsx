import Arrow from '@/assets/images/iconArrow.svg'
import ArrowDown from '@/assets/images/iconArrowDown.svg'
import ArrowRight from '@/assets/images/iconArrowRight.svg'
import Check from '@/assets/images/iconCheck.svg'
import Close from '@/assets/images/iconClose.svg'
import Delete from '@/assets/images/iconDelete.svg'
import Favorites from '@/assets/images/iconFavorites.svg'
import Filter from '@/assets/images/iconFilter.svg'
import Home from '@/assets/images/iconHome.svg'
import Menu from '@/assets/images/iconMenu.svg'
import Settings from '@/assets/images/iconSettings.svg'
import Share from '@/assets/images/iconShare.svg'
import Trends from '@/assets/images/iconTrends.svg'
import User from '@/assets/images/iconUser.svg'

export function IconButton({ type, children, onClick }) {
  switch (type) {
    case 'home':
      return (
        <button type="button" onClick={onClick}>
          <img src={Home} alt="home" />
          {children}
        </button>
      )

    case 'trends':
      return (
        <button type="button" onClick={onClick}>
          <img src={Trends} alt="trends" />
          {children}
        </button>
      )

    case 'favorites':
      return (
        <button type="button" onClick={onClick}>
          <img src={Favorites} alt="favorites" />
          {children}
        </button>
      )

    case 'settings':
      return (
        <button type="button" onClick={onClick}>
          <img src={Settings} alt="settings" />
          {children}
        </button>
      )
  }
}