<script setup>
const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("blog").sort({ publishDateTime: -1 }).find()
);

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
  <NuxtLayout>
    <v-container
      fluid
      style="background-color: #f5f5dc6d; background-size: cover"
    >
      <v-container class="container-height">
        <v-row>
          <v-col cols="12" lg="12" md="12" sm="12" xl="6">
            <posts-search
              :blog_data="blog_data"
              :blog_link="'/blog'"
              @submit="submitSearch"
              @search="setSearch"
            />
          </v-col>
          <v-col cols="12"> </v-col>
          <v-col cols="12">
            <v-container v-if="selectedItem.length > 0">
              <posts-list
                :data="selectedItem"
                :sectiontitle="'Search Results'"
                :article="true"
              />
              <posts-pagination
                v-if="data_count(selectedItem) > 1"
                class="mt-8"
                :currentPage="1"
                :totalPages="data_count(selectedItem)"
                :nextPage="data_count(selectedItem) > 1"
                baseUrl="/blog/"
                pageUrl="/blog/page/"
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
                <posts-list
                  :data="data"
                  :sectiontitle="'Latest Posts'"
                  :article="true"
                />
              </ContentQuery>
              <posts-pagination
                v-if="data_count(blog_data) > 1"
                class="mt-8"
                :currentPage="1"
                :totalPages="data_count(blog_data)"
                :nextPage="data_count(blog_data) > 1"
                baseUrl="/blog/"
                pageUrl="/blog/page/"
              />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </NuxtLayout>
</template>

<style scoped>
.container-height {
  height: 100%;
}
</style>