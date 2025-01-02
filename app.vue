<template>
  <NuxtPage />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  theme.global.name.value = savedTheme;
});

</script>