<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Blog One'
  },

})
</script>
<!-- TODO create longer card with category name as title then smaller cards with blog title and when you hover it shows description-->
<template>
<v-card
    max-width="400"
    class="mx-auto"
>
  <v-card-title>
    {{ title }}
  </v-card-title>
</v-card>
</template>

<style scoped>

</style>