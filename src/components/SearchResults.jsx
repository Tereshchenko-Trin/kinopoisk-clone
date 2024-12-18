import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilmsSearch } from '@/redux/films-slice'
import { FilmCard } from '@/components/FilmCard'
import { Loader } from '@/components/Loader'

export function SearchResults () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { query } = useParams()
  const { searchList: films, isLoaded, error } = useSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilmsSearch({ keyword: query }))
  }, [dispatch, query])

  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.filmId} {...film} ></FilmCard>)
    )
  }

  if (isLoaded) return <Loader />

  if (error) navigate('/error')

  if (films == undefined) return <div>No films</div>

  return (
    <div className="cards">
      <div className="cards__container">
        {renderCards()}
      </div>
    </div>
  )
}