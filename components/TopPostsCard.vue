<script setup>
import { useDisplay } from "vuetify";

defineProps({
  image: {
    type: String,
    default: "/img/blog1.jpeg",
  },
  title: {
    type: String,
    default: "Blog One",
  },
  description: {
    type: String,
    default: "Learn how to do stuff",
  },
  date: {
    type: String,
    default: "August 23, 2002",
  },
  path: {
    type: String,
    default: "/",
  },
  tags: {
    type: Array,
    default: () => [],
  },
  article: {
    type: Boolean,
    default: false,
  },
});

const { smAndUp } = useDisplay();
</script>
<template>
  <v-card height="100%" align-top :to="path" variant="text">
    <v-img
      :src="image"
      :href="path"
      height="200"
      cover
      alt="Post Image"
      rounded
      style="border: 2px solid #ccc; border-radius: 8px"
    />

    <v-card-text class="pl-0">
      <v-row align-content="center">
        <v-col cols="12">
          <h2 :href="path" class="main-web-text-style">{{ title }}</h2>
          <v-chip
            variant="outlined"
            class="mr-2"
            v-for="(tag, index) in tags"
            :key="index"
            >{{ tag }}</v-chip
          >
        </v-col>
        <v-col cols="12" v-if="smAndUp && article" class="pt-0">
          <span :href="path" class="main-web-text-style">{{
            description
          }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style scoped>
.card-image {
  object-fit: cover;
}
.main-web-text-style {
  font-family: "PT Sans Caption", sans-serif;
}
</style>