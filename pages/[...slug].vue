<script setup>
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
  // Remove a trailing slash in case the browser adds it, it might break the routing
  // fetch document where the document path matches with the cuurent route
  let article = queryContent('/blog').where({ _path: cleanPath }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent('/blog').sort({ date: -1 }).only(['_path', 'headline', 'excerpt']).findSurround(cleanPath, { before: 1, after: 1 });
  return {
    article: await article,
    surround: await surround
  };
});
</script>
<template>
    <NuxtLayout>
        <v-container>
            <v-card
              class="px-4 py-10 mx-auto"
              :class="{
                'bg-white': !$vuetify.theme.dark,
                'dark:bg-gray-800': $vuetify.theme.dark,
              }"
              :elevation="$vuetify.theme.dark ? 2 : 0"
            >
              <!-- Fetch and display the Markdown document from the current path -->
              <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
                <template v-slot="{ doc }">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <div class="row-with-line">
                        </div>
                        <div>
                          <!-- Headline -->
                          <h1 class="blog-post-text font-bold mb-4 md-mb-6 text-h3 leading-h3 md-text-h1 md-leading-h1 text-center md-text-left">
                            {{ doc.title }}
                          </h1>

                          <!-- Excerpt -->
                          <p class="blog-post-text mb-8 md-w-8/12 md-text-lg md-leading-lg text-center md-text-left">
                            {{ doc.summary }}
                          </p>

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
                            <NavShareIcons :headline="doc.title" :excerpt="doc.summary" :path="doc._path + '/'" />
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="8" class="relative">
                        <!-- Update date -->
                        <span
                            class="italic absolute -top-8 text-sm leading-sm font-light text-typography-primary/75 dark--text-typography-primary-dark/75"
                        >(Published: {{ doc.publishDate }})</span>
                        <!-- Blog content -->
                        <ContentRenderer :value="doc" class="prose blog-content blog-post-text" />
                      </v-col>
                      <v-col cols="12" md="4" class="blog-aside h-fit">
                        <!-- Mobile Table of Content -->
                        <div class="hidden-md-flex mb-4 blog-aside-wrapper">
                          <TableOfContents :links="doc.body?.toc?.links" class="blog-post-text" />
                        </div>
                        <!-- Related articles -->
                        <div v-if="data?.surround?.filter((elem) => elem !== null)?.length > 0" class="blog-aside-wrapper">
                          <RelatedArticles :surround="data?.surround" class="blog-post-text" />
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </template>
                <template #not-found>
                  <h1 class="text-2xl">
                    Page not found
                  </h1>
                </template>
              </ContentDoc>
            </v-card>
          </v-container>
    </NuxtLayout>
</template>
<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  color: #000;
  text-decoration: none;
}

.prose h2,
.prose h3 {
  padding-top: 30px;
  padding-bottom: 10px;
}

.prose h2 a:hover,
.prose h3 a:hover {
  border-bottom: 1px solid #8c8c8c; /* You can adjust the color as needed */
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
  top: calc(2rem + 0.25rem); /* Replace theme('spacing.nav') with a specific value */
}

.blog-aside-wrapper {
  display: flex;
  flex-direction: column;
  border-top: 2px solid black; /* Replace with your desired border color */
  border-bottom: 2px solid black; /* Replace with your desired border color */
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.blog-post-text {
  color: black; /* Replace with your desired text color */
  text-decoration: none;
}

.separator {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

/* Define your custom styles as needed */

.italic {
  font-style: italic;
}

.absolute {
  position: absolute;
}

.-top-8 {
  top: -2rem; /* Adjust as needed */
}

.text-sm {
  font-size: 1rem; /* Adjust as needed */
}

.leading-sm {
  line-height: 1.25; /* Adjust as needed */
}

.font-light {
  font-weight: 300; /* Adjust as needed */
}

.text-typography-primary/75 {
  color: rgba(0, 0, 0, 0.75); /* Adjust the color and opacity as needed */
}

.dark--text-typography-primary-dark/75 {
  color: rgba(0, 0, 0, 0.75); /* Adjust the color and opacity as needed for dark mode */
}

</style>
