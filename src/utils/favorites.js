export const favorites = {
	setToLocalStorage(arr) {
		const json = JSON.stringify(arr)

		localStorage.setItem(favorites, json)
	},

	getFromLocalStorage() {
		const favoritesList = localStorage.getItem(favorites)

		if (!favoritesList) return []
		
    return Object.values(JSON.parse(favoritesList))
	}
}