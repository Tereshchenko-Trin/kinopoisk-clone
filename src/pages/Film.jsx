import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchFilm, fetchFilmStaff, fetchFilmBoxOffice } from '@/redux/film-slice'
import { FilmInfo } from '@/components/FilmInfo'

export function Film() {
  const dispatch = useDispatch()
  const { filmId } = useParams()
  const { data: film, staffList, boxOffice, isLoading, error } = useSelector((state) => state.film)

  useEffect(() => {
    dispatch(fetchFilm(filmId))
    dispatch(fetchFilmStaff(filmId))
    dispatch(fetchFilmBoxOffice(filmId))
  }, [filmId, dispatch])

  if (isLoading) {
		return <div>Loading</div>
	}

	if (error) {
		return <div>{error}</div>
	} 

	if (!film) {
		return <div>Film not found</div>
	}

  return (
    <>
      <FilmInfo key={film.id} filmInfo={{ ...film }} staffInfo={[ ...staffList ]} boxOfficeInfo={[ ...boxOffice ]} />
    </>
  )
}