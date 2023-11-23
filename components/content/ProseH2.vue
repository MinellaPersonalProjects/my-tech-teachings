<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports';

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>
<template>
  <h2 :id="id">
    <a
        v-if="id && generate"
        :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
<style scoped>
  h2 {
    padding-top: 30px;
    padding-bottom: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 1px solid #8c8c8c; /* You can adjust the color as needed */
  }
</style>