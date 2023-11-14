import { wait } from '@/utils/timeout'
import { defineStore } from 'pinia'

export const menuStore = defineStore("menu", {
    state: () => {
        return {
            isOpen: false,
            isClosing: false
        }
    },
    getters: {
        getisOpen: (state) => state.isOpen,
    },
    actions: {
        async optionalMenu (value1, value2) {
            this.isOpen = value1
            await wait(200)
            this.isClosing =  value2
            //this.isClosing =  !value2
        }
    }
})