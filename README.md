# Nextline Task Manager App

This web app allows users to manage their tasks. It includes basic user sign up and sign in and Get, Post, Put and Delete operations on the tasks.

## Running with Docker Compose

The web app solution is comprised of three docker containers (frontend, backend, database) and the relationship between them is managed using docker compose.

### Install Docker
https://docs.docker.com/get-docker/

### Install Docker-Compose
Windows and Mac Os distributions of Docker already include docker-compose. Installation information can be read here:

https://docs.docker.com/compose/install/

It is important to note that to use docker-compose the Docker Engine and the docker-compose CLI have to be installed.
### To build
`docker-compose build`
### To run
`docker-compose up`
### To run and build in one command
`docker-compose up --build`
### You can run in background with
`docker-compose up -d`
### To cleanup
`docker-compose down`

### Services

#### Frontend
Web Application using React, Redux and Material. UI.
- Maps port 3000 to port 80 so app can be accessed on `http://localhost`
- Uses Dockerfile on ./task-manager-front to build the image
- Links to Backend service to make API calls

#### Backend
Rest API developed using Node Js and Express.
- Exposes and runs on port 3001
- Uses Dockerfile on ./task-manager-back to build the image
- Creates volume on ./task-manager-back to be able to track changes in real time.
- Links to database service
- Environment Variables:
  - `PORT` - Port to run app on
  - `MONGODB_URI` - Connection string for MongoDB database
  - `TOKEN_SECRET` - Secret used to sign JWT tokens

#### Database
Mongo DB instance
- Runs on Port 27017

