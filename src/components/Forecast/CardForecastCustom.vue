<template>
    <div class="grid place-items-center text-center p-3 rounded text-white  bg-brand-main">
        <h3 class="text-white text-base font-base inline-block align-middle">{{ formatDate }}</h3>
       <div class="w-12 h-14 mt-4">
            <card-forest-icon-custom 
            :icon="state.description"
            />
        </div>
       
       <div class="mt-12 flex justify-between space-x-4" v-if="!units">
         <h6 class="text-base" >{{ Math.floor((forecast.main.temp_min)) + '°C'}}</h6>
         <h6 class="text-base" >{{ Math.ceil((forecast.main.temp_max)) + '°C'}}</h6>     
        </div>
        <div class="mt-12 flex justify-between space-x-4" v-else>
         <h6 class="text-base" >{{ Math.floor((forecast.main.temp_min * 9/5) + 32) + '°F'}}</h6>
         <h6 class="text-base" >{{ Math.ceil((forecast.main.temp_max * 9/5) + 32) + '°F'}}</h6>  
        </div>
    </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { whaterStore } from '../../stores/wheater'
import { storeToRefs } from 'pinia'
import {getDataFormat} from '../../utils/date'
import cardForestIconCustom from './CardForestIconCustom.vue'


export default {
   props: {
        tomorrow: { type: Number, required: true },
        forecast: { type: Object, required: true }
    },
    components: {
        cardForestIconCustom
    },
    setup(props) {
       
        const store = whaterStore()
        const { isUnits } = storeToRefs(store)

        const state = reactive ({
            dt: props.forecast.dt,
            temp_max: props.forecast.main.temp_min,
            temp_min: props.forecast.main.temp_min,
            tomorrow: props.tomorrow,
            description: props.forecast.weather[0].description
        })
      
        const date = computed(() => { 
            return state.tomorrow === 0 ? 'Tomorrow' : getDataFormat(state.dt)
        })
 
        return{
            state,
            formatDate: date,
            units: isUnits
           
        }

    }
}
</script>