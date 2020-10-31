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
      User,
    ],
  });
})();

export { connection };
