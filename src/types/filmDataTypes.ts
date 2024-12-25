export interface ICountry {
  country: string
}

export interface IGenres {
  genre: string
}

export interface IHomeList {
  kinopoiskId: number,
  imdbId: number | null,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  countries: ICountry [],
  genres: IGenres [],
  ratingKinopoisk: number | null,
  ratingImdb: number,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string | null,
  logoUrl: string | null,
  description: string | null,
  ratingAgeLimits: string | null,
}

export interface ITopFilmsList {
  kinopoiskId: number,
  imdbId: number | null,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  countries: ICountry [],
  genres: IGenres [],
  ratingKinopoisk: number | null,
  ratingImdb: number,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string | null,
  logoUrl: string | null,
  description: string | null,
  ratingAgeLimits: string | null,
}

export interface ITopSeriesList {
  kinopoiskId: number,
  imdbId: number | null,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  countries: ICountry [],
  genres: IGenres [],
  ratingKinopoisk: number | null,
  ratingImdb: number,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string | null,
  logoUrl: string | null,
  description: string | null,
  ratingAgeLimits: string | null,
}

export interface ITrendsList {
  kinopoiskId: number,
  imdbId: number | null,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  countries: ICountry [],
  genres: IGenres [],
  ratingKinopoisk: number | null,
  ratingImdb: number | null,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string,
}

export interface INewList {
  kinopoiskId: number,
  nameRu: string | null,
  nameEn: string | null,
  year: number,
  posterUrl: string,
  posterUrlPreview: string,
  countries: ICountry [],
  genres: IGenres [],
  duration: number,
  premiereRu: string,
}

export interface ISearchList {
  filmId: number,
  nameRu: string | null,
  nameEn: string | null,
  type: string,
  year: string,
  description: string,
  filmLength: string,
  countries: ICountry [],
  genres: IGenres [],
  rating: string,
  ratingVoteCount: number,
  posterUrl: string,
  posterUrlPreview: string,
}

export interface IFilterList {
  kinopoiskId: number,
  imdbId: number | null,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  countries: ICountry [],
  genres: IGenres [],
  ratingKinopoisk: number | null,
  ratingImdb: number | null,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string,
}

export interface IFilmData {
  kinopoiskId: number,
  kinopoiskHDId: string | null,
  imdbId: string | null,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string | null,
  logoUrl: string | null,
  reviewsCount: number,
  ratingGoodReview: number | null,
  ratingGoodReviewVoteCount: number,
  ratingKinopoisk: number | null,
  ratingKinopoiskVoteCount: number,
  ratingImdb: number | null,
  ratingImdbVoteCount: number,
  ratingFilmCritics: number | null,
  ratingFilmCriticsVoteCount: number,
  ratingAwait: number | null,
  ratingAwaitCount: number,
  ratingRfCritics: number | null,
  ratingRfCriticsVoteCount: number,
  webUrl: string,
  year: number,
  filmLength: number | null,
  slogan: string | null,
  description: string,
  shortDescription: string | null,
  editorAnnotation: string | null,
  isTicketsAvailable: boolean,
  productionStatus: string | null,
  type: string,
  ratingMpaa: string | null,
  ratingAgeLimits: string | null,
  hasImax: boolean,
  has3D: boolean,
  lastSync: string,
  countries: ICountry [],
  genres: IGenres [],
  startYear: number | null,
  endYear: number | null,
  serial: boolean,
  shortFilm: boolean,
  completed: boolean,
}

export interface IFilmStaffList {
  staffId: number,
  nameRu: string,
  nameEn: string,
  description: string | null,
  posterUrl: string,
  professionText: string,
  professionKey: string,
}

export interface IFilmBoxOffice {
  type: string,
  amount: number | null,
  currencyCode: string,
  name: string,
  symbol: string,
}

export interface IFilmSimilarList {
  filmId: number,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string | null,
  posterUrl: string,
  posterUrlPreview: string,
  relationType: string,
}