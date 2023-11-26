<script setup>
// from Gonzalo Hirsch
import {useTheme} from "vuetify";

const items = ref([])


items.value= [
    {
        title: 'Home',
        disabled: false,
        href: '/',
    },
    {
        title: 'About',
        disabled: true,
    },
]

const links = ref([
  {
    id: 'background',
    text: 'Background',
    depth: 2,
  },
  {
    id: 'skills',
    text: 'Skills',
    depth: 2,
  },
  {
    id: 'facts',
    text: 'Some Fun Facts About Me',
    depth: 2,
  },
  {
    id: 'contactme',
    text: 'Get in Touch',
    depth: 2,
  },
]);


const theme = useTheme()


</script>
<template>
    <NuxtLayout>
        <v-container class="container-height" fluid>
            <v-card
                class="px-4 py-10 mx-auto"
                :class="{
                'bg-white': !theme.global.current.value.dark,
                'dark:bg-gray-800': theme.global.current.value.dark,
              }"
                :elevation="theme.global.current.value.dark ? 2 : 0"
            >
              <!-- Fetch and display the Markdown document from the current path -->
                <v-card-text>
                  <v-container>
                      <v-row>
                        <div class="row-with-line"></div>
                        <v-breadcrumbs :items="items">
                          <template v-slot:title="{ item }">
                            <span class="breadcrumb-item">{{ item.title }}</span>
                          </template>
                        </v-breadcrumbs>
                        <v-row no-gutters>
                          <v-col cols="12" md="6" sm="12" lg="6">
                            <v-img
                                src="/img/my_image.jpg"
                                alt="About Image"
                                class="about-image"
                                aspect-ratio="2"
                            ></v-img>
                          </v-col>
                          <v-col cols="12" md="6" sm="12" lg="6" class="d-flex align-center">
                            <v-row>
                              <v-col cols="12"><h2 class="about-title">Hi, I'm Nkem</h2></v-col>
                              <v-col cols="12"><p class="about-description">A software engineer dedicated to crafting elegant solutions. Let's build
                                something amazing together!</p></v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                        <div class="row-with-line">
                        </div>
                      </v-row>
                      <v-row>
                        <v-col cols="12" class="relative">
                          <!-- About content -->
                          <about-content class="text-font"/>
                        </v-col>
                      </v-row>
                  </v-container>
                  <NavScrollTopIcon />
                </v-card-text>
            </v-card>
          </v-container>
    </NuxtLayout>
</template>
<style scoped lang="scss">

.container-height {
  height: 100%;
}

.row-with-line {
  position: relative;
  width: 100%;
  padding: 20px; /* Adjust as needed */
}


.row-with-line::before {
  content: '';
  position: absolute;
  top: 50%; /* Adjust the line's vertical position as needed */
  left: 0;
  width: 100%;
  height: 2px; /* Adjust the line's thickness as needed */
  background-color: black; /* Line color */
}

.font-bold {
  font-weight: bold;
}

.mb-4 {
  margin-bottom: 1rem;
}

.breadcrumb-item {
  font-size: 0.8em; /* Change this value to the font size you want */
}

/* Define other classes accordingly */

.border-typography-primary {
  border-bottom: 2px solid black; /* Adjust as needed */
}

.dark-border-typography-primary-dark {
  /* Define dark mode border styles if necessary */
}

/* Define other styles for your layout, including flex layout and spacing classes */

/* You can use media queries to control styles for different screen sizes */
@media (min-width: 768px) {
  .md-text-h1 {
    font-size: 2rem; /* Adjust as needed */
  }

  .md-leading-h1 {
    line-height: 1.5; /* Adjust as needed */
  }

  /* Define other medium screen styles */
}

.blog-aside {
  position: sticky;
  top: 0; /* Replace theme('spacing.nav') with a specific value */
}

.blog-aside-wrapper {
  display: flex;
  flex-direction: column;
  border-top: 2px solid black; /* Replace with your desired border color */
  border-bottom: 2px solid black; /* Replace with your desired border color */
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.about-image {
  max-width: 100%;
  max-height: 20vh;
}

.about-title {
  font-size: 40px;
  font-family: "Futura", monospace;
  font-weight: bold;
  margin-bottom: 16px;
}

.about-description {
  font-size: 24px;
  font-family: "Futura", monospace;
  line-height: 1.5;
}

.text-font{
    font-family: "Futura", monospace;
    line-height: 1.6;
}

.blog-content{
  font-family: "Futura", monospace;
}

.blog-post-text {
  text-decoration: none;
}

/* Define your custom styles as needed */

.italic {
  font-style: italic;
}


.font-light {
  font-weight: 300; /* Adjust as needed */
}

</style>
