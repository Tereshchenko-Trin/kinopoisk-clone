import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchTopFilms } from '@/redux/films-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { Pagination } from '@/components/Pagination'
import { Loader } from '@/components/shared/Loader'
import { pagesPaths } from '@/config/pagesPaths'

export function TopFilmsList() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { currentPage } = useParams()
  const { topFilmsList: films, isLoaded, error, pageCount } = useAppSelector((state) => state.films)

  useEffect(() => {
    const data = {
      type: 'TOP_250_MOVIES'
    }

    dispatch(fetchTopFilms({ ...data, currentPage }))
  }, [dispatch, currentPage])

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

      <div className="pagination-container">
        <Pagination currentPage={currentPage} pageCount={pageCount} />
      </div>
    </div>
  )
}