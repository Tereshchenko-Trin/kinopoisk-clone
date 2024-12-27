import favorite from '@/assets/icons/iconFavorites.svg'
import { useAppDispatch } from '@/hooks/useStore'
import { isFavorite } from '@/redux/film-slice'
import { Button } from '@/components/shared/Button'
import { IFavoriteFeatProps } from '@/types/propTypes'

export function FavoriteFeat({ kinopoiskId }: IFavoriteFeatProps) {
  const dispatch = useAppDispatch()

  const handleClickButtonFavorite = () => {
    dispatch(isFavorite(kinopoiskId))
  }

  return(
    <Button style="secondary" className="film__favorites-button" type="button" onClick={handleClickButtonFavorite}>
      <img src={favorite} className="icon" />
    </Button>
  )
}