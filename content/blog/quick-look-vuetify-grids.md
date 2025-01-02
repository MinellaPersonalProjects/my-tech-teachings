---
title: 'Mastering Vuetify Grids Part 1: Intro to Vuetify Grids'
headline: Intro to Vuetify Grids
summary: >-
  Get started with Vuetify grids: an easy guide to building responsive and
  organized web layouts quickly.
myImage: >-
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsL9XkUkevPc-_1irkVIkr62FfPacYPivJw&usqp=CAU
tags:
  - vue
publishDate: 2 Nov 2023
publishDateTime: '2023-11-2:14:30'
---

One of the biggest issues I had when I first started using Vuetify was the Grid system. Figuring out how to order components was like trying to understand linear algebra as a third-grader. If you're like me and having a hard time with getting your components where you want, worry no more, this guide is only part 1 of a three part series to help you go from a beginner to pro with working with the Vuetify Grid System. Let's dive into a quick intro to understanding how the grid system works and set the stage for your future mastery.

## What's the Vuetify Grid System ?

A grid system in general, is a layout structure that helps organize and align content on a webpage. It consists of rows and columns, allowing you to create a responsive design that automatically adjusts to different screen sizes.

## The Vuetify Grid Trio: Containers, Rows and Columns

The Vuetify Grid is made up of three major components : the Containers, Rows and Columns

**Containers:** Think of this as a box that helps you organize and center your website's content. It can also make sure that your content looks good on different screens.

**Rows:** This is like a big container for your columns (the content holders). It uses a special technique called "flex" to arrange your content.

**Columns:** Imagine this as a container that holds your content. But there's a rule--it has to be placed directly inside a _row_ container

The general understanding of a common grid is that it is made of rows and columns. However, the row component of vuetify doesn't really mean a row, it's mostly a wrapper for the columns. The real bulk of the content styling has more to do with how your columns are defined.

![rowsAndCols](https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735780972/4_-_eFB0NeE_gwe1w6.png)

## Understanding the 12 Point V-Row System

Think of a v-row like a shelf with 12 equal spaces and v-col as a box.

Depending on the size of your box, you can fill one or more spaces in the shelf but the total space you can use adds up to 12\. You can determine the full width of your columns using a tag `cols=”x”` where _x_ is a number between 1-12.

![fillSpace](https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735780971/1_-_vOmq5DV_agyqmq.png)

So what happens if the total number of spaces your columns take is more than 12 ?

_It goes to the next line_

![nextRow](https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735780972/3_-_V9XOFJL_mjjw66.png)

Let's practice with some code.

## Building a Basic Grid Layout

Everything starts with a `<v-container>`. It's your big box.

```html
<v-container>
    <!-- Your grid will go here -->
  </v-container>
```

You can use a special feature or tag called **fluid** to make this box stretch all the way across the screen. If you don't use the **fluid** tag, your content will be stuck in the middle of the screen with large spaces beside it.

![containers](https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735780971/2_-_NmJTrPE_tyddjk.png)

Then we've got the row. Each row is marked by `<v-row></v-row>`

```html
<v-container>
    <v-row>
      <!-- Your columns go here -->
    </v-row>
  </v-container>
```

Now, split that row into columns using `<v-col>`. You can decide how much space each column should take.

By default, there's some space between the columns, like a little gap. You can make this gap smaller with a feature called **"dense"**, or you can remove it completely using **"no-gutters"**.

```html
<v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet color="blue">
          Column 1
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
```

This is what your code looks like,

![fullGrid](https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735781160/ZH7aOpf_vsoagq.png)

It may look small but be patient, now you have the basics down, you can create so many fun styles by changing a few values. Head on to [Part 2](/blog/styling-vuetify-grids) of this tutorial to gain more advanced mastery of the Vuetify Grid System.
