<template>
  <NuxtLayout>

      <v-card
          class="px-10 py-15 mx-auto ml-sm-10 ml-md-10 ml-lg-10"
          :class="{
                  'bg-white': !$vuetify.theme.dark,
                  'dark:bg-gray-800': $vuetify.theme.dark,
                }"
          :elevation="$vuetify.theme.dark ? 2 : 0"
      >
        <v-container class="container">
          <v-row class="row">
            <contact-card />
          </v-row>
        </v-container>
      </v-card>
  </NuxtLayout>
</template>

<script setup>

import ContactCard from "~/components/ContactCard.vue";
</script>

<style scoped>
.container {
  height: 70vh; /* Set container to full viewport height */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}

.row {
  flex-direction: column; /* Set row direction to vertical */
}
</style>
