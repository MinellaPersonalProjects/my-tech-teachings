<script setup lang="ts">
    const links = [
        'Home',
        'About',
        'Contact Me',
        'Blog'
    ]
</script>
<template>
  <v-row justify="center" no-gutters>
    <v-btn class="mx-2" rounded="xl" variant="text" to="/">HOME</v-btn>
    <v-btn class="mx-2" rounded="xl" variant="text" to="/about">ABOUT</v-btn>
    <v-btn class="mx-2" rounded="xl" variant="text" to="/blogs">BLOGS</v-btn>
    <v-btn class="mx-2" rounded="xl" variant="text" @click="socials.downloadResume()">RESUMÉ</v-btn>
    <!-- <v-btn
      v-for="link in links"
      :key="link"
      color="white"
      variant="text"
      class="mx-2"
      rounded="xl"
      @click="goTo(link)"
    >
      {{ link }}
    </v-btn> -->
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Nkem's Tech Teachings</strong>
    </v-col>
  </v-row>
</template>