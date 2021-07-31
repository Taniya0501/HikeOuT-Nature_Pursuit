# HikeOuT-Nature_Pursuit
HikeOuT is a campground rating app, where users can create their own campgrounds, view and comment on others' campgrounds. 

## Features:star2:

![alt-text](https://github.com/Taniya0501/HikeOuT-Nature_Pursuit/blob/main/ss.PNG)

* It is a fully working website where user can register/signin himself, and can add new campgrounds along with it's pictures, can edit the campground's details, leave review on campground with star-ratings, delete reviews, delete whole campground along with its details and reviews. Also, user can see the campground position in map and can also view all the registered campgrounds Clusters formed (along with features of Zoom-in/Zoom-out, rotate-map,etc).

visit it here-
[HikeOut](https://hikeout-yelpcamp.herokuapp.com/) :rocket::rocket:

## Tech Stack :zap::zap:

| FRONTEND      | BACKEND       |
| ------------- | ------------- |
| HTML          |   Nodejs
| CSS           | Express  |
| Bootstrap 5   | MapBox|
| JavaScript    |MongoDB for Database|
|               |Cloudinary|

## To install and view locally :arrow_down:

```bash
$ git clone https://github.com/Taniya0501/HikeOuT-Nature_Pursuit.git
$ cd HikeOuT-Nature_Pursuit
$ npm install
$ node app.js
```

## For adding mongodb :arrow_down:

- You have to use use mongodb Atlas for cloud storage of your data:
  - To do that, first create a mongodb atlas account
  - Go to your cluster and then click on the connect button
  - Select Connect your application and then copy the connection string
  - Now, into the project folder, create a file named `.env` and add the following code
  - `MONGODB_URI = <your_connection_string>`
    To view in your brower navigate to `http://localhost:3000` on your browser
