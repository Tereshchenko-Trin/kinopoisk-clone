import { useAppSelector } from '@/hooks/useStore'
import { useNavigate } from 'react-router-dom'
import { FilmCard } from '@/components/shared/FilmCard'
import { Loader } from '@/components/shared/Loader'
import { pagesPaths } from '@/config/pagesPaths'
import { IFilmData } from '@/types/filmDataTypes'

export function FavoritesFilmsList () {
  const navigate = useNavigate()
  const { favoritesList: films, isLoaded, error } = useAppSelector((state) => state.film)

  function renderCards() {
    return (
      films.map((film: IFilmData) => <FilmCard key={film.kinopoiskId} {...film} />)
    )
  }

  if (isLoaded) return <Loader />

  if (error) navigate(pagesPaths.error)

  if (films == undefined || films == null || films.length == 0) return <div>No films</div>

  return (
    <div className="cards">
      <div className="cards__container">
        {renderCards()}
      </div>
    </div>
  )
}