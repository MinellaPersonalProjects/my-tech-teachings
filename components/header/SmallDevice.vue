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
    <v-row align="center">
      <v-btn icon variant="plain" @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <h3 class="name text-center ml-5" @click="router.push('/')">Nkem's Tech Teachings</h3>
    </v-row>
  </v-col>
</template>

<style scoped>
.name{
    font-style: normal;
    font-size: 20px;
    font-family: "PT Sans Caption",sans-serif;
    font-weight: 700;
    line-height: 1.25;
    padding-top: 2px;
    color: #757575;
}
</style>