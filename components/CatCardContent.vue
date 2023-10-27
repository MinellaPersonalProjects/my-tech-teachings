<script setup lang="ts">
import {useTheme} from "vuetify";

const props = defineProps({
  value: {
    type: Array,
    default: []
  },
})

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
  <v-row>
      <v-col
          cols="12"
          sm="3"
          md="3"
          lg="4"
          xl="4"
          v-for="item in props.value"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
              height="200px"
              width="100%"
              style="margin: 20px"
              variant="outlined"
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
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
<!--            <v-card-text-->
<!--                style="white-space: normal;"-->
<!--            >{{ item.summary }}</v-card-text>-->
          </v-card>
        </v-hover>
      </v-col>
  </v-row>
</template>

<style scoped>
.overflow-container {
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

.no-wrap {
  width: 100%; /* Set a fixed width to prevent wrapping */
  margin: 20px;
}

</style>