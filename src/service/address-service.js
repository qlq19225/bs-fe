
var _bs = require('util/bs.js');
var _address = {
    //获取地址列表信息
    getAddressList: function(resolve, reject) {
        _bs.request({
            url: _bs.getServerUrl('/shipping/list.do'),
            data:{
            	pageSize:50
            },
            success: resolve,
            error: reject,
        });
    },
    //新建收件人收货信息
    save: function(addressInfo,resolve, reject) {
        _bs.request({
            url: _bs.getServerUrl('/shipping/add.do'),
            data:addressInfo,
            success: resolve,
            error: reject,
        });
    },
    //更新收件人收货信息
    update:function(addressInfo,resolve, reject) {
        _bs.request({
            url: _bs.getServerUrl('/shipping/update.do'),
            data:addressInfo,
            success: resolve,
            error: reject,
        });
    },
    //删除收件人收货信息
    deleteAddress:function(shippingId,resolve, reject) {
        _bs.request({
            url: _bs.getServerUrl('/shipping/del.do'),
            data:{
                shippingId:shippingId
            },
            success: resolve,
            error: reject,
        });
    },
    // 获取要编辑的收货人收货信息
    getAddress: function(shippingId,resolve, reject) {
        _bs.request({
            url: _bs.getServerUrl('/shipping/select.do'),
            data:{
                shippingId:shippingId
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _address;