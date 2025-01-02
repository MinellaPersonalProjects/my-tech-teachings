<script setup lang="ts">
import RealHeader from "~/layouts/RealHeader.vue";
import AppFooter from "~/layouts/AppFooter.vue";
</script>

<!-- layouts/default.vue -->

<template>
  <div class="site-wrapper">
    <header class="pb-1">
      <real-header />
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-grey-darken-1 fotter-index">
      <app-footer />
    </footer>

    <consent-banner/>
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex-grow {
  flex: 1; /* This will make the main content grow to push the footer down */
}

.fotter-index {
  z-index: 2;
}
</style>
