import error from '@/assets/images/errorPage.avif'

export function Error() {
  return (
    <div className="error">
      <img src={error} alt="error" className="error__image"/>
      <p className="error__message">Oops... Something went wrong. Please, try again later.</p>
    </div>
  )
}