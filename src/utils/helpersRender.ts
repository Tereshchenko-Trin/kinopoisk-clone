import { IFilmData, IFilmBoxOffice, IFilmStaffList, ICountry, IGenres } from '@/types/filmDataTypes'

// from filmInfo ------------------------------------------------------------------------------------------
export function renderTitle(props: IFilmData): string | null {
  if (props.nameRu) {
    return props.nameRu
  } else {
    return props.nameOriginal
  }
}

export function renderGenres(props: IFilmData): string | null {
  if (!props.genres) return null

  const filmGenres = props.genres.map((item: IGenres) => item.genre).join(' · ')

  return filmGenres
}

export function renderCountries(props: IFilmData): string | null {
  if (!props.genres) return null

  const filmCountries = props.countries.map((item: ICountry) => item.country).join(', ')

  return filmCountries
}

// from staffInfo ------------------------------------------------------------------------------------------
export function renderActors(props: IFilmStaffList[]): string {
  const filmActorsArr = props.filter((item: IFilmStaffList) => item.professionKey == 'ACTOR')
  const filmActors = filmActorsArr.map((item: IFilmStaffList) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmActors
}

export function renderDirectors(props: IFilmStaffList[]): string {
  const filmDirectorsArr = props.filter((item: IFilmStaffList) => item.professionKey == 'DIRECTOR')
  const filmDirectors = filmDirectorsArr.map((item: IFilmStaffList) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmDirectors
}

export function renderProducers(props: IFilmStaffList[]): string {
  const filmProducersArr = props.filter((item: IFilmStaffList) => item.professionKey == 'PRODUCER')
  const filmProducers = filmProducersArr.map((item: IFilmStaffList) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmProducers
}

export function renderWriters(props: IFilmStaffList[]): string {
  const filmWritersArr = props.filter((item: IFilmStaffList) => item.professionKey == 'WRITER')
  const filmWriters = filmWritersArr.map((item: IFilmStaffList) => item.nameRu ? item.nameRu : item.nameEn).join(', ')

  return filmWriters
}

// from boxOfficeInfo ------------------------------------------------------------------------------------------
export function renderBoxOffice(props: IFilmBoxOffice[]): string {
  if (props.length == 0) return ''

  const filmBoxOfficeWorld = props.filter((item: IFilmBoxOffice) => item.type == 'WORLD')
  const total = +(filmBoxOfficeWorld.map((item: IFilmBoxOffice) => item.amount).join(''))
  const currency = filmBoxOfficeWorld.map((item: IFilmBoxOffice) => item.symbol)
  const boxOffice = `${currency}${total.toLocaleString('ru')}`

  return boxOffice
}