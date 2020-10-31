import { UserController } from "../controller/UserController";

const userController: UserController = new UserController();
export const resolvers = {
  Query: {
    users: () => userController.getUsers(),
    user: (_, { id }) => userController.getUser(id),
  },
  Mutation: {
    saveUser: (_, { name, lastName, email, password, isAdmin }) =>
      userController.saveUser({ name, lastName, email, password, isAdmin }),
    updateUser: (_, { id, name, lastName, email, password, isAdmin }) =>
      userController.updateUser({ id, name, lastName, email, password, isAdmin }),
  },
};
