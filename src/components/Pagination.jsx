import { NavLink, useLocation, useParams } from 'react-router-dom'
import { buildeShemePagination } from '@/utils/buildShemePagination'
import { getPath } from '@/config/pagesPaths'

export function Pagination({ currentPage, pageCount }) {
  const { pathname } = useLocation()
  const { query } = useParams()

  function renderPaginationItems() {
		const scheme = buildeShemePagination(currentPage, pageCount)

    if(scheme == null) return null

		return scheme.map((item, index) => {
			return (
				<li className="pagination__item" key={index}>
          {item == '...' ?
            <span className="pagination__link">...</span> :
            <NavLink className="pagination__link" to={getPath(pathname, item, query)}>{item}</NavLink>
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