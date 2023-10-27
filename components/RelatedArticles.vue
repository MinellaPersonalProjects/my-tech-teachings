<template>
  <div>
    <v-row>
      <v-col>
        <h2 class="blog-aside-title mb-2">Continue Reading</h2>
        <ul class="list-none">
          <template v-for="item in surround">
            <li v-if="item" class="first:mt-0 mt-4 md:mt-1">
              <NuxtLink
                  :to="item._path + '/'"
                  class="hover-underline hover-text-brand-primary"
                  :aria-label="item.title"
                  :style="{ color: theme.global.current.value.dark? 'white' : 'black' }"
              >
                {{ item.title }}
              </NuxtLink>
              <p
                  class="no-underline md-hidden text-sm leading-sm md-text-xs md-leading-xs mt-1"
                  :style="{ color: theme.global.current.value.dark? 'white' : 'black' }"
              >
                {{ item.summary }}
              </p>
            </li>
          </template>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import {useTheme} from "vuetify";

defineProps({
  surround: {
    type: Array,
    required: true,
  },
});

const theme = useTheme()
</script>

<style scoped>
.list-none {
  list-style: none; /* Remove the default bullet point */

  /* Use the ::before pseudo-element to add a black star */
  & > li::before {
    content: "★"; /* Unicode character for a black star */
    color: #000; /* Set the color to black */
    margin-right: 0.5rem; /* Adjust the spacing between the star and list item */
  }
}


.blog-aside-title {
  font-size: 1.0rem;
  text-decoration: none;
}

.hover-underline:hover {
  text-decoration: underline;
  color: cornflowerblue;
}

.hover-text-brand-primary {
  text-decoration: none;
  color: black;
}
.hover-text-brand-primary:hover {
  color: cornflowerblue; /* Set your desired hover color */
}

.md-hidden {
  display: none;
}

.md-text-xs {
  font-size: 0.875rem;
}

.md-leading-xs {
  line-height: 1.25;
}
</style>
