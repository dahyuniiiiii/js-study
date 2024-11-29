//객체 만들기
let name = "dahyun"
let age = 23
console.log(`제이름은 ${name}입니다 제 나이는 ${age}입니다`)

//객체 분해하기
let bts = {
    name:"방탄소년단",
    num:7
}
let {name,num} = bts

//배열
let array =[1,2,3]
let [a,...rest] = array
console.log(rest) //a를 뺀 나머지가 rest에 들어감
console.log(a, rest)

//이어붙이기
let a = [1,2]
let b = [3,4]
let c = [5,6]
let result = a.concat(b,c) //= let result = [...a,...b,...c]
console.log(result)