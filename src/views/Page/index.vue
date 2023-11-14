<template>
    <div class="relative">
        <div class="main">
            <div class="main-item-left z-0">
                <div class="flex justify-between p-8">
                    <button class="inline-block px-3 py-2 bg-brand-graydark text-white font-base text-sm uppercase rounded"
                        @click="toggleSideBar(true)">Search for places</button>
                    <button class="inline-block px-1 bg-brand-graydark rounded-full" @click="inicializeFunctions()">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="style=stroke">
                                <g id="gps">
                                    <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 15.7279 8.27208 18.75 12 18.75C15.7279 18.75 18.75 15.7279 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
                                        fill="#FFFFFF" />
                                    <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25ZM8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12Z"
                                        fill="#FFFFFF" />
                                    <path id="vector (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6V2C11.25 1.58579 11.5858 1.25 12 1.25Z"
                                        fill="#FFFFFF" />
                                    <path id="vector (Stroke)_4" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12Z"
                                        fill="#FFFFFF" />
                                    <path id="vector (Stroke)_5" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 17.25C12.4142 17.25 12.75 17.5858 12.75 18L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22L11.25 18C11.25 17.5858 11.5858 17.25 12 17.25Z"
                                        fill="#FFFFFF" />
                                    <path id="vector (Stroke)_6" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17.25 12C17.25 11.5858 17.5858 11.25 18 11.25L22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75L18 12.75C17.5858 12.75 17.25 12.4142 17.25 12Z"
                                        fill="#FFFFFF" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
               
                <div :class="{
                    animate__fadeOutLeft: isClosing 
                }" class="main-item-left-slide animate__animated animate__fadeInLeft animate__faster"
                    v-if="isOpen">
                    <div class="p-6 flex justify-end">
                        <button @click="toggleSideBar(true,true)">
                            <svg fill="#000000" width="40px" height="40px" viewBox="-8.5 0 32 32" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>close</title>
                                <path
                                    d="M8.48 16l5.84-5.84c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-5.84 5.84-5.84-5.84c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l5.84 5.84-5.84 5.84c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.4 0.24 0.6 0.24s0.44-0.080 0.6-0.24l5.84-5.84 5.84 5.84c0.16 0.16 0.36 0.24 0.6 0.24 0.2 0 0.44-0.080 0.6-0.24 0.32-0.32 0.32-0.84 0-1.2l-5.84-5.84z"
                                    :fill="'#FFFF'"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="flex flex-col justify-between ">
                            <div class="">
                            <imput-weather-custom/>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="isLoading" class="py-36">
                    <LoadingCustom />
                </div>
                <div v-else>
                    <city-weather-section-custom />
                </div>
            </div>

            <div class="main-item-right">
                <div class="flex items-end justify-end space-x-4 p-8">
                    <button class="w-9 h-9 bg-brand-main rounded-full text-xl text-white font-base" @click="units(true)"
                        :class="isUnits ? 'bg-brand-graydark' : 'bg-brand-transparent'">
                        °F
                    </button>
                    <button class="w-9 h-9 bg-brand-main rounded-full text-xl text-white font-base" @click="units(false)"
                        :class="isUnits ? 'bg-brand-transparent' : 'bg-brand-graydark'">
                        °C
                    </button>
                </div>
                <div class="flex flex-col p-8">
                    <div v-if="isLoading">
                        <LoadingCustom />
                    </div>
                    <div
                        v-else
                        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-16 lg:gab-8 md:gap-6 sm:gap-12 mt-0">
                        <card-forecast-section-custom />
                    </div>
                </div>
                <div class="mt-4 flex flex-col m-8">
                    <h2 class="mt-10 text-2xl font-bold text-white">Today's Hightlights</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
                        <card-weather-section-custom />
                    </div>
                    <div class="text-center font-base text-brand-graydark mt-7" style="font-size: 1.1rem;">created by
                        <a href="https://portifolio-gustavo.vercel.app" class="underline ">Gustavo Thinassi</a> -
                        devChallenges.io
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import CardForecastCustom from '../../components/Forecast/CardForecastCustom.vue'
import CardForecastSectionCustom from '../Page/CardForecastSectionCustom.vue'
import CardWeatherSectionCustom from './CardWeatherSectionCustom.vue'
import CityWeatherSectionCustom from './CityWeatherSectionCustom.vue'
import ImputWeatherCustom from '@/components/Weather/ImputWeatherCustom.vue'
import LoadingCustom from './LoadingCustom.vue'
import { whaterStore } from '../../stores/wheater'
import { storeToRefs } from 'pinia'
import { roundNumber } from '../../utils/number'
import { menuStore } from '@/stores/menu'

export default {
    components: {
        CardForecastCustom,
        CardForecastSectionCustom,
        CardWeatherSectionCustom,
        CityWeatherSectionCustom,
        ImputWeatherCustom,
        LoadingCustom
    },
    setup() {
        const state = reactive({
            showSideBar: false
        })
        const menu = menuStore()
        const { isOpen, isClosing } = storeToRefs(menu)

        const store = whaterStore()
        const { isUnits, isLoading, coords } = storeToRefs(store)

        onMounted(async () => {
            inicializeFunctions()
        })

        function inicializeFunctions() {
            navigator.geolocation.getCurrentPosition(async function (position) {
                if (position) { await coordenadas(position.coords.longitude, position.coords.latitude) } else await coordenadas(coords.value.long, coords.value.lat)
            })
        }

        async function coordenadas(longitude, latitude) {
            await store.daysTemperature(longitude, latitude)
            await store.coordinatesCity(longitude, latitude)
        }

       function toggleSideBar(value1, value2) {
            //isClosing.value = false
            //isOpen.value = false
            //state.showSideBar = !state.showSideBar
            menu.optionalMenu(value1, value2)
            store.setErrors('')

            //isClosing.value = true
        }

        async function units(value) {
            store.optionalUnits(value)
        }

        return {
            state,
            toggleSideBar,
            units,
            isUnits,
            isOpen,
            isLoading,
            inicializeFunctions,
            roundNumber,
            isClosing
        }
    }
}
</script>