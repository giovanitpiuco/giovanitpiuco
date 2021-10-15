import axios from 'axios'

const api = axios.create({
    baseURL: '/api'
})

export default api

/*para nao chamar toda a vez;

passa somente o restante da url*/