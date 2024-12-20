import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function SearchForm() {
	const navigate = useNavigate()
	const { query: queryParam } = useParams()
	const [query, setQuery] = useState(queryParam)

	const handleChange = (event) => {
		setQuery(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const encodedQuery = encodeURIComponent(query)
		navigate(`/home/search/${encodedQuery}/`)
	}

	return (
		<form className="search" onSubmit={handleSubmit}>
			<div className="search__area">
				<label htmlFor="search" />
				<input
				type="search"
				className="search__input"
				id="search"
				value={query || ''}
				onChange={handleChange}
				placeholder="Search..."></input>
			</div>
		</form>
	)
}