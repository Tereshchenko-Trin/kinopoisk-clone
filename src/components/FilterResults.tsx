import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFilmsFilter } from '@/redux/films-slice'
import { FilmCard } from '@/components/shared/FilmCard'
import { Loader } from '@/components/shared/Loader'
import { Pagination } from '@/components/Pagination'
import { pagesPaths } from '@/config/pagesPaths'
import { IFilterList } from '@/types/filmDataTypes'

export function FilterResults() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { currentPage } = useParams<string>()
  const { filterList: films, filterData, isLoaded, error, pageCount } = useAppSelector((state) => state.films)

  useEffect(() => {
    dispatch(fetchFilmsFilter({ ...filterData, currentPage }))
  }, [dispatch, filterData, currentPage])

  function renderCards() {
    return (
      films.map((film: IFilterList) => <FilmCard key={film.kinopoiskId} {...film} ></FilmCard>)
    )
  }

  if (isLoaded) return <Loader />

  if (error) navigate(pagesPaths.error)

  if (films == undefined) return <div>No films</div>

  return (
    <div className="cards">
      <div className="cards__container">
        {renderCards()}
      </div>

      <div className="pagination-container">
        <Pagination currentPage={currentPage} pageCount={pageCount} />
      </div>
    </div>
  )
}