---
title: 'Start a Vue Project from Scratch'
summary: 'Learn how to kickstart your WebApp with a step-by-step guide to building a Vue application from the ground up'
myImage: '/img/blog1.jpeg'
tags:
    - "vue"
publishDate: 27 Oct 2023
publishDateTime: 2023-10-21:10:30
---

VueJS is a progressive JavaScript framework that makes building modern web applications a breeze. With a good UI framework like Vuetify and a build tool like Vite, building web apps becomes even breezier.

There are readily available templates and commands to build your Vue App and if you are interested in a quick and easy start you can check out the [Start a Vue Project with Shortcuts Tutorial](/blog/start-vue-project-with-shortcuts). However, there are merits to creating your Vue Project from scratch, you can gain insights into the framework itself, as well as insight on your project architecture and the underlying intricacies of the Vue Ecosystem. It's great for those who want to learn every detail or make their app just right for their needs.

Starting a Vue project from scratch may seem tricky, but with the right guidance, it can be a rewarding and straightforward process. In this blog post, I will take you through the essential steps to start your Vue project from the ground up with Vuetify and Vite. By the end of this guide, you will have a solid foundation for creating dynamic and interactive web applications using VueJS. 

## Step 0: SetUp Computer and Install DevTools

Before diving into your project, you have to ensure that you have the necessary tools ready. If you are already familiar with the command line, have a code editor, and NodeJS installed, feel free to skid ahead. However, if you're new to web devolpment and need guidance setting up your computer I recommend starting with my tutorial for [Getting Started with Web Development](/blog/setup-computer-for-webdevelopment).

Once you have completed the initial set up, you can return here and dive into creating your Vue project from scratch. 

## Step 1: Initialize your Project
First, create a new folder on your computer where you would like your project to go. Then you can open up the folder in your IDE, for the purpose of this tutorial we will be using an IDE called **Visual Studio Code**. In Visual Studio Code, once you open up the project folder you created, you can go to the terminal and initialize the project using the command :

```bash
    npm init -y
```

This command creates a file called **package.json** in your project directory and we will need to edit the file to get your project up and running properly.

## Step 2: Edit Package.json
The **package.json** is a fundamental file for any Node.js-based projects, including those that use frameworks and libraries like Vue, React, Angular, and many others. For the purpose of our project, we need to add some modifications to ensure compatibility and optimization for a Vue + Vite setup. 

First, **remove** line :

```javascript{1}[package.json]
    "main": "index.js",
```

This is because our project isn't a typical Node app, and this keeps things simple and clear.

Next, we need to set `"private"` to `true` to make sure our project isn't accidentally published to the npm registry. Then, we will need to include scripts so that our application can run. Add the following code to your **package.json** after the `description` variable to implement this:

```javascript{4}[package.json]
    {
        /* existing code ... */

        "private": true,
        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview",
            "lint": "eslint . --fix --ignore-path .gitignore"
        },

        /* existing code ... */
    }
```

## Step 3: Install Dependencies and SetUp Plugins
Now we need to add the essential dependencies for our project. Use the following commands to install :

```bash
    npm i vue vuetify vite @vitejs/plugin-vue vite-plugin-vuetify @mdi/font 
```

```bash
    npm install -D sass
```

You will notice a **node_modules** folder appear in your directory.

Now we need to create the **src** folder, think of the **src** folder as the place where all the important code for your website or web app lives.

Insisde the **src** folder, create a folder called **plugins**. Since we are using the UI framework, Vuetify for our project, we will need to add some setup information and additional styling or functionality for our project.

Under the **plugins** folder create a file called **vuetify.js**. Within this file add the following code :

```javascript{7-13}[src/plugins/vuetify.js]
    
    import { createVuetify } from 'vuetify'
    
    // Styles
    import '@mdi/font/css/materialdesignicons.css'
    import 'vuetify/styles'
    
    export default createVuetify({
        theme: {
          themes: {
            light: {
              colors: {
                primary: '#1867C0',
                secondary: '#5CBBF6',
              },
            },
          },
        },
      })

```

Next, create a file called **index.js** . This file plays a crucial role in configuring and registering various plugins for your Vue application:

```javascript{1-5}[/src/plugins/index.js]
    import vuetify from './vuetify'
    
    export function registerPlugins (app) { 
        app.use(vuetify)
    }
```

## Step 4: SetUp Vite Config
Vite empowers you with greater controlover your project's configuration through the use of a config file, **vite.config.js**, which resides in the root directory of your project.

Begin by creating a new file in your project called **vite.config.js**.

Open the **vite.config.js** file in your editor. For a basic setup, you can start with the following structure:

```javascript{}[vite.config.js]

   // Utilities
    import { defineConfig } from 'vite'

    export default defineConfig({

    })
```

Next, we'll define the plugins we'll need to set up Vue and our UI framework, Vuetify

```javascript{}[vite.config.js]
   // Plugins
    import vue from '@vitejs/plugin-vue'
    import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
    
    // Utilities
    import { defineConfig } from 'vite'
    import { fileURLToPath, URL } from 'node:url'

    export default defineConfig({
        plugins: [

            /** handle vuejs configurations */
            vue({
                template: { transformAssetUrls }
            }),

            /** add vuetify ui framework into project */
            vuetify({
                autoImport: true,
                styles: {
                    /* set style config file, eg src/styles/settings.scss */
                    configFile: '',
                },
            }),
        ]
    })
```

Vite provides a host of other configuration options like build, css, aliases and more. Depending on your project's needs, you might want to look into the [official Vite documentation](https://vitejs.dev/config/) to explore and implement them.

## Step 5 : Create index.html file 
Your Vue app needs an HTML entry point. We'll create an **index.html** file in the project root, where your Vue application will be mounted.

```html{1-13}[index.html]
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello World</title>
      </head>
    
      <body>
        <div id="app"></div>
        <script type="module" src="/src/main.js"></script>
      </body>
    </html>
```

By following these steps, you'll have your **index.html** file ready as the entry point for your Vue app, next we will need a folder to store assets like the favicon, enhancing the appearance and functionality of your web application.


## Step 6: Create public folder
The **public** folder is used to store static assets that don't need processing or bundling like images or fonts. In your project root create a folder called **public**. 

In our **public** folder, we'll save an image and name it **favicon.ico**, this is the small icon you usually see next to the website title in browser tabs or bookmarks. You can use [this image](https://w7.pngwing.com/pngs/603/872/png-transparent-donuts-homer-simpson-drawing-render-simpson-donut-purple-eating-magenta.png) as your icon, alternatively you can choose your own favicon image online


## Step 7: Create the Vue App
We are finally ready to create the core structure of our Vue App. 

Navigate to your **src** folder, inside this folder we will add in our core structure.

Begin by creating a file called **App.vue** in the project root directory, this is our main Vue component. Most of what you see in a Vue app starts from this component and other components branch out from it.

```html{}[src/App.vue]
    <template>
      <h1> Hello World </h1>
    </template>
    
    <script setup>
      //
    </script>
```

Next, we'll create a file called **main.js** . This file serves as the entry point for our Vue App, it helps set the stage for our application.

```javascript{9-13}[src/main.js]
    // Components
    import App from './App.vue'
    
    // Composables
    import { createApp } from 'vue'
    
    // Plugins
    import { registerPlugins } from '@/plugins'
    
    const app = createApp(App)
    
    registerPlugins(app)
    
    app.mount('#app')
```

With these steps completed, your Vue project structure is taking shape, and you're all set to embark on your web development journey with Vue and Vuetify.

At the end your file structure should look something like this :

```bash
    /project-root
    ├── /node_modules
    ├── /public
    │   └── favicon.ico
    ├── /src
    │   ├── App.vue
    │   ├── main.js
    │   └── /plugins
    │       └── index.js
    │       └── vuetify.js
    ├── vite.config.js
    ├── package.json
    └── index.html
```

## Step 8: Run App
Now it's time to see your Vue App in action. Run the command 

```bash
  npm run dev
```

or

```bash
  yarn dev
```

Once you run the command, you'll see an output in your terminal that resembles the following:

![Screenshot 2023-10-06 at 6.16.59 AM.png](/img/blog1/Screenshot_2023-10-06_at_6.16.59_AM.png)

If you copy the URL into your web browser, you’ll see your Vue app live in your browser


## Conclusion
Starting your Vue App from scratch is great to familiarize yourself with the programming language, but if you want a quick and easy start to your project and to build something fun, quickly, check out my other article :

[Frontend Development: ReCreate the Opening of Marvel's Secret Invasion Website using VueJS and Vuetify](/blog/recreate-secret-invasion-website)


> Sources :
> 
>    [Intro to Vue](https://vuejs.org/guide/introduction.html)
> 
>    [Get Started with Vue - FreeCodeCamp](https://www.freecodecamp.org/news/get-started-with-vite/#:~:text=Vite%20allows%20you%20to%20have%20more%20control%20over,CLI%20option%2C%20as%20shown%20below%3A%20vite%20--config%20my-config.js)
> 
>    [Yarn Installation Tutorial](https://www.hostinger.com/tutorials/how-to-install-yarn#:~:text=Here%E2%80%99s%20how%20to%20install%20Yarn%20using%20npm%3A%20Open,in%20to%20SSH%20to%20enable%20the%20Yarn%20commands).
> 
>    [Downloading and Installing Node / NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)