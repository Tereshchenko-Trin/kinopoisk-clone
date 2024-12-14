import { Link } from 'react-router-dom'
import { className } from '@/utils/className'

export function Card(props) {
  const ratingContainerClassName = `card__rating-container ${className ({
    'card__rating-container_green': props.ratingKinopoisk >= 7.5,
    'card__rating-container_yellow': props.ratingKinopoisk < 7.5 && props.ratingKinopoisk >= 5,
    'card__rating-container_orange': props.ratingKinopoisk < 5,
  })}`

  function renderTitle(props) {
    if (props.nameOriginal) {
      return <p className="card__title">{props.nameOriginal}</p>
    } else {
      return <p className="card__title">{props.nameRu}</p>
    }
  } 

  function renderGenres(props) {
    if (!props.genres) return null

    const filmGenres = props.genres.map((item) => item.genre).join(' · ')

    return <p className="card__genres">{filmGenres}</p>
  } 

  return (
    <Link to={`/home/${props.kinopoiskId}`}>
      <div className="card">
        <div className="card__poster">
          <div className={ratingContainerClassName}
          >
            <p className="card__rating">{props.ratingKinopoisk}</p>
          </div>
          <img className="card__image" src={props.posterUrl} alt="poster" />
        </div>
        <div className="card__text">
          <div className="card__title-container">
            {renderTitle(props)}
          </div>
          <div className="card__genres-container">
            {renderGenres(props)}
          </div>
        </div>
      </div>
    </Link>
  )
}