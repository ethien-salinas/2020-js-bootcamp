import { createConnection } from "typeorm"

export const getConnection = async () => {
  const connection = await createConnection({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [
      `${__dirname}/../entity/*`
    ]
  })
  return connection
}