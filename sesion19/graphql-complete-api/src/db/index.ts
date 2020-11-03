import { Connection, createConnection } from "typeorm";
import { User } from "../entity/User";

let connection: Connection;

(async () => {
  connection = await createConnection({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [
      __dirname + '/../entity/*',
    ],
  });
})();

export { connection };
