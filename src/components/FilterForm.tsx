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
    <form
      className="filter"
      onSubmit={handleSubmit(onSubmit)}
      onReset={reset}>

      <div className="filter__field">
        <label className="filter__label" htmlFor="order" >Sort by</label>
        <select className="filter__select" { ...register('order')} >
          <option value="RATING">Rating</option>
          <option value="YEAR">Year</option>
          <option value="NUM_VOTE">Vote</option>
        </select>
      </div>

      <div className="filter__field">
        <label className="filter__label" htmlFor="type" >Type</label>
        <select className="filter__select" { ...register('type')} >
          <option value="ALL">All</option>
          <option value="FILM">Film</option>
          <option value="TV_SHOW">TV show</option>
          <option value="TV_SERIES">TV series</option>
          <option value="MINI_SERIES">Mini series</option>
        </select>
      </div>

      <div className="filter__field">
        <label className="filter__label" htmlFor="keyword">Full or short movie name</label>
        <input 
          type="text"
          className="filter__input"
          placeholder="Your text"
          maxLength={50}
          { ...register('keyword')}
        />
      </div>

      <div className="filter__fields-container">
        <div className="filter__field">
          <label className="filter__label" htmlFor="ratingFrom">Rating</label>
          <input 
            type="number"
            className="filter__input filter__input_from"
            placeholder="From"
            defaultValue={0}
            min={0}
            max={10}
            step={0.1}
            { ...register('ratingFrom')}
          />
        </div>
        <div className="filter__field">
          <label className="filter__label" htmlFor="ratingTo" />
          <input 
            type="number" 
            id="ratingTo" 
            className="filter__input filter__input_to" 
            placeholder="To" 
            defaultValue={10} 
            min={0} 
            max={10} 
            step={0.1} 
            { ...register('ratingTo')} 
          />
        </div>
      </div>

    <div className="filter__fields-container">
      <div className="filter__field">
        <label className="filter__label" htmlFor="ratingFrom">Years</label>
        <input 
          type="number" 
          id="yearFrom" 
          className="filter__input filter__input_from" 
          placeholder="From" 
          defaultValue={1895} 
          min={1895} 
          max={new Date().getFullYear()} 
          step={1} 
          { ...register('yearFrom')} 
        />
      </div>
      <div className="filter__field">
        <label className="filter__label" htmlFor="yearTo"></label>
        <input 
          type="number" 
          id="yearTo" 
          className="filter__input filter__input_to" 
          placeholder="To" 
          defaultValue={new Date().getFullYear()} 
          min={1895} 
          max={new Date().getFullYear()} 
          step={1} 
          { ...register('yearTo')} 
        />
      </div>
    </div>

    <div className="filter__buttons-container">
      <Button type="reset" style="secondary">Clear filter</Button>
      <Button type="submit" style="primary">Show results</Button>
    </div>
  </form>
  )
}