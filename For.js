for(let i=0; i<10; i+=2) { //초기식 조건식 증감식
    console.log("안녕!!",i)
}

for(let i=2; i<=9; i++){
    for(let j = 1; j<=9; j++){
        console.log(i+"*"+j+"="+i*j)
    }
}

let i = 2 //초기식
while(i<10){ //조건식
    console.log("while문 실행",i)
    i++; //증감식
}

let fruit = ["banana","apple","grape","mango"]
for(let i=0; i<fruit.length; i++){
    console.log(fruit[i])
}