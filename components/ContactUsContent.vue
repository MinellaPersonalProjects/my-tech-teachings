<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <v-card>
    <v-container class="container">
      <v-row class="row">
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <h1>Contact Us</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p>nmogbo2001@gmail.com</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <Icon icon="mdi:github" />
            </v-col>
            <v-col cols="4">
              <Icon icon="openmoji:youtube" />
            </v-col>
            <v-col cols="4">
              <Icon icon="simple-icons:x" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.container {
  height: 100%; /* Set container to full viewport height */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}

.row {
  flex-direction: column; /* Set row direction to vertical */
}
</style>