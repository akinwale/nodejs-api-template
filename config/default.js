module.exports = {
  "apiPort": process.env.PORT || 8080,
  "mysql": {
    "host": process.env.MYSQL_HOST || "localhost",
    "port": process.env.MYSQL_PORT || 3306,
    "user": process.env.MYSQL_USER || "topcoder",
    "password": process.env.MYSQL_PASSWORD || "topcoder",
    "database": process.env.MYSQL_DATABASE || "db"
  }
};
