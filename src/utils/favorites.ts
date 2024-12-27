import { IFilmData } from '@/types/filmDataTypes'

export const favorites = {
	_favoritesKey: 'favorites',

	setToLocalStorage(arr: IFilmData[]): void {
		const json = JSON.stringify(arr)

		localStorage.setItem(this._favoritesKey, json)
	},

	getFromLocalStorage(): IFilmData[] {
		const favoritesList = localStorage.getItem(this._favoritesKey)

		if (!favoritesList) return []
		
    return Object.values(JSON.parse(favoritesList))
	}
}