<script setup>
    const props = defineProps([
        'data',
        'sectiontitle'
    ])
</script>
<template>
    <v-row>
        <v-col cols="12">
            <h1 style="margin-bottom: 10px;" class="main-web-text-style">{{ props.sectiontitle }}</h1>
        </v-col>
        <v-col cols="12">
            <v-list>
                <v-list-item v-for="post in data" :key="post.slug">
                    <top-posts-card style="margin-bottom: 10px"
                                    :date="post.publishDate"
                                    :description="post.summary"
                                    :image="post.myImage"
                                    :path="post._path"
                                    :title="post.title"
                    />
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>
<style scoped>
.main-web-text-style{
  font-family: 'PT Sans Caption',sans-serif;
}
</style>