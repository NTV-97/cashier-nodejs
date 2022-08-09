"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.getOrders = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const compare = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};
const getOrders = async (_, _params, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const order = await _models_1.OrderModel.find({ stallCode: context.stallCode });
    return order.map((element) => {
        return {
            id: element.id,
            createdAt: element.createdAt,
            tableId: element.tableId,
            price: element.price,
            totalPrice: element.totalPrice,
            discount: element.discount,
            priceDiscount: element.priceDiscount,
            unitDiscount: element.unitDiscount,
            orderData: element.orderData.sort(compare),
            count: element.count,
        };
    });
};
exports.getOrders = getOrders;
const getOrder = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    await (0, _utils_1.permissionOrder)(id, context);
    const order = await _models_1.OrderModel.findById(id);
    return {
        id: order.id,
        createdAt: order.createdAt,
        tableId: order.tableId,
        price: order.price,
        totalPrice: order.totalPrice,
        discount: order.discount,
        priceDiscount: order.priceDiscount,
        unitDiscount: order.unitDiscount,
        orderData: order.orderData.sort(compare),
        count: order.count,
    };
};
exports.getOrder = getOrder;
//# sourceMappingURL=getOrder.js.map