import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function SearchForm() {
	const navigate = useNavigate()
	const { query: queryParam } = useParams()
	const [query, setQuery] = useState<string>(queryParam)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		const encodedQuery: string = encodeURIComponent(query)
		navigate(`/main/search/${encodedQuery}/1`)
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