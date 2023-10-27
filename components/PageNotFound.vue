<script setup lang="ts">

</script>

<template>
  <v-container fluid style="height: 100vh; background-color: white">
    <v-row justify="center">
      <v-col cols="6" sm="6" md="6" lg="6" xl="6">
        <v-row justify="center">
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-card elevation="10" style="background-color: pink">
              <v-card-text>
                <v-row justify="center">
                  <h1 class="heading">404</h1>
                </v-row>
                <v-row justify="center">
                  <h3 class="pgraph">Page Not Found</h3>
                </v-row>
                <v-row justify="center">
                  <v-btn class="homebtn" variant="outlined" color="white" to="/">
                    Return to Home
                  </v-btn>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.heading {
  font-style: normal;
  font-size: 250px;
  font-family: 'Courier New', Courier, monospace,sans-serif;
  font-weight: 700;
  line-height: 1.25;
  color: aliceblue;
  justify-content: center;
}
.pgraph{
  font-style: normal;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace,sans-serif;
  font-weight: 200;
  line-height: 1.25;
  justify-content: center;
  margin-top: -20px;
}

.homebtn{
  text-transform: unset !important;
  font-style: normal;
  font-family: monospace;
  font-weight: 500;
  line-height: 1.25;
  font-size: 14px;
  margin: 20px;
}
</style>