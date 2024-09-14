<template>
  <v-card class="mb-5" variant="outlined">
    <v-toolbar density="compact">
      <span v-if="filename" class="ml-2">
        <i>{{ filename }}</i>
      </span>

      <v-spacer v-if="filename"></v-spacer>

      <v-btn variant="text" v-if="copied">
        <IconsCheck width="20" height="20" />
      </v-btn>
      <v-btn variant="text" rounded="0" v-else @click="copy(code)">
        <IconsCopy icon="mdi-copy" width="20" height="20" />
      </v-btn>
    </v-toolbar>
    <div>
      <pre><slot /></pre>
    </div>
  </v-card>
</template>
  
  <script setup lang="ts">
// https://mokkapps.de/blog/how-to-create-a-custom-code-block-with-nuxt-content-v2/
import { useClipboard } from "@vueuse/core";
import { computed } from "vue";

const { copy, copied, text } = useClipboard();

const prop = defineProps({
  code: String,
  language: String,
  filename: String,
  highlights: Array,
  meta: String,
});
const languageMap = {
  java: {
    text: "Java",
  },
  javascript: {
    text: "JavaScript",
  },
  python: {
    text: "Python",
  },
  bash: {
    text: "Bash",
  },
  html: {
    text: "HTML",
  },
  vue: {
    text: "Vue",
  },
  scss: {
    text: "SCSS",
  },
};

const languageText = computed(() =>
  prop.language ? languageMap[prop.language]?.text : null
);
</script>
