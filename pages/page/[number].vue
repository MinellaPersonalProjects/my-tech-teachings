<script setup>
const { params } = useRoute();

const getPageNumber = () => {
  return Number(params.number);
};

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

const tags = computed(() => {
  const allTags = blogs.value?.flatMap((post) => post.tags) || [];
  return [...new Set(allTags)];
});

const router = useRouter();
let pageNo;
try {
  pageNo = getPageNumber();
  if (isNaN(pageNo) || pageNo <= 0) {
    router.replace("/");
  }
} catch (err) {
  console.error(err);
  router.replace("/");
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
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12">
          <hero-bar />
        </v-col>
        <v-col cols="12">
          <section>
            <v-container>
              <v-row align="center" justify="center" class="text-center">
                <h1 style="font-size: 30px" class="ma-4">Latest Articles</h1>
              </v-row>
              <v-row>
                <v-container fluid>
                  <v-row>
                    <!-- Query for the given blog page number -->
                    <ContentQuery
                      path="/"
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
                                  <v-chip
                                    v-for="(tag, index) in tags"
                                    :key="index"
                                    class="mr-2"
                                    >{{ tag }}</v-chip
                                  >
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-col>

                          <v-divider vertical> </v-divider>

                          <v-col cols="12" lg="9" md="9" sm="12" xl="9">
                            <v-container v-if="selectedItem.length > 0">
                              <posts-list
                                :data="selectedItem"
                                :sectiontitle="'Search Results'"
                              />
                            </v-container>

                            <v-container v-else-if="noResult">
                              <h1>
                                No results matching "<strong>{{
                                  search
                                }}</strong
                                >".
                              </h1>
                            </v-container>
                            <v-container v-else>
                              <posts-list
                                :data="data"
                                :sectiontitle="'Latest Posts'"
                              />
                              <ContentQuery
                                path="/"
                                :only="[
                                  'title',
                                  'summary',
                                  'publishDate',
                                  'myImage',
                                  '_path',
                                  'tags',
                                ]"
                              >
                                <template v-slot="{ data }">
                                  <posts-pagination
                                    v-if="data_count(data) > 1"
                                    class="mt-8"
                                    :currentPage="getPageNumber()"
                                    :totalPages="data_count(data)"
                                    :nextPage="data_count(data) > 1"
                                    baseUrl="/"
                                    pageUrl="/page/"
                                  />
                                </template>
                                <template #not-found>
                                  <!-- Nothing -->
                                </template>
                              </ContentQuery>
                            </v-container>
                          </v-col>
                        </v-row>
                      </template>
                      <!-- In case not found -->
                      <template #not-found>
                        <!-- Show hero and message -->
                        <v-row>
                          <v-col cols="12" class="pt-0">
                            <posts-search
                              :blog_data="data"
                              :blog_link="'/'"
                              @submit="submitSearch"
                              @search="setSearch"
                            />
                          </v-col>

                          <v-col cols="12" class="pt-0">
                            <span>Tags</span>
                            <br />
                            <v-card variant="text" class="mt-3">
                              <v-chip
                                v-for="(tag, index) in tags"
                                :key="index"
                                >{{ tag }}</v-chip
                              >
                            </v-card>
                          </v-col>

                          <v-divider vertical> </v-divider>

                          <v-col cols="12" lg="9" md="9" sm="12" xl="9">
                            <v-container v-if="selectedItem.length > 0">
                              <posts-list
                                :data="selectedItem"
                                :sectiontitle="'Search Results'"
                              />
                            </v-container>
                          </v-col>
                        </v-row>
                        <v-container>
                          <h1>
                            There are no posts in this page, maybe try searching
                            on another one.
                          </h1>
                        </v-container>
                      </template>
                    </ContentQuery>
                  </v-row>
                </v-container>
              </v-row>
            </v-container>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.sect1 {
  background-color: #f5f5dc6d;
}
</style>