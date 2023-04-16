# Introduction
This project illustrates my capabilities in setting up a fully functioning web server from scratch using Node's http module, that serves locally stored JSON objects. The JSON files were originally fetched from the Northcoder's API.

# Project structure

## data-fetching
Using Node:http module fetching data from Northcoder's API, and saving them locally as JSON files.


## http-server
A Node:http web server that serves the aforementioned JSON file data. Separation of concerns and the DRY principle achieved through the implementation of the MVC fromework.





# Project Overview
In this project, I fetch data from a server about Northcoders and store it locally. I then leak this data to the world by creating a node:http web server that will respond with the data collected.

### Part 1 - Data fetching
1. Use node's HTTP module to retrieve a list of all the available people at the following end point: `https://nc-leaks.herokuapp.com/api/people`.

2. Once you have the list of people. Find all of the northcoders from the list and save their data to a file.

3. Now you have access to the northcoders' usernames, you can obtain more information for each person. Retrieve everyone's interests and store it in another file from `https://nc-leaks.herokuapp.com/api/people/:username/interests`.

4. Do the same for everyone's pets from `https://nc-leaks.herokuapp.com/api/people/:username/pets`.

5. Automate the above steps by putting them in a single npm command.

6. Use a library such as [`superagent`](https://github.com/visionmedia/superagent) to make your requests easier to handle. Refactor your pets in interests requests to use superagent instead of node's http module.

## Part 2 - Web server
1. Using Node's http module create a web server that responds with 'hello' when it receives a GET request on the path /api

2. Add a GET `/api/northcoders` endpoint that serves a JSON object of all the northcoders which shows their name, job details, image and username.

3. Add a GET `/api/northcoders/:username` parametric endpoint which serves the above information for one northcoder.

4. Add a GET `/api/pets/:username` parametric endpoint which serves a northcoders pets.

5. Add a GET `/api/interests/:username` parametric endpoint which serves a northcoders interests.

6. Add some error handling to your server. What should it respond with if you receive a request for a username that doesn't exist? What status code should you respond with?

### Part 3 - Advanced Tasks

1. Add a query parameter to your GET `/api/northcoders` endpoint that searches for northcoders with a specific job. e.g. all the block-leads or all the marketing team. How should the endpoint respond by default (i.e. when not provided the query parameter?) How should it behave when provided an invalid parameter? What status code should your server respond with?

2. Add a GET `/api/pets` endpoint which accepts a query that serves all northcoders who have a living or dead pet

3. Add a query parameter to your GET `/api/pets` endpoint that serves all northcoders who have a certain kind of pet (e.g. cat, alpaca, llama etc)