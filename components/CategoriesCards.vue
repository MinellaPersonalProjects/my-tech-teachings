<script setup lang="ts">
// TODO get all the tags and map title to tag and list out all blogs with that tag and show first three on main page

import {useCategoriesStore} from "~/store/categories";
import CatCardContent from "~/components/CatCardContent.vue";
import {Icon} from "@iconify/vue";
// import {useBlogStore} from "~/store/blog_posts";

const store = useCategoriesStore()
// const blogStore = useBlogStore();
const groupedPosts = ref({})

async function getBlogByTag(tags) {
  if (Array.isArray(tags) && tags.length > 1) {
    // Fetch posts that contain all specified tags
    return await queryContent('blog')
        .where({ tags: { $contains: tags } })
        .only(['title','summary','_path'])
        .sort({ publishDateTime: -1 })
        .find();
  } else {
    // Fetch posts that contain the single specified tag
    const tag = Array.isArray(tags) ? tags[0] : tags;
    return await queryContent('blog')
        .where({ tags: { $in: tag } })
        .only(['title','summary','_path'])
        .sort({ publishDateTime: -1 })
        .find();
  }
}

async function groupPostsByCombinationsOfTags(tagCombinations) {

  const localGroupedPosts = {};

  const allPromises = tagCombinations.map(async combination => {
    const { title, related_tags } = combination;

    // Fetch posts for the combination of tags (or single tag)
    const postsForCombination = await getBlogByTag(related_tags);

    // Assuming you don't want duplicate posts for a combination,
    // you'd want to de-duplicate them if you're fetching by multiple single tags
    localGroupedPosts[title] = [...new Set(postsForCombination)];

  });

  await Promise.all(allPromises);

  groupedPosts.value = localGroupedPosts;
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

console.log("Before:", groupedPosts.value);
console.log("Categories:", store.categories);

if (Object.keys(groupedPosts.value).length === 0) {
  // Fetch the grouped posts if not already loaded
  await groupPostsByCombinationsOfTags(store.categories);
}

console.log("After:", groupedPosts.value);

const filteredPosts = Object.fromEntries(
    Object.entries(groupedPosts.value).filter(([key, value]) => value.length > 0)
);

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

</script>

<template>
<v-container fluid>
  <v-row >
    <v-col cols="12" lg="6" v-for="(item, key) in filteredPosts" :key="key">
<!--      :color="getRandomColor()"-->
      <v-card
          height="100%"
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