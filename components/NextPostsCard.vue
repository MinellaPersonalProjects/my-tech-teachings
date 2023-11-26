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
    <v-card :to="path" variant="outlined">
        <v-card-title class="main-web-text-style" >{{ title }}</v-card-title>
          <v-card-text>
            <v-row align-content="center">
                <v-col cols="12">
                    <p class="main-web-text-style">{{ description }}</p>
                </v-col>
                <v-col cols="12">
                    <p class="main-web-text-style">{{ date }}</p>
                </v-col>
            </v-row>
          </v-card-text>
    </v-card>
</template>
<style scoped>
  .card-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
 .main-web-text-style{
   font-family: 'PT Sans Caption',sans-serif;
 }
</style>