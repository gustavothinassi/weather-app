<template>
<div class="grid place-items-center text-center rounded text-white bg-brand-main">
                            <div class="h-40 w-64">
                                <span class="text-white text-base font-base inline-block align-middle">Aires Pressure</span>
                                <div class="flex justify-center mt-4">
                                    <h1 class="text-white text-6xl font-base inline-block align-middle">{{ pressure
                                    }}<span class="text-4xl"> hPa</span></h1>
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
        const pressure = computed(() => {
            return props.dataWheater?.[0]?.main?.pressure
        })
        
        return {
            pressure
        }
    }
}
</script>