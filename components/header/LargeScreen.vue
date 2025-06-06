<script setup lang="ts">
import { useDarkModeStore } from "~/store/darkMode";
import { useSocialsStore } from "~/store/socials";
import { useTheme } from "vuetify";
import { ref, computed } from "vue";

const theme = useTheme();

const router = useRouter();
const store = useDarkModeStore();
const socials = useSocialsStore();

const isDarkMode = ref(false);
isDarkMode.value = computed(() => {
  if (typeof window !== "undefined") {
    const current_theme = localStorage.getItem("theme");
    return current_theme === "dark";
  }
  return false;
}).value;

function changeDarkMode() {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
  isDarkMode.value = newTheme === "dark";
}

// const logo = require("@/assets/N.png");

function getColorLightMapping(social) {
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

function getColorMapping(social) {
  return theme.global.current.value.dark
    ? "white"
    : getColorLightMapping(social);
}
</script>

<template>
  <v-row
    align="center"
    color="primary"
    dark
    class="my-2"
  >
    <v-col cols="12" lg="4" xl="4">
      <v-row align="center" justify="start">
        <v-card height="50px" width="200px" variant="text">
          <v-img
            src="https://i.imgur.com/0eGYp7C.png"
            cover
            @click="router.push('/')"
          ></v-img>
        </v-card>
      </v-row>
    </v-col>

    <v-col cols="12" lg="4" xl="4">
      <v-row align="center" justify="center">
        <v-btn class="btn positioning" variant="text" href="/">HOME</v-btn>
        <v-btn class="btn positioning" variant="text" href="/about"
          >ABOUT</v-btn
        >
        <v-btn class="btn positioning" variant="text" href="/blog"
          >ARTICLES</v-btn
        >
      </v-row>
    </v-col>

    <v-col cols="12" sm="10" md="10" lg="3" xl="3" class="text-right">
      <v-row align="center" justify="end" >
        <v-btn
          @click="changeDarkMode"
          :style="{ color: !isDarkMode ? 'black' : 'cornflowerblue' }"
          style="margin-top: 10px"
          variant="plain"
          icon
        >
          <v-icon icon="x-small">{{
            !isDarkMode ? "mdi-brightness-7" : "mdi-brightness-2"
          }}</v-icon>
        </v-btn>
        <v-divider
          length="25px"
          :thickness="2"
          style="margin-top: 20px"
          vertical
        ></v-divider>
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
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.btn {
  text-transform: unset !important;
  font-style: normal;
  font-family: "PT Sans Caption", sans-serif;
  font-weight: 700;
  margin-top: 5px;
  margin-right: 5px;
}
.name {
  font-style: normal;
  font-size: 30px;
  font-family: "PT Sans Caption", sans-serif !important;
  font-weight: 700;
  line-height: 1.25;
  padding-top: 2px;
  color: #757575;
}
.positioning {
  margin-top: 10px;
  margin-left: 20px;
}
.name_positioning {
  margin-top: 10px;
}
</style>