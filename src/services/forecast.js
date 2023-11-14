export default httpClient => ({
    getTemp: async({lat, lon}) => {
        const response = await httpClient.get(`/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=e920d87ad8a741b2e9c693a7d1e336a7&lang=en`, {})
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