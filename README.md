# Movies Web App

![Design preview for the Entertainment web app coding challenge](./preview.jpg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/79d07dcd-ce5e-412b-8c97-847cf5e45ba3/deploy-status)](https://app.netlify.com/sites/inspiring-bubblegum-34cb15/deploys)

## Welcome! 👋


#### Global pre-requisites
- [Node.js](https://nodejs.org/en/) (v16.x or higher, preferably latest LTS)


#### Getting started

In order to run this app locally successfully you will need to have some environment variables set.

* **cypress.env-example.json**: This is a JSON file that contains the UID of the user that you need to set as the test user.
* **serviceAccount-example.json**: This is a JSON file that contains the environment variables that you need to set to connect to the Firebase database (you can get it from Firebase Console -> your project -> Project settings -> Service accounts -> Generate new private key).

Once that is done, rename the files to be without the "-example" part.

Then navigate to the repository's root directory and run the following commands:
```
yarn
yarn dev
```
- The application is now running at [http://localhost:8080](http://localhost:8080)


#### General commands
To run unit tests locally:
```
yarn test:unit
```
To run integration tests locally:
```
yarn test:integration
```
To run storybook locally:
```
yarn storybook
```


## In this app, users are be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- This project is a full-stack application (you can Login/Logout/Bookmark/etc, all is connected through Firebase)

### General Behaviour

- General
  - The navigation menu should be fixed to the left for larger screens. Use the "Desktop - Home" page in the design as a visual reference.
- Home
  - The trending section should scroll sideways to reveal other trending shows
  - Any search input should search through all shows (i.e. all movies and TV series)
- Movies
  - This page should only display shows with the "Movie" category
  - Any search input should search through all movies
- TV Series
  - This page should only display shows with the "TV Series" category
  - Any search input should search through all TV series
- Bookmarked Shows
  - This page should display all bookmarked shows from both categories
  - Any search input should search through all bookmarked shows


## Got feedback for me?

I love receiving feedback! I'm always looking to improve. So if you have anything you'd like to mention, please email danielfrey101@gmail.com

**Have fun exploring!** 🚀
