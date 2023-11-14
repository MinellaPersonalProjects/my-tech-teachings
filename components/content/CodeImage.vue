<template>
    <v-card class="code-image-block" variant="tonal">
        <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="start"
        >
            <v-tab value="option-1">Code</v-tab>
            <v-tab value="option-2">Result</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item
              value="option-1"
            >
              <v-container fluid>
                <div>
                 <pre><code><slot name="code"/></code></pre>
                </div>
               </v-container>
            </v-window-item>
            <v-window-item
              value="option-2"
            >
              <v-container fluid>
                <slot />
               </v-container>
            </v-window-item>
        </v-window>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  const tab = ref(null)
  
  const props = defineProps({
    code: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    }
  });
  </script>
  
  <style>
  .code-image-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  .code-block {
    width: 100%;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
  }
  .image-block {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  </style>
  