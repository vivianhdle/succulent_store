# Cactus Store
<img align="right" width="150" src="/public/dist/cactus-icon.png">

# Succulents and Cactus E-Commerce Store

##### http://succulents.vivianhdle.com/

This repo contains an E-Commerce store. Designed for desktop and mobile, the app serves as place for customers to come and buy succulents/cactus. Users can add to their cart as well as update their cart quantities or delete certain cart items.

### Setup Instructions

1. Fork this repo
1. Clone your forked copy of this repo
   - `git clone https://github.com/[Your Username]/succulent_store.git`
1. Change directory into the newly cloned repo
   - `cd succulent_store`
1. Install dependencies 
   - `npm install`
1. Use MAMP or similar program to start Apache and MySQL servers
   - Set root directory of server to the `public` folder of this project
   - Set Apache port to `3000`
   - Use phpMyAdmin (or similar) to create a database
1. Start dev server
   - `npm start`
1. Open a browser and navigate to `localhost:3000`

### Bundle For Deployment

1. Run webpack to bundle files
   - `npm run bundle`

**NOTE:** *After bundling and placing on a web server. The `public` folder should be the web root*

