//객체 만들기
let name = "dahyun"
let age = 23
let person = {name,age}
console.log(person)

//객체 분해하기
let bts = {
    name:"방탄소년단",
    num:7
}
let name = bts.name
let num = bts.num

let {name,num} = bts

console.log(name,num)
