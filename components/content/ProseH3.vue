<template>
  <h3 :id="id">
    <a
        v-if="id && generate"
        :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>
<style scoped>
h3 {
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