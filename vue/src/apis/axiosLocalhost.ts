import axios from "axios";


const axiosLocalhost = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 3000
})

export default axiosLocalhost