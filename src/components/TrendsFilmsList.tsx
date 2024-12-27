import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFilmsTrends } from '@/redux/films-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { Pagination } from '@/components/Pagination'
import { Loader } from '@/components/shared/Loader'
import { pagesPaths } from '@/config/pagesPaths'
import { ITrendsParams } from '@/types/fetchParamsTypes'
import { ITrendsList } from '@/types/filmDataTypes'

export function TrendsFilmsList () {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { currentPage } = useParams()
  const { trendsList: films, isLoaded, error, pageCount } = useAppSelector((state) => state.films)

  useEffect(() => {
    const trendsCriteria: ITrendsParams = {
      order: 'NUM_VOTE',
      ratingFrom: 8,
      yearFrom: new Date().getFullYear() - 1,
    }

    dispatch(fetchFilmsTrends({ ...trendsCriteria, currentPage }))
  }, [dispatch, currentPage])

  function renderCards() {
    return (
      films.map((film: ITrendsList) => <FilmCard key={film.kinopoiskId} {...film} />)
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