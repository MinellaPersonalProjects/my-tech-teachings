<template>
  <v-layout>
    <v-navigation-drawer 
      v-if="haveLinks"
      class="toc"
      :rail="rail"
      location="right" 
    >
      <v-list-item title="Table of Contents" class="toc-header">
        <template v-slot:append>
          <v-btn
            variant="text"
            icon
            @click.stop="rail = !rail"
          ><v-icon>{{ rail ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list lines="one" v-show="!rail">
        <!-- render each link with depth class -->
        <v-list-item 
          v-for="link in flatlink(props.links)" 
          :key="link.id" 
          :class="getClassDepth(link.depth)" 
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
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
import {useTheme} from "vuetify";

const props = defineProps({
  links: {
    type: Array,
    required: true,
    default: () => []
  }
});

const emits = defineEmits(['open'])
const rail = ref(false)

function openDrawer(){
  emit('open')
}

const haveLinks = computed(() => props.links && props.links.length > 0);

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
  font-size: 40px;
}

.toc {
  text-decoration: none;
  z-index: 3;
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
  padding-left: 1em; /* optional */
}


.toc-link-depth-3 {
  font-size: 1em;
  font-weight: 300;
  color: #777;
  margin-top: -10px !important;
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