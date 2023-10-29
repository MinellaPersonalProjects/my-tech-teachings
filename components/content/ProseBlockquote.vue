<template>
  <blockquote
    :class="{
      'block-light': !theme.global.current.value.dark,
      'block-dark': theme.global.current.value.dark,
    }"
  >
    <slot />
  </blockquote>
</template>
<script setup>
  import {useTheme} from "vuetify";
  const theme = useTheme()
</script>
<style scoped>
.block-light {
  border-left: 5px solid #333;
  padding: 15px;
  margin: 15px 0;
  background-color: #f9f9f9;
  border-radius: 10px;
}
.block-dark {
  border-left: 5px solid #f9f9f9;
  padding: 15px;
  margin: 15px 0;
  background-color: #333;
  border-radius: 10px;
}

</style>