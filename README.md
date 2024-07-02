# Introduction :blush:
Hello, this is my Project for Soft-Uni called Art Gallery, a user-friendly UI/UX application.

https://github.com/Deyan9469/Angular-Project/assets/123094953/58cb69da-3efa-4e42-a868-72406cf2d666

# Start up :facepunch:
To start the project you will need:

1. Set 2 terminals - one for folder `project` and another in folder `server`
2. In folder `project` type in terminal `npm install`
3. In folder `server` with the second terminal type `node server`, to start the server
4. In project terminal you can start the project with `npm run start` or `ng serve`
   
From there Angular will generate <http://localhost:4200>, click it and view my project.

# Idea :art:
   <br> The idea of the project is for users to upload and view different art work by other people.

# Functionality :star:
The server that I'm using is from, "SoftUni" [practice server]( https://github.com/softuni-practice-server/softuni-practice-server) :octocat:. 

<br> In addition, if you want to work on the project, the APIs for the server database are:
<br>


| Service           | Endpoint                    | Requests      |
|-------------------|-----------------------------|---------------|
| User Service      | `http://localhost:3030/users` |               |
|                   | `/register`                   | POST          |
|                   | `/login`                      | POST          |
|                   | `/logout`                     | GET           |
| Collections Service | `http://localhost:3030/data` |               |
|                     | `/art`                        | GET, POST, PUT, DELETE |
| Comments Service  | `http://localhost:3030/comments` | GET, POST, DELETE |
