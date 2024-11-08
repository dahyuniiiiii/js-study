let age = 21
let licence = false

if(age > 20){ //범위를 작은거부터 큰 거 순으로
    if (licence != true){
        console.log("운전 가능")
    }else{
        console.log("면허를 따세요")
    }
}else {
    console.log("운전 불가능")
}
//&& : 그리고라는 뜻, 둘다 참이여야 참
//|| : 한쪽이 참이기만하면 참
