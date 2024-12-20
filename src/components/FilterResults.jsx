import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFilterFilms } from '@/redux/films-slice'
import { FilmCard } from '@/components/FilmCard'
import { Loader } from '@/components/Loader'
import { Pagination } from '@/components/Pagination'
import { pagesPaths } from '@/config/pagesPaths'

export function FilterResults() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentPage } = useParams()
  const { filterList: films, filterData, isLoaded, error, pageCount } = useSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilterFilms({ ...filterData, currentPage }))
  }, [dispatch, filterData, currentPage])

  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.kinopoiskId} {...film} ></FilmCard>)
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