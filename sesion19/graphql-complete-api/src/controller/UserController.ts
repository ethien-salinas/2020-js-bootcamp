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
    user.password = await hash(user.password, 9)
    return await connection.manager.save(User, user);
  }
  async updateUser(user: IUser) {
    let currentUser = await this.getUser(user.id)
    // eliminamos nodos con valor undefined
    Object.keys(user).forEach(key =>
      user[key] === undefined && delete user[key]
    )
    // si se ha enviado nuevo password, debe cifrarse
    if (user.hasOwnProperty('password')) {
      user.password = await hash(user.password, 9)
    }
    currentUser = { ...currentUser, ...user }
    return await connection.manager.save(User, currentUser)
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
