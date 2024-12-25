import { IFilmData, IFilmBoxOffice, IFilmStaffList } from '@/types/filmDataTypes'

// from filmInfo ------------------------------------------------------------------------------------------
export function renderTitle(props: IFilmData) {
  if (props.nameRu) {
    return props.nameRu
  } else {
    return props.nameOriginal
  }
}

export function renderGenres(props: IFilmData) {
  if (!props.genres) return null

  const filmGenres = props.genres.map((item) => item.genre).join(' · ')

  return filmGenres
}

export function renderCountries(props: IFilmData) {
  if (!props.genres) return null

  const filmCountries = props.countries.map((item) => item.country).join(', ')

  return filmCountries
}

// from staffInfo ------------------------------------------------------------------------------------------
export function renderActors(props: IFilmStaffList[]) {
  const filmActorsArr = props.filter((item) => item.professionKey == 'ACTOR')
  const filmActors = filmActorsArr.map((item) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmActors
}

export function renderDirectors(props: IFilmStaffList[]) {
  const filmDirectorsArr = props.filter((item) => item.professionKey == 'DIRECTOR')
  const filmDirectors = filmDirectorsArr.map((item) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmDirectors
}

export function renderProducers(props: IFilmStaffList[]) {
  const filmProducersArr = props.filter((item) => item.professionKey == 'PRODUCER')
  const filmProducers = filmProducersArr.map((item) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmProducers
}

export function renderWriters(props: IFilmStaffList[]) {
  const filmWritersArr = props.filter((item) => item.professionKey == 'WRITER')
  const filmWriters = filmWritersArr.map((item) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmWriters
}

// from boxOfficeInfo ------------------------------------------------------------------------------------------
export function renderBoxOffice(props: IFilmBoxOffice[]) {
  if (props.length == 0) return ''

  const filmBoxOfficeWorld = props.filter((item) => item.type == 'WORLD')
  const total = +(filmBoxOfficeWorld.map((item) => item.amount).join(''))
  const currency = filmBoxOfficeWorld.map((item) => item.symbol)
  const boxOffice = `${currency}${total.toLocaleString('ru')}`

  return boxOffice
}