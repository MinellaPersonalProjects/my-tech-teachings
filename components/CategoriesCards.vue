<script setup lang="ts">
// TODO get all the tags and map title to tag and list out all blogs with that tag and show first three on main page

import CatCardContent from "~/components/CatCardContent.vue";
import {Icon} from "@iconify/vue";

const props = defineProps(['filteredPosts'])

const displayedPosts = (value) => {
  // Slice the first three items from filteredPosts
  const maxItems = 3; // Set the maximum number of items to display
  if (value?.length <= maxItems) {
    // If there are fewer than or equal to 3 items, display all of them
    return value;
  } else {
    // If there are more than 3 items, display only the first 3
    return value?.slice(0, maxItems);
  }
}

function getRandomColor() {
  const colorPalette = [
    '#05668D',
    '#ef767a',
    '#00A896',
    '#02C39A',
    '#6930c3',
    '#F0F3BD',
    '#8f2d56',
    '#fb8f67',
    '#3a506b',
  ];

  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
}

</script>

<template>
<v-container fluid>
  <v-row >
    <v-col cols="12" v-for="(item, key) in props.filteredPosts" :key="key">
      <v-card
          height="300px"
          width="100%"
          class="overflow-container"
          variant="outlined"
          elevation="2"
      >
        <v-card-title>
          {{ key }}
          <v-icon>
            <Icon icon="line-md:emoji-grin" style="font-size: 36px;"/>
          </v-icon>
        </v-card-title>
        <cat-card-content :value="displayedPosts(item)"/>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
.overflow-container {
  width: 100%; /* Set the desired width */
  height: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
}

</style>