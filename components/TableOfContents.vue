<template>
  <nav class="toc">
    <header class="toc-header" @click="toggleToc" aria-label="Expand the table of contents.">
      <span class="blog-aside-title mb-0">TABLE OF CONTENTS</span>
      <IconsChevronDown class="chevron-icon" width="24" height="24"/>
    </header>
    <v-list v-if="links" v-show="isVisible" class="toc-list" lines="one">
      <!-- render each link with depth class -->
      <v-list-item 
        v-for="link in flatlink(links)" 
        :key="link.id" 
        :class="getClassDepth(link.depth)" 
        class="first:mt-0 mt-2 md:mt-1"
      >
        <a
            :href="`#${link.id}`"
            class="toc-link hover:underline hover:text-brand_primary"
            :style="{ color: theme.global.current.value.dark? 'white' : 'black' }"
        >
          {{ link.text }}
        </a>
      </v-list-item>
    </v-list>
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

function getClassDepth(depth){
  return `toc-link toc-link-depth-${depth}`;
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

.toc-list {
  /* Styles for the TOC list */
  list-style: none;
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

.toc-link-depth-1 {
  font-size: 1.2em;
  font-weight: bold;
  color: #333; 
  margin-top: 160px;
  text-transform: uppercase; 
}


.toc-link-depth-2 {
  font-size: 1.1em;
  font-weight: 500; /* or medium */
  color: #555;
  margin-bottom: -20px;
  padding-left: 1em; /* optional */
}


.toc-link-depth-3 {
  font-size: 1em;
  font-weight: 300;
  color: #777;
  margin-bottom: -20px;
  margin-left: 20px !important; /* more than H2 for nested appearance */
  list-style-type: disc; /* optional */
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