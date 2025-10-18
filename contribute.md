
## docker file
- install docker
- create a network
    `docker network create mynetwork`
- run postgresql
    -  `docker run --network=mynetwork -d -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword --name mypostgres postgres`
- build image
    -   `docker build -t todo-backend:1 .`
- run image
    - `docker run --network=mynetwork -d -p 8080:8080 -e DATABASE_URL=postgresql://postgres:mysecretpassword@mypostgres:5432 --name todo-backend todo-backend`