import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/useStore'
import { setFilterFormData } from '@/redux/films-slice'
import { Button } from '@/components/shared/Button'
import { IFilterData } from '@/types/IFilterData'

export function FilterForm () {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm<IFilterData>()

	const onSubmit: SubmitHandler<IFilterData> = (data) => {
    dispatch(setFilterFormData(data))
    
    const query = new URLSearchParams(data).toString()

		navigate(`/main/filter/${query}/1`)
	}

  return (
    <form className="filter" onSubmit={handleSubmit(onSubmit)}>

      <div className="col-6">
        <label className="form-label" htmlFor="order" >Sort by</label>
        <select className="form-control" { ...register('order')} >
          <option value="RATING">Rating</option>
          <option value="YEAR">Year</option>
          <option value="NUM_VOTE">Vote</option>
        </select>
      </div>

      <div className="col-6">
        <label className="form-label" htmlFor="type" >Type</label>
        <select className="form-control" { ...register('type')} >
          <option value="ALL">All</option>
          <option value="FILM">Film</option>
          <option value="TV_SHOW">TV show</option>
          <option value="TV_SERIES">TV series</option>
          <option value="MINI_SERIES">Mini series</option>
        </select>
      </div>

      <div className="col-6">
        <label className="form-label" htmlFor="keyword">Full or short movie name</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Your text"
          maxLength={50}
          { ...register('keyword')}
        />
      </div>

      <div className="form-row d-flex mb-3">
        <div className="col">
          <label className="form-label" htmlFor="ratingFrom">Rating</label>
          <input 
            type="number"
            className="form-control"
            placeholder="From"
            defaultValue={0}
            min={0}
            max={10}
            step={0.1}
            { ...register('ratingFrom')}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="ratingTo" />
          <input 
            type="number" 
            id="ratingTo" 
            className="form-control" 
            placeholder="To" 
            defaultValue={10} 
            min={0} 
            max={10} 
            step={0.1} 
            { ...register('ratingTo')} 
          />
        </div>
      </div>

    <div className="form-row d-flex mb-3">
      <div className="col">
        <label className="form-label" htmlFor="ratingFrom">Years</label>
        <input 
          type="number" 
          id="yearFrom" 
          className="form-control" 
          placeholder="From" 
          defaultValue={1895} 
          min={1895} 
          max={new Date().getFullYear()} 
          step={1} 
          { ...register('yearFrom')} 
        />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="yearTo"></label>
        <input 
          type="number" 
          id="yearTo" 
          className="form-control" 
          placeholder="To" 
          defaultValue={new Date().getFullYear()} 
          min={1895} 
          max={new Date().getFullYear()} 
          step={1} 
          { ...register('yearTo')} 
        />
      </div>
    </div>

    <div className="d-flex">
      <Button type="reset" style="secondary">Clear filter</Button>
      <Button type="submit" style="primary">Show results</Button>
    </div>
  </form>
  )
}