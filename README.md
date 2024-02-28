<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clone the repo
2. Install dependencies

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

5. Clone the file ```.env.template``` and rename the copy to ```.env```

6. Fill the env vars values in ```.env```

7. Run the app
```
yarn start:dev
```

7. Load seed

```
GET http://localhost:3000/api/v2/seed
```
