// var message = "Hello World"
//     // console.log(message);

// function foo() {
//     console.log(message);
// }

// foo();

// es5之前作用域包括函数和全局作用域 对象不是
// with语句 也可以形成自己作用域  不建议使用  在严格模式下会报错
var obj = { name: "why", age: "19", message: "obj,message" }

function foo() {
  function bar() {
    with (obj) {
      console.log(name);
      console.log(message); //优先从with里面获取变量  如果没有就从全局里面获取
    }
  }
  bar()
}
foo();

info = {
  name: "zxk",
  height: 1.88
}
with (info) {
  console.log(name);
}