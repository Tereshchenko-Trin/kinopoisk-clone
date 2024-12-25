import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFilms } from '@/redux/films-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { Pagination } from '@/components/Pagination'
import { Loader } from '@/components/shared/Loader'
import { pagesPaths } from '@/config/pagesPaths'
import { IHomeList } from '@/types/filmDataTypes'

export function HomeFilmsList () {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { currentPage } = useParams<string>()
  const { homeList: films, isLoaded, error, pageCount } = useAppSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilms({ currentPage }))
  }, [dispatch, currentPage])

  function renderCards() {
    return (
      films.map((film: IHomeList) => <FilmCard key={film.kinopoiskId} {...film} />)
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