import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilmsSearch } from '@/redux/films-slice'
import { FilmCard } from '@/components/FilmCard'
import { Loader } from '@/components/Loader'
import { Pagination } from '@/components/Pagination'
import { pagesPaths } from '@/config/pagesPaths'

export function SearchResults () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { query, currentPage } = useParams()
  const { searchList: films, isLoaded, error, pageCount } = useSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilmsSearch({ keyword: query, currentPage }))
    console.log({query})
  }, [dispatch, query, currentPage])

  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.filmId} {...film} ></FilmCard>)
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