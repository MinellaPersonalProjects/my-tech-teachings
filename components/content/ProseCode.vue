<template>
  <div class="container">
        <span v-if="filename" class="filename-text">
            {{ filename }}
        </span>
        <v-btn
            v-if="languageText"
            variant="flat"
            class="language-text"
            @click="copy(<string>code)"
        >
          {{ languageText }}
          <IconsCheck v-if="copied" class="w-5 h-5 ml--1" width="20" height="20" />
          <IconsCopy icon="mdi-copy" v-else class="w-5 h-5" width="20" height="20" />
        </v-btn>
        <v-btn
            v-else
            variant="flat"
            class="language-text"
            @click="copy(<string>code)"
          >
            Copy
            <IconsCheck v-if="copied" class="w-5 h-5 ml--1" width="20" height="20" />
            <IconsCopy icon="mdi-copy" v-else class="w-5 h-5" width="20" height="20" />
        </v-btn>
    <div class="code-cont">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// https://mokkapps.de/blog/how-to-create-a-custom-code-block-with-nuxt-content-v2/
import { useClipboard } from '@vueuse/core';
import { computed } from 'vue';

const { copy, copied, text } = useClipboard();

const prop = defineProps({
      code: String,
      language: String,
      filename: String,
      highlights: Array,
      meta: String,
    })
const languageMap = {
  java: {
    text: 'Java'
  },
  javascript: {
    text: 'JavaScript'
  },
  python: {
    text: 'Python'
  },
  bash: {
    text: 'Bash'
  },
  html: {
    text: 'HTML'
  },
  vue: {
    text: 'Vue'
  },
  scss: {
    text: 'SCSS'
  }
};

const languageText = computed(() => (prop.language ? languageMap[prop.language]?.text : null));
</script>

<style scoped>
.container {
  width: 100%;
  margin-top: 1.5rem; /* Equivalent to 'my-6' in Tailwind */
  margin-bottom: 1.5rem;
  border-radius: 0.375rem; /* Equivalent to 'rounded-md' in Tailwind */
  background-color: #000; /* Equivalent to 'bg-black' in Tailwind */
  border: 1px solid #e5e7eb; /* Equivalent to 'border border-brand_primary/50' in Tailwind */
  padding-top: 2rem; /* Equivalent to 'pt-8' in Tailwind */
  position: relative;
  overflow: auto; /* Enable both horizontal and vertical scrolling */
  //white-space: nowrap; /* Prevent line breaks to force horizontal scrolling */
}

.code-cont{
  width: 100%;
  max-height: 40vh;
  position: relative;
  overflow: auto; /* Enable both horizontal and vertical scrolling */
  white-space: nowrap; /* Prevent line breaks to force horizontal scrolling */
  margin-bottom: 30px;
  margin-top: 5px;
}


.container pre {
  display: flex;
  overflow-x: auto;
  padding: 0.625rem; /* Equivalent to 'pb-4' in Tailwind */
  font-size: 0.875rem; /* Equivalent to 'text-sm' in Tailwind */
  line-height: 1.625;
  counter-reset: lines;
}

@media (min-width: 768px) {
  .container pre {
    font-size: 1rem; /* Equivalent to 'text-base' in Tailwind */
  }
}

.container pre > code .line {
  word-wrap: break-word;
}

.bottom-container {
  position: absolute;
  right: 0;
  bottom: 1rem; /* Equivalent to 'bottom-4' in Tailwind */
  padding-right: 0.5rem; /* Equivalent to 'pr-2' in Tailwind */
  padding-bottom: 0.5rem; /* Equivalent to 'pb-2' in Tailwind */
}

@media (min-width: 768px) {
  .bottom-container {
    top: 2.5rem; /* Equivalent to 'top-10' in Tailwind */
  }
}

.copy-container {
  display: flex;
}

.filename-text {
  position: absolute;
  top: 0;
  left: 1rem; /* Equivalent to 'left-4' in Tailwind */
  padding-top: 0.25rem; /* Equivalent to 'py-1' in Tailwind */
  font-size: 0.625rem; /* Equivalent to 'text-xs' in Tailwind */
  color: rgba(255, 255, 255, 0.75); /* Equivalent to 'text-background/75' in Tailwind */
}

@media (min-width: 768px) {
  .filename-text {
    font-size: 1rem; /* Equivalent to 'text-sm' in Tailwind */
  }
}

.language-text {
  text-transform: unset !important;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #005cc5; /* Equivalent to 'bg-brand_primary' in Tailwind */
  color: rgba(255, 255, 255, 0.75); /* Equivalent to 'text-background' in Tailwind */
  padding: 0.5rem 1rem; /* Equivalent to 'px-2 py-1' in Tailwind */
  border-radius: 0 0.375rem 0 0;
}

.container pre code {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container pre code .line {
  display: inline-table;
  min-height: 1rem;
}

.container pre code .line::before {
  width: 1rem; /* Equivalent to 'w-4' in Tailwind */
  margin-right: 1.5rem; /* Equivalent to 'mr-6' in Tailwind */
  display: inline-block;
  text-align: left;
  counter-increment: lines;
  content: counter(lines);
  color: rgb(255, 255, 255);
}

.container pre code .highlight {
  display: block;
  margin: 0 -0.5rem; /* Equivalent to '-mx-4' in Tailwind */
  padding-right: 1rem; /* Equivalent to 'pr-4' in Tailwind */
  padding-left: 0.75rem; /* Equivalent to 'pl-3' in Tailwind */
  border-left: 0.25rem solid #005cc5; /* Equivalent to 'border-l-4 border-brand_primary' in Tailwind */
  content: '';
  background-color: #363b46;
}

button {
  padding: 0.25rem 0.5rem; /* Equivalent to 'p-1' in Tailwind */
  background-color: #333; /* Define your background color */
  border: 1px solid #ccc; /* Define your border color and width */
  border-radius: 0.375rem; /* Equivalent to 'rounded-md' in Tailwind */
  color: #fff; /* Define your text color */
  cursor: pointer;
}

/* Hover styles for the button */
button:hover {
  background-color: #005cc5; /* Equivalent to 'hover:bg-brand_primary' in Tailwind */
  border-color: #005cc5; /* Equivalent to 'hover:border-brand_primary' in Tailwind */
  color: #fff; /* Equivalent to 'hover:text-background' in Tailwind */
}

/* Icon styles */
.w-5 {
  width: 20px; /* Equivalent to 'w-5' in Tailwind */
}

.h-5 {
  height: 20px; /* Equivalent to 'h-5' in Tailwind */
}

</style>