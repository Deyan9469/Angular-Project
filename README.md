# Introduction
Hello, this is my Project for Soft-Uni called Art Gallery
# Start up
To start the project you will need:

1. Set 2 terminals - one for folder `project` and another in folder `server`
2. In folder `project` type in terminal `npm install`
3. In folder `server` with the second terminal type `node server`, to start the server
4. In project terminal you can start the project with `npm run start` or `ng serve`
   
From there Angular will generate <http://localhost:4200>, click it and view my project.

# Idea :art:
   <br> The idea of the project is for users to upload and view different art work by other people,
and put likes on the art (but the functionality for that is work in progress).

# Functionality :star:
The server that I'm using is from "SoftUni," `practice server`. 
<br> Here is a link for it - https://github.com/softuni-practice-server/softuni-practice-server :octocat:

<br> In addition, if you want to work on the project, the APIs for the server data base are:

1. User serice `http://localhost:3030/users`
   <br>`http://localhost:3030/users/register` - POST request
   <br>`http://localhost:3030/users/login` - POST request
   <br>`http://localhost:3030/users/logout` - GET request
3. Collections service `http://localhost:3030/data`
   <br>`http://localhost:3030/data/art` - GET, POST, PUT, DELETE requests
5. Comments service `http://localhost:3030/comments` - GET, POST, DELETE requests
