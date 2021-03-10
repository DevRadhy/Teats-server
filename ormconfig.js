module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "database": process.env.POSTGRES_DB,
  "username": process.env.POSTGRES_USER,
  "password": process.env.POSTGRES_PASSWORD,
  "migrations": [
    "./src/repositories/database/migrations/*.ts"
  ],
  "entities": [
    "./src/entities/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/repositories/database/migrations"
  }
};