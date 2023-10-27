// Utilities
import { defineStore } from 'pinia'


export const useDarkModeStore = defineStore('colormode', {
    state: () => ({
        darkMode: false
    }),

    getters: {
        isDarkMode() {
            return this.darkMode
        }
    },
    mutations: {
       setDarkMode(mode){
           this.darkMode = mode
       }
    },
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
        }
    }

})