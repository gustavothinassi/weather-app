<template>
    <img :src="validationImage(state.icon)" alt="image">
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