"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billResolvers = void 0;
const getBills_1 = require("./getBills");
const saveBill_1 = require("./saveBill");
exports.billResolvers = {
    Query: {
        getBills: getBills_1.getBills,
        getBill: getBills_1.getBill,
    },
    Mutation: {
        saveBill: saveBill_1.saveBill,
    },
};
//# sourceMappingURL=index.js.map