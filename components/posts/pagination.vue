<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: Boolean,
    required: true,
  },
  baseUrl: {
    type: String,
    required: true,
  },
  pageUrl: {
    type: String,
    required: true,
  },
});

const pageNumbersToShow = [
  Math.max(1, props.currentPage - 1),
  props.currentPage,
  Math.min(props.totalPages, props.currentPage + 1),
];

const getPageUrl = (pageNo) => {
  return `${props.pageUrl}${pageNo}/`;
};

const prevLink = computed(() => {
  return props.currentPage === 2
    ? props.baseUrl
    : `${props.pageUrl}${props.currentPage - 1}/`;
});
</script>
<template>
  <v-row align="center" justify="center">
    <v-btn
      icon
      :to="prevLink"
      variant="outlined"
      class="ma-2"
      rounded
      :disabled="currentPage === 1"
    >
      <Icon icon="bx:left-arrow" style="font-size: 36px" />
    </v-btn>

    <!-- First Page -->
    <v-btn
      :to="baseUrl"
      :active="currentPage === 1"
      variant="outlined"
      class="ma-2"
      rounded
      icon
    >
      1
    </v-btn>

    <!-- Ellipsis -->
    <span
      v-show="currentPage > 2"
      style="
        font-weight: bold;
        font-size: 20px;
        font-family: 'American Typewriter', serif;
        padding: 4px 4px;
        color: #333;
      "
      >...</span
    >

    <template v-for="page in pageNumbersToShow" :key="page">
      <!-- Page Number Button -->
      <v-btn
        v-show="page !== 1 && page !== totalPages"
        :active="currentPage === page"
        :to="getPageUrl(page)"
        variant="outlined"
        class="ma-2"
        rounded
        icon
      >
        {{ page }}
      </v-btn>
    </template>

    <!-- Ellipsis -->
    <span
      v-show="currentPage < totalPages - 1"
      style="
        font-weight: bold;
        font-size: 20px;
        font-family: 'American Typewriter', serif;
        padding: 4px 4px;
        color: #333;
      "
      >...</span
    >

    <!-- Last Page -->
    <v-btn
      v-show="totalPages > 1"
      :active="currentPage === totalPages"
      :to="getPageUrl(totalPages)"
      variant="outlined"
      class="ma-2"
      rounded
      icon
      >{{ totalPages }}
    </v-btn>
    <v-btn
      @click="nextPage"
      :disabled="currentPage === totalPages"
      :to="getPageUrl(currentPage + 1)"
      icon
      variant="outlined"
      class="ma-2"
      rounded
    >
      <Icon icon="bx:right-arrow" style="font-size: 36px" />
    </v-btn>
  </v-row>
</template>
<style scoped>
.main-web-text-style {
  font-family: "PT Sans Caption", sans-serif;
}
.btn-space {
  margin: 5px;
}
</style>