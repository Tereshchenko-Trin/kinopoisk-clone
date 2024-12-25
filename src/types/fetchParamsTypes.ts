export interface ITopFilmsParams {
  type: string,
}

export interface ITopSeriesParams {
  type: string,
}

export interface ITrendsParams {
  order: string,
  ratingFrom: number,
  yearFrom: number,
}

export interface INewFilmsParams {
  year: number,
  month: string,
}