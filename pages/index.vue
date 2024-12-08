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
            class="pa-0"
          >
            <v-row>
              <v-col cols="12">
                <h1 class="responsive-title">
                  Welcome to Nkem's Tech Teachings
                </h1>

                <h3
                  style="
                    font-size: 30px;
                    text-align: right;
                    padding-right: 10px;
                  "
                >
                  <i>Home of Your Resident Code Enthusiast</i>
                </h3>
              </v-col>
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