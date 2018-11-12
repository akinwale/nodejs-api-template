module.exports = {
  "apiPort": process.env.PORT || 3000,
  "mongoUri": process.env.MONGO_URI || "mongodb://127.0.0.1:27017/abc",
  "mysql": {
    "host": process.env.MYSQL_HOST || "localhost",
    "port": process.env.MYSQL_PORT || 3306,
    "user": process.env.MYSQL_USER || "user",
    "password": process.env.MYSQL_PASSWORD || "secret",
    "database": process.env.MYSQL_DATABASE || "db"
  }
};
