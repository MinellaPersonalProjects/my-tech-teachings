<script setup>
const props = defineProps(["data", "sectiontitle", "article"]);
</script>
<template>
  <v-row>
    <v-col cols="12" md="4" v-for="post in data" :key="post.slug">
      <top-posts-card
        style="margin-bottom: 10px"
        :date="post.publishDate"
        :description="post.summary"
        :image="post.myImage"
        :path="post._path"
        :title="post.title"
        :tags="post.tags"
        :article="article"
      />
    </v-col>
  </v-row>
</template>
<style scoped>
.main-web-text-style {
  font-family: "PT Sans Caption", sans-serif;
}
</style>