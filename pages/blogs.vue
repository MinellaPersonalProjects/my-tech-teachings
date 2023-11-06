<script setup>

const { data: blogs } = await useAsyncData('blogs', () => queryContent('blog')
    .sort({ publishDateTime: -1 })
    .find())

const selectedItem = ref({})
const search = ref("")
const blog_data = blogs.value

function matchesSearch(title) {
  // Check if the item's title matches the search input
  return title.toLowerCase().includes(search.value.toString().toLowerCase());
}
function matchesTags(tags) {
  // Check if any of the item's tags match the search input
  return tags.some(tag =>
      tag.toLowerCase().includes(search.value.toString().toLowerCase())
  );
}

function filterItems() {
  if (search.value != null ){
    selectedItem.value = blog_data.filter(item =>
        matchesSearch(item.title) || matchesTags(item.tags)
    );
  }
  else {
    selectedItem.value = {}
  }
}

function isSearchEmpty() {
  // Use trim() to remove whitespace characters and check if the result is empty
  const yes = search.value.trim() === "";
  console.log(yes)
  return yes
}

const noResult = computed(() => {
  return selectedItem.value.length === 0 && !isSearchEmpty.value
})

</script>

<template>
  <NuxtLayout>
    <v-container class="container-height">
      <v-row>
        <v-col cols="12" lg="12" md="12" sm="12" xl="6">
          <v-text-field
              v-model="search"
              placeholder="Search for Blog Topic or Tag"
              clearable
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              style="margin-top: 30px"
              @keyup.enter="filterItems"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">

        </v-col>
        <v-col cols="12">
<!--          add tag chips, when you select combination it'll show the defined categories, if not it'll just show related blog posts-->
<!--          <categories-cards />-->
          <posts-pagination v-if="selectedItem.length > 0"
              :data="selectedItem"
              :sectiontitle="'Search Results'"/>
            <h1 v-else-if="noResult">
              No results matching "<strong>{{ search }}</strong>".
            </h1>
            <posts-pagination v-else
                :data="blog_data"
                :sectiontitle="'Latest Posts'"/>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<style scoped>
.container-height {
  height: 100%;
}
</style>