<script setup>
import { ref } from "vue";
import { useSocialsStore } from "~/store/socials.js";

const drawerVisible = ref(false);
const socials = useSocialsStore();

const navLinks = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Articles", to: "/blog" },
];

const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
};

function startDownload(link) {
  if (link.download_resume) {
    socials.downloadResume();
  }
}

function getColorMapping(social) {
  if (social === "youtube") {
    return "#FF0000";
  } else if (social === "linkedin") {
    return "#0077B5";
  } else if (social === "twitter") {
    return "#1DA1F2";
  } else if (social === "github") {
    return "#070707";
  } else if (social === "gmail") {
    return "#D14836";
  } else {
    return "";
  }
}
</script>

<template>
  <v-container fluid>
    <header-large-screen class="hidden-md-and-down" />
    <header-small-device
      :drawer="drawerVisible"
      @toggle-drawer="toggleDrawer"
      class="hidden-lg-and-up"
    />
    <v-layout>
      <v-navigation-drawer v-model="drawerVisible" temporary>
        <!-- Add navigation links for Home, About, Blogs, and Contact -->
        <v-list>
          <v-list-item
            v-for="link in navLinks"
            :key="link.to"
            link
            :href="link.to"
          >
            <v-list-item-title
              @click="startDownload(link)"
              :style="{ fontSize: '20px' }"
              >{{ link.text }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn
              icon
              variant="plain"
              style="margin-top: 10px"
              :href="socials.linkedin"
              target="_blank"
            >
              <v-icon :color="getColorMapping('linkedin')" size="large"
                >mdi-linkedin</v-icon
              >
            </v-btn>
            <v-btn
              icon
              variant="plain"
              style="margin-top: 10px"
              :href="socials.youtube"
              target="_blank"
            >
              <v-icon :color="getColorMapping('youtube')" size="large"
                >mdi-youtube</v-icon
              >
            </v-btn>
            <v-btn
              icon
              variant="plain"
              style="margin-top: 10px"
              :href="socials.github"
              target="_blank"
            >
              <v-icon :color="getColorMapping('github')" size="large"
                >mdi-github</v-icon
              >
            </v-btn>
            <v-btn
              icon
              variant="plain"
              style="margin-top: 10px"
              :href="socials.gmail"
              target="_blank"
            >
              <v-icon :color="getColorMapping('gmail')" size="large"
                >mdi-gmail</v-icon
              >
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>