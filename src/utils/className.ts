export function className (classes: string[]): string {
  let result = ''

  for (let key in classes) {
    if (classes[key]) {
      result += ` ${key}`
    }
  }

  return result.trim()
}