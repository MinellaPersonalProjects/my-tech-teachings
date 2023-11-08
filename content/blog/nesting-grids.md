---
title: 'Nesting with Vuetify Grids'
headline: 'Nesting with Vuetify Grids'
summary: 'Unlock the power of Vuetify grids to create responsive layouts, ensuring your web applications deliver a consistent, user-friendly experience across all devices'
myImage: 'https://media1.thehungryjpeg.com/thumbs2/ori_4087129_v5lj5kfn4jyiusy6vz7p6cywydqltj8z9sb79480_decorative-russian-dolls-matryoshka-dolls-flat-tourist-souvenirs-fro.jpg'
tags:
  - "vue"
publishDate: 2 Nov 2023
publishDateTime: 2023-11-2:19:30
---

Assume that in every `v-col` you create, you are essentially making another mini grid with 12 spaces to fill. So you can essentially apply the basic styling addressed previously in every single v-col. This can get confusing, so don’t worry if it doesn’t make sense. Here’s a code sample : 

```html{3-31}[file.vue]
<v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="12">
                <v-card color="blue" height="300px">
                  Hi
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card color="blue" height="200px">
                  He
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-card color="blue" height="520px">
              He
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-card color="blue" height="200px">
          Ho
        </v-card>
      </v-col>
    </v-row>
  </v-container>
```
