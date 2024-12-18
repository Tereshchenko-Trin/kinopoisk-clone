import { get } from '@/utils/client'
import { filterFilmsEndpoint } from '@/config/api'

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
