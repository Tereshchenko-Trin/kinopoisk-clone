interface IPagesPaths {
  start: string,
  home: string,
  films: string,
  series: string,
  trends: string,
  new: string,
  favorites: string,
  search: string,
  filter: string,
  error: string,
  settings: string,
}

export const pagesPaths: IPagesPaths = {
  start: '/',
  home: '/main/home/1',
  films: '/main/top-films/1',
  series: '/main/top-series/1',
  trends: '/main/trends/1',
  new: '/main/new/1',
  favorites: '/main/favorites',
  search: '/main/search/1',
  filter: '/main/filter/1',
  error: '/error',
  settings: '/main/settings',
}

export function getPath(pathname: string, item: number, query: string) {
  if (pathname.includes('home')) return `/main/home/${item}`
  if (pathname.includes('top-films')) return `/main/top-films/${item}`
  if (pathname.includes('top-series')) return `/main/top-series/${item}`
  if (pathname.includes('trends')) return `/main/trends/${item}`
  if (pathname.includes('favorites')) return `/main/favorites/${item}`
  if (pathname.includes('filter')) return `/main/filter/${query}/${item}`
  if (pathname.includes('search')) return `/main/search/${query}/${item}`
}