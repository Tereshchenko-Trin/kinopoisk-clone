import { get } from '@/utils/client'
import { 
  filmEndpoint,
  // filmBoxOfficeEndpoint,
  filmStaffEndpoint
} from '@/config/api'

export const requestFilm = async (kinopoiskId) => {
  try {
    const response = await get(`${filmEndpoint}${kinopoiskId}`)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      ...error
    }
  }
}

export const requestFilmBoxOffice = async () => {
  try {
    const response = await get(filmBoxOfficeEndpoint)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      ...error
    }
  }
}

export const requestFilmStaff = async () => {
  try {
    const response = await get(filmStaffEndpoint)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      ...error
    }
  }
}