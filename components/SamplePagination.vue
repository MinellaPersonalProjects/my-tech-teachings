<script setup>
import {Icon} from "@iconify/vue";

const props = defineProps(['data', 'sectiontitle'])
const perPage = 2; // Number of posts per page
const totalPages = ref(2)

if (props.data) {
  totalPages.value = Math.ceil(props.data.length / perPage)
}

// const totalPages = computed(() => {
//   if (props.data) {
//     return Math.ceil(props.data.length / perPage)
//   }
//   else {
//     return 2;
//   }
// });

const currentPage = ref(1)

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
function nextPage() {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
}

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return props.data.slice(startIndex, endIndex);
})

const pageRange = [Math.max(1, currentPage.value - 1), currentPage.value, Math.min(totalPages, currentPage.value + 1)];

const pageNumbersToShow = computed(() => {
  const maxPageButtonsToShow = 4; // Number of page buttons to show
  const pageNumbers = [];

  if (totalPages <= maxPageButtonsToShow) {
    // Show all page numbers if there are fewer than maxPageButtonsToShow pages
    for (let i = 2; i <= totalPages - 1; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Show a limited range of page numbers around the current page
    let startPage = Math.max(currentPage.value - Math.floor(maxPageButtonsToShow / 2), 2);
    let endPage = Math.min(startPage + maxPageButtonsToShow - 1, totalPages-1);

    if (startPage > 1) {
      // Add ellipsis if there are pages before the first page to show
      pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      // Add ellipsis if there are pages after the last page to show
      pageNumbers.push('...');
    }
  }
  return pageNumbers;
})

function goToPage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    currentPage.value = pageNumber;
  }
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 style="margin-bottom: 10px;" class="main-web-text-style">{{ props.sectiontitle }}</h1>
      </v-col>
      <v-col cols="12">
        <v-list>
          <v-list-item v-for="post in paginatedPosts" :key="post.slug">
            <top-posts-card style="margin-bottom: 10px"
                            :date="post.publishDate"
                            :description="post.summary"
                            :image="post.myImage"
                            :path="post._path"
                            :title="post.title"
            />
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12">
        <!-- Pagination controls -->
        <v-row align="center" justify="center">
          <v-btn
              icon
              @click="previousPage"
              variant="outlined"
              class="btn-space"
              :disabled="currentPage === 1"
              rounded="0"
          >
            <Icon icon="bx:left-arrow" style="font-size: 36px;" />
          </v-btn>

          <!-- First Page -->
          <v-btn
              @click="goToPage(1)"
              :active="currentPage === 1"
              variant="outlined"
              class="btn-space"
              rounded="0"
              icon
          >
            1
          </v-btn>

          <template v-for="page in pageNumbersToShow" :key="page">
            <template v-if="page === '...'">
              <!-- Ellipsis -->
              <span style="font-weight: bold; font-size: 20px; font-family:'American Typewriter',serif ;padding: 4px 4px; color: #333; "
              >...</span>
            </template>
            <template v-else>
              <!-- Page Number Button -->
              <v-btn
                  @click="goToPage(page)"
                  :active="currentPage === page"
                  variant="outlined"
                  class="btn-space"
                  rounded="0"
                  icon
              >
                {{ page }}
              </v-btn>
            </template>
          </template>

          <!-- Last Page -->
          <v-btn
              v-show="totalPages > 1"
              :active="currentPage === totalPages"
              @click="goToPage(totalPages)"
              variant="outlined"
              class="btn-space"
              rounded="0"
              icon
          >{{ totalPages }}
          </v-btn>
          <v-btn
              icon
              @click="nextPage"
              variant="outlined"
              :disabled="currentPage === totalPages"
              class="btn-space"
              rounded="0"
          >
            <Icon icon="bx:right-arrow" style="font-size: 36px;" />
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.main-web-text-style{
  font-family: 'PT Sans Caption',sans-serif;
}
.btn-space{
  margin: 5px;
}
</style>