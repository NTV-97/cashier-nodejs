"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authResolvers = void 0;
const login_1 = require("./login");
const signup_1 = require("./signup");
exports.authResolvers = {
    Mutation: {
        signup: signup_1.signup,
        login: login_1.login,
    },
};
//# sourceMappingURL=index.js.map