<script setup>
import { useRouter } from "vue-router";

const search = ref("");
const selectedItem = ref({});
const emit = defineEmits(["submit", "search"]);
const props = defineProps(["blog_data", "blog_link"]);
const router = useRouter();

function matchesSearch(title) {
  // Check if the item's title matches the search input
  return title.toLowerCase().includes(search.value.toString().toLowerCase());
}
function matchesTags(tags) {
  // Check if any of the item's tags match the search input
  return tags.some((tag) =>
    tag.toLowerCase().includes(search.value.toString().toLowerCase())
  );
}

function filterItems() {
  if (search.value === "") {
    router.push(`${blog_link}`);
  }

  if (search.value != null) {
    selectedItem.value = props.blog_data.filter(
      (item) => matchesSearch(item.title) || matchesTags(item.tags)
    );
  } else {
    selectedItem.value = {};
  }

  emit("submit", selectedItem.value);
  emit("search", search.value);
}

const clearAndNavigate = () => {
  search.value = "";
  selectedItem.value = props.blog_data;

  emit("search", search.value);
  emit("submit", selectedItem.value);
};
</script>
<template>
  <v-text-field
    v-model="search"
    label="Search"
    clearable
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    style="margin-top: 30px"
    @input="filterItems"
    @click:clear="clearAndNavigate"
  >
  </v-text-field>
</template>