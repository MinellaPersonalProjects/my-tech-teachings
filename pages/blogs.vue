<script setup lang="ts">

import CategoriesCards from "~/components/CategoriesCards.vue";
</script>

<template>
  <NuxtLayout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            placeholder="Search for Blog Topic or Tag"
            prepend-inner-icon="mdi-magnify"
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12">
          <categories-cards />
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<style scoped>

</style>