export function Card(props) {
  function renderTitle(props) {
    if (props.nameOriginal) {
      return <p className="card__title">{props.nameOriginal}</p>
    } else {
      return <p className="card__title">{props.nameRu}</p>
    }
  } 

  return (
    <div className="card">
      <div className="card__image">
        <div className="card__rating">{props.ratingKinopoisk}</div>
        <img src={props.posterUrl} alt="poster" />
      </div>
      <div className="card__content">
        {renderTitle(props)}
        {/* <p className="card__">{props.genres}</p> */}
      </div>
    </div>
  )
}