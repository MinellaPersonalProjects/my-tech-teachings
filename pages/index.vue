<script setup lang="ts">
import {useTheme} from "vuetify";

const theme = useTheme()
</script>

<template>
  <NuxtLayout>
    <v-container>
      <v-card
          class="px-4 py-10 mx-auto"
          :class="{
                'bg-white': !theme.global.current.value.dark,
                'dark:bg-gray-800': theme.global.current.value.dark,
              }"
          :elevation="theme.global.current.value.dark ? 2 : 0"
      >
        <v-row>
          <v-col cols="12" >
            <div class="row-with-line">
            </div>
            <v-row justify="center">
              <!-- Headline -->
              <h1 class="main-head-text">
                Welcome to my Blog,
              </h1>

              <p class="main-text">
                Here, you'll find a treasure trove of coding tutorials, insightful advice for beginners, and a showcase of some fun projects. <br/>
                Whether you're taking your first steps into the coding universe or looking to level up your skills, this is your go-to destination.<br/>
                Let's explore the art of programming, one line of code at a time </p>
            </v-row>
            <div class="row-with-line">
            </div>
          </v-col>
        </v-row>
        <v-row>
          <categories-cards />
        </v-row>
      </v-card>
    </v-container>
  </NuxtLayout>
</template>

<style scoped>
.row-with-line {
  position: relative;
  width: 100%;
  padding: 20px; /* Adjust as needed */
}
.main-text{
  font-family: 'PT Sans Caption',sans-serif;
  font-size: 18px;
  line-height: 1.8;
}
.main-head-text{
  font-family: "American Typewriter",emoji;
  font-size: 40px;
}
</style>