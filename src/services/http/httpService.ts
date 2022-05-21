import axios from 'axios';

const axiosConfig = {
    baseURL: process.env.REACT_APP_CAT_MAIN_API,
    timeout: 20000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
};

export class HttpService {
    baseAPI

    constructor() {
        this.baseAPI = axios.create(axiosConfig);
        this.baseAPI.interceptors.response.use((response) => {
            //Handle some authentication here later
            return response
        },(error) => Promise.reject(error));
    }

    async get(url: string, queryParams = {}) {
        return this.baseAPI.get(url, {params: queryParams})
    }
}
