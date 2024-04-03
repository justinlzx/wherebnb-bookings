# wherebnb-bookings

wherebnb-bookings is a simple microservice that manages the bookings for the wherebnb application.

It tracks the confirmed booking dates of listingIds and the checkIn status of the guests/bookers. 

## Setting up 

Install dependencies
```sh
  npm install
```

## Running the application
Run app in development server and connect to the cloud database
```sh
  npm run dev:remote 
```
Run app in development server and connect to the local database
```sh
  npm run dev 
```

Synchronise cloud database with ORM
```sh
  npm run sync:remote
```

NOTE: database will need to be created before hand.

Build docker image 
```sh
  docker build -t image-name .
```
Run docker image 

```sh
  docker run -p -d 8000:3000 image-name
```

NOTE: port mapping is up to user discretion

