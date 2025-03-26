# NPM Fundamentals

NPM essentially allows us to use the wonderful world of open source to create awesome packages.

It also creates our own "liveserver so that we can"

## Initialize your project with npm.
npm init

- this creates a npm package.json which is JSON and keeps track of the packages you've installed and the 

## Install Parcel and setup parcel

1. install parcel
npm install parcel --save-dev

your devDependencies in your package.json should now look like
```json
  "devDependencies": {
    "parcel": "^2.3.2"
  },
```


2. in your package.json file set up your build scripts
```json
  "source": "index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
```

3. instead of using 

## Install some packages

All of the packages below are going to be installed in the "node_modules" folder.

### Bootstrap for styling

npm install bootstrap

### Chart.js for some charts

let's download a package that is open source using npm.

npm install chart.js

you should see this in your "dependencies" in your package.js like so.
```json
  "devDependencies": {
    "parcel": "^2.3.2"
  },
```

## Notes on NPM and sharing your project

Now what you can do now is that when share your project, you don't include your node_modules folder.

Normally you'll be using github.

You'll use the command below to install of the dependencies

npm install