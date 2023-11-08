<script setup>
// from Gonzalo Hirsch
import {useTheme} from "vuetify";

const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
const { data, error } = await useAsyncData(`${cleanPath}`, async () => {
    let article = queryContent('/blog').where({ _path: cleanPath }).findOne();
    let surround = queryContent('/blog').sort({ publishDateTime: -1 }).sort({ tags: 1 }).only(['_path', 'title', 'summary']).findSurround(cleanPath, { before: 1, after: 1 });

    return {
      article: await article,
      surround: await surround
    };
});

const items = ref([])

if (cleanPath === '/about'){
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
} else {

  const articleData = data?.value.article;
  const title = articleData.title

  // Set the meta
  const baseUrl = 'https://nkems-tech-teachings.com';
  const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
  const image = baseUrl + articleData.myImage;

  const jsonScripts = [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://nkems-tech-teachings.com/'
        },
        url: canonicalPath,
        image: image,
        headline: articleData.headline,
        abstract: articleData.summary,
        datePublished: articleData.publishDateTime,
        author: 'Nkem Mogbo',
        publisher: 'Nkem Mogbo'
      })
    }
  ];

  items.value= [
          {
            title: 'Home',
            disabled: false,
            href: '/',
          },
          {
            title: 'Blogs',
            disabled: false,
            href: '/blogs',
          },
          {
            title: title,
            disabled: true,
            href: articleData._path,
          },
        ]

  useHead({
    title,
    meta: [
        {name: 'description', content: articleData.summary},
        {property: 'article:published_time', content: articleData.publishDateTime },
        // OG
        { hid: 'og:title', property: 'og:title', content: articleData.headline },
        { hid: 'og:url', property: 'og:url', content: canonicalPath },
        { hid: 'og:description', property: 'og:description', content: articleData.summary },
        { hid: 'og:image', name: 'image', property: 'og:image', content: image },
        { hid: 'og:type', property: 'og:type', content: 'Article' },

        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: articleData.headline },
        { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
        { hid: 'twitter:description', name: 'twitter:description', content: articleData.summary },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: canonicalPath
      }
    ],
    script: jsonScripts
  })
}

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
              <ContentDoc>
                <template v-slot="{ doc }">
                  <v-container fluid>
                      <v-row v-if="doc.tag === 'about_me'">
                        <div class="row-with-line"></div>
                        <v-breadcrumbs :items="items">
                          <template v-slot:title="{ item }">
                            <span class="breadcrumb-item">{{ item.title }}</span>
                          </template>
                        </v-breadcrumbs>
                        <v-row no-gutters>
                          <v-col cols="12" md="6" sm="12" lg="6">
                            <v-img
                                :src="doc.myImage"
                                alt="About Image"
                                class="about-image"
                                aspect-ratio="2"
                            ></v-img>
                          </v-col>
                          <v-col cols="12" md="6" sm="12" lg="6" class="d-flex align-center">
                            <v-row>
                              <v-col cols="12"><h2 class="about-title">{{ doc.title }}</h2></v-col>
                              <v-col cols="12"><p class="about-description">{{ doc.summary }}</p></v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                        <div class="row-with-line">
                        </div>
                      </v-row>
                      <v-row v-else>
                        <v-col cols="12" >
                          <div class="row-with-line"></div>
                          <div>
                            <v-breadcrumbs :items="items">
                              <template v-slot:title="{ item }">
                                <span class="breadcrumb-item">{{ item.title }}</span>
                              </template>
                            </v-breadcrumbs>
                            <!-- Headline -->
                            <h1 class="blog-post-text font-bold mb-4 md-mb-6 text-h3 leading-h3 md-text-h1 md-leading-h1 text-center md-text-left">{{ doc.title }}</h1>

                            <!-- Excerpt -->
                            <p class="blog-post-text mb-8 md-w-8/12 md-text-lg md-leading-lg text-center md-text-left">{{ doc.summary }}</p>

                            <!-- Border with Flex Layout -->
                            <div class="border-typography-primary dark-border-typography-primary-dark mt-12 md-mt-4">
                              <!-- Author -->
                              <div class="flex flex-row items-center justify-center">
                                <span class="blog-post-text text-lg leading-lg font-light">By
                                  <a class="hover-underline italic" >Nkem Mogbo</a>
                                </span>
                              </div>
                            </div>
                            <!-- Social Share -->
                            <div class="text-center md-text-right mt-6 md-mt-0">
                              <span class="italic" style="margin-bottom: 40px">(Published: {{ doc.publishDate }})</span>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="8" class="relative">
                          <!-- Blog content -->
                          <ContentRenderer :value="doc" class="blog-content blog-post-text" />
                        </v-col>
                        <v-col cols="12" md="4">
                          <!-- Mobile Table of Content -->
                          <div class="hidden-md-flex mb-4 blog-aside-wrapper blog-aside hidden-sm-and-down"><TableOfContents :links="doc.body?.toc?.links" class="blog-post-text" /></div>
                          <!-- Related articles -->
                          <div v-if="data?.surround?.filter((elem) => elem !== null)?.length > 0" class="blog-aside-wrapper"><RelatedArticles :surround="data?.surround" class="blog-post-text" /></div>
                        </v-col>
                      </v-row>
                  </v-container>
                  <NavScrollTopIcon />
                </template>
                <template #not-found>
                    <page-not-found />
                </template>
                <template #empty>
                  <under-construction />
              </template>
              </ContentDoc>
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
