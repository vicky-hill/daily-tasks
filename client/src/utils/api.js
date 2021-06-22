import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:7000',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.token
    }
})