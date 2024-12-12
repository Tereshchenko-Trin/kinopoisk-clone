export function FilmInfo (props) {
  function renderTitle(props) {
    if (props.nameOriginal) {
      return <h1 className="film__title">{props.nameOriginal}</h1>
    } else {
      return <h1 className="film__title">{props.nameRu}</h1>
    }
  }

  function renderGenres(props) {
    if (!props.genres) return null

    const filmGenres = props.genres.map((item) => item.genre).join(' · ')

    return <p className="film__genres">{filmGenres}</p>
  }

  return (
    <div className="film">
      <div className="film__poster">
        <img src={props.posterUrl} alt="poster" />
      </div>
      <div className="film__buttons">
      </div>
      <div className="film__info-container">
        {renderGenres(props)}
        {renderTitle(props)}
        <div className="film__ratings">
          <div className="film__rating_kinopoisk">{props.ratingKinopoisk}</div>
          <div className="film__rating_imdb">{props.ratingImdb}</div>
          <div className="film__ratings_duration">{props.filmLength}</div>
        </div>
        <p className="film__description">{props.description}</p>
        <table className="film__info">
          <tbody>
            <tr>
              <td>Year</td>
              <td>{props.year}</td>
            </tr>
            <tr>
              <td>Released</td>
              <td></td>
            </tr>
            <tr>
              <td>BoxOffice</td>
              <td></td>
            </tr>
            <tr>
              <td>Country</td>
              <td></td>
            </tr>
            <tr>
              <td>Production</td>
              <td></td>
            </tr>
            <tr>
              <td>Actors</td>
              <td></td>
            </tr>
            <tr>
              <td>Director</td>
              <td></td>
            </tr>
            <tr>
              <td>Writers</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}