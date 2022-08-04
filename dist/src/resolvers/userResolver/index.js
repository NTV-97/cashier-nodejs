"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
const createUser_1 = require("./createUser");
const deleteUser_1 = require("./deleteUser");
const editUser_1 = require("./editUser");
const getUser_1 = require("./getUser");
const getUsers_1 = require("./getUsers");
exports.userResolvers = {
    Query: {
        getUsers: getUsers_1.getUsers,
        getUser: getUser_1.getUser,
    },
    Mutation: {
        createUser: createUser_1.createUser,
        editUser: editUser_1.editUser,
        deleteUser: deleteUser_1.deleteUser,
    },
};
//# sourceMappingURL=index.js.map