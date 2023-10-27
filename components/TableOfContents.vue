<template>
  <nav class="toc">
    <header class="toc-header" @click="toggleToc" aria-label="Expand the table of contents.">
      <span class="blog-aside-title mb-0">TABLE OF CONTENTS</span>
      <IconsChevronDown class="chevron-icon" width="24" height="24"/>
    </header>
    <ul v-if="links" v-show="isVisible">
      <!-- render each link with depth class -->
      <li v-for="link in links" :key="link.id" :class="['toc-link', `toc-link_${link.depth} first:mt-0 mt-2 md:mt-1`]">
        <a
            :href="`#${link.id}`"
            class="toc-link hover:underline hover:text-brand_primary"
            :style="{ color: theme.global.current.value.dark? 'white' : 'black' }"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {useTheme} from "vuetify";

defineProps({
  links: {
    type: Array,
    required: true
  }
});

import {ref} from 'vue';
const isVisible = ref(true);
const theme = useTheme()
const toggleToc = () => {
  isVisible.value = !isVisible.value;
}


</script>

<style scoped>
.blog-aside-title{
  margin-left: 10px;
  font-weight: bolder;
  font-size: 16px;
}

.toc-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2px;
}

.toc {
  color: inherit;
  text-decoration: none;
}

.toc header {
  /* Styles for the TOC header */
  cursor: pointer;
  padding: 0.5rem 0;
  background-color: inherit;
}

.toc ul {
  /* Styles for the TOC list */
  list-style: none;
  padding-left: 1rem;
  border-left: 2px solid #ccc;
}

.toc-link {
  color: inherit;
  text-decoration: none;
}

/* Hover styles for TOC links */
.toc-link a:hover {
  text-decoration: underline;
  color: #0078d4;
}

/* Style for the chevron icon */
.chevron-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  transition: transform 0.3s;
  /* Default icon styles */
}

/* Style for the rotated chevron icon */
.toc-header.active .chevron-icon {
  transform: rotate(180deg);
}

</style>