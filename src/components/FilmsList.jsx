import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFilms } from '@/redux/films-slice'
import { FilmCard } from '@/components/FilmCard'
import { Loader } from '@/components/Loader'

export function FilmsList () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { list: films, isLoaded, error } = useSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch])

  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.kinopoiskId} {...film} ></FilmCard>)
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