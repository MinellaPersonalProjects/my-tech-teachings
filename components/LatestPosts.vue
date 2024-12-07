<script setup>
const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("blog").sort({ publishDateTime: -1 }).find()
);

const tags = computed(() => {
  const allTags = blogs.value?.flatMap((post) => post.tags) || [];
  return [...new Set(allTags)];
});

const selectedItem = ref({});
const search = ref("");
const blogCountLimit = 6;
const blog_data = blogs.value;

function data_count(value) {
  return Math.ceil(value.length / blogCountLimit);
}

function setSearch(value) {
  search.value = value;
}

function submitSearch(value) {
  selectedItem.value = value;
}

function isSearchEmpty() {
  // Use trim() to remove whitespace characters and check if the result is empty
  const yes = search.value.trim() === "";
  console.log(yes);
  return yes;
}

const noResult = computed(() => {
  return selectedItem.value.length === 0 && !isSearchEmpty.value;
});
</script>

<template>
  <v-container class="container-height">
    <v-row>
      <v-col cols="12" lg="3" md="3" sm="12" xl="3">
        <v-row>
          <v-col cols="12" class="pt-0">
            <posts-search
              :blog_data="blog_data"
              :blog_link="'/'"
              @submit="submitSearch"
              @search="setSearch"
            />
          </v-col>

          <v-col cols="12" class="pt-0">
            <span>Tags</span>
            <br />
            <v-card variant="text" class="mt-3">
              <v-chip v-for="(tag, index) in tags" :key="index">{{
                tag
              }}</v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-divider vertical> </v-divider>
      <v-col cols="12" lg="9" md="9" sm="12" xl="9">
        <v-container v-if="selectedItem.length > 0">
          <posts-list :data="selectedItem" />
          <posts-pagination
            v-if="data_count(selectedItem) > 1"
            class="mt-8"
            :currentPage="1"
            :totalPages="data_count(selectedItem)"
            :nextPage="data_count(selectedItem) > 1"
            baseUrl="/"
            pageUrl="/page/"
          />
        </v-container>
        <v-container v-else-if="noResult">
          <h1>
            No results matching "<strong>{{ search }}</strong
            >".
          </h1>
        </v-container>
        <v-container v-else>
          <ContentQuery
            path="/blog"
            :only="[
              'title',
              'summary',
              'publishDate',
              'myImage',
              '_path',
              'tags',
            ]"
            :sort="{
              publishDateTime: -1,
            }"
            :limit="blogCountLimit"
            v-slot="{ data }"
          >
            <posts-list :data="data" :sectiontitle="'Latest Posts'" />
            <posts-pagination
              v-if="data_count(selectedItem) > 1"
              class="mt-8"
              :currentPage="1"
              :totalPages="data_count(selectedItem)"
              :nextPage="data_count(selectedItem) > 1"
              baseUrl="/"
              pageUrl="/page/"
            />
          </ContentQuery>
          <posts-pagination
            v-if="data_count(blog_data) > 1"
            class="mt-8"
            :currentPage="1"
            :totalPages="data_count(blog_data)"
            :nextPage="data_count(blog_data) > 1"
            baseUrl="/"
            pageUrl="/page/"
          />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.container-height {
  height: 100%;
}
</style>