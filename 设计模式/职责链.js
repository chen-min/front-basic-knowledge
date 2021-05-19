// 参考资料：
// https://github.com/MuYunyun/blog/blob/main/BasicSkill/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F.md

// 场景 demo
// 场景: 某电商针对已付过定金的用户有优惠政策, 在正式购买后, 已经支付过 500 元定金的用户会收到 100 元的优惠券, 200 元定金的用户可以收到 50 元优惠券, 没有支付过定金的用户只能正常购买。

// 业务代码
const order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购, 得到 100 元优惠券')
    } else {
        return 'nextSuccess'
    }
}

const order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购, 得到 50 元优惠券')
    } else {
        return 'nextSuccess'
    }
}

const orderCommon = function (orderType, pay, stock) {
    if ((orderType === 3 || !pay) && stock > 0) {
        console.log('普通购买, 无优惠券')
    } else {
        console.log('库存不够, 无法购买')
    }
}

// 链路代码
const chain = function (fn) {
    this.fn = fn
    this.sucessor = null
}

chain.prototype.setNext = function (sucessor) {
    this.sucessor = sucessor
}

chain.prototype.init = function () {
    const result = this.fn.apply(this, arguments)
    if (result === 'nextSuccess') {
        this.sucessor.init.apply(this.sucessor, arguments)
    }
}

const order500New = new chain(order500)
const order200New = new chain(order200)
const orderCommonNew = new chain(orderCommon)

order500New.setNext(order200New)
order200New.setNext(orderCommonNew)
// 
debugger
order500New.init(3, true, 500) // 普通购买, 无优惠券
// 第一次init result为nextSuccess，this.sucessor = order200New
// 即调用order200New.init方法

// 第二次init(order200New.init)
// result为nextSuccess，this.sucessor = orderCommon

// 第3次init，即调用orderCommon.init方法
// result， this.fn即为orderCommon；打印普通购买, 无优惠券 return undifined 函数结束
