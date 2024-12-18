import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FilmCard } from '@/components/FilmCard'
import { Loader } from '@/components/Loader'

export function FilterResults() {
  const navigate = useNavigate()
  const { filterList: films, isLoaded, error } = useSelector((state) => state.filter) 

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