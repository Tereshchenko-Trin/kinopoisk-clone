import { get } from '@/utils/client'
import { filmsEndpoint } from '@/config/api'

export const requestFilms = async (params = {}) => {
  try {
    const response = await get(filmsEndpoint, {params})

    return response.data
  } catch (error) {
    return {
      hasError: error,
      ...error
    }
  }
}