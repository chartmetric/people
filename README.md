# Chartmetric People App

This application is for Chartmetric engineering interview only

## Installation
yarn start / npm start

## How to run
Open http://localhost:3000 (default) on the browser to start the project

## Assignments
### Show user's feeds (randomly generated) once the search result is clicked:
   1. Client
      * Build components to show feeds (See semantic-ui-react: https://react.semantic-ui.com/introduction)
      * Add actions/reducer to connect with the API and update states using Redux
   2. Server
      * Set up model/route to be able to communicate with the client (index.js / model/user.js)
      * Remember to follow the RESTful design best practices: https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9?gi=fb6b15b9d33e
### Show user's location
   1. Client 
      * Use the lat/lng value to show the location on Google Maps, using GoogleMapAPI
   2. Server 
      * Filter users by location


## License
MIT