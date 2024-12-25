import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FilmCard } from '@/components/shared/FilmCard'
import { Pagination } from '@/components/Pagination'
import { Loader } from '@/components/shared/Loader'
import { pagesPaths } from '@/config/pagesPaths'

export function FavoritesFilmsList () {
  const navigate = useNavigate()
  // const { currentPage } = useParams()
  const { favoritesList: films, isLoaded, error } = useSelector((state) => state.film)

  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.kinopoiskId} {...film} />)
    )
  }

  if (isLoaded) return <Loader />

  if (error) navigate(pagesPaths.error)

  if (films == undefined || films == null || films.length == 0) return <div>No films</div>

  return (
    <div className="cards">
      <div className="cards__container">
        {renderCards()}
      </div>

      {/* <div className="pagination-container">
        <Pagination currentPage={currentPage} pageCount={pageCount} />
      </div> */}
    </div>
  )
}