import { AuthAPI } from "../controller/AuthAPI";
import { UserController } from "../controller/UserController";

const userController: UserController = new UserController();
const authAPI: AuthAPI = new AuthAPI();

export const resolvers = {
  Query: {
    login: (_, { email, password }) => authAPI.getToken({ email, password }),
    users: async (_, __, { token }) => {
      return await authAPI.verifyToken(token) && userController.getUsers()
    },
    user: (_, { id }) => userController.getUser(id),
  },
  Mutation: {
    saveUser: (_, { name, lastName, email, password, isAdmin }) =>
      userController.saveUser({ name, lastName, email, password, isAdmin }),
    updateUser: (_, { id, name, lastName, email, password, isAdmin }) =>
      userController.updateUser({ id, name, lastName, email, password, isAdmin }),
  },
};
