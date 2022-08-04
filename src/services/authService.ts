import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

dotenv.config();

type ParamsGenerateJwt = {
  username: string;
  userId: Types.ObjectId;
  stallCode: string;
};

const SECRET_KEY = process.env.SECRET_KEY || '';

export class Auth {
  static async hashPassword(pwd: string | Buffer) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(pwd, salt);
  }

  static async matchPasswords(requestPwd: string | Buffer, userPwd: string) {
    return bcrypt.compare(requestPwd, userPwd);
  }

  static generateJwt({ username, userId, stallCode }: ParamsGenerateJwt) {
    return jwt.sign({ userId, username, stallCode }, SECRET_KEY, {
      expiresIn: '1 days',
    });
  }

  static getJwtPayload(token: string) {
    return jwt.verify(token, SECRET_KEY);
  }

  static getUserId(req: Request) {
    if (req?.headers) {
      const authHeader = req.headers.authorization;
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        if (!token) {
          return null;
        }
        //@ts-ignore
        const { userId } = this.getJwtPayload(token);
        return userId;
      }
    }

    return null;
  }
  static getStallCode(req: Request) {
    if (req?.headers) {
      const authHeader = req.headers.authorization;
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        if (!token) {
          return null;
        }
        //@ts-ignore
        const { stallCode } = this.getJwtPayload(token);
        return stallCode;
      }
    }

    return null;
  }
}
