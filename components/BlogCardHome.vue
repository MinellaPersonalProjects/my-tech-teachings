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
    <v-col cols="12">
      <v-card height="30vh" align-top :to="path" variant="outlined">
        <img
            :src="image"
            class="card-image"
        />
      </v-card>
      <h2 :ref="path">{{ title }}</h2>
      <p :ref="path">{{ description }}</p>
      <p>{{ date }}</p>
    </v-col>
  </v-row>
</template>
<style scoped>
.card-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>