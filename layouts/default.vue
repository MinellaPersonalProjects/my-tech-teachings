<script setup lang="ts">
//
import AppHeader from "~/layouts/AppHeader.vue";
// import AppFooter from "~/layouts/AppFooter.vue";
</script>

<template>
    <v-container>
      <app-header />
    <v-container>
        <slot />
    </v-container>

      <!-- <app-footer /> -->
    </v-container>
</template>