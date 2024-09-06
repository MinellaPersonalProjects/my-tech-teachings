---
title: 'Mastering Vuetify Grids Part 2: Basic Styling with Vuetify Grids'
headline: Basic Styling with Vuetify Grids
summary: Learn the essentials of styling with Vuetify grids - Tutorial to Arrange your App Layout like a Pro
myImage: data:image/png;base64,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
tags:
  - vue
publishDate: 2 Nov 2023
publishDateTime: 2023-11-2:16:30
---

In the first part of our three-part series on Mastering Vuetify Grids, we covered the basics of creating Grids in Vuetify. As we move into Part 2, we're going to take a deep dive into different ways we can style our grid. If you're just joining us, start with [Part 1](/blog/quick-look-vuetify-grids) to get up to speed.

For this tutorial, we'll be looking through a variety of code samples and how they would look on your webpage. This will give you the building blocks for more complex applications and lay a stronger foundation to help you understand Vuetify Grids.

## Setup

Follow along the different code examples given in the tutorial by running the command `yarn create vuetify` and under the _src > components > HelloWorld.vue_, delete everything within the `<template></template>` tags and replace the items between with the examples we discuss. You can view the expected result as well in this tutorial, to make sure everything looks right.

Now we're ready to code!

## Your First Grid Column

We are going to make a big block that stretches across the screen, so you're content grabs the attention it deserves

::code-image
![Image](https://i.imgur.com/ZH7aOpf.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card color="blue">
                    My Row
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## Creating Two Columns Side by Side

Now we need to pair two elements in harmony by placing two blocks next to each other. Remember, if you want your blocks to be on the same row the total value of cols in this row should be equal to **12.**

::code-image
![Imgur](https://i.imgur.com/8OVVlIY.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-card color="blue">
                    My Row 1
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card color="blue">
                    My Row 2
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## Stacking Columns on Top of Each Other

Want to stack blocks on top of each other? If you want it to have two rows on top of each other, just make the total values of cols in your `<v-row>` **greater** than 12

::code-image
![Imgur](https://i.imgur.com/UvIeiaf.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card color="blue">
                    My Row 1
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card color="blue">
                    My Row 2
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## Adjusting Spacing with Margins and Padding

**Margins** and **Padding** are two properties used to control the spacing between elements. Imagine your content is a picture in a picture frame.

- **Margins** are like the space around a picture frame.
- **Padding** is like the space between the picture and the frame.

![Margin\_Padding\_Content](https://th.bing.com/th/id/OIP.MbrfOi0Y4G4pBAldfvSJXwHaFu?pid=ImgDet\&rs=1)

There are a variety of ways to declare margins and padding for a Vuetify Element, one of the shortcuts is using classes like `mx`, `mt`, and `pb`. These classes use the format `{property}{direction}-{size}` where property is `m` for margin and `p` for padding, direction can be top, bottom, left, right and size can be a value from 0-16. To learn more about these classes read more on Vuetify's [Spacing Documentation](https://vuetifyjs.com/en/styles/spacing/) . Here's a code sample on how it's used :

::code-image
![Imgur](https://i.imgur.com/ynmkHSh.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="12" class="mt-10 pl-5">
                <v-card color="blue">
                    My Row
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## Change Your Column Size to Take Less Space

Not every element needs to stretch to the end of the row width. If we want the row to take less space, change the value of `cols`

::code-image
![Imgur](https://i.imgur.com/kViM4LP.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="8">
                <v-card color="blue">
                    My Row 
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## Make Columns Tall by Changing Height

You may be wondering why the previous examples were so thin, but if you want on change the way the row looks to fit the content, _just change the height_

::code-image
![Imgur](https://i.imgur.com/30tFyOv.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card color="blue" height="600px">
                    My Row
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## Tall and Short Neighbors: Mixing Up Column Heights

If you have two rows but you want them to look different , you can just change the height or the value for cols. As long as all the cols in the v-row add up to 12, they'll remain on the same row.

::code-image
![Imgur](https://i.imgur.com/OVMznkn.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-card color="blue" height="600px">
                    My Row 1
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card color="blue" height="350px">
                    My Row 2
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## The Big Block: Making a Row Stand Out

Just like a headline in a newspaper, sometimes we want our content to be the main focus. Let's make one row look really important :

::code-image
![Imgur](https://i.imgur.com/nQmlfKT.png)

#code
```html
    <v-container>
        <v-row>
            <v-col cols="7">
                <v-card color="blue" height="600px">
                    My Row 1
                </v-card>
            </v-col>
            <v-col cols="5">
                <v-card color="blue" height="350px">
                    My Row
                </v-card>
            </v-col>
        </v-row>
    </v-container>
```
::

## Make Column Responsive Based on Screen Size

In a world with myriad devices, responsiveness is non-negotiable. Let's wrap up by ensuring your layout adapts beautifully across all screen sizes.

When defining our v-col, we'll have to include something similar to the following : `<v-col cols="12" sm="6" md="4" lg="3">`, the values _sm_, _md_, and _lg_ define the number of columns the `<v-col>` element will occupy for different screen sizes. Here's what each part means :

- `sm="6"` : this defines the column size as 6 for **small** screens like tablets or larger mobile phones. It's equivalent to having the tag `<v-col cols="6">` when you have a small screen.
- `md="4"` : this defines the column size as 4 on **medium-sized** screens like small laptops
- `lg="3"` : this defines the column size as 3 on **large-sized** screens like big laptops
- `cols="12"` : This is added as a default for any screen sizes that aren't defined e.g. if I had `<v-col cols="12" sm="6">`, for all screens other than the smaller screens, the col size will be 12.

By specifying different values for the cols attribute at different breakpoints, you can create a responsive layout that adjusts based on the user's screen size.

As we wrap up Part 2 you have some fancier styles in your tool belt and a higher understanding of Vuetify Grid Styles. Stay tuned for [Part 3](/blog/nesting-grids), where we'll get to create even fancier styles using **Nesting**. If you missed Part 1, catch up [here](/blog/quick-look-vuetify-grids) to learn the basics of the Vuetify grid system.
