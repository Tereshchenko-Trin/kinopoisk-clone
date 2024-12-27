export function className (classes: any): string {
  let result = ''

  for (let key in classes) {
    if (classes[key]) {
      result += ` ${key}`
    }
  }

  return result.trim()
}

export function ratingClassName(rating: number | null, basicClassName: string): string {
  if(rating == null) return basicClassName += ' rating_hidden'
  if(rating >= 7.5) return basicClassName += ' rating_green'
  if(rating < 7.5 && rating >= 5) return basicClassName += ' rating_yellow'
  if(rating < 5) return basicClassName += 'rating_orange'

  return basicClassName
}