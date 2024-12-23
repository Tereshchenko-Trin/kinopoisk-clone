export function normalizeFilms(films) {
  return films.map((film) => {
    return {
      ...film,
      isFavorite: false
    }
  })
}