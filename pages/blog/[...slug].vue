<script setup>
// adapted from Gonzalo Hirsch
import { useTheme, useDisplay } from "vuetify";

const { mdAndUp, smAndUp } = useDisplay();

const { path } = useRoute();
const drawer = ref(false);

function openDrawer() {
  drawer.value = !drawer.value;
}

const cleanPath = path.replace(/\/+$/, "");
const { data, error } = await useAsyncData(`${cleanPath}`, async () => {
  let article = queryContent("/blog").where({ _path: cleanPath }).findOne();
  let surround = queryContent("/blog")
    .sort({ publishDateTime: -1 })
    .sort({ tags: 1 })
    .only(["_path", "title", "summary"])
    .findSurround(cleanPath, { before: 1, after: 1 });

  return {
    article: await article,
    surround: await surround,
  };
});

const articleData = data?.value.article;
const title = articleData.title;

// Set the meta
const baseUrl = "https://nkems-tech-teachings.com";
const canonicalPath = baseUrl + (path + "/").replace(/\/+$/, "/");
const image = baseUrl + articleData.myImage;

const jsonScripts = [
  {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://nkems-tech-teachings.com/",
      },
      url: canonicalPath,
      image: image,
      headline: articleData.headline,
      abstract: articleData.summary,
      datePublished: articleData.publishDateTime,
      author: "Nkem Mogbo",
      publisher: "Nkem Mogbo",
    }),
  },
];

const items = computed(() => {
  const baseItems = [
    {
      title: "Home",
      disabled: false,
      href: "/",
    },
    {
      title: "Blogs",
      disabled: false,
      href: "/blog",
    },
  ];

  if (smAndUp.value) {
    baseItems.push({
      title: title,
      disabled: true,
      href: articleData._path,
    });
  }

  return baseItems;
});

useHead({
  title,
  meta: [
    { name: "description", content: articleData.summary },
    {
      property: "article:published_time",
      content: articleData.publishDateTime,
    },
    // OG
    { hid: "og:title", property: "og:title", content: articleData.headline },
    { hid: "og:url", property: "og:url", content: canonicalPath },
    {
      hid: "og:description",
      property: "og:description",
      content: articleData.summary,
    },
    { hid: "og:image", name: "image", property: "og:image", content: image },
    { hid: "og:type", property: "og:type", content: "Article" },

    // Twitter
    { hid: "twitter:card", name: "twitter:card", content: "Summary" },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: articleData.headline,
    },
    { hid: "twitter:url", name: "twitter:url", content: canonicalPath },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: articleData.summary,
    },
    { hid: "twitter:image", name: "twitter:image", content: image },
  ],
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: canonicalPath,
    },
  ],
  script: jsonScripts,
});

const theme = useTheme();
const isDark = ref(false);
const theme_name = ref("light");

watch(
  () => theme.global.current.value.dark,
  (dark) => {
    isDark.value = dark;
    theme_name.value = dark ? "light" : "dark";
  }
);
</script>
<template>
  <NuxtLayout>
    <v-container class="container-height">
      <v-card
        class="px-4 py-10 mx-auto"
        theme="theme_name"
        :style="{
          width: mdAndUp ? '60vw' : '',
        }"
        :elevation="isDark ? 2 : 1"
      >
        <!-- Fetch and display the Markdown document from the current path -->
        <ContentDoc>
          <template v-slot="{ doc }">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <div class="row-with-line"></div>
                  <div>
                    <v-breadcrumbs :items="items">
                      <template v-slot:title="{ item }">
                        <span class="breadcrumb-item">{{ item.title }}</span>
                      </template>
                    </v-breadcrumbs>
                    <!-- Headline -->
                    <h1 class="blog-post-text font-bold mb-4 text-center">
                      {{ doc.title }}
                    </h1>

                    <!-- Excerpt -->
                    <p class="blog-post-text text-center">
                      {{ doc.summary }}
                    </p>

                    <!-- Border with Flex Layout -->
                    <div class="text-center">
                      <!-- Author -->
                      <div>
                        <span
                          >By
                          <a
                            class="text-hover"
                            href="https://github.com/Mogboella"
                            >Nkem Mogbo</a
                          >
                        </span>
                      </div>
                      <div>
                        <span class="italic" style="margin-bottom: 40px"
                          >Published: {{ doc.publishDate }}</span
                        >
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="relative">
                  <!-- Blog content -->
                  <!-- <ContentRenderer :value="doc" /> -->
                  <ContentDoc v-slot="{ doc }">
                    <article>
                      <ContentRenderer :value="doc" />
                    </article>
                  </ContentDoc>
                </v-col>
                <!-- class="hidden-md-flex mb-4 blog-aside-wrapper blog-aside hidden-sm-and-down" -->
                <!-- <TableOfContents 
                          :links="doc.body?.toc?.links" 
                          @open="openDrawer"
                          class="blog-post-text" 
                        /> -->
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card variant="outlined">
                    <!-- Related articles -->
                    <v-card-title class="related-style"
                      >Continue Reading</v-card-title
                    >
                    <v-card-text>
                      <v-list>
                        <!-- <RelatedArticles :surround="data?.surround" class="blog-post-text" /> -->
                        <v-list-item
                          v-for="post in data?.surround"
                          :key="post?._path"
                        >
                          <next-posts-card
                            style="margin-bottom: 10px"
                            :date="post?.publishDate"
                            :description="post?.summary"
                            :image="post?.myImage"
                            :path="post?._path"
                            :title="post?.title"
                          />
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template #not-found>
            <page-not-found />
          </template>
          <template #empty>
            <under-construction />
          </template>
        </ContentDoc>
      </v-card>
      <NavScrollTopIcon class="navscroll" />
    </v-container>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.container-height {
  height: 100%;
}

.navscroll {
  margin-left: 0;
}

.row-with-line {
  position: relative;
  width: 100%;
  padding: 20px; /* Adjust as needed */
}

.row-with-line::before {
  content: "";
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

.related-style {
  font-family: "PT Sans Caption", sans-serif;
}

.about-description {
  font-size: 24px;
  font-family: "Futura", monospace;
  line-height: 1.5;
}

.blog-content {
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
