<script setup lang="ts">
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
import { useDisplay } from "vuetify";

const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("blog").sort({ publishDateTime: -1 }).find()
);

const blog_data = blogs.value;

const displayedPosts = (value) => {
  // Slice the first three items from filteredPosts
  const maxItems = 6; // Set the maximum number of items to display
  if (value?.length <= maxItems) {
    // If there are fewer than or equal to 3 items, display all of them
    return value;
  } else {
    // If there are more than 3 items, display only the first 3
    return value?.slice(0, maxItems);
  }
};

const { smAndDown } = useDisplay();

function getShortTitle(title) {
  const splitTitle = title.split(":");
  return splitTitle[0]; // Return the part before the colon
}

const theme = useTheme();
const isDark = ref(false);
const theme_name = ref("light");

watch(
  () => theme.global.current.value.dark,
  (dark) => {
    isDark.value = dark;
    theme_name.value = dark ? "light" : "dark";
  }
);
</script>

<template>
  <NuxtLayout>
    <v-container>
      <v-card
        class="px-4 py-10 mx-auto"
        theme="theme_name"
        :elevation="isDark ? 2 : 0"
      >
        <v-row>
          <v-col cols="12">
            <div class="row-with-line"></div>
            <v-row justify="center">
              <!-- Headline -->
              <h1 class="main-head-text">Welcome to Nkem's Tech Teachings,</h1>

              <p class="main-text">
                Here, you'll find a treasure trove of coding tutorials,
                insightful advice for beginners, and a showcase of some fun
                projects. <br />
                Whether you're taking your first steps into the coding universe
                or looking to level up your skills, this is your go-to
                destination.<br />
                Let's explore the art of programming, one line of code at a time
              </p>
            </v-row>
            <div class="row-with-line"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" v-for="item in displayedPosts(blog_data)">
            <v-card variant="outlined" :to="item._path" height="100%">
              <!-- <v-card-title :style="{whiteSpace: smAndDown? 'normal' : 'nowrap' }">{{ item.title }}</v-card-title> -->
              <v-card-title
                v-if="smAndDown"
                :style="{
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  fontSize: '14px',
                  hyphens: 'auto',
                }"
              >
                {{ getShortTitle(item.title) }}
              </v-card-title>
              <v-card-title v-else>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.tags.join(", ") }}</v-card-subtitle>
              <v-card-text class="hidden-sm-and-down">{{
                item.summary
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <v-btn to="/blog" color="blue">See All Articles</v-btn>
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
.main-text {
  font-family: "PT Sans Caption", sans-serif;
  font-size: 18px;
  line-height: 1.8;
}
.main-head-text {
  font-family: "American Typewriter", emoji;
  font-size: 40px;
}
</style>