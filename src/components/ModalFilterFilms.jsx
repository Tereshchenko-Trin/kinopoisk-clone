import { useSelector, useDispatch } from 'react-redux'
import { hideFilterModal } from '@/redux/filter-slice'
import { Modal } from '@/components/shared/Modal'
import { FilterForm } from '@/components/FilterForm'

export function ModalFilterFilms() {
	const dispatch = useDispatch()
	const { isShownModal } = useSelector(state => state.filter)

	const handleClose = () => {
		dispatch(hideFilterModal())
	}

  function RenderModalBody() {
    return <FilterForm />
  }

	return (
		<Modal title="Filter" isShown={isShownModal} onClose={handleClose}>
			{RenderModalBody()}
		</Modal>
	)
}