<script setup lang="ts">
import {useTheme} from "vuetify";
import {useCategoriesStore} from "~/store/categories";

const theme = useTheme()

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

const { data: blogs } = await useAsyncData('blogs', () => queryContent('blog')
    .sort({ publishDateTime: -1 })
    .find())

const blog_data = blogs.value
const latest = blog_data[0]

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


if (Object.keys(groupedPosts.value).length === 0) {
  // Fetch the grouped posts if not already loaded
  await groupPostsByCombinationsOfTags(store.categories);
}


const filteredPosts = Object.fromEntries(
    Object.entries(groupedPosts.value).filter(([key, value]) => value.length > 0)
);


const displayedPosts = (value) => {
  // Slice the first three items from filteredPosts
  const maxItems = 9; // Set the maximum number of items to display
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
  <NuxtLayout>
    <v-container>
      <v-card
          class="px-4 py-10 mx-auto"
          :class="{
                'bg-white': !theme.global.current.value.dark,
                'dark:bg-gray-800': theme.global.current.value.dark,
              }"
          :elevation="theme.global.current.value.dark ? 2 : 0"
      >
        <v-row>
          <v-col cols="12" >
            <div class="row-with-line">
            </div>
            <v-row justify="center">
              <!-- Headline -->
              <h1 class="main-head-text">
                Welcome to my Blog,
              </h1>

              <p class="main-text">
                Here, you'll find a treasure trove of coding tutorials, insightful advice for beginners, and a showcase of some fun projects. <br/>
                Whether you're taking your first steps into the coding universe or looking to level up your skills, this is your go-to destination.<br/>
                Let's explore the art of programming, one line of code at a time </p>
            </v-row>
            <div class="row-with-line">
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" v-for="item in displayedPosts(blog_data)">
              <v-card variant="outlined" :to="item._path">
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle>{{ item.tags.join(', ') }}</v-card-subtitle>
                <v-card-text>{{ item.summary }}</v-card-text>
              </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </NuxtLayout>
</template>

<style scoped>
.row-with-line {
  position: relative;
  width: 100%;
  padding: 20px; /* Adjust as needed */
}
.main-text{
  font-family: 'PT Sans Caption',sans-serif;
  font-size: 18px;
  line-height: 1.8;
}
.main-head-text{
  font-family: "American Typewriter",emoji;
  font-size: 40px;
}
</style>