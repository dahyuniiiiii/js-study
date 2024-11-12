function greet(name) {
    console.log("안녕 내 이름은",name,"야")
    return name
}

// function meetAt() {

//     if (date) {
//         return `${year}/${month}/${date}`;
//     }
//     if (month) {
//         return `${year}년 ${month}월`;
//     }
//     if (year) {
//         return `${year}년`;
//     }
// }
greet("제시카");
greet("에밀리");
greet("할리");

meetAt(2022);
meetAt(2032, 3);
meetAt(1987, 10, 28); 