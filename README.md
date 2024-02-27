<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clone the repo
2. Execute

```
yarn install
```

3. Nest CLI must be installed

```
 npm i -g @nestjs/cli
```

4. Start the database

```
docker-compose up -d
```

5. Load seed

```
GET http://localhost:3000/api/v2/seed
```
