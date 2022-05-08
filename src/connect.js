 
const typeorm = require("typeorm")
const dataSource = new typeorm.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "ChatAppServer",
    synchronize: true,
    entities: [require("./entity/Room"), require("./entity/Chatevent")],
})
// const dataSource = new typeorm.DataSource({
//   type: "postgres",
//   host: "topsy.db.elephantsql.com",
//   port: 5432,
//   username: "jhgogqwt",
//   password: "r7w60T4BEI1UAlnhwv-uYXDY96Zmw4jC",
//   database: "jhgogqwt",
//   synchronize: true,
//   entities: [require("./entity/Room"), require("./entity/Chatevent")],
// })
dataSource
  .initialize()
  .then(function () {})
  .catch(function (error) {
    console.log("Error: ", error);
  });

exports.dataSource = dataSource;