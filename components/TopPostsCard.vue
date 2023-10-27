<script setup>
defineProps({
  image: {
    type: String,
    default: '/img/blog1.jpeg',
  },
  title: {
    type: String,
    default: 'Blog One'
  },
  description: {
    type: String,
    default: 'Learn how to do stuff'
  },
  date: {
    type: String,
    default: 'August 23, 2002'
  },
  path: {
    type: String,
    default: '/'
  }
})
</script>
<template>
  <v-row>
    <v-col cols="4">
      <v-card height="30vh" align-top :to="path">
        <img
            cover
            :src="image"
            class="card-image"
        />
      </v-card>
    </v-col>
    <v-col cols="8">
      <v-row align-content="center">
        <v-col cols="12">
          <h2 :href="path" class="main-web-text-style">{{ title }}</h2>
        </v-col>
        <v-col cols="12">
          <p :href="path" class="main-web-text-style">{{ description }}</p>
        </v-col>
        <v-col cols="12">
          <p class="main-web-text-style">{{ date }}</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped>
  .card-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
 .main-web-text-style{
   font-family: 'PT Sans Caption',sans-serif;
 }
</style>