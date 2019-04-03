
//用var关键字声明的变量会提升到当前代码块的最顶端
// ES5.0   变量的命名提升
    var myname = "ljh";
    var age = 21;
    var person = {
        name : "ljh",
        age : 22,
    }

//ES6.0语法
//用let关键字来命名变量,用let关键字命名的变量不存在提升机制，必须先声明再去使用 
    let dog = "小黄";
    console.log(dog);

    // for (var i = 0; i<3 ; i++ ){       
    // }
    // console.log(i); //3 条件达到跳出循环  //js里只有函数有作用域

    for (let i = 0; i<3 ; i++ ){
    }
    // console.log(i);   //报错 
//用let命名的变量，如果遇到{} 会有作用域，和函数一样  

//闭包 //常量 ES5.0
//     function myFunction (){
//          var myAge = 20;
//          return function (){
//              console.log(myAge);
//          };
//      };
// myFunction()(); //打印myAge

// ES6.0命名常量
// 用关键字 const 命名常量  常量一旦命名赋值，不能修改
// 用关键字 const 命名的引用数据类型（对象，数组，函数）发生修改时不会报错如果是基本数据类型（string，number，undefind，true/false）一旦修改立即报错
// 用关键字 const 命名的常量有作用域    
    const mySex = "男";
   // mySex = "女";

    const cat = {
        name : "加菲猫",
        age : 5,
    };
    cat.name = "波斯猫";
    console.log (cat);

//引用数据类型
    // let apple = {
    //     name : "小红",
    //     size : '大',
    // }
    // let appleTwo = apple;
    // appleTwo.name = "小青";
    // console.log(apple.name);

    {
        const myWeight = 176 ;
        console.log(myWeight);
    }
//      console.log(myWeight);  //报错


//函数  js一等公民

//ES5.0
//1. 表达式命名函数
//     myFunction();  //用var关键字命名的函数会提升到最顶部
// var myFunction = function (){
//     console.log("我是函数");
// }
//     myFunction();

//2. 用function关键字命名函数
//      youFunction();  //不是用var命名的函数在任何地方都可以使用
//  function youFunction (){
//     console.log("这是你的函数");
//  }
//      youFunction();

//ES6.0命名函数
// 箭头函数 没有关键字function

    let youFunction = (name) => {
        console.log(name);
    } 
    youFunction("ljh");

//如果箭头函数的返回值是表达式，可以省略大括号
    let she = (job) => job;
    let result = she ("前端");
    console.log(result);

//ES5 this关键字
//  全局作用域中的this指向window
    function liu (){
        console.log(this);
    }
    liu();
    //
    //对象的方法函数中this指向的属于对象
    //call() apply（）指向第一个对象

// ES6箭头函数用call（）或者apply（）方法this指向window
    let banner =() => {
    console.log(this,"箭头函数this");
    }
    banner.call(cat);
//在对象方法中指向window
let water = {
    color: "白色",
    size : "大",
    drink: () =>{
        console.log(this,"箭头函数在对象中的this");
    }

}
water.drink();

// this在构造函数中指向window

//this在嵌套作用域中指向window
function liuFunction (){
    setTimeout( () => {
        console.log(this);
    },1000)
}
liuFunction.call(cat);  //this指向cat


// 类

// es5 通过构造函数创建类
// function Girl (faceType,height,qizhi) {
//     this.faceType = faceType;
//     this.height = height;
//     this.qizhi = qizhi;
// }
//     Girl.prototype.lookMovie = function () { 
//         console.log("看电影");
//         return this;
//     }
//     Girl.prototype.lookMarket = function (){
//         console.log("逛街");
//         return this;
//     }

//     let myGirl = new ("瓜子脸",'1.8',"高冷");

//     myGirl.lookMarket().lookMovie;

//ES6.0通过class来创建类
    class Girl {
        constructor(faceType,height,qizhi){
            this.faceType = faceType;
            this.height = height;
            this.qizhi = qizhi;
        }
        lookMovie(){
            console.log("看电影");
            return this;
        }
        lookMarket(){
            console.log("逛街");
            return this;
        }
    }
    let myGirl = new Girl("瓜子脸",'1.8',"高冷");

    myGirl.lookMovie().lookMarket();
