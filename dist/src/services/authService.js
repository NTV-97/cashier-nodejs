"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY || '';
class Auth {
    static async hashPassword(pwd) {
        const saltRounds = 10;
        const salt = bcrypt_1.default.genSaltSync(saltRounds);
        return bcrypt_1.default.hashSync(pwd, salt);
    }
    static async matchPasswords(requestPwd, userPwd) {
        return bcrypt_1.default.compare(requestPwd, userPwd);
    }
    static generateJwt({ username, userId, stallCode }) {
        return jsonwebtoken_1.default.sign({ userId, username, stallCode }, SECRET_KEY, {
            expiresIn: '1 days',
        });
    }
    static getJwtPayload(token) {
        return jsonwebtoken_1.default.verify(token, SECRET_KEY);
    }
    static getUserId(req) {
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
    static getStallCode(req) {
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
exports.Auth = Auth;
//# sourceMappingURL=authService.js.map