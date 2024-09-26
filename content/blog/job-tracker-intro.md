---
title: Setup Express Backend and SQLite3 Database for a Vue 3 Project 
headline: 'Part 1 : Create a Job Application Tracker using Vue 3, Vuetify, Express App'
summary: Learn how to integrate an Express Backend with a Vue 3 App
myImage: 'https://i.imgur.com/RPGqU8s.jpg'
tags:
  - vue
  - typescript
  - express
  - fullstack
publishDate: 20 Sept 2024
publishDateTime: '2024-09-20:9:30'
---

In this tutorial, we'll run through the process of setting up a full-stack web application. We'll use Vue 3, a progressive JavaScript framework, for building our frontend. On the backend, we’ll use Express, a minimal and flexible Node.js web application framework. For storage, we’ll use an SQLIte3 database to store our project’s information.

To enhance our user interface, we'll integrate Vuetify, a robust Material Design component framework for Vue. This will allow us to create a sleek, professional-looking application with minimal effort. Additionally, we'll leverage TypeScript in our frontend development to add static typing, improving code quality and developer productivity.

By combining these powerful tools and technologies, you'll gain hands-on experience in full-stack development while creating a practical, real-world application. Let's dive in and start building!

## Requirements

- Code editor (preferably Visual Studio Code)
- Node.js (version 18.16.0 or higher)
- Package manager (NPM and Yarn)

## Setup Frontend Project

We'll start our project by navigating to our VSCode terminal and input a shortcut to set up our frontend:

```bash
npm create vuetify
```

You'll be prompted in the command line to set up your project. You'll need to enter the project name, select presets, enable TypeScript, and choose a package manager.

Remember to use the "Essentials" preset. Also, select “Yes” to use TypeScript for the application.

```bash
✔ Project name: … job_tracker
✔ Which preset would you like to install? › Essentials (Vuetify, VueRouter, Pinia)✔ Use TypeScript? … Yes
✔ Would you like to install dependencies with yarn, npm, pnpm, or bun? › yarn
```

Next, we have to install the necessary dependencies

```bash
yarn add express nodemon concurrently sqlite3
```

## Setup Backend Server

Now our frontend project is set up, open up our newly created folder in VSCode then create a new folder called `/server`

within that folder, create a `index.js` file and include the following content :

```js [index.js]
const express = require('express');  
const cors = require('cors');
const port = process.env.BACKEND_PORT || 4000;  
const frontend = process.env.FRONTEND_PORT || 3000;  

const app = express(); 
 
// middleware and routes  
app.use(express.json()); 
 
// add cors for frontend port  
app.use(
	cors({
	    origin: `http://localhost:${frontend}`,  
	    })
);
  
// start server  
app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})
```

### Setup to run

Next, we need to configure the application to run both the frontend and backend concurrently. To do this, we'll modify the package.json file in our project's root directory. 

Open the `package.json` file and make the following changes:

```json [package.json]
"scripts": {     
- "dev": "vite", // [!code --]     
+ "dev:frontend": "vite", // [!code ++]     
+ "dev:backend": "nodemon server/index.js", // [!code ++]     
+ "dev": "concurrently 'yarn dev:frontend' 'yarn dev:backend'", // [!code ++] 
}
```

 

## Setup Database

Under the `/server` folder, create a new file called `db.js`, this is going to be where we set up the database. Next, we have to create the actual database file itself in the same folder called `jobs.db`

Open the `db.js` file, then initialize a new database

```js [db.js]
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(path.join(__dirname, 'jobs.db'), (err) => { 
  if (err) { 
    console.error("Error opening db:", err.message); 
  } 
});
```

Next, we are going to plan out our table. In this tutorial, we want to create a table where a user can store information on jobs they’ve applied to. Here are some headers we can use,

- Date Applied
- Position 
- Company 
- Location of Job
- Status of Application 
- Application Portal 
- Remarks / Notes


In our `db.js` after initializing the database, we can now create the table using SQL then export it to be accessed by other parts of our application.

```js [db.js]
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date_applied TEXT,
      position TEXT,
      company TEXT,
      location TEXT,
      status TEXT,
      app_portal TEXT,
      remarks TEXT
      )`)
});
      
module.exports = db;

```

To complete the setup of our database, import the database file to `index.js`

```js [index.js]
const express = require(‘express’);
const cors = require(‘cors’)

const db = require(‘./db’) // [!code highlight]

const port = process.env.BACKEND_PORT || 4000;  
const frontend = process.env.FRONTEND_PORT || 3000; 
...
```