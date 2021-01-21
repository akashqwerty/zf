import axios from 'axios'
import baseApi from './baseAPI/index'
import endpoints from './baseAPI/index'

export const api = (payload) => {
    const config = {}
    config.method = payload.method
    config.url = payload.url
    if(payload.data !== undefined) {
        config.data = payload.data
    }
    axios(config)
        .then(function (response) {
            console.log("resp", response)
          return response
        })
    // can add global error handling for APIs here with interceptors
};