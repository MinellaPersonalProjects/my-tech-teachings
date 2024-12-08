<script setup>
const { params, query } = useRoute();

const getPageTag = () => {
  return parseInt(query.page || 1);
};

const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("blog").sort({ publishDateTime: -1 }).find()
);

const selectedItem = ref({});
const search = ref("");
const blogCountLimit = 5;
const blog_data = blogs.value;

const tags = computed(() => {
  const allTags = blogs.value?.flatMap((post) => post.tags) || [];
  return [...new Set(allTags)];
});

const getPageLimit = (totalPosts) => {
  return Math.ceil(totalPosts / blogCountLimit);
};

const selectedTag = params.tag || undefined;

function selectTag(tag) {
  if (tag === selectedTag) return; // Avoid reloading the same tag
  router.push(tag ? `/tags/${tag}` : "/"); // Navigate to the tag page or home
}

const router = useRouter();
let pageNo;
try {
  pageNo = getPageTag();
  if (isNaN(pageNo)) {
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
          <section
            style="
              background-color: #f5f5dc6d;
              background-image: url('https://i.imgur.com/uqhgY6e.png');
              background-size: cover;
            "
          >
            <v-row no-gutters>
              <v-col cols="12" md="5" lg="5" xl="6" class="ml-10">
                <h1 style="font-size: 100px">
                  Welcome to Nkem's Tech Teachings
                </h1>
              </v-col>
              <v-row align="center" justify="center">
                <v-col cols="12" md="6" lg="6" xl="6">
                  <v-card
                    height="80%"
                    width="100%"
                    class="ml-0"
                    rounded="circle"
                    variant="outlined"
                    color="gray"
                  >
                    <v-img src="https://i.imgur.com/Xy3RenC.png"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-row>
          </section>
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
                    <!-- Query for blog posts by tag or page number -->
                    <ContentQuery
                      path="/"
                      :where="
                        selectedTag
                          ? { tags: { $contains: selectedTag } }
                          : undefined
                      "
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
                      :skip="blogCountLimit * (getPageTag() - 1)"
                      :limit="blogCountLimit"
                    >
                      <!-- In case posts are found -->
                      <template v-slot="{ data }">
                        <v-row>
                          <!-- Sidebar with search and tags -->
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
                                <span class="mb-6" style="font-size: 18px"
                                  >Tags</span
                                >
                                <v-card variant="outlined">
                                  <v-card-title>
                                    <v-row>
                                      <v-col
                                        cols="12"
                                        sm="8"
                                        md="8"
                                        lg="8"
                                        xl="8"
                                      ></v-col>
                                      <v-col
                                        cols="12"
                                        sm="4"
                                        md="4"
                                        lg="4"
                                        xl="4"
                                        class="pr-0"
                                        ><v-btn
                                          variant="text"
                                          color="red"
                                          rounded-lg
                                          @click="router.push('/')"
                                          class="position-absolute top-0 right-0 m-2 custom-border-btn"
                                        >
                                          <span style="font-size: 11px"
                                            >Clear</span
                                          >
                                          <v-icon class="pr-0"
                                            >mdi-close</v-icon
                                          ></v-btn
                                        ></v-col
                                      >
                                    </v-row>
                                  </v-card-title>
                                  <br />
                                  <v-card-text variant="text" class="mt-3">
                                    <v-chip
                                      v-for="(tag, index) in tags"
                                      :key="index"
                                      @click="selectTag(tag)"
                                      class="cursor-pointer mr-2"
                                      variant="outlined"
                                      :class="{
                                        'bg-primary text-white':
                                          tag === selectedTag,
                                        'bg-light text-dark':
                                          tag !== selectedTag,
                                      }"
                                    >
                                      {{ tag }}
                                    </v-chip>
                                  </v-card-text>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-col>

                          <!-- Vertical divider -->
                          <v-divider vertical></v-divider>

                          <!-- Main content area -->
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
                                :sectiontitle="
                                  selectedTag
                                    ? `Posts Tagged: ${selectedTag}`
                                    : 'Latest Posts'
                                "
                              />
                              <posts-pagination
                                v-if="data_count(data) > blogCountLimit"
                                class="mt-8"
                                :currentPage="getPageTag()"
                                :totalPages="
                                  Math.ceil(data_count(data) / blogCountLimit)
                                "
                                :baseUrl="
                                  selectedTag ? `/tags/${selectedTag}` : '/'
                                "
                              />
                            </v-container>
                          </v-col>
                        </v-row>
                      </template>

                      <!-- In case no posts are found -->
                      <template #not-found>
                        <v-container>
                          <h1>
                            No posts found. Try searching or selecting another
                            tag.
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

.custom-border-btn {
  border-left: 2px solid #000; /* Adjust color and thickness */
  border-bottom: 2px solid #000; /* Adjust color and thickness */
}
</style>