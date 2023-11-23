<template>
  <nav class="toc">
    <header class="toc-header" @click="toggleToc" aria-label="Expand the table of contents.">
      <span class="blog-aside-title mb-0">TABLE OF CONTENTS</span>
      <IconsChevronDown class="chevron-icon" width="24" height="24"/>
    </header>
    <ul v-if="links" v-show="isVisible">
      <!-- render each link with depth class -->
      <li v-for="link in flatlink(links)" :key="link.id" :class="`toc-link toc-link_${link.depth}`">
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

const flatlink = (links) => {
    const flattenedLinks = [];

    links.forEach(link => {
        flattenedLinks.push(link);

        if (link.children) {
            flattenedLinks.push(...flatlink(link.children));
        }
    });

    return flattenedLinks;
};


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
  margin-top: 0.5rem;
}

.toc-link a:hover {
  text-decoration: underline;
  color: #0078d4;
}

/* First child has no top margin */
.toc-link:first-child {
  margin-top: 0;
}

/* Adjust top margin for medium screens and up */
@media screen and (min-width: 768px) {
  .toc-link {
    margin-top: 0.25rem; /* Assuming mt-1 is 0.25rem */
  }
}

/* Hover styles for TOC links */

.toc-link_1 {
  font-weight: 'bold';
  text-decoration: none;
}

.toc-link_3 {
  padding-right: 30px;
  text-decoration: none;
  font-size: 14px;
  color: rgba(128, 128, 128, 0.5); ;
}

.toc-link_3 ::before{
  content: "--";
  padding-right: 10px;
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