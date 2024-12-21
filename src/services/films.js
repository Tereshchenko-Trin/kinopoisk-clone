import { get } from '@/utils/client'
import { filmsEndpoint, filmsSearchEndpoint, filterFilmsEndpoint } from '@/config/api'

export const requestFilms = async (params = {}) => {
  try {
    const response = await get(filmsEndpoint, { params })

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
    const response = await get(filmsSearchEndpoint, { params })

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}

export const requestFilterFilms = async (params = {}) => {
  try {
    const response = await get(filterFilmsEndpoint, { params })

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}