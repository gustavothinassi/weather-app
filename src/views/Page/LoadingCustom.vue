<template>
    <div role="status" class="justify-center items-center flex">
    <svg width="40" viewBox="0 0 130 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.79 57.2313L32.7059 69.3071C36.7786 71.6585 41.9862 70.2631 44.3376 66.1904C46.6889 62.1178 45.2935 56.9101 41.2209 54.5588L27.6957 46.75L15.4513 55.3244C14.2916 56.1365 13.0603 56.7703 11.79 57.2313Z" fill="#F0402C">
      </path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.63141 35.078L31.5308 15.5409C35.3829 12.8433 40.6924 13.7793 43.3899 17.6314C44.0643 18.5944 44.5116 19.6485 44.743 20.7302C45.1271 22.5258 44.9163 24.3973 44.1617 26.0536C43.5528 27.3903 42.5896 28.5869 41.2994 29.4904L13.4 49.0276C9.54788 51.7251 4.23837 50.7891 1.54086 46.937C0.499002 45.4493 -0.000839703 43.7441 1.05885e-06 42.0559C0.00136623 39.3733 1.26712 36.7336 3.63141 35.078Z" fill="#F0402C">
      </path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M87.3994 27.2184L66.4835 15.1426C62.4109 12.7912 57.2032 14.1866 54.8519 18.2593C52.5005 22.3319 53.8959 27.5396 57.9686 29.8909L71.4938 37.6997L83.7382 29.1253C84.8979 28.3132 86.1292 27.6794 87.3994 27.2184Z" fill="#F0402C">
      </path>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M95.558 49.3712L67.6587 68.9084C63.8066 71.6059 58.4971 70.6699 55.7995 66.8178C55.1252 65.8548 54.6779 64.8007 54.4465 63.719C54.0623 61.9234 54.2732 60.0519 55.0277 58.3956C55.6367 57.0589 56.5998 55.8623 57.8901 54.9588L85.7895 35.4216C89.6416 32.7241 94.9511 33.6601 97.6486 37.5122C98.6905 39 99.1903 40.7052 99.1895 42.3933C99.1881 45.076 97.9223 47.7156 95.558 49.3712Z" fill="#F0402C"></path>
    </svg>
        <div class="text-bold text-white text-animation" style="font-size: 1.3rem;"  v-html="state.paper"></div>  
    </div>
</template>
<script>
import { onMounted, reactive, watchEffect } from 'vue'

export default {
  setup () {
    const state = reactive({
      titleText: 'Loading . . . ',
      typeText: [],
      paper: '',
      timer: null
    })
    onMounted(() => {
      printer()
    })
    function printer () {
      stoper()
      let i = -1
      state.timer = setInterval(() => {
        i++
        const x = i % state.titleText.length
        state.paper += state.titleText[x]
      }, 100 - (Math.random() * 20))
    }

    function stoper () {
      clearInterval(state.timer)
      state.paper = ''
    }

    watchEffect(() => {
      if (state.paper.length === state.titleText.length) {
        state.paper = ''
      }
    })
    return {
      state
    }
  }
}
</script>