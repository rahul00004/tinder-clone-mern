import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-backend252.herokuapp.com'
})

export default instance;