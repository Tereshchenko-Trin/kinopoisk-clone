import favorite from '@/assets/icons/iconFavorites.svg'
import { useDispatch } from 'react-redux'
import { isFavorite } from '@/redux/film-slice'
import { Button } from '@/components/shared/Button'

export function FavoriteFeat({ kinopoiskId }) {
  const dispatch = useDispatch()

  const handleClickButtonFavorite = () => {
    dispatch(isFavorite(kinopoiskId))
  }

  return(
    <Button style="secondary" className="film__favorites-button" type="button" onClick={handleClickButtonFavorite}>
      <img src={favorite} className="icon" />
    </Button>
  )
}