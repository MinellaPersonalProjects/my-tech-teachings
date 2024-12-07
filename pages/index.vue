<script setup>
</script>
<template>
  <NuxtLayout>
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12">
          <section
            style="
              background-color: #f5f5dc6d;
              background-image: url('https://i.imgur.com/uqhgY6e.png');
              background-size: cover;
            "
          >
            <v-row>
              <v-col cols="12" md="5" lg="5" xl="6" class="ml-10">
                <h1 style="font-size: 100px">
                  Welcome to Nkem's Tech Teachings
                </h1>
              </v-col>
              <v-row align="center" justify="center">
                <v-col cols="12" md="6" lg="6" xl="6">
                  <v-card
                    height="80%"
                    width="100%"
                    class="ml-0"
                    rounded="circle"
                    style="background-color: transparent"
                    elevation-16
                  >
                    <v-img src="https://i.imgur.com/Xy3RenC.png"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-row>
          </section>
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