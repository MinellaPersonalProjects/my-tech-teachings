<script setup lang="ts">
import {useTheme} from "vuetify";

const props = defineProps({
  value: {
    type: Array,
    default: []
  },
})

const length = props.value.length

function editTitle(title){
  const parts = title.split(':');

// Check if there is a colon in the title
  if (parts.length > 1) {
    // Select the part before the colon
    return parts[0].trim(); // This will print "Part 1"
  } else {
    // If there is no colon, use the original title
    return title;
  }
}

const theme = useTheme()

</script>
<!-- TODO create longer card with category name as title then smaller cards with blog title and when you hover it shows description-->
<template>
  <v-row class="cont">
      <v-col
          cols="12"
          sm="3"
          md="5"
          lg="4"
          xl="4"
          v-for="(item, index) in props.value"
          class="stacked-cards"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
              height="200px"
              width="300px"
              style="margin: 20px"
              variant="outlined"
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              :style="{ zIndex: length - index }"
              class="ml-3 stacked-card"
              v-bind="props"
              :to="item._path"
          >
            <v-card-title
                style="white-space: normal;"
            >{{ editTitle(item.title) }}</v-card-title>
            <v-expand-transition>
              <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out v-card--reveal"
                  :style="{ background: theme.global.current.value.dark? 'white' : 'black',
                   color: theme.global.current.value.dark? 'black' : 'white'}"
                  style="height: 100%;"
              >
                {{ item.summary }}
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
  </v-row>
</template>

<style scoped>
.cont{
  overflow-y: auto;
  overflow-x: auto;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

.stacked-cards {
  position: relative;
  height: 500px; /* Adjust based on content */
}

.stacked-card {
  position: absolute;
  top: 0;
  transition: 0.3s ease-in-out;
}

.stacked-card:not(:first-child) {
  top: 20px; /* This value determines the initial stacking offset */
}

.card-hover {
  top: 0 !important;
}

/* When a card is hovered, we apply the hover effect to all previous siblings */
.stacked-card:hover,
.stacked-card:hover ~ .stacked-card {
  transform: translateY(-10px) rotate(-5deg);
}

</style>