// 适配器模式，将一个接口转换成客户希望的另一个接口，使接口不兼容的那些类可以一起工作。我们在生活中就常常有使用适配器的场景，例如出境旅游插头插座不匹配，这时我们就需要使用转换插头，也就是适配器来帮我们解决问题。
class Adaptee {
    test() {
        return '旧接口'
    }
}
   
class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    test() {
        let info = this.adaptee.test()
        return `适配${info}`
    }
}

let target = new Target()
console.log(target.test())
  