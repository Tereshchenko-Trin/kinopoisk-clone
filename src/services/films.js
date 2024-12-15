import { get } from '@/utils/client'
import { filmsEndpoint, filmsSearchEndpoint } from '@/config/api'

export const requestFilms = async (params = {}) => {
  try {
    const response = await get(filmsEndpoint, {params})

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}

export const requestFilmsSearch = async (params = {}) => {
  try {
    const response = await get(filmsSearchEndpoint, {params})

    return response.data
  } catch (error) {
    console.log(error.message)
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}

