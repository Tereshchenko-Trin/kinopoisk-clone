import { IFilmData } from '@/types/filmDataTypes'

export const favorites = {
	setToLocalStorage(arr: IFilmData[]): void {
		const json = JSON.stringify(arr)

		localStorage.setItem(favorites, json)
	},

	getFromLocalStorage(): IFilmData[] {
		const favoritesList = localStorage.getItem(favorites)

		if (!favoritesList) return []
		
    return Object.values(JSON.parse(favoritesList))
	}
}