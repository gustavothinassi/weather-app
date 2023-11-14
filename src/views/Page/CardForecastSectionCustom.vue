<template>
        <card-forecast-custom v-for="(forecast, index) in dataForecast.slice(0, 7)" :key="forecast.dt" :forecast="forecast"
            :tomorrow="index" />
</template>
<script>
import { whaterStore } from '@/stores/wheater'
import CardForecastCustom from '../../components/Forecast/CardForecastCustom.vue'
import { storeToRefs } from 'pinia'
export default {
    components: {
        CardForecastCustom
    },
    setup () {
        const store = whaterStore()
        const { dataForecast } = storeToRefs(store)
        return {
            dataForecast
         }
    }
    
}
</script>