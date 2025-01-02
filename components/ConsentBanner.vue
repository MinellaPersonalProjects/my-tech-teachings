<template>
  <v-card variant="outlined" elevation-11 class="consent-card">
    <v-card-title>About your Privacy</v-card-title>
    <v-card-text>
      We use third-party cookies to personalize content and to analyze web
      traffic <a>Read more about cookies</a>
    </v-card-text>
    <v-card-actions>
      <v-btn>Accept</v-btn>
      <v-btn>Refuse</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style lang="css" scoped>
.banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
</style>