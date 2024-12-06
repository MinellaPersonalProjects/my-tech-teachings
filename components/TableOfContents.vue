<template>
  <v-card variant="plain" class="card-space" v-show="haveLinks">
    <v-card-title>Table of Contents</v-card-title>
    <v-card-text>
      <v-list lines="one">
        <v-list-item
          v-for="link in props.links"
          :key="link.id"
          class="hover-grey"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-arrow-right"></v-icon>
          </template>
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useTheme } from "vuetify";

const props = defineProps({
  links: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const haveLinks = computed(() => props.links && props.links.length > 0);
</script>

