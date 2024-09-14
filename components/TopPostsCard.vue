<script setup>
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
});
</script>
<template>
  <v-card height="60vh" align-top :to="path" variant="outlined">
    <v-img :src="image" height="200" cover alt="Post Image" />
    <v-card-text>
      <v-row align-content="center">
        <v-col cols="12">
          <h2 :href="path" class="main-web-text-style">{{ title }}</h2>
        </v-col>
        <v-col cols="12">
          <p class="main-web-text-style">{{ date }}</p>
        </v-col>
        <v-col cols="12">
          <p :href="path" class="main-web-text-style">{{ description }}</p>
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