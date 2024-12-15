import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IconButton } from '@/components/shared/IconButton'

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
		navigate(`/films/search/${encodedQuery}/1`)
	}

	return (
		<form className="search" onSubmit={handleSubmit}>
			<div className="search__area">
				<label htmlFor="search"></label>
				<input
				type="search"
				className="search__input"
				id="search"
				value={query}
				onChange={handleChange}
				placeholder="Search..."></input>
			</div>
      <IconButton type="filter" />
		</form>
	)
}