<script setup>
import {useDarkModeStore} from "~/store/darkMode.js";
import {useSocialsStore} from "~/store/socials.js";

const props = defineProps({
  drawer: Boolean,
})

const store = useDarkModeStore()
const socials = useSocialsStore()

const emit = defineEmits(['toggleDrawer'])

function toggleDrawer(){
  emit('toggleDrawer', !props.drawer)
}

</script>

<template>
  <v-col cols="12" sm="12" md="12" >
    <v-row align="center" justify="end">
      <v-btn
          @click="store.toggleDarkMode"
          :style="{color: !store.isDarkMode ? 'black':'cornflowerblue'}"
          variant="plain"
          rounded
      >
        <v-icon size="x-large">{{ !store.isDarkMode ? 'mdi-brightness-5' : 'mdi-brightness-3' }}</v-icon>
      </v-btn>

      <v-divider
          color="black"
          length="25px"
          :thickness="2"
          style="margin-top: 10px;"
          vertical />

      <v-btn
          icon
          variant="plain"
          :href="socials.linkedin" target="_blank"
      >
        <v-icon :color="'#0077B5'" size="large">mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
          icon
          variant="plain"
          :href="socials.youtube" target="_blank">
        <v-icon :color="'#FF0000'" size="large">mdi-youtube</v-icon>
      </v-btn>
      <v-btn
          icon
          variant="plain"
          :href="socials.twitter" target="_blank">
        <v-icon :color="'#1DA1F2'" size="large">mdi-twitter</v-icon>
      </v-btn>
      <v-btn
          icon
          variant="plain"
          :href="socials.gmail" target="_blank">
        <v-icon :color="'#D14836'" size="large">mdi-gmail</v-icon>
      </v-btn>

      <v-divider
          color="black"
          length="25px"
          :thickness="2"
          style="margin-top: 10px;"
          vertical />

      <v-btn icon variant="plain" @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-row>
  </v-col>
</template>

<style scoped>

</style>