import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchFilm, fetchFilmStaff, fetchFilmBoxOffice } from '@/redux/film-slice'
import { FilmInfo } from '@/components/FilmInfo'
import { Loader } from '@/components/Loader'
import { pagesPaths } from '@/config/pagesPaths'

export function Film() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { filmId } = useParams()
  const { data: film, staffList, boxOffice, isLoading, error } = useSelector((state) => state.film)

  useEffect(() => {
    dispatch(fetchFilm(filmId))
    dispatch(fetchFilmStaff({ filmId }))
    dispatch(fetchFilmBoxOffice(filmId))
  }, [filmId, dispatch])

  if (isLoading) return <Loader />

  if (error) navigate(pagesPaths.error)

  if (!film) return <div>Film not found</div>

  return (
    <>
      <FilmInfo key={film.id} filmInfo={{ ...film }} staffInfo={[ ...staffList ]} boxOfficeInfo={[ ...boxOffice ]} />
    </>
  )
}