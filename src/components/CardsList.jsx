import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from '@/redux/films-slice'
import { Card } from '@/components/Card'

export function CardsList () {
  const dispatch = useDispatch()
  const { list: films, isLoaded, error } = useSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilms())
    console.log('dispatch')
  }, [dispatch])

  function renderCards() {
    return (
      films.map((film) => <Card key={film.kinopoiskId} {...film} ></Card>)
    )
  }

  if (isLoaded) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    )
  }

  if (error) {
    return <Navigate to="/error" />
  }

  if (films.length == 0) {
    return <div>No films</div>
  }

  return (
    <div className="cards">
      <div className="cards__container">
        {renderCards()}
      </div>
    </div>
  )
}