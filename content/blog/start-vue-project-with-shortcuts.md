---
title: 'Quick Start Guide to a Vue 3, Vuetify 3 Project'
headline: Start a Vue 3 Project with ShortCuts
summary: >-
  Learn how to kickstart your Vue.js project with a step-by-step guide to
  building a Vue application with command line shortcuts
myImage: >-
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-mD8yJm2YRM3ls1pbiXAEJ_eoLN47IgW8w&usqp=CAU
tags:
  - vue
publishDate: 18 Oct 2023
publishDateTime: '2023-10-18:17:30'
---

Starting a new project with frameworks like Vue and React couldn't be any easier with popular shortcuts like `vue create` or `create-react-app`. With the new Vue 3, we are still waiting for some features we know and love to catch up with the revamped core.

Enter Vuetify. As a premier Vue.js component library, Vuetify is acclaimed for its extensive suite of Material Design components, streamlining the creation of elegant and responsive web interfaces. Vuetify provides users with a set of pre-built UI components to create beautiful and responsive applications, making a go-to choice for developers seeking efficiency and modern aesthetics.

In this tutorial, I'll show you how to quickly set up a Vue Project with Vuetify as a UI Framework and introduce some basics of Vuetify.

## Prerequisites

- Basic Understanding of Vue
- NodeJS and NPM installed

## Set Up Project

We'll start our Vuetify project by running the command in the directory you would like your project to be in:

```bash
npm init vuetify
```

or

```bash
yarn create vuetify
```

You'll see a message like this :

<img src="https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735782164/1_-_avyri9S_lfjae5.png" alt="img1" />

Next you'll have to choose a preset based on what you want available in your app <img src="https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735782165/2_-_YeggS2X_so1m8w.png" alt="img2"/>

Finally, you can choose which preset you want to use to install dependencies <img src="https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735782166/3_-_SXZEoh5_v8gpp5.png" alt="img3"/>

## Project Structure

A project will be generated with a project structure similar to this

```bash
project-root/
    ├── node_modules/               
    ├── public/                     
    ├── src/                        
    ├── .browserslistrc             
    ├── .editorconfig               
    ├── .eslintrc.js                
    ├── .gitignore                  
    ├── index.html                  
    ├── jsconfig.js                 
    ├── package.json                
    ├── README.md                   
    ├── yarn.lock                   
    ├── vite.config.js             
    └── ...
```

The **node_modules** directory is where all of your project dependencies are installed.

The **public** directory is where you store static assets like the favicon.ico. Files in this folder are not processed by Webpack.

The **src** folder is the heart of your application. Within this folder is where you'll spend most of your time writing and editing. Below is an expanded explanation of what the subfolders do:

- **assets** contain static files like images, fonts and some global files
- **components** is where you store the vue components that make up the building blocks of your app like buttons, cards or forms
- **layouts** contain vue components that let you have a consistent structure across different views without repeating code
- **plugins** can include JavaScript plugins such as Vuetify itself
- **router** allows you to define routes in your application and links them to components
- **store** manages the state data for your application
- **styles** contains global styles and CSS-related assets, like variables and mixins, for the entire application.
- **views** are the Vue components that represent different pages of your app and are usually associated with routes.
- **App.vue** is the main component that wraps your application.
- **main.js** is the entry point that creates a Vue instance and mounts the app.

Outside the **/src** folder, there are some other configuration files :

- **.browserslistrc**: Defines the browsers that your project will support, influencing how Babel, Autoprefixer, and other tools compile your code.
- **.editorconfig**: Provides a consistent coding style for various editors and IDEs that you and your team may use.
- **.eslintrc.js**: Configures ESLint rules for linting your JavaScript code, helping maintain code quality and consistency.
- **.gitignore**: Lists files and directories that should be ignored by Git, preventing them from being included in version control.
- **index.html**: Serves as the entry HTML file, which references your JavaScript application and where it's initially loaded.
- **jsconfig.js**: Contains JavaScript project configuration details, often used to set compiler options for JavaScript language services.
- **package.json**: Acts as the project's manifest, which includes metadata, scripts, and a list of node module dependencies.
- **README.md**: A Markdown file with documentation about your project, including setup instructions, features, and usage.
- **yarn.lock**: Auto-generated by Yarn to lock down the versions of installed packages, ensuring consistent installations across environments.
- **vite.config.js**: Configures Vite, a modern frontend build tool, setting up development and build options for your project.

## Conclusion

You can navigate into your folder and run your newly setup project using the command

```bash
yarn dev
```

Once you run the command, you'll see an output in your terminal that resembles the following:

<img src="https://res.cloudinary.com/dgdsc8fxf/image/upload/v1735782075/mFgAoiD_zp0y7a.png" alt="output"/>

If you copy the URL into your web browser, you'll see your Vue app live in your browser. You can play around with the code and gain more familiarity with the different aspects of a vuetify project. Happy Coding !
