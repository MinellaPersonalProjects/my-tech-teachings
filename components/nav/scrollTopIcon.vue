<script setup lang="ts">

import {Icon} from "@iconify/vue";

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  isVisible.value = st > window.innerHeight / 2;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <v-btn
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      rounded="0"
      icon
  >
    <Icon icon="line-md:arrow-up"/>
  </v-btn>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #007BFF; /* Replace with your desired button background color */
  color: #fff; /* Replace with your desired button text color */
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}
</style>