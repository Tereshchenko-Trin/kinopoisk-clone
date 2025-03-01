import { get } from '@/utils/client'
import { 
  filmEndpoint,
  filmBoxOfficeEndpoint,
  filmStaffEndpoint,
  filmSimilarEndpoint
} from '@/config/api'

export const requestFilm = async (kinopoiskId: number) => {
  try {
    const response = await get(`${filmEndpoint}${kinopoiskId}`)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}

export const requestFilmStaff = async (params = {}) => {
  try {
    const response = await get(filmStaffEndpoint, { params })

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}

export const requestFilmBoxOffice = async (kinopoiskId: number) => {
  try {
    const response = await get(`${filmBoxOfficeEndpoint}${kinopoiskId}/box_office`)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}

export const requestFilmSimilar = async (kinopoiskId: number) => {
  try {
    const response = await get(`${filmSimilarEndpoint}${kinopoiskId}/similars`)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}