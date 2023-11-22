---
title: 'ReCreate the Opening of Marvel Secret Invasion Website using VueJS and Vuetify'
headline: 'ReCreate Marvel Secret Invasion with VueJS'
summary: 'Explore Vue.js and Vuetify to recreate the captivating opening of Marvel Secret Invasion website in this frontend development project.'
myImage: '/img/secret.png'
tags:
  - "vue"
publishDate: 8 Nov 2023
publishDateTime: 2023-11-08:03:30
---

If you didn't already know, Marvel created a secret website for its newest TV show, Secret Invasion. This novel promotional stunt had my hands itching to create a something similar. The website, [www.theinvasionhasbegun.com](http://www.theinvasionhasbegun.com/) gives a black-ops aesthetics and surreptitious layout of this site create an atmosphere of secrecy and intrigue, making users feel like they're part of an underground network.

The website starts out with a password prompt page, with an obscure password that I had to get off the internet. 

One might expect the password to have a connection to the show, possibly involving names like "Nick Fury" or "Avengers" However, due to the absence of a character limit on the website, the possibilities appeared to be without boundaries.I couldn't figure out any clues, so I just googled it, the password is "RSD3PX5N7S"

In this tutorial I'm going to recreate those processes and have our own secret black ops website hidden under the guise of a regular webpage using VueJS and Vuetify. 

## Prerequisites 
- Some knowledge of Vue 
- Node, NPM Installed 
- Code Editor 

## SetUp Project

We'll start our project by running the creating a directory for the project and doing a quick setup using the following command :

```bash
  yarn create vuetify
```

You will have to select a set of options and name the application. For this tutorial we're using the following presets :

```bash
  ✔ Project name: … secretweb
  ✔ Which preset would you like to install? › Essentials (Vuetify, VueRouter, Pinia)
  ✔ Use TypeScript? … No 
  ✔ Would you like to install dependencies with yarn, npm, pnpm, or bun? › yarn
```

Next you can go into your newly created vuetify app folder.

## Create Component to Enter Secret Password
![Enter Password](https://i.imgur.com/7famnqa.png)


Under the **src/components** folder, create a new file called **EnterPassword.vue**. Then we'll set up the layout for to allow us to enter the secret password. 

First, we'll have to create a variable to hold the password value that the user enters and a function that does something with that password

```html{}[enterpassword.vue]
  <script setup>
    import {ref} from "vue";
    import {useRouter} from "vue-router";
    const password = ref("")

    // used to define webpage routes
    const route = useRouter()

     /* add your own logic to check if password is correct, 
      here you can define your own password */
    const correctPassword = "COWSARECUTE"

    function checkPassword () {
      if (password.value === correctPassword) {
        // if password is correct, navigate to another route to show it was granted
        route.push('/granted');
      } 
      else {
        console.log("Incorrect password");
      }
    }

  </script>
```

Next we have to make sure that the user can actually enter the password. 

```html{3-6, 10-13}[enterpassword.vue]
  <!-- Enter Password should be in the middle of screen  -->
  <template>
    <v-container class="container">
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="auto">
              <h1 class="text_theme">Enter Password []</h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
```

Then we'll add some style :

```html{}[enterpassword.vue]
  <style scoped lang="scss">
  .container {
    height: 100vh; /* Set container to full viewport height */
    display: flex; /* Use flexbox layout */
    justify-content: center; /* Center contents horizontally */
    align-items: center; /* Center contents vertically */
  }
  .text_theme{
    font-style: normal;
    font-family: Courier New,serif, monospace;
    font-weight: 600;
    font-size: medium;
    line-height: 1.25;
    color: chartreuse;
  }
  </style>
```

Then, we have to create a place where the user can actually enter the password on the frontend. So inside the Enter Password heading, you'll have to include the following to your template:

```html{4}[enterpassword.vue]
  
  <template>
    <!-- ...  -->
      <h1 class="text_theme">Enter Password [<input type="password" v-model="password" size="12" @keyup.enter="checkPassword"/>]</h1>
    <!-- ...  -->
  </template>
```

Then the corresponding style should be added under `<style>`, to define the password input style

```scss
input[type="password"] {
  color: chartreuse; /* Change to the color you desire */
}

input[type="password"]:focus {
  outline: none; /* Remove the default blue outline */
}

// other styles ...
```


## Add Enter Password Component to a View 
Views are the Vue components that represent different pages of your app. We need to place the Enter Password Component we just created into a view, so the user can access it

Create a file under the **src/views** folder called **PasswordView.vue** and add the following code

```html{}[passwordView.vue]
  <script setup>
    import EnterPassword from "@/components/EnterPassword.vue";
  </script>

  <template>
    <v-container fluid class="overall" style="height: 100vh; background-color: black">
      <section id="password" >
        <enter-password />
      </section>
    </v-container>
  </template>

  <style scoped>
  .overall{
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
  </style>
```

## Access Granted Component 

Now we have to create a component to show that Access was Granted after entering the right password. Create a file called **GrantedPage.vue** under **src/components** and add the following code :

```html{}[GrantedPage.vue]
  <template>
    <v-row justify="center">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="auto">
            <h1 class="granted">Access Granted !!!</h1>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </template>

  <style scoped>
  .granted{
    font-style: normal;
    font-family: Courier New,serif, monospace;
    font-weight: 600;
    font-size: medium;
    line-height: 1.25;
    color: chartreuse;
    border: 1px solid chartreuse; /* Border properties (width, style, and color) */
    padding: 10px;
    margin: 10px;
  }
  </style>
```

The code creates a border box with the text **"Access Granted"** in the middle of the webpage.

![Access Granted](https://i.imgur.com/ORg8u3P.png)

## Load File Component

The final page we're going to create, is the one that shows that we are accessing the file and indicates the progress. Let's begin with a component called `AccessFilePage.vue`.

We'll begin by creating a border box in the center of the screen to hold our content using the following code :

```html{}[AccessFilePage.vue]
<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row justify="center">
        <!-- The line below is the key reason for the width of the box -->
        <v-col cols="6"> 
          <div class="border-box">
            <div class="title">
                <h2 class="title_theme">Accessing the file</h2>
            </div>
            <div class="line-space"></div>
            <div>
              <div class="content_number">
								<!-- Enter the Percentage Here -->
              </div>
              <div>
                <!-- Enter the Loading Animation Here -->
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
  <!-- my tutorial website password is NKEMISAWESOME-->
```

And for our styles we'll have :

```scss{}[AccessFilePage.vue]
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .title_theme{
    font-style: normal;
    font-family: Courier New,serif, monospace;
    font-weight: 600;
    font-size: medium;
    line-height: 1.25;
    color: white;
  }
  
  .content{
    margin: 10px 10px 30px;
  }
  
  .percent_theme{
    font-style: normal;
    font-family: Courier New,serif, monospace;
    font-weight: 600;
    font-size: x-large;
    line-height: 1.25;
    color: chartreuse;
  }
  
  .content_number{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  
  .border-box {
    border: 1px solid chartreuse; /* Border properties (width, style, and color) */
    padding: 10px;
    margin: 10px;
  }
  
  .line-space {
    height: 2px;
    background-color: chartreuse;
    margin: 0 -10px;
    padding-left: 0;
    padding-right: 0;
  }
```

Next, we'll do the logic for the percentage increase 

We are using a counter function that counts from 0-100. While the counter is less than 100, it increases its value by 1 every 100 milliseconds and once it reaches the limit, it stops the timer and redirects to our next page. 

```javascript{}[AccessFilePage.vue]
<script setup>
  import {onMounted, onUnmounted, ref} from "vue";
  import {useRouter} from "vue-router";

  const percentage = ref(0)
  let percent;

  function counter(){
    percent = setInterval(() => {
      if (percentage.value < 100) {
          percentage.value++;
      } else {
          // If counter reaches 100 or more, clear the interval
          clearInterval(percent);

          // this is a custom route for my view after access is granted, you can change it as you wish
          route.push('/')
      }
    }, 100);
  }

  onMounted(() => {
    counter() // Runs every 1 second
  })

  onUnmounted(() => {
    clearInterval(percent);
  })

</script>
```

The function is tied to vuetify's custom component, the v-progress linear, which shows a progress bar based on the value of `percentage` derived from our counter function :

```html
  <div class="content">
    <div class="content_number">
      <!-- Percentage  -->
      <h1 class="percent_theme">{{percentage}}%</h1>
    </div>
    <div>
      <!-- Loading Animation  -->
      <v-progress-linear
        v-model="percentage"
        color="#7FFF00FF"
        height="25"
      ></v-progress-linear>
    </div>
  </div>
```

The final result is :

![Loading](https://i.imgur.com/EJ9IubS.gif)

## Access Granted View

Next we'll have to have a view component under _src/views_, to show our newly created components. Let's name this view `AccessGrantedView.vue`. What this view does is to show the first access granted page then after a few seconds it switches to the loading screen.

First lets add the template :

```html
<template>
  <v-container 
    class="container" 
    fluid 
    style="height: 100vh; background-color: black"
    >
    <granted-page v-if="!access_file"/>
    <access-file-page v-else />
  </v-container>
</template>
```

Then we'll need some logic to make the switch :

```javascript
  <script setup>
      import {ref, onMounted} from "vue";
      import AccessFilePage from "@/components/AccessFilePage.vue";
      import GrantedPage from "@/components/GrantedPage.vue";
      const access_file = ref(false)

      onMounted(() => {
          setTimeout(() => {
              access_file.value = true
          }, 3000);
      })
  </script>
```

Now, we have access. You can create your own custom view to route to after your access is given. But before that we have to configure our router, so the code doesn't fall apart

## Router Setup

Under the router folder, in a file called `index.js`, we can define our routes by mapping a View to a route.

```javascript
  // Composables
  import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    { 
      path: '/',
      component: () => import('@/layouts/default/Default.vue'),
      children: [
        { // enter password view
          path: '',
          name: 'Password',
          component: () => import('@/views/PasswordView.vue'),
        },

        // access granted view
        {
        path: 'granted',
        name: 'AccessGranted',
        component: () => import('@/views/AccessGrantedView.vue'),

        }
      ],
    },
    
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

  export default router

```

Finally, our code is ready to run. You can test the new app out by running the command `yarn dev`. The password for this tutorial is **COWSARECUTE**.

## Conclusion

Now, you can see your features in action

![WalkThrough](https://i.imgur.com/aowsIDb.gif)

The full tutorial code is located on [GitHub](https://github.com/MinellaPersonalProjects/secretweb_frontend)

You can also see the website in action at this [link](https://comfy-melba-927662.netlify.app/), all you have to do is click on the `COMMUNITY` button at the website.

With the secret invasion website, after the password is entered you are led to a video trailer for the show. For our website, I'm adding a fun surprise. You can find the website here, clues to my password are located in this tutorial, have fun finding it. Happy Coding !!!


