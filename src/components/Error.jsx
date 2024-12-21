import error from '@/assets/images/errorPage.avif'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/shared/Button'
import { pagesPaths } from '@/config/pagesPaths'

export function Error() {
  const navigate = useNavigate()

  const handleClickButtonBack = () => { navigate(pagesPaths.start) }

  return (
    <div className="error">
      <img src={error} alt="error" className="error__image"/>
      <p className="error__message">Oops... Something went wrong. Please, try again later.</p>
      <Button type="button" className="error__button" onClick={handleClickButtonBack}>Return to home page</Button>
    </div>
  )
}