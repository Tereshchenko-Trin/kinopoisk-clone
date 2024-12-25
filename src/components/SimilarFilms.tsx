import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { fetchFilmSimilar } from '@/redux/film-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { IconButton } from '@/components/shared/IconButton'
import { Loader } from '@/components/shared/Loader'
import { className } from '@/utils/className'

export function SimilarFilms({ kinopoiskId }) {
  const dispatch = useAppDispatch()
  const containerRef = useRef(null)
  const { similarList: films, isLoaded, error } = useAppSelector((state) => state.film)
  
  useEffect(() => {
    dispatch(fetchFilmSimilar(kinopoiskId))
  }, [dispatch, kinopoiskId])
  
  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.filmId} {...film}/>)
    )
  }

  const handleClickArrow = (distance) => {
    containerRef.current?.scrollBy({ left: distance, behavior: 'smooth' })
  }
  
  if (isLoaded) return <Loader />
  
  if (error || !films) return null

  const containerClassName = `similar ${className({'similar_hidden': films.length == 0 || error})}`

  return (
    <div className={containerClassName}>
      <div className="similar__header">
        <h2 className="similar__title">Recommendations</h2>
        <div className="similar__pagination">
          <IconButton type="arrowLeft" onClick={() => handleClickArrow(-300)} />
          <IconButton type="arrowRight" onClick={() => handleClickArrow(300)} />
        </div>
      </div>
      <div ref={containerRef} className="similar__container">
        {renderCards()}
      </div>
    </div>
  )
}