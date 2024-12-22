import { NavLink, useLocation, useParams } from 'react-router-dom'
import { buildeShemePagination } from '@/utils/buildShemePagination'

export function Pagination({ currentPage, pageCount }) {
  const location = useLocation()
  const { query } = useParams()

  function getPath(location, item) {
    if (location.pathname.includes('films')) return `/home/films/${item}`
    if (location.pathname.includes('trends')) return `/home/trends/${item}`
    if (location.pathname.includes('favorites')) return `/home/favorites/${item}`
    if (location.pathname.includes('filter')) return `/home/filter/${query}/${item}`
    if (location.pathname.includes('search')) return `/home/search/${query}/${item}`
  }

  function renderPaginationItems() {
		const scheme = buildeShemePagination(currentPage, pageCount)

    if(scheme == null) return null

		return scheme.map((item, index) => {
			return (
				<li className="pagination__item" key={index}>
          {item == '...' ?
            <span className="pagination__link">...</span> :
            <NavLink className="pagination__link" to={getPath(location, item)}>{item}</NavLink>
          }
        </li>
			)
		})
	}

	function renderPagination() {
		return (
			<nav>
				<ul className="pagination">
					{renderPaginationItems()}
				</ul>
			</nav>
		)
	}

  return (
    <>
      {renderPagination()}
    </>
  )
}