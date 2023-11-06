<script setup lang="ts">
import RealHeader from "~/layouts/RealHeader.vue";
import AppFooter from "~/layouts/AppFooter.vue";
</script>

<!-- layouts/default.vue -->

<template>
  <div>
    <header>
      <real-header />
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-grey-lighten-1">
      <app-footer />
    </footer>
  </div>
</template>
