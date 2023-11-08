---
title: 'Quick Start Vue 3, Vuetify 3 Project'
headline: 'Start a Vue 3 Project with ShortCuts'
summary: 'Learn how to kickstart your Vue.js project with a step-by-step guide to building a Vue application with command line shortcuts'
myImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-mD8yJm2YRM3ls1pbiXAEJ_eoLN47IgW8w&usqp=CAU'
tags:
  - "vue"
publishDate: 18 Oct 2023
publishDateTime: 2023-10-18:17:30
---

Starting a new project with frameworks like Vue and React couldn't be any easier with popular shortcuts like `vue create` or `create-react-app` . With the new Vue 3, we are still waiting for some features we know and love to catch up with the revamped core.

Enter Vuetify. As a premier Vue.js component library, Vuetify is acclaimed for its extensive suite of Material Design components, streamlining the creation of elegant and responsive web interfaces.Vuetify provides users with a set of pre-built UI components to create beautiful and responsive applications, making a go-to choice for developers seeking efficiency and modern aesthetics. 

In this tutorial, I'll show you how to quickly set up a Vue Project with Vuetify as a UI FrameWork and introduce some of the basics of Vuetify.

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

![Imgur_1](https://i.imgur.com/avyri9S.png)

Next you'll have to choose a preset based on what you want available in your app
![Imgur_2](https://i.imgur.com/YeggS2X.png)

Finally you can choose which preset you want to use to install dependencies 
![Imgur_3](https://i.imgur.com/SXZEoh5.png)

## Project Structure 

A project will be generated with a project structure similar to this 

```bash
    project-root/
    ├── node_modules/               # Folder containing all the modules installed by npm/yarn
    ├── public/                     # Public assets that will not be webpack-processed
    ├── src/                        # The Source Folder 
    ├── .browserslistrc             # Browser compatibility configuration
    ├── .editorconfig               # File editor configuration
    ├── .eslintrc.js                # ESLint configuration
    ├── .gitignore                  # Specifies intentionally untracked files to ignore by Git
    ├── index.html                  # HTML template
    ├── jsconfig.js                 # JS configuration
    ├── package.json                # Project manifest with dependencies and scripts
    ├── README.md                   # Project README with instructions
    ├── yarn.lock                   # Yarn lock file to lock dependencies
    ├── vite.config.js              # Vite Configuration
    └── ...
```

The **node_modules** directory is where all of your project dependencies are installed.

The **public** directory is where you store static assets like the favicon.ico. Files in this folder are not processed by Webpack.

The **src** folder is the heart of your application. Within this folder is where you'll spend most of your time writing and editting. Below is an expanded explanation of what the subfolders do:

- **assets** contain static files like images,fonts and some global files
- **components** is where you store the vue components that make up the building blocks of your app like buttons, cards or forms
- **layouts** contain vue components that let you have a consistent structure across different views without repeating code
- **plugins** can include JavaScript plugins such as Vuetify itself 
- **router** allows you to define routes in your application and links them to components
- **store** manages the state data for your application
- **styles** contains global styles and CSS-related assets, like variables and mixins, for the entire application.
- **views** are the Vue components that represent different pages of your app and are usually associated with routes.
- **App.vue** is the main component that wraps your application.
- **main.js**  is the entry point that creates a Vue instance and mounts the app.

Sure, here are one-line explanations for each of these project files:

- **.browserslistrc**: Defines the browsers that your project will support, influencing how Babel, Autoprefixer, and other tools compile your code.
- **.editorconfig**: Provides a consistent coding style for various editors and IDEs that you and your team may use.
- **.eslintrc.js**: Configures ESLint rules for linting your JavaScript code, helping maintain code quality and consistency.
- **.gitignore**: Lists files and directories that should be ignored by Git, preventing them from being included in version control.
- **index.html**: Serves as the entry HTML file, which references your JavaScript application and where it's initially loaded.
- **jsconfig.js**: Contains JavaScript project configuration details, often used to set compiler options for JavaScript language services.
- **package.json**: Acts as the project's manifest, which includes metadata, scripts, and a list of node module dependencies.
- **README.md**: A Markdown file with documentation about your project, including setup instructions, features, and usage.
- **yarn.lock**: Auto-generated by Yarn to lock down the versions of installed packages, ensuring consistent installs across environments.
- **vite.config.js**: Configures Vite, a modern frontend build tool, setting up development and build options for your project.

## First Vuetify Component

- Demonstrate adding a simple Vuetify component, e.g., a button, to the App.vue.
- Show how to customize its appearance using props.

## Run your Vuetify Project


## Conclusion