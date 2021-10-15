import useSWR from 'swr'

//carrega o cache, e depois pega a informação no banco de dados

import api from '../services/api'

export const useApi  = (url) => {
    const{data, error} = useSWR(url, async(url) => {
        const response = await api.get(url);
        return response.data
    })

    return {data, error}
}