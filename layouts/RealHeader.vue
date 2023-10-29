<script setup>

import {ref} from "vue";
import {useSocialsStore} from "~/store/socials.js";

const drawerVisible = ref(false)
const socials = useSocialsStore()

const navLinks = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Blogs", to: "/blogs" },
  { text: "Resumé", download_resume: true },
];

const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
};

function startDownload(link){
  if (link.download_resume){
    socials.downloadResume()
  }
}


</script>

<template>
<v-container fluid>
  <header-large-screen class="hidden-md-and-down"/>
  <header-small-screen :drawer="drawerVisible" @toggle-drawer="toggleDrawer" class="hidden-lg-and-up"/>
  <v-layout>
    <v-navigation-drawer v-model="drawerVisible" temporary>
      <!-- Add navigation links for Home, About, Blogs, and Contact -->
      <v-list>
        <v-list-item title="Nkem's Tech Teachings" subtitle="A blog"></v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="link in navLinks" :key="link.to" link :to="link.to">
          <v-list-item-title @click="startDownload(link)">{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</v-container>
</template>

<style scoped>

</style>