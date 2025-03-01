import ArrowDown from '@/assets/icons/iconArrowDown.svg'
import ArrowRight from '@/assets/icons/iconArrowRight.svg'
import ArrowLeft from '@/assets/icons/iconArrowLeft.svg'
import Home from '@/assets/icons/iconHome.svg'
import Top from '@/assets/icons/iconTop.svg'
import Trends from '@/assets/icons/iconTrends.svg'
import New from '@/assets/icons/iconNew.svg'
import Favorites from '@/assets/icons/iconFavorites.svg'
import Filter from '@/assets/icons/iconFilter.svg'
import Settings from '@/assets/icons/iconSettings.svg'
import User from '@/assets/icons/iconUser.svg'
import Menu from '@/assets/icons/iconMenu.svg'
import Share from '@/assets/icons/iconShare.svg'
import Check from '@/assets/icons/iconCheck.svg'
import Close from '@/assets/icons/iconClose.svg'
import Delete from '@/assets/icons/iconDelete.svg'
import Arrow from '@/assets/icons/iconArrow.svg'
import { IIconButtonProps } from '@/types/propTypes'

export function IconButton({ type, children, onClick }: IIconButtonProps) {
  switch (type) {
    case 'home':
      return (
        <button type="button" className="icon-button" onClick={onClick} >
          <img src={Home} alt="home" className="icon" />
          {children}
        </button>
      )

    case 'top':
      return (
        <button type="button" className="icon-button" onClick={onClick} >
          <img src={Top} alt="top" className="icon" />
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

    case 'new':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={New} alt="new" className="icon" />
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
        
    case 'filter':
      return (
        <button type="button" className="icon-button icon-button_filter" onClick={onClick}>
          <img src={Filter} alt="filter" className="icon icon_filter" />
          {children}
        </button>
      )
          
    case 'arrowDown':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={ArrowDown} alt="arrow down" className="icon icon_arrowDawn" />
          {children}
        </button>
      )

    case 'arrowLeft':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={ArrowLeft} alt="arrow left" className="icon icon_arrowLeft" />
          {children}
        </button>
      )

    case 'arrowRight':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={ArrowRight} alt="arrow right" className="icon icon_arrowRight" />
          {children}
        </button>
      )

    case 'menu':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Menu} alt="menu" className="icon" />
          {children}
        </button>
      )

    case 'share':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Share} alt="share" className="icon" />
          {children}
        </button>
      )

    case 'check':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Check} alt="check" className="icon" />
          {children}
        </button>
      )

    case 'close':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Close} alt="close" className="icon icon-close" />
          {children}
        </button>
      )

    case 'delete':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Delete} alt="delete" className="icon" />
          {children}
        </button>
      )

    case 'arrow':
      return (
        <button type="button" className="icon-button" onClick={onClick}>
          <img src={Arrow} alt="arrow" className="icon" />
          {children}
        </button>
      )
  }
}