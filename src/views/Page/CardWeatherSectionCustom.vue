<template>
    <card-wind :dataWheater="dataWheater" />
    <card-humidity :dataWheater="dataWheater" />
    <card-visibility :dataWheater="dataWheater" />
    <card-pressure :dataWheater="dataWheater" />
</template>
<script>
import { whaterStore } from '@/stores/wheater'
import { storeToRefs } from 'pinia'
import CardHumidity from '@/components/Weather/CardHumidity.vue'
import CardWind from '@/components/Weather/CardWind.vue'
import CardVisibility from '@/components/Weather/CardVisibility.vue'
import CardPressure from '@/components/Weather/CardPressure.vue'

export default {
        components: {
        CardHumidity,
        CardVisibility,
        CardWind,
        CardPressure
    },
    setup () {
        const store = whaterStore()
        const { dataWheater } = storeToRefs(store)
        return {
            dataWheater
         }
    }
    }
</script>