import { ApolloError, AuthenticationError } from "apollo-server";
import { connection } from "../db";
import { User } from "../entity/User";
import { compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

export class AuthAPI {

  async getToken({ email, password }) {
    const user = await connection.manager.findOne(User, {
      where: { email: email }
    });

    if (user &&
      (email == user.email && await compare(password, user.password))) {
      const tokenData = {
        email: email,
        isAdmin: user.isAdmin
      }
      return sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' })
    } else {
      throw new AuthenticationError('Invalid credentials')
    }
  }

  verifyToken(token: string): boolean {
    let isValidToken: boolean = false
    if (!token) throw new ApolloError('missing token')
    let decoded = verify(token, process.env.JWT_SECRET)
    return decoded ? !isValidToken : isValidToken
  }

}