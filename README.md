# Project Overview
In this project, I fetch data about Northcoders staff from a server and store it locally. I then leak this data to the world by creating a node:http web server from scratch.

# Project structure

## data-fetching
Using Node's http and fs modules to fetch data from the Northcoders API, then saving them locally into JSON files. Asynchronous processing handled by callback functions.


## http-server
A Node:http web server that serves the aforementioned JSON  data. Separation of concerns and the DRY principle achieved through the implementation of the MVC fromework and Utils helper functions.


# Project task breakdown

### Part 1 - Data fetching
1. Retrieve a list of all the available people at the following end point: `https://nc-leaks.herokuapp.com/api/people`.

2. Find all of the northcoders from this list and save their data to a file.

3. Retrieve everyone's interests and store it in another file from `https://nc-leaks.herokuapp.com/api/people/:username/interests`.

4. Retrieve everyone's pets from `https://nc-leaks.herokuapp.com/api/people/:username/pets`.

5. Automate the above steps

## Part 2 - Web server
1. Create a node:http web server

2. Add a GET `/api/northcoders` endpoint that serves a JSON object of all the northcoders which shows their name, job details, image and username.

3. Add a GET `/api/northcoders/:username` parametric endpoint which serves the above information for one northcoder.

4. Add a GET `/api/pets/:username` parametric endpoint which serves a northcoders pets.

5. Add a GET `/api/interests/:username` parametric endpoint which serves a northcoders interests.

6. Add some error handling to your server. What should it respond with if you receive a request for a username that doesn't exist? What status code should you respond with?

### Part 3 - Advanced Tasks

1. Add a GET `/api/pets` endpoint which accepts a query that serves all northcoders who have a living or dead pet

2. Add a query parameter to your GET `/api/pets` endpoint that serves all northcoders who have a certain kind of pet (e.g. cat, alpaca, llama etc)