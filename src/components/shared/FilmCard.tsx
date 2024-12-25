import { Link } from 'react-router-dom'
import { className } from '@/utils/className'
import { IFilmCardProp } from '@/types/propTypes'
import { IGenres } from '@/types/filmDataTypes'

export function FilmCard({ ratingKinopoisk, rating, kinopoiskId, filmId, nameOriginal, nameRu, genres, posterUrl }: IFilmCardProp) {
  const ratingContainerClassName = `card__rating-container ${className ({
    'card__rating-container_green': ratingKinopoisk >= 7.5 || rating >= 7.5,
    'card__rating-container_yellow': (ratingKinopoisk < 7.5 && ratingKinopoisk >= 5) || (rating < 7.5 && rating >= 5),
    'card__rating-container_orange': ratingKinopoisk < 5 || rating < 5,
    'card__rating-container_hidden': ratingKinopoisk == null && rating == null,
  })}`

  const path = (kinopoiskId) ? `/main/${kinopoiskId}` : `/main/${filmId}`

  function renderTitle(name: string | null) {
    if (name) {
      return <p className="card__title">{nameOriginal}</p>
    } else {
      return <p className="card__title">{nameRu}</p>
    }
  } 

  function renderRating(ratingKinopoisk: number) {
    if (ratingKinopoisk) {
      return <p className="card__rating">{ratingKinopoisk}</p>
    } else {
      return <p className="card__rating">{rating}</p>
    }
  } 

  function renderGenres(genres: IGenres[]) {
    if (!genres) return null

    const filmGenres = genres.map((item) => item.genre).join(' · ')

    return <p className="card__genres">{filmGenres}</p>
  }

  return (
    <Link to={path}>
      <div className="card">
        <div className="card__poster">
          <div className={ratingContainerClassName}>
            {renderRating(ratingKinopoisk)}
          </div>
          <img className="card__image" src={posterUrl} alt="poster" />
        </div>
        <div className="card__text">
          <div className="card__title-container">
            {renderTitle(nameOriginal)}
          </div>
          <div className="card__genres-container">
            {renderGenres(genres)}
          </div>
        </div>
      </div>
    </Link>
  )
}