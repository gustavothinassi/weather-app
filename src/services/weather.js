export default httpClient => ({
    getCity: async({city }) => {
        const response = await httpClient.get(`/data/2.5/weather?q=${city}&units=metric&appid=e920d87ad8a741b2e9c693a7d1e336a7&lang=en`, {
           city
        })
        let errors = null

        if(!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }
        return {
            data: response.data,
            errors
        }
    },
    getCoordinatesCity: async({lat, lon}) => {
        const response = await httpClient.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e920d87ad8a741b2e9c693a7d1e336a7&lang=en`, {
            lat,
            lon
        })
        let errors = null

        if(!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }
        return {
            data: response.data,
            errors
        }
    },
    getSearchCity: async({city}) => {
        const response = await httpClient.get(`/geo/1.0/direct?q=${city}&limit=1&units=metric&appid=e920d87ad8a741b2e9c693a7d1e336a7&lang=en`, {
            city
        })
        let errors = null

        if(!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }
        return {
            data: response.data,
            errors
        }
    }
})