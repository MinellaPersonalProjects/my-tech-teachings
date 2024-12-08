<script setup>
defineProps({
  image: {
    type: String,
    default: "/img/blog1.jpeg",
  },
  title: {
    type: String,
    default: "Home",
  },
  description: {
    type: String,
    default: "See all the other fun applications available",
  },
  date: {
    type: String,
    default: "August 23, 2023",
  },
  path: {
    type: String,
    default: "/",
  },
  author: {
    type: String,
    default: "Nkem Mogbo",
  },
  author_occupation: {
    type: String,
    default: "Software Engineer",
  },
  // readTime: {
  //   type: String,
  // },
});
</script>
<template>
  <v-card :href="path" variant="text" class="d-flex flex-column">
    <v-img
      rounded
      :src="image"
      cover
      :style="{ width: '100%', height: '200px' }"
    ></v-img>
    <v-card-item class="pa-0 mt-2">
      <h3 class="text-wrap">{{ title }}</h3>
      <h5 class="mb-1">{{ date }}</h5>
    </v-card-item>
    <v-card-text class="pa-0">
      <v-row align-content="center">
        <v-col cols="12">
          <p>{{ description }}</p>
        </v-col>
      </v-row>
    </v-card-text>

    <v-spacer></v-spacer>

    <v-card-actions class="pa-0">
      <v-list-item class="w-100 pl-0">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Round&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelGreen&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          ></v-avatar>
        </template>

        <v-list-item-title>{{ author }}</v-list-item-title>

        <v-list-item-subtitle>{{ author_occupation }}</v-list-item-subtitle>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<style>
.card-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
</style>