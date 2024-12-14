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

export function FilmInfo ({filmInfo, staffInfo, boxOfficeInfo}) {
  return (
    <div className="film">
      <div className="film__poster">
        <img src={filmInfo.posterUrl} alt="poster" />
      </div>
      <div className="film__buttons">
      </div>
      <div className="film__info-container">
        <p className="film__genres">{renderGenres(filmInfo)}</p>
        <h1 className="film__title">{renderTitle(filmInfo)}</h1>
        <div className="film__ratings">
          <div className="film__rating_kinopoisk">{filmInfo.ratingKinopoisk}</div>
          <div className="film__rating_imdb">{filmInfo.ratingImdb}</div>
          <div className="film__ratings_duration">{filmInfo.filmLength}</div>
        </div>
        <p className="film__description">{filmInfo.description}</p>
        <table className="film__info">
          <tbody>
            <tr>
              <td>Year</td>
              <td>{filmInfo.year}</td>
            </tr>
            <tr>
              <td>BoxOffice</td>
              <td>{renderBoxOffice(boxOfficeInfo)}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{renderCountries(filmInfo)}</td>
            </tr>
            <tr>
              <td>Actors</td>
              <td>{renderActors(staffInfo)}</td>
            </tr>
            <tr>
              <td>Director</td>
              <td>{renderDirectors(staffInfo)}</td>
            </tr>
            <tr>
              <td>Producers</td>
              <td>{renderProducers(staffInfo)}</td>
            </tr>
            <tr>
              <td>Writers</td>
              <td>{renderWriters(staffInfo)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}