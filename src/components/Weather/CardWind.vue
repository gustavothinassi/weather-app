<template>
    <div class="grid place-items-center text-center rounded text-white bg-brand-main">
        <div class="h-56 w-64">
            <span class="text-white text-base font-base inline-block align-middle">Wind Status</span>
            <div class="flex justify-center mt-4">
                <h1 class="text-white text-6xl font-base inline-block align-middle">{{ wind }}
                <span class="text-4xl">m/s</span></h1>
            </div>
            <div class="flex justify-center items-center mt-10">
                <button class="inline-block px-2 py-2 scale-75 bg-gray-400 rounded-full">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.8103 5.94919C21.5951 4.19841 19.8016 2.40485 18.0508 3.18969L3.64527 9.64735C1.52435 10.5981 1.43336 13.5756 3.49228 14.6541L6.508 16.2337C7.04568 16.5154 7.48464 16.9543 7.76628 17.492L9.34594 20.5077C10.4244 22.5666 13.4019 22.4757 14.3527 20.3547L20.8103 5.94919Z" />
                    </svg>
                </button>
                <div class="mx-3">
                    <span class="text-base font-base uppercase">wsw</span>
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
        const wind = computed(() => {
            return props.dataWheater?.[0]?.wind?.speed
        })
        
        return {
            wind
        }
    }
}
</script>