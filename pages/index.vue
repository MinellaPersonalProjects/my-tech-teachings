<template>
  <NuxtLayout>
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12">
          <hero-bar />
        </v-col>
        <v-col cols="12">
          <section>
            <v-container>
              <v-row align="center" justify="center" class="text-center">
                <h1 style="font-size: 30px" class="ma-4">Latest Articles</h1>
              </v-row>
              <v-row>
                <latest-posts />
              </v-row>
            </v-container>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.sect1 {
  background-color: #f5f5dc6d;
}
</style>