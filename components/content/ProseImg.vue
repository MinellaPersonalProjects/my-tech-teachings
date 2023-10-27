<template>
  <div class="container">
    <div class="image-wrapper">
      <img
          :src="refinedSrc"
          :alt="alt"
          :width="width"
          :height="height"
          class="custom-img"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src?.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src?.startsWith(_base)) {
      return joinURL(_base, <string>props.src)
    }
  }
  return props.src
})
</script>
<style scoped>
.custom-img {
  object-fit: contain;
  max-width: 100%; /* Set the maximum width to 100% */
  max-height: 100%; /* Set the maximum height to 100% */
  width: auto; /* Maintain aspect ratio */
  height: auto; /* Maintain aspect ratio */
}

.container {
  width: 100%;
  margin-top: 1rem; /* Equivalent to 'my-6' in Tailwind */
  margin-bottom: 1.5rem;
  border-radius: 0.375rem; /* Equivalent to 'rounded-md' in Tailwind */
  padding-top: 2rem; /* Equivalent to 'pt-8' in Tailwind */
  position: relative;
  overflow: hidden;
}

.image-wrapper {
  display: flex;
  align-items: center; /* Vertically center the image */
  justify-content: center; /* Horizontally center the image */
  width: 100%;
  height: 100%;
}

</style>