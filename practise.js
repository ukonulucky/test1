// // const person = {
// //     name: "john",
// //     car: "toyota",
// //     description: () => {
// //         console.log(`${this.name}, ${this.car}`)
// //     }
// // }

// // const person2 = Object.create(person)
// // console.log(person.hasOwnProperty("name"))
// // console.log(person)
// // console.log(person2)
// // person2.name = "franka"
// // console.log(person2.hasOwnProperty("car"))


// // function Animal(name,breed) {
// //     this.name = name
// //     this.breed = breed
// // }
// // Animal.prototype.saybread = function () {
// //     console.log(`${this.name} is a bread of ${this.breed}`)
// // }

// // function Dog(shape){
// //     Animal.call(this, "brandy", "shark")
// //     this.shape = shape
// //     item instanceof Animal ? console.log("dog inherited from Animal"): console.log("dog did not inherited from Animal")
// // }
// // const item = new Animal("skin", "toddler")
// // console.log(item.saybread())
// // Dog.prototype = Animal.prototype
// // const dog1 = new Dog("short")
// // console.log(Dog.prototype.constructor)
// // console.log(Dog.prototype)
// // console.log(dog1.saybread())
// // console.log(dog1)


// // // console.log(item instanceof Animal)

// // class Person2 {
// //     constructor(name, age) {
// //         this.name = name
// //         this.age = age
// //         this.cal = () => {
// //             console.log(`${this.name} , ${this.age}`)
// //         }
// //     }
// //     greetings() {
// //         console.log("am a great guy")
// //     }
// // }


// // const employer = new Person2("john", 20)

// // // Person2.prototype.constructor = employer
// // // console.log(employer)
// // // console.log(employer.cal())


// // class employee extends Person2 {
// //     constructor(name, age, field) {
// //         super(name,age)
// //         this.field = field  
// //     }
// //     descipline() {
// //         console.log(super.greetings(),`my name is ${this.name}, i am ${this.age} years and am a ${this.field}`)
// //     }
// // }

// // const employee2 = new employee("john", 23, "developer")

// // // console.log(employee2.descipline())
// // // console.log(employee2)


// // // const info2 = new Date()

// // // console.log(info2.getHours())
// // // const error2 = new Error("something went wrong")
// // const func = new Function(console.log("hello user"))
// // // console.log(func)

// // const reg = new RegExp("\\d+")
// // // console.log(reg)

// // const array = []

// // array["push"](123)

// // console.log(array instanceof Object)


// // const test = function(){
// //     console.log(`testing `)  
// // }


// const add = function ()  {
//     let i = 0
//     let result = 0
//     console.log(`this is the length`, arguments.length)
//     while (i < arguments.length) {
//         console.log(arguments[i])
//         result += arguments[i]
//          i++
//     }
//     return result
// }


// console.log(add(10, 20, 30, 50))


// const describe= function (value) {
//     console.log(this.name, value)
    
// }
// const person4 = {
//     name: "john",

// }
// const result  = {
//     name: "patricia"
// }

// result.data1 = describe.bind(person4, "joy")
// console.log(result)
// result.data1("chioma")


// const change = document.getElementsByTagName("p")
// console.log(change[0].innerHTML = "text changed")

// for (const i of change){
//     i.innerHTML = "<a href='www.google.com'>hello word</a>"
// }

const myApp = document.getElementById("myapp")
const allP = document.getElementsByTagName("p")
// console.log(allP)
// for (let p of allP) {
//      p.innerText === "hello word1" ? p.innerText = "just changed" : null
//  }
//   const newP = myApp.getElementsByClassName("newP")
// console.log(newP)

console.log(myApp.childNodes[1].childNodes[5].childNodes)
console.log(allP)
console.log(allP[1].parentNode)