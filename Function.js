function makeBurger(type,size,num) { //매개변수
    console.log("빵두기");
    console.log("상추두기");
    if(num<1){
        return "버거 개수가 0개 입니다."
    }
    if(type == "불고기"){
        console.log("고기패티두기");
    }else if(type == "새우"){
        console.log("새우패티두기");
    }
    console.log("뚜껑덮기");
    console.log(type,"버거",size,"사이즈",num,"개 준비완료");
    return "완료되었습니다."
}

function serveCoke() {
    console.log("콜라통 선택");
    console.log("얼음담기");
    console.log("콜라담기");
}

function serveFrenchFries() {
    console.log("감튀박스 선택");
    console.log("감튀 담기");
}

//단품주문
let result = makeBurger("새우","M",3) //괄호가 있어야 함수인지 알 수 있음
console.log("버거 프로세스 결과",result);

//세트주문
function makeSet(){
    makeBurger("새우","M",3)
    serveCoke()
    serveFrenchFries()
}

makeSet()