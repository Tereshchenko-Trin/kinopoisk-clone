import { Link } from 'react-router-dom'
import { IFilmCardProp } from '@/types/propTypes'
import { IGenres } from '@/types/filmDataTypes'
import { ratingClassName } from '@/utils/className'

export function FilmCard({ ratingKinopoisk, rating, kinopoiskId, filmId, nameOriginal, nameRu, genres, posterUrl }: IFilmCardProp) {
  const cardRating: number | null = ratingKinopoisk || rating
  const ratingContainerClassName = ratingClassName(cardRating, 'card__rating-container')

  const path = (kinopoiskId) ? `/main/${kinopoiskId}` : `/main/${filmId}`

  function renderTitle(name: string | null) {
    if (name) {
      return <p className="card__title">{nameOriginal}</p>
    } else {
      return <p className="card__title">{nameRu}</p>
    }
  } 

  function renderRating(ratingKinopoisk: number | null) {
    if (ratingKinopoisk) {
      return <p className="card__rating">{ratingKinopoisk}</p>
    } else {
      return <p className="card__rating">{rating}</p>
    }
  } 

  function renderGenres(genres: IGenres[]) {
    if (!genres) return null

    const filmGenres = genres.map((item: IGenres) => item.genre).join(' · ')

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