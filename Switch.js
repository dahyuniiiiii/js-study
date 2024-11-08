let menu = 2
switch(menu){ //switch케이스
    case 1 :
        console.log("물건 사기")
        break;
    case 2 :
        console.log("잔고 확인")
        break;
    case 3 :
        console.log("히스토리 확인")
        break;
    default :
    console.log("홈으로 돌아가기")
}

let result = 2
let answer = result > 1 ? "범위 안 숫자입니다" : "범위 밖 숫자입니다" //삼항연산자
console.log(answer)