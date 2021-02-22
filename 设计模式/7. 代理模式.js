// 代理模式，为一个对象找一个替代对象，以便对原对象进行访问。即在访问者与目标对象之间加一层代理，通过代理做授权和控制。最常见的例子是经纪人代理明星业务，假设你作为一个投资者，想联系明星打广告，那么你就需要先经过代理经纪人，经纪人对你的资质进行考察，并通知你明星排期，替明星本人过滤不必要的信息。事件代理、JQuery的$.proxy、ES6的proxy都是这一模式的实现，下面以ES6的proxy为例：

// 作者：写代码像蔡徐抻
// 链接：https://juejin.cn/post/6844904116552990727
const idol = {
    name: '蔡x抻',
    phone: 10086,
    price: 1000000  //报价
  }
  
const agent = new Proxy(idol, {
    get: function(target) {
        //拦截明星电话的请求,只提供经纪人电话
        return '经纪人电话:10010'
    },
    set: function(target, key, value) {
        if(key === 'price' ) {
        //经纪人过滤资质
        if(value < target.price) throw new Error('报价过低')
        target.price = value
        }
    }
})


agent.phone        //经纪人电话:10010
agent.price = 100  //Uncaught Error: 报价过低
  