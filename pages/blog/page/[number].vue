<script setup>
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "vuetify";

const { path, params } = useRoute();
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
const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("blog").sort({ publishDateTime: -1 }).find()
);

const selectedItem = ref({});
const search = ref("");
const blogCountLimit = 5;
const blog_data = blogs.value;

const getPageLimit = (totalPosts) => {
  return Math.ceil(totalPosts / blogCountLimit);
};

const getPageNumber = () => {
  return Number(params.number);
};

// Attempt to get the number
const router = useRouter();
let pageNo;
try {
  pageNo = getPageNumber();
  if (isNaN(pageNo) || pageNo <= 0) {
    router.replace("/blog/");
  }
} catch (err) {
  console.error(err);
  router.replace("/blog/");
}

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
    <v-container class="container-height" fluid>
      <v-card
        class="px-4 py-10 mx-auto"
        theme="theme_name"
        :elevation="isDark ? 2 : 0"
      >
        <!-- Query for the given blog page number -->
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
          :skip="blogCountLimit * (getPageNumber() - 1)"
          :limit="blogCountLimit"
        >
          <!-- In case it is found -->
          <template v-slot="{ data }">
            <v-container>
              <v-col cols="12" lg="12" md="12" sm="12" xl="6">
                <posts-search
                  :blog_data="blog_data"
                  :blog_link="'/blog'"
                  @submit="submitSearch"
                  @search="setSearch"
                />
              </v-col>
              <v-container v-if="selectedItem.length > 0">
                <posts-list
                  :data="selectedItem"
                  :sectiontitle="'Search Results'"
                  :article="true"
                />
              </v-container>
              <v-container v-else-if="noResult">
                <h1>
                  No results matching "<strong>{{ search }}</strong
                  >".
                </h1>
              </v-container>
              <v-container v-else>
                <posts-list
                  :data="data"
                  :sectiontitle="'Latest Posts'"
                  :article="true"
                />
                <ContentQuery path="/blog" :only="['title']">
                  <template v-slot="{ data }">
                    <posts-pagination
                      v-if="getPageLimit(data.length) > 1"
                      class="mt-8"
                      :currentPage="getPageNumber()"
                      :totalPages="getPageLimit(data.length)"
                      :nextPage="getPageNumber() < getPageLimit(data.length)"
                      baseUrl="/blog/"
                      pageUrl="/blog/page/"
                    />
                  </template>
                  <template #not-found>
                    <!-- Nothing -->
                  </template>
                </ContentQuery>
              </v-container>
            </v-container>
          </template>
          <!-- In case not found -->
          <template #not-found>
            <!-- Show hero and message -->
            <posts-search
              :blog_data="data"
              :blog_link="'/blog'"
              @submit="submitSearch"
              @search="setSearch"
            />
            <v-container>
              <h1>
                There are no posts in this page, maybe try searching on another
                one.
              </h1>
            </v-container>
          </template>
        </ContentQuery>
      </v-card>
    </v-container>
  </NuxtLayout>
</template>
<style scoped>
.container-height {
  height: 100%;
}
</style>