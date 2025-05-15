<template>
  <v-container class="my-12">
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <h1>Hey there 👋</h1>
        <h4 class="text-body-1">
          I’m Nkem, and this is where I share fun projects, frontend tips,
          backend insights, deep dives into Vue & React, and the occasional
          system design or cloud tooling post.
        </h4>
        <v-btn class="mt-4" variant="tonal" to="/blog">
          Read Guides
          <v-icon end>mdi-arrow-top-right</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          src="/undraw_creative-woman_su2h.svg"
          alt="Blog illustration"
          contain
          height="250"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
