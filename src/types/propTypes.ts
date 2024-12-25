import {
  IHomeList,
  IFilmData, 
  IFilmStaffList, 
  IFilmBoxOffice,
  IGenres
} from '@/types/filmDataTypes'

export interface IChildProps {
  children: React.ReactNode,
}

export interface IFilmInfoProp {
  filmInfo: IFilmData,
  staffInfo: IFilmStaffList[],
  boxOfficeInfo: IFilmBoxOffice[],
  filmId: number,
  rating: number,
}

export interface IFilmCardProp {
  ratingKinopoisk: number,
  rating: number,
  kinopoiskId: number,
  filmId: number,
  nameOriginal: string | null,
  nameRu: string | null,
  genres: IGenres[],
  posterUrl: string,
}

export interface IButtonProps {
  children: React.ReactNode,
  type: 'submit' | 'reset' | 'button' | undefined,
  style: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
  className?: string,
}

export interface IIconButtonProps {
  children?: React.ReactNode,
  type: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  className?: string,
}

export interface IPaginationProps {
  currentPage?: string,
  pageCount: number | null
}