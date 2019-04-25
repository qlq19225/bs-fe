var _bs = require('util/bs.js');
var _payment = {
    //获取支付信息
    getPaymentInfo: function(orderNo, resolve, reject) {
        _bs.request({
            url: _bs.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    },
    // 获取订单状态
    getPaymentStatus: function(orderNo, resolve, reject) {
        _bs.request({
            url: _bs.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _payment;
