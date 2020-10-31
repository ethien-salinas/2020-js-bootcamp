import { hash } from "bcrypt";
import { connection } from "../db";
import { User } from "../entity/User";

export class UserController {
  users: Array<IUser>;

  async getUsers() {
    return await connection.manager.find(User);
  }
  async getUser(id: number) {
    return await connection.manager.findOne(User, {
      where: { id: id },
    });
  }
  async saveUser(user: IUser) {

    return await connection.manager.save(User, {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: await hash(user.password, 9),
      isAdmin: user.isAdmin,
    });
  }
  async updateUser(user: IUser) {
    let currentUser = await this.getUser(user.id)
    currentUser = { ...currentUser, ...user } // - ¿objeto inmutable?
    return this.saveUser(currentUser) //TODO: change to connection.manager.update
  }
  deleteUser(id: number) { }
}

interface IUser {
  id?: number;
  name: string;
  lastName?: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
