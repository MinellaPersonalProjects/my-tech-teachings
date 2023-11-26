---
title: 'Mastering Vuetify Grids Part 3: Nesting with Vuetify Grids'
headline: Nesting with Vuetify Grids
summary: >-
  Unlock the power of Vuetify grids to create responsive layouts, ensuring your
  web applications deliver a consistent, user-friendly experience across all
  devices
myImage: >-
  https://media1.thehungryjpeg.com/thumbs2/ori_4087129_v5lj5kfn4jyiusy6vz7p6cywydqltj8z9sb79480_decorative-russian-dolls-matryoshka-dolls-flat-tourist-souvenirs-fro.jpg
tags:
  - vue
publishDate: 2 Nov 2023
publishDateTime: '2023-11-2:19:30'
---

If you're coming from the earlier parts of this tutorial, you probably have a basic understanding of how Vuetify Grids work. But how do you handle more complex designs for your web apps ? In this tutorial we'll dive deeper into grid styling and making more complex styles. If you're new here, I recommend you start with [Intro to Vuetify Grids](/blog/quick-look-vuetify-grids ) and [Basic Styling with Vuetify Grids](/blog/styling-vuetify-grids )

Assume that in every `v-col` you create, you are essentially making another mini grid. So you can essentially apply the basic styling addressed in our previous tutorials in every single v-col. This 'grid within a grid' approach allows for more complex and flexible layouts, as each column can contain its own set of rows and columns, just like the main grid. This can get confusing, so don't worry if it doesn't make sense. To help you understand, let's try creating this dashboard style skeleton loader using what we've learned so far :

![FullGif](https://i.imgur.com/tUP4Ne9.gif)

In our example above, if you notice it is made of two big rows and within one of those rows, it is divided further.

## Two Rows

For our code, we'll begin by creating two rows

![Rowzzz](https://i.imgur.com/BQyzo9b.png)

```html
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- skeleton loader -->
      </v-col>
      <v-col cols="12">
        <!-- skeleton loader -->
      </v-col>
    </v-row>
  </v-container>
```

## Second Division

Within our top `v-col`, we're going to add another `v-row` and further divide that row into two columns

![Imgur](https://i.imgur.com/dZxx6EO.png)

```html
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <!-- skeleton loader -->
          </v-col>
          <v-col cols="6">
            <!-- skeleton loader -->
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <!-- skeleton loader -->
      </v-col>
    </v-row>
  </v-container>
```

## Even More Rows

To make this even more fun, we're going to add another `v-row` within our first `v-col` to make two smaller rows

![Imgur](https://i.imgur.com/fcNgkhp.png)

```html
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="12">
                <!-- skeleton loader -->
              </v-col>
              <v-col cols="12">
                <!-- skeleton loader -->
              </v-col>
            </v-row>
            </v-col>
          <v-col cols="6">
            <!-- skeleton loader -->
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <!-- skeleton loader -->
      </v-col>
    </v-row>
  </v-container>
```

## Final Result

This is what our full code would look like:

```html
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="12">
                <v-skeleton-loader 
                  type="card, actions" 
                  height="280px" 
                  class="mx-auto border"
                  color="pink-lighten-3"
                  ></v-skeleton-loader>
              </v-col>
              <v-col cols="12">
                <v-skeleton-loader 
                  type="card" 
                  height="220px" 
                  class="mx-auto border"
                  color="pink-lighten-3"
                  ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-skeleton-loader 
              type="table" 
              height="520px" 
              class="mx-auto border"
              color="pink-lighten-3"
              ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-skeleton-loader 
          type="sentences, paragraph" 
          height="200px" 
          class="mx-auto border"
          color="pink-lighten-3"
          ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
```

I just replaced the `<!-- skeleton loader -->` placeholders with an actual vuetify skeleton loader, once you run this code, you'll be able to see your complete nested grid.

# Conclusion

This post concludes my three part series on vuetify grids, I hope at the end of this you have a deeper understanding of Vuetify Grids and can make fancier looking web apps. If you haven't already, make sure to read [Part 1](/blog/quick-look-vuetify-grids ) and [Part 2](/blog/styling-vuetify-grids ) of this tutorial. Enjoy coding !!
