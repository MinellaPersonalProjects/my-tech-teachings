
<template>
  <v-row justify="center" no-gutters>
    <v-btn class="mx-2" rounded="xl" variant="plain" to="/">HOME</v-btn>
    <v-btn class="mx-2" rounded="xl" variant="plain" to="/about">ABOUT</v-btn>
    <v-btn class="mx-2" rounded="xl" variant="plain" to="/blogs">BLOGS</v-btn>
    <!-- <v-btn class="mx-2" rounded="xl" variant="plain" @click="socials.downloadResume()">RESUMÉ</v-btn> -->
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Nkem's Tech Teachings</strong>
    </v-col>
  </v-row>
</template>