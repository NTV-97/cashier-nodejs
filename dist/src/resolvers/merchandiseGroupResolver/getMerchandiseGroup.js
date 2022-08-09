"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMerchandiseGroup = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const compare = (a, b) => {
    if (a.merchandiseGroupName < b.merchandiseGroupName) {
        return -1;
    }
    if (a.merchandiseGroupName > b.merchandiseGroupName) {
        return 1;
    }
    return 0;
};
const getMerchandiseGroup = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const merchandiseGroup = await _models_1.MerchandiseGroupModel.find({
        stallCode: context.stallCode,
    });
    return merchandiseGroup.sort(compare);
};
exports.getMerchandiseGroup = getMerchandiseGroup;
//# sourceMappingURL=getMerchandiseGroup.js.map