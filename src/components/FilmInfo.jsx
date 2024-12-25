import {
  renderTitle,
  renderGenres,
  renderCountries,
  renderActors,
  renderDirectors,
  renderProducers,
  renderWriters,
  renderBoxOffice
} from '@/utils/helpersRender'
import { FavoriteFeat } from '@/components/FavoriteFeat'
import { SimilarFilms } from '@/components/SimilarFilms'
import { className } from '@/utils/className'

export function FilmInfo ({filmInfo, staffInfo, boxOfficeInfo, filmId, rating}) {
  const kinopoiskId = filmInfo.kinopoiskId || filmId

  const kinopoiskRatingClassName = `film__rating_kinopoisk ${className ({
    'rating_green': filmInfo.ratingKinopoisk >= 7.5 || rating >= 7.5,
    'rating_yellow': (filmInfo.ratingKinopoisk < 7.5 && filmInfo.ratingKinopoisk >= 5) || (rating < 7.5 && rating >= 5),
    'rating_orange': filmInfo.ratingKinopoisk < 5 || rating < 5,
    'rating_hidden': filmInfo.ratingKinopoisk == null && rating == null,
  })}`

  const imdbRatingClassName = `film__rating_imdb ${className ({
    'rating_hidden': filmInfo.ratingKinopoisk == null && rating == null,
  })}`

  const durationClassName = `film__rating_duration ${className ({
    'duration_hidden': filmInfo.filmLength == null && rating == null,
  })}`

  const ratingsClassName = `film__ratings ${className ({
    'film__ratings_hidden': 
    kinopoiskRatingClassName.includes('hidden') && 
    imdbRatingClassName.includes('hidden') && 
    durationClassName.includes('hidden'),
  })}`

  return (
    <div className="film">
      <div className="film__info-container_left">
        <div className="film__poster-container">
          <img className="film__poster" src={filmInfo.posterUrl} alt="poster" />
        </div>
        <div className="film__buttons">
          <FavoriteFeat kinopoiskId={kinopoiskId} />
        </div>
      </div>
      <div className="film__info-container_right">
        <p className="film__genres">{renderGenres(filmInfo)}</p>
        <h1 className="film__title">{renderTitle(filmInfo)}</h1>
        <div className={ratingsClassName}>
          <div className={kinopoiskRatingClassName}><p>{filmInfo.ratingKinopoisk}</p></div>
          <div className={imdbRatingClassName}><p>{filmInfo.ratingImdb}</p></div>
          <div className={durationClassName}><p>{filmInfo.filmLength} min</p></div>
        </div>
        <p className="film__description">{filmInfo.description}</p>
        <table className="film__info">
          <tbody>
            <tr>
              <th>Year</th>
              <td className="year">{filmInfo.year}</td>
            </tr>
            <tr>
              <th>BoxOffice</th>
              <td className="box-office">{renderBoxOffice(boxOfficeInfo)}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td className="country">{renderCountries(filmInfo)}</td>
            </tr>
            <tr>
              <th>Actors</th>
              <td className="actors">{renderActors(staffInfo)}</td>
            </tr>
            <tr>
              <th>Director</th>
              <td className="directors">{renderDirectors(staffInfo)}</td>
            </tr>
            <tr>
              <th>Producers</th>
              <td className="producers">{renderProducers(staffInfo)}</td>
            </tr>
            <tr>
              <th>Writers</th>
              <td className="writers">{renderWriters(staffInfo)}</td>
            </tr>
          </tbody>
        </table>

        <SimilarFilms kinopoiskId={kinopoiskId} />
      </div>
    </div>
  )
}