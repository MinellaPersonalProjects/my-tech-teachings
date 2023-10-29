<script setup lang="ts">
import {useDarkModeStore} from "~/store/darkMode";
import {useSocialsStore} from "~/store/socials";
import { useTheme } from 'vuetify'

const theme = useTheme()

const router = useRouter()
const store = useDarkModeStore()
const socials = useSocialsStore()

function changeDarkMode(){
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  store.toggleDarkMode()
}

function getColorLightMapping(social) {
  if (social === 'youtube'){
    return '#FF0000'
  }else if (social === 'linkedin'){
    return '#0077B5'
  }else if (social === 'twitter') {
    return '#1DA1F2'
  }else if (social === 'github'){
      return '#070707'
  }else if (social === 'gmail'){
    return '#D14836'
  }else {
    return ''
  }
}

function getColorMapping(social){
  return theme.global.current.value.dark ? 'white' : getColorLightMapping(social)
}


</script>

<template>
  <v-row align="center" color="primary" dark>
    <v-col cols="12" lg="4" xl="4" >
      <v-btn class="btn positioning" variant="text" to="/">HOME</v-btn>
      <v-btn class="btn positioning" variant="text" to="/about">ABOUT</v-btn>
      <v-btn class="btn positioning" variant="text" to="/blogs">BLOGS</v-btn>
      <v-btn class="btn positioning" variant="text" @click="socials.downloadResume()">RESUMÉ</v-btn>
    </v-col>

    <v-col cols="12" lg="4" xl="4">
      <v-row align="center" justify="center">
        <!-- <color-mode-switch :size="'w-8 h-8'" :spacing="'p-0'"/> -->
        <h3 class="name name_positioning " @click="router.push('/')">Nkem's Tech Teachings</h3>
      </v-row>
    </v-col>

    <v-col cols="12" sm="10" md="10" lg="3" xl="3" class="text-right">
      <v-row align="center" justify="end">
        <v-btn
            @click="changeDarkMode"
            :style="{ color: !store.isDarkMode ? 'black' : 'cornflowerblue' }"
            style="margin-top: 10px;"
            variant="plain"
            icon
        >
          <v-icon icon="x-small">{{ !store.isDarkMode ? 'mdi-brightness-7' : 'mdi-brightness-2' }}</v-icon>
        </v-btn>
        <v-divider
            length="25px"
            :thickness="2"
            style="margin-top: 20px;"
            vertical
        ></v-divider>
        <v-btn
            icon
            variant="plain"
            style="margin-top: 10px"
            :href="socials.linkedin" target="_blank"
        >
          <v-icon :color="getColorMapping('linkedin')" size="large">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
            icon
            variant="plain"
            style="margin-top: 10px"
            :href="socials.youtube" target="_blank">
          <v-icon :color="getColorMapping('youtube')" size="large">mdi-youtube</v-icon>
        </v-btn>
        <v-btn
            icon
            variant="plain"
            style="margin-top: 10px"
            :href="socials.github" target="_blank">
          <v-icon :color="getColorMapping('github')" size="large">mdi-github</v-icon>
        </v-btn>
        <v-btn
            icon
            variant="plain"
            style="margin-top: 10px"
            :href="socials.gmail" target="_blank">
          <v-icon :color="getColorMapping('gmail')" size="large">mdi-gmail</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.btn {
  text-transform: unset !important;
  font-style: normal;
  font-family: "PT Sans Caption",sans-serif;
  font-weight: 700;
  margin-top: 5px;
  margin-right: 5px;
}
.name{
  font-style: normal;
  font-size: 30px;
  font-family: "PT Sans Caption",sans-serif;
  font-weight: 700;
  line-height: 1.25;
  padding-top: 2px;
  color: #757575;
}
.positioning{
  margin-top: 10px;
  margin-left: 20px;
}
.name_positioning{
  margin-top: 10px;
}
</style>