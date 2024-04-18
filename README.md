# Introduction
Hello, this is my Project for Soft-Uni called Art Gallery
# Start up
To start the project you will need:

1. Set 2 terminals - one for folder `project` and another in folder `server`
2. In folder `project` type in terminal `npm install`
3. In folder `server` with the second terminal type `node server`, to start the server
4. In project terminal you can start the project with `npm run start` or `ng serve`
   
From there Angular will generate <http://localhost:4200>, click it and view my project.

#Idea :art:
   Idea of the project is for users to upload and view different Art work of other people
and put likes on the Art (but the functionality for that is work in progress).

#Functionality :star:
In additional if you want to work on the project the api for the server data base are:
The server that i'm useing is from "SoftUni" `practice server` 
Here is a link for it - https://github.com/softuni-practice-server/softuni-practice-server :octocat:

1. User serice `http://localhost:3030/users`
   *`http://localhost:3030/users/register` - POST request
   *`http://localhost:3030/users/login` - POST request
   *`http://localhost:3030/users/logout` - GET request
3. Collections service `http://localhost:3030/data`
   `http://localhost:3030/data/art` - GET, POST, PUT, DELETE requests
5. Comments service `http://localhost:3030/comments` - GET, POST, DELETE requests
