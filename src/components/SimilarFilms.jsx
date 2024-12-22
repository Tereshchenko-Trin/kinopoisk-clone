import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilmSimilar } from '@/redux/film-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { IconButton } from '@/components/shared/IconButton'
import { Loader } from '@/components/shared/Loader'
import { className } from '@/utils/className'

export function SimilarFilms({ kinopoiskId }) {
  const dispatch = useDispatch()
  const containerRef = useRef(null)
  const [ canScrollLeft, setCanScrollLeft ] = useState(false)
  const [ canScrollRight, setCanScrollRight ] = useState(false)
  const { similarList: films, isLoaded, error } = useSelector((state) => state.film)
  
  useEffect(() => {
    dispatch(fetchFilmSimilar(kinopoiskId))
  }, [dispatch, kinopoiskId])
  
  function renderCards() {
    return (
      films.map((film) => <FilmCard key={film.filmId} {...film}/>)
    )
  }

  function checkForScrollPosition() {
    const {current} = containerRef
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth)
    }
  }

  const handleClickArrow = (distance) => {
    containerRef.current?.scrollBy({ left: distance, behavior: 'smooth' })
  }

  useEffect(() => {
    const {current} = containerRef
    checkForScrollPosition(current)
    current?.addEventListener('scroll', checkForScrollPosition(current))

    return () => {
      current?.removeEventListener('scroll', checkForScrollPosition())
    }
  }, [])
  
  if (isLoaded) return <Loader />
  
  if (error || !films) return null

  const containerClassName = `similar ${className({'similar_hidden': films.length == 0 || error})}`

  return (
    <div className={containerClassName}>
      <div className="similar__header">
        <h2 className="similar__title">Recommendations</h2>
        <div className="similar__pagination">
          <IconButton type="arrowLeft" disabled={!canScrollLeft} onClick={() => handleClickArrow(-300)} />
          <IconButton type="arrowRight" disabled={!canScrollRight} onClick={() => handleClickArrow(300)} />
        </div>
      </div>
      <div ref={containerRef} className="similar__container">
        {renderCards()}
      </div>
    </div>
  )
}