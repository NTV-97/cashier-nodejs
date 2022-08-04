"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const createOrder = async (_, { tableId, orderData }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const userInfo = await _models_1.UserModel.findById(context.userId);
    if (userInfo.type === 'staff')
        throw new _config_1.Error('forbidden', '403');
    const _checkOrder = await _models_1.OrderModel.findOne({ tableId });
    if (_checkOrder?.tableId === tableId) {
        throw new _config_1.Error(`Table already used`, '409');
    }
    const { orderData: currentOrderData, reduceOrderData: currentReduceOrderData } = await (0, _utils_1.reduceOrderData)(orderData);
    const Order = new _models_1.OrderModel({
        tableId,
        orderData: currentOrderData,
        price: currentReduceOrderData.totalPrice,
        totalPrice: currentReduceOrderData.totalPrice,
        stallCode: context.stallCode,
        count: currentReduceOrderData.count,
    });
    await Order.save();
    return {
        message: `Order successfully created`,
        success: true,
    };
};
exports.createOrder = createOrder;
//# sourceMappingURL=createOrder.js.map