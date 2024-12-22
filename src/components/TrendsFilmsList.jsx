import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFilmsTrends } from '@/redux/films-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { Pagination } from '@/components/Pagination'
import { Loader } from '@/components/shared/Loader'
import { pagesPaths } from '@/config/pagesPaths'

export function TrendsFilmsList () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentPage } = useParams()
  const { trendsList: films, isLoaded, error, pageCount } = useSelector((state) => state.films)

  useEffect(() => {
    const trendsCriteria = {
      order: 'NUM_VOTE',
      ratingFrom: 8,
      yearFrom: new Date().getFullYear() - 1,
    }

    dispatch(fetchFilmsTrends({ ...trendsCriteria, currentPage }))
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