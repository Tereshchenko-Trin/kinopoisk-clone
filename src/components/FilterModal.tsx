import { useAppSelector, useAppDispatch } from '@/hooks/useStore'
import { useEffect } from 'react'
import { hideFilterModal } from '@/redux/films-slice'
import { useRef } from 'react'
import { FilterForm } from '@/components/FilterForm'
import { IconButton } from '@/components/shared/IconButton'

export function FilterModal() {
  const dispatch = useAppDispatch()
  const filterModalRef = useRef<HTMLDivElement>(null)
  const { isShownFilterModal } = useAppSelector((state) => state.films)

  const onClose = () => { dispatch(hideFilterModal()) }

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }
  
  const onClickOutside = (event: MouseEvent | TouchEvent) => {
    if (filterModalRef.current && !filterModalRef.current.contains(event.target as Node)) onClose()
  }

  useEffect(() => {
    if(isShownFilterModal) {
      document.addEventListener('keydown', onKeydown)
      document.addEventListener('mousedown', onClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', onKeydown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [isShownFilterModal, onClose])

  if (!isShownFilterModal) return null

  return (
    <div className="filter-modal" ref={filterModalRef} onClick={onClose}>
      <div className="filter-modal__menu" onClick={event => event.stopPropagation()}>
        <div className="filter-modal__header">
          <h2 className="filter-modal__title">Filters</h2>
          <IconButton type="close" className="filter-modal__button" onClick={() => onClose()}></IconButton>
        </div>

        <FilterForm />
      </div>
    </div>
  )
}