<script setup>
// adapted from Gonzalo Hirsch
import { useTheme, useDisplay } from "vuetify";

const { mdAndUp, smAndUp } = useDisplay();

const { path } = useRoute();
const drawer = ref(false);

function openDrawer() {
  drawer.value = !drawer.value;
}

const atBottom = ref(false);
const isVisible = ref(false);

const handleScroll = () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  isVisible.value = st > window.innerHeight / 2;

  const scrollPosition = window.scrollY + window.innerHeight;
  const bottomOfPage = document.documentElement.scrollHeight;

  const card = document.getElementById("my-card");
  const cardBottom = card.getBoundingClientRect().bottom;

  if (scrollPosition >= cardBottom && !atBottom.value) {
    atBottom.value = true;
  } else if (scrollPosition < cardBottom && atBottom.value) {
    atBottom.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

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
    <v-container class="pl-0">
      <!-- <v-card
        id="my-card"
        class="mx-auto"
        theme="theme_name"
        :style="{
          width: mdAndUp ? '60vw' : '',
        }"
        :elevation="0"
      > -->
      <div id="my-card" class="mx-12">
        <!-- Fetch and display the Markdown document from the current path -->
        <ContentDoc>
          <template v-slot="{ doc }">
            <header class="mb-5">
              <v-card
                variant="outlined"
                class="d-flex align-center justify-center"
              >
                <v-card-text class="px-4 mt-10 mb-10 ml-5">
                  <span class="italic" style="margin-bottom: 40px"
                    >{{ doc.publishDate }} . {{ doc.readingTime?.text }}</span
                  >
                  <h1
                    class="blog-post-text font-bold mb-4"
                    style="font-size: 3rem"
                  >
                    {{ doc.title }}
                  </h1>
                  <div>
                    <span
                      >By
                      <a class="text-hover" href="https://github.com/Mogboella"
                        >Nkem Mogbo</a
                      >
                    </span>
                  </div>
                </v-card-text>
              </v-card>
            </header>
            <v-row>
              <v-col cols="12" md="8">
                <article class="mt-6">
                  <ContentRenderer :value="doc" />
                </article>
              </v-col>
              <v-col cols="12" md="4">
                <table-of-contents :links="doc.body?.toc?.links" />
              </v-col>
            </v-row>
          </template>
          <template #not-found>
            <page-not-found />
          </template>
          <template #empty>
            <under-construction />
          </template>
        </ContentDoc>
      </div>
      <v-divider class="mt-12 mb-16"></v-divider>

      <!-- Related articles -->
      <v-row>
        <v-col cols="12">
          <h3 class="mb-12" style="font-weight: lighter">Read Next:</h3>
          <v-row class="d-flex align-stretch">
            <v-col
              cols="3"
              v-for="post in data?.surround"
              :key="post?._path"
              class="mr-5"
            >
              <next-posts-card
                style="margin-bottom: 10px"
                :date="post?.publishDate"
                :description="post?.summary"
                :image="post?.myImage"
                :path="post?._path"
                :title="post?.title"
                :author="post?.author"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- <NavScrollTopIcon :isVisible="isVisible" class="navscroll" /> -->
    </v-container>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.container-height {
  height: 100%;
}

sticky-toc {
  position: sticky;
  top: 2rem; /* Adjust based on your header height */
  max-height: 80vh;
  overflow-y: auto;
}

.table-of-contents {
  padding: 1rem;
  background-color: #f4f4f4;
  border-radius: 8px;
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
