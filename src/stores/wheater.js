import { defineStore } from 'pinia'
import services from '@/services'
import { wait } from '@/utils/timeout'

export const whaterStore = defineStore("wheater", {
    state: () => {
        return {
            coords: {
                lat: -21.1176107,
                long: -42.951723
            },
            dataWheater: [],
            dataForecast: [],
            dataCity: [],
            isUnits: false,
            isError: '',
            dates: [],
            isLoading: true,
            list: [],
            teste: {},
            grupos: [],
            grupoAtual: []
        }
    },
    getters: {
        getUnitss: (state) => state.isUnits,
        getIndex: (state) => (element) => {
          return state.dates.findIndex((item) => item === element.dt_txt.split(" ")[0])
        },
        getName: (state) => (element) => {
            return state.dataCity.find((city) => city.name.toLowerCase() === element.toLowerCase())
        }
    },
    actions: {
        async coordinatesCity(longitude, latitude){
            this.isError = ''
            this.isLoading = true
            this.dataWheater = []
            
            const { data, errors } = await services.weather.getCoordinatesCity({
                lat: latitude,
                lon: longitude
            })
            this.dataWheater = [...this.dataWheater, data ]
            this.isError = errors
            await wait(500)

            this.isLoading = false

        },

    
        async daysTemperature(longitude, latitude) {
            this.isLoading = true
            this.dataForecast = []
            this.isError = ''
            this.dates = []
            const { data, errors } = await services.forecast.getTemp({
                lat: latitude,
                lon: longitude
            })
        
           let dailyTemperatures = {}

            data.list.forEach((item) => {
                const dt_txt = item.dt_txt
                const date = dt_txt.split(' ')[0]

                if (!dailyTemperatures[date]) {
                    dailyTemperatures[date] = [item]
                } else {
                    dailyTemperatures[date] = [...dailyTemperatures[date], item]
                }
            })
           
          Object.keys(dailyTemperatures).forEach(element => {
                const daily = dailyTemperatures[element]
                this.dataForecast = [...this.dataForecast, daily[0]]
                
           })
        
            this.isError = errors
            await wait(500)

            this.isLoading = false

        },
        optionalUnits (value) {
            this.isUnits = value
        },
        setErrors(error) {
            this.isError = error
        },
        async searchCity (txt) {
            try{
                this.isError = ''
                const { data, errors } = await services.weather.getSearchCity({
                    city: txt
                })

                const cityName = this.getName(data[0].name)
                if (!cityName) {
                   this.isError = "city is alright"
                } else{
                    this.dataCity.push(data[0])
                    localStorage.setItem('aux', JSON.stringify(this.dataCity)) 
                }            

            } catch(err) {
                this.isError = "cant find city"

            }
        
        }
    }
})