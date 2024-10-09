import axios from "axios";
const getToken = localStorage.getItem('token')


const ApiClient = axios.create({
    baseURL: 'https://sandbox.api.halalwealth.co/services/',
    headers: {
        'Content-Type' : 'application/json'
    }
})

ApiClient.interceptors.request.use(
    (config) => {
        const token = getToken;

        if(token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default ApiClient;