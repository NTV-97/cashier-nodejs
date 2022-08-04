"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMerchandiseGroup = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getMerchandiseGroup = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    return _models_1.MerchandiseGroupModel.find({
        stallCode: context.stallCode,
    });
};
exports.getMerchandiseGroup = getMerchandiseGroup;
//# sourceMappingURL=getMerchandiseGroup.js.map