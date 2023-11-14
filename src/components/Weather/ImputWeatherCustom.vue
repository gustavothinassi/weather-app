<template>
    <form @submit.prevent="handleSubmit">
        <div class="flex flex-row">
            <div class="flex border-2 border-brand-graydark items-center justify-center px-3 mr-3">
                <svg class="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
                <input type="text" class="px-3 py-3 w-full font-base text-base bg-transparent text-white"
                    placeholder="Search..." v-model="state.txtCity">
            </div>
            <button type="submit"
                class="inline-block px-3 py-3 bg-brand-blue text-white font-base text-sm uppercase rounded">Search</button>
        </div>
        <span v-if="isError" class="text-bold text-red-700 text-sm">{{ isError }}</span>

    </form>
   <div v-if="dataCity.length > 0" class="h-[440px] overflow-y-auto mt-5">
    <ul class="flex flex-col text-base mt-4" v-for="search in dataCity" :key="search.name">
        <li class="group cursor-pointer w-full h-[64px] flex flex-row px-3 justify-between items-center text-white hover:border-[1px]  duration-100  border-1"
                @click="handleCity(search.lon, search.lat)">
                <span>{{ search.name + ',' }} {{ search.state }} </span><i
                    class="group-hover:hidden inline-block text-xs  ">
                    {{ search.country }}</i>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                    class="group-hover:inline-block hidden w-[24px] h-[24px] " height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
            </li>
    </ul>
    </div> 
</template>
<script>
import { whaterStore } from '@/stores/wheater'
import { menuStore } from '../../stores/menu'
import { storeToRefs } from 'pinia'
import { reactive, onMounted } from 'vue'
import { roundNumber } from '@/utils/number'
export default {
    setup() {
        const state = reactive({
            txtCity: '',
            auxSearch: [],
            aux: []
        })

        const store = whaterStore()
        const menu = menuStore()
        const { dataCity, isError } = storeToRefs(store)

        onMounted(() => {
            const cities = JSON.parse(
                localStorage.getItem("aux")
            )
            if(cities){
                if(dataCity.value.length === 0){
                   dataCity.value = cities
               }
            }
        })

        async function handleSubmit() {
            await store.searchCity(state.txtCity)
            state.txtCity = ''
        }


        async function handleCity(longitude, latitude) {
            store.setErrors("")
            menu.optionalMenu(false)
            await store.daysTemperature(roundNumber(longitude,2), roundNumber(latitude, 3))
            await store.coordinatesCity(roundNumber(longitude,2), roundNumber(latitude,3))
        }

        return {
            handleSubmit,
            state,
            handleCity,
            dataCity,
            isError
        }
    }
}
</script>