<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps(["isVisible"]);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// const handleScroll = () => {
//   const st = window.pageYOffset || document.documentElement.scrollTop;
//   isVisible.value = st > window.innerHeight / 2;
// };
</script>

<template>
  <v-fab
    @click="scrollToTop"
    class="scroll-to-top"
    color="#007BFF"
    rounded="0"
    icon
  >
    <Icon icon="line-md:arrow-up" />
  </v-fab>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}
</style>