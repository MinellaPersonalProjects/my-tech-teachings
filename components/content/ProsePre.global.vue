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
      <pre><code><slot /></code></pre>
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
<style scoped lang="scss">
.pre_custom {
  overflow-x: hidden;
  border-radius: 6px;
  margin-bottom: 3rem;
  background-color: var(--shiki-default-bg);

  &-head {
    display: flex;
    justify-content: space-between; /* Ensure space between filename and button */
    align-items: center;
    padding: 0.5rem 0.75rem;
    background-color: var(
      --shiki-header-bg
    ); /* Optional for better visibility */

    .filename {
      margin-left: 0;
    }

    .copy-success,
    .copy-btn {
      padding: 0.25em 0.75em;
      border: 1px solid transparent;
      border-radius: 4px;
      cursor: pointer; /* Optional to indicate clickable */
    }

    .copy-success {
      color: lightgreen;
      border-color: transparent;
    }

    .copy-btn {
      color: var(--shiki-default);
      border-color: var(--shiki-default);
    }
  }

  &-body {
    margin: 0;
    padding: 0.75rem 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow-x: auto;

    code {
      display: block; /* Ensure code block takes full width */
      width: 100%;
    }

    .line {
      padding: 0 0.75rem;
      line-height: 1.6;

      span {
        background-color: transparent !important;
      }

      &.highlight,
      &.highlighted {
        background-color: color-mix(
          in srgb,
          var(--shiki-default-bg) 70%,
          #888888
        );
      }

      &::before {
        content: attr(line);
        padding-right: 1.25rem;
        display: inline-block;
        opacity: 0.8;
      }

      &.diff.remove {
        background-color: color-mix(
          in srgb,
          var(--shiki-default-bg) 65%,
          #f43f5e
        );
      }

      &.diff.add {
        background-color: color-mix(
          in srgb,
          var(--shiki-default-bg) 75%,
          #10b981
        );
      }
    }
  }
}
</style>

