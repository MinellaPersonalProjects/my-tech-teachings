<script setup>
    defineProps({
        title: {
            type: String,
            default: 'Blog One'
        },
        description: {
            type: String,
            default: 'Learn how to do stuff'
        },
        date: {
            type: String,
            default: 'August 23, 2002'
        },
        path: {
          type: String,
          default: '/'
        }
    })
</script>
<template>
    <v-row>
        <v-col cols="12">
            <h2 :ref="path">{{ title }}</h2>
        </v-col>
        <v-col cols="12">
            <p :ref="path">{{ description }}</p>
        </v-col>
        <v-col cols="12">
            <p>{{ date }}</p>
        </v-col>
    </v-row>
</template>
