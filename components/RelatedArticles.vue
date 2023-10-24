<template>
  <div>
    <v-row>
      <v-col>
        <h2 class="blog-aside-title mb-2">Continue Reading</h2>
        <ul class="list-none">
          <template v-for="item in surround">
            <li v-if="item" class="first:mt-0 mt-4 md:mt-1">
              <NuxtLink
                  :to="item._path + '/'"
                  class="hover-underline hover-text-brand-primary"
                  :aria-label="item.title"
              >
                {{ item.title }}
              </NuxtLink>
              <p class="no-underline md-hidden text-sm leading-sm md-text-xs md-leading-xs mt-1">
                {{ item.summary }}
              </p>
            </li>
          </template>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  surround: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.blog-aside-title {
  font-size: 1.0rem;
}

.hover-underline:hover {
  text-decoration: underline;
}

.hover-text-brand-primary:hover {
  color: #005cc5; /* Set your desired hover color */
}

.md-hidden {
  display: none;
}

.md-text-xs {
  font-size: 0.875rem;
}

.md-leading-xs {
  line-height: 1.25;
}
</style>
