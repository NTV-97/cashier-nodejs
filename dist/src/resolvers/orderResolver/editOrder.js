"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editOrder = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const returnDataEdit = async (dataEdit, order) => {
    const discount = dataEdit.discount ?? 0;
    const orderPrice = order.price;
    const { orderData: currentOrderData, reduceOrderData: reduce } = !!dataEdit.orderData?.length
        ? await (0, _utils_1.reduceOrderData)(dataEdit.orderData)
        : {
            orderData: [],
            reduceOrderData: undefined,
        };
    const price = !!dataEdit.orderData?.length ? reduce?.totalPrice ?? 0 : orderPrice;
    const isDisCount = !!dataEdit.discount;
    const total = isDisCount
        ? dataEdit.unitDiscount === 'percent'
            ? price - (price * discount) / 100
            : price - discount ?? 0
        : price;
    const priceDiscount = price - total;
    await _models_1.OrderModel.findOneAndDelete({ tableId: dataEdit.tableId });
    let currentData = {};
    switch (true) {
        case !!dataEdit.tableId && isDisCount && !!dataEdit.orderData?.length:
            currentData = {
                tableId: dataEdit.tableId,
                discount,
                price,
                unitDiscount: dataEdit.unitDiscount,
                totalPrice: total,
                priceDiscount,
                orderData: currentOrderData,
                count: reduce?.count,
            };
            break;
        case !!dataEdit.tableId && isDisCount:
            currentData = {
                tableId: dataEdit.tableId,
                discount,
                price,
                unitDiscount: dataEdit.unitDiscount,
                totalPrice: total,
                priceDiscount,
            };
            break;
        case !!dataEdit.tableId && !!dataEdit.orderData?.length:
            currentData = {
                tableId: dataEdit.tableId,
                totalPrice: total,
                price,
                orderData: currentOrderData,
                count: reduce?.count,
            };
            break;
        case isDisCount && !!dataEdit.orderData?.length:
            currentData = {
                discount,
                unitDiscount: dataEdit.unitDiscount,
                totalPrice: total,
                priceDiscount,
                price,
                orderData: currentOrderData,
                count: reduce?.count,
            };
            break;
        case !!dataEdit.tableId:
            currentData = { tableId: dataEdit.tableId };
            break;
        case isDisCount:
            currentData = {
                discount,
                price,
                unitDiscount: dataEdit.unitDiscount,
                totalPrice: total,
                priceDiscount,
            };
            break;
        case !!dataEdit.orderData?.length:
            currentData = {
                totalPrice: total,
                price,
                orderData: currentOrderData,
                count: reduce?.count,
            };
            break;
        default:
            currentData = dataEdit;
            break;
    }
    return currentData;
};
const editOrder = async (_, orderDataEdit, context) => {
    await (0, _utils_1.permissionOrder)(orderDataEdit.id, context);
    const order = await _models_1.OrderModel.findById(orderDataEdit.id);
    const dataEdit = await returnDataEdit(orderDataEdit, order);
    const response = await _models_1.OrderModel.findByIdAndUpdate(orderDataEdit.id, dataEdit, { upsert: true }, (err) => {
        if (err)
            throw new _config_1.Error(`${err}`, '500');
    });
    return response;
};
exports.editOrder = editOrder;
//# sourceMappingURL=editOrder.js.map