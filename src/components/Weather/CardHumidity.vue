<template>
    <div class="grid place-items-center text-center rounded text-white bg-brand-main">
        <div class="h-56 w-64">
            <span class="text-white text-base font-base inline-block align-middle">Humidity</span>
            <div class="flex justify-center mt-4">
                <h1 class="text-white text-6xl font-base ">{{ humidity }}<span class="text-4xl"> %</span>
                </h1>
            </div>
            <div class="mt-12 px-9">
                <div class="flex justify-between mb-1">
                    <span class="text-xs font-base  text-white">0</span>
                    <span class="text-xs font-base  text-white">50</span>
                    <span class="text-xs font-base  text-white">100</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-yellow-400 h-1 rounded-full" :style="{ width: humidity + '%' }">
                    </div>
                </div>
                <div class="flex items-end justify-end">
                    <span class="text-xs font-base  text-white">%</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import { computed } from 'vue'
    export default {
    props: {
        dataWheater: { type: Object, required: true }
    },
    setup (props) {
        const humidity = computed(() => {
            return props.dataWheater?.[0]?.main?.humidity
        })
        
        return {
            humidity
        }
    }
}
</script>