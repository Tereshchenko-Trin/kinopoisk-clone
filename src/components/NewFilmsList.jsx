import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useNavigate } from 'react-router-dom'
import { fetchFilmsNew } from '@/redux/films-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { Loader } from '@/components/shared/Loader'
import { pagesPaths } from '@/config/pagesPaths'
import { getMonth } from '@/utils/getMounth'

export function NewFilmsList () {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { newList: films, isLoaded, error } = useAppSelector((state) => state.films)

  useEffect(() => {
    const newCriteria = {
      year: new Date().getFullYear(),
      month: getMonth(),
    }

    dispatch(fetchFilmsNew({ ...newCriteria }))
  }, [dispatch])

  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.kinopoiskId} {...film} />)
    )
  }

  if (isLoaded) return <Loader />

  if (error) navigate(pagesPaths.error)

  if (films == undefined) return <div>No films</div>

  return (
    <div className="cards">
      <div className="cards__container">
        {renderCards()}
      </div>
    </div>
  )
}