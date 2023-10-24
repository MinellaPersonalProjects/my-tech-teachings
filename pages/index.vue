<script setup lang="ts">

  import BlogCardHome from "~/components/BlogCardHome.vue";
  import BlogContentHome from "~/components/BlogContentHome.vue";

  const blogs = await queryContent('blog')
      .sort({ publishDateTime: 1 })
      .limit(4)
      .find()

  const first = blogs[0]
  const firstPath = first._path

  const second = blogs[1]
  const secondPath = second._path

  const third = blogs[2]
  const thirdPath = third._path

  const fourth = blogs[3]
  const fourthPath = fourth._path

</script>
<template>
  <NuxtLayout>
    <v-container>
      <v-card
          class="px-4 py-10 mx-auto"
          :class="{
                'bg-white': !$vuetify.theme.dark,
                'dark:bg-gray-800': $vuetify.theme.dark,
              }"
          :elevation="$vuetify.theme.dark ? 2 : 0"
      >
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="8">
                <v-card
                    height="80%"
                    :to="firstPath"
                >
                  <img :src="first.myImage" alt="Blog Image" class="card-image"/>
                </v-card>
              </v-col>
              <v-col cols="4">
                <blog-content-home
                    :title="first.title"
                    :description="first.summary"
                    :date="first.publishDate"
                    :path="firstPath"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mt-n6">
          <v-col cols="4">
            <blog-card-home
                :image="second.myImage"
                :title="second.title"
                :description="second.summary"
                :date="second.publishDate"
                :path="secondPath"
            />
          </v-col>
          <v-col cols="4">
            <blog-card-home
                :image="third.myImage"
                :title="third.title"
                :description="third.summary"
                :date="third.publishDate"
                :path="thirdPath"
            />
          </v-col>
          <v-col cols="4">
            <blog-card-home
                :image="fourth.myImage"
                :title="fourth.title"
                :description="fourth.summary"
                :date="fourth.publishDate"
                :path="fourthPath"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </NuxtLayout>
</template>
<style scoped>
  .card-image {
    max-width: 100%;
  }
</style>
