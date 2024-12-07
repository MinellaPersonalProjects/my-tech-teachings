<script setup>
// adapted from Gonzalo Hirsch
import { computed } from "vue";
import { useTheme, useDisplay } from "vuetify";

const { mdAndUp, smAndUp } = useDisplay();

const { path } = useRoute();
const drawer = ref(false);

function openDrawer() {
  drawer.value = !drawer.value;
}

const atBottom = ref(false);
const isVisible = ref(false);

// const theme = useTheme();
// const isDark = ref(false);
// const theme_name = ref();

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

  // const savedTheme = localStorage.getItem("theme") || "light";
  // theme.global.name.value = savedTheme;
  // isDark.value = savedTheme === "dark";
  // theme_name.value = savedTheme;
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

// watch(
//   () => theme.global.current.value.dark,
//   (dark) => {
//     isDark.value = dark;
//     theme_name.value = dark ? "light" : "dark";

//     localStorage.setItem("theme", theme_name.value);
//   }
// );
</script>
<template>
  <NuxtLayout>
    <v-container fluid>
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
                  <h1 class="font-bold mb-4" style="font-size: 3rem">
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
                <article class="mt-6 mr-6">
                  <ContentRenderer :value="doc" />
                </article>
              </v-col>
              <v-col cols="12" md="4" class="sticky-toc" v-show="mdAndUp">
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
        <v-divider class="mt-12 mb-16"></v-divider>
      </div>
    </v-container>
    <v-container>
      <!-- Related articles -->
      <v-row class="ml-2" align="center" justify="center" auto-height>
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
    </v-container>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.table-of-contents {
  padding: 1rem;
  background-color: #f4f4f4;
  border-radius: 8px;
}

.italic {
  font-style: italic;
}
</style>
