"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchandiseGroupResolvers = void 0;
const createMerchandiseGroup_1 = require("./createMerchandiseGroup");
const deleteMerchandiseGroup_1 = require("./deleteMerchandiseGroup");
const editMerchandiseGroup_1 = require("./editMerchandiseGroup");
const getMerchandiseGroup_1 = require("./getMerchandiseGroup");
exports.merchandiseGroupResolvers = {
    Query: {
        getMerchandiseGroup: getMerchandiseGroup_1.getMerchandiseGroup,
    },
    Mutation: {
        createMerchandiseGroup: createMerchandiseGroup_1.createMerchandiseGroup,
        deleteMerchandiseGroup: deleteMerchandiseGroup_1.deleteMerchandiseGroup,
        editMerchandiseGroup: editMerchandiseGroup_1.editMerchandiseGroup,
    },
};
//# sourceMappingURL=index.js.map