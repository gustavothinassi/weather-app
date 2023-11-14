<template>
<img src="../../assets/images/Cloud-background.png" class="absolute top-0 left-0 right-0 opacity-10 z-20 w-[100%]">
<img :src="validationImage(state.icon)" class="w-[30%] bounce child z-30">
</template>
<script>
import { validationImage } from '@/utils/validation'
import { reactive } from 'vue'

export default {
        props: {
            icon: { type: String, required: true }
        },
        setup (props) {
            const state = reactive({
                icon: props.icon
            })
            return {
                state,
                validationImage
            }
        }
       
    }
</script>