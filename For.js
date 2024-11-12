//for문
for(let i=0; i<10; i+=2) { //초기식 조건식 증감식
    console.log("안녕!!",i)
}

//구구단
for(let i=2; i<=9; i++){
    for(let j = 1; j<=9; j++){
        console.log(i+"*"+j+"="+i*j)
    }
}

//while문
let i = 2 //초기식
while(i<10){ //조건식
    console.log("while문 실행",i)
    i++; //증감식
}

//배열
let fruit = ["banana","apple","grape","mango"]
for(let i=0; i<fruit.length; i++){
    console.log(fruit[i])
}

//for ... of, 배열의 값에 접근하고 싶을 때 사용
let fruits = ["banana","apple","grape","mango"]
for(let item of fruits){
    console.log("내가 좋아하는 과일은",item)
}
//(문자열)
let sentence = "나는 코딩을 좋아해"
for(let char of sentence){
    console.log("한글자씩 출력",char)
}

//for in, 배열의 인덱스값 보고싶을 때 사용, 동적인 객체
let person = {
    name: "오다현",
    age: 23,
    cute: true,
}

for(let key in person){ 
    console.log("key",key) //key값 출력
    if(key ==="cute"){
        console.log("오다현은 귀엽니?",person[key])
    }
}