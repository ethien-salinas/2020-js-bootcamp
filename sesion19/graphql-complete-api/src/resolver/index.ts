import { AuthAPI } from "../controller/AuthAPI";
import { UserController } from "../controller/UserController";

const userController: UserController = new UserController();
const authAPI: AuthAPI = new AuthAPI();

export const resolvers = {
  Query: {
    login: (_, { email, password }) => authAPI.getToken({ email, password }),
    users: (_, __, { token }) => authAPI.verifyToken(token)
      && userController.getUsers(),
    user: (_, { id }, { token }) => authAPI.verifyToken(token)
      && userController.getUser(id),
  },
  Mutation: {
    saveUser: (_, { name, lastName, email, password, isAdmin }) =>
      userController.saveUser({ name, lastName, email, password, isAdmin }),
    updateUser: (_, { id, name, lastName, email, password, isAdmin }, { token }) => authAPI.verifyToken(token)
      && userController.updateUser({ id, name, lastName, email, password, isAdmin }),
  },
};
