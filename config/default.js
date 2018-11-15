module.exports = {
  "apiPort": process.env.PORT || 8080,
  "mysql": {
    "host": process.env.MYSQL_HOST || "db",
    "port": process.env.MYSQL_PORT || 3306,
    "user": process.env.MYSQL_USER || "user",
    "password": process.env.MYSQL_PASSWORD || "secret",
    "database": process.env.MYSQL_DATABASE || "db"
  }
};
