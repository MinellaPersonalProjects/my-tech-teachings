<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'w-8 h-8'
  },
  spacing: {
    type: String,
    default: 'p-0'
  }
})

const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <v-btn aria-label="Color Mode" class="inline-block" variant="plain" @click="onClick">
    <ColorScheme>
      <v-icon icon="mdi-theme-light-dark"></v-icon>
    </ColorScheme>
    <!-- <ColorScheme placeholder="..."> -->
      <!-- <v-icon v-show="colorMode.value === 'dark'" icon="heroicons-outline:moon"></v-icon>
      <v-icon v-show="colorMode.value === 'light'" icon="heroicons-outline:sun"></v-icon> -->
    <!-- </ColorScheme> -->
      </v-btn>
</template>
