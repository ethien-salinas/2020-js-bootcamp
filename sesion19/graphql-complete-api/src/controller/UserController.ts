import { hash } from "bcrypt";
import { connection } from "../db";
import { User } from "../entity/User";

export class UserController {

  private readonly SALT_ROUNDS = 9;

  async getUsers(): Promise<Array<IUser>> {
    return await connection.manager.find(User);
  }
  async getUser(id: number): Promise<IUser> {
    return await connection.manager.findOne(User, {
      where: { id: id },
    });
  }
  async saveUser(user: IUser): Promise<IUser> {
    user.password = await hash(user.password, this.SALT_ROUNDS)
    return await connection.manager.save(User, user);
  }
  async updateUser(user: IUser): Promise<IUser> {
    let currentUser = await this.getUser(user.id)
    // eliminamos nodos con valor undefined
    Object.keys(user).forEach(key =>
      user[key] === undefined && delete user[key]
    )
    // si se ha enviado nuevo password, debe cifrarse
    if (user.hasOwnProperty('password')) {
      user.password = await hash(user.password, this.SALT_ROUNDS)
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
