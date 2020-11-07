import { AuthAPI } from "../controller/AuthAPI";
import { UserAPI } from "../controller/UserAPI";

const userAPI: UserAPI = new UserAPI();
const authAPI: AuthAPI = new AuthAPI();

export const resolvers = {
  Query: {
    login: (_, { email, password }) => authAPI.getToken({ email, password }),
    users: (_, __, { token }) => authAPI.verifyToken(token)
      && userAPI.getUsers(),
    user: (_, { id }, { token }) => authAPI.verifyToken(token)
      && userAPI.getUser(id),
  },
  Mutation: {
    saveUser: (_, { input }) => userAPI.saveUser({ ...input }),
    updateUser: (_, { id, input }, { token }) => authAPI.verifyToken(token)
      && userAPI.updateUser({ id, ...input }),
    deleteUser: (_, { id }, { token }) => authAPI.verifyToken(token)
      && userAPI.deleteUser(id),
  },
};
