import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilmsSearch } from '@/redux/films-slice'
import { Card } from '@/components/Card'

export function SearchResults () {
  const dispatch = useDispatch()
  const { query } = useParams()
  const { searchList: films, isLoaded, error } = useSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilmsSearch({ keyword: query }))
  }, [dispatch, query])

  function renderCards() {
    return (
      films.map((film) => <Card key={film.filmId} {...film} ></Card>)
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