export const pagesPaths = {
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

export function getPath(location, item, query) {
  if (location.pathname.includes('home')) return `/main/home/${item}`
  if (location.pathname.includes('top-films')) return `/main/top-films/${item}`
  if (location.pathname.includes('top-series')) return `/main/top-series/${item}`
  if (location.pathname.includes('trends')) return `/main/trends/${item}`
  if (location.pathname.includes('favorites')) return `/main/favorites/${item}`
  if (location.pathname.includes('filter')) return `/main/filter/${query}/${item}`
  if (location.pathname.includes('search')) return `/main/search/${query}/${item}`
}