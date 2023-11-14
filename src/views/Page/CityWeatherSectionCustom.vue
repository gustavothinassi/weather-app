<template>
    <div class="relative w-[100%] h-36 flex justify-center items-center">
          <card-weather-icon-custom
          v-if="dataWheater.length > 0"
          :icon="dataWheater?.[0]?.weather?.[0]?.description"
          />    
      </div>
      <div class="flex justify-center py-8 mt-14">
          <div v-if="!units">
          <h3 class="text-9xl font-base text-brand-graydark"  v-if="dataWheater.length > 0">{{  Math.ceil(dataWheater?.[0]?.main?.temp) }}<span class="text-6xl font-base text-brand-graydark">°C</span></h3>
          </div>
          <div v-else>
          <h3 class="text-9xl font-base text-brand-graydark"  v-if="dataWheater.length > 0">{{ Math.floor((dataWheater?.[0]?.main?.temp * 9/5) + 32) }}<span class="text-6xl font-base text-brand-graydark">°F</span></h3>
          </div>
      </div>
      <div class="mt-3 flex justify-center">
          <h3 class="text-brand-graydark text-3xl font-base"  v-if="dataWheater.length > 0">{{ dataWheater?.[0]?.weather?.[0]?.description }}</h3>
      </div>
      <div class="mt-4 flex justify-center">
          <span class="text-brand-graydark text-xl font-base"  v-if="dataWheater.length > 0">Today. {{ getDataFormat(dataWheater?.[0]?.dt) }}
          </span>
      </div>
      <div class="mt-8 flex justify-center mb-28"  v-if="dataWheater.length > 0">
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g>
                      <path fill="#ffffff"
                          d="M12,2A7.008,7.008,0,0,0,5,9c0,5.353,6.036,11.45,6.293,11.707l.707.707.707-.707C12.964,20.45,19,14.353,19,9A7.008,7.008,0,0,0,12,2Zm0,16.533C10.471,16.825,7,12.553,7,9A5,5,0,0,1,17,9C17,12.546,13.527,16.823,12,18.533Z" />
                      <path fill="#ffffff" d="M12,6a3,3,0,1,0,3,3A3,3,0,0,0,12,6Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,10Z" />
                  </g>
              </svg>
          </div>
          <span class="text-brand-graydark text-xl font-base mb-8" >{{ dataWheater?.[0]?.name }} </span>
      </div>
  </template>
  <script>
  import { whaterStore } from '../../stores/wheater'
  import { storeToRefs } from 'pinia'
  import CardWeatherIconCustom from '../../components/Weather/CardWeatherIconCustom.vue'
  import { getDataFormat } from '@/utils/date'
  
  export default {
      components: {
        CardWeatherIconCustom
      },
      setup () {
  
          const store = whaterStore()
          const { isUnits, dataWheater, dataCity } = storeToRefs(store)
   
          return {
             getDataFormat,
             units: isUnits,
             dataWheater,
             dataCity
          }
      }
      }
  </script>