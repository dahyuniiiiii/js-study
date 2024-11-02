let a = 30
let b = 50
let temp = a
a = b // 변수 a와 b가 이미 선언되어 있으므로, 다시 let을 사용할 필요가 없음
b = temp
console.log(a,b)

console.log(1 / 0);  
console.log(7.5 % 2); // 나머지연산자 사용, 몫3 나머지1.5
// !=는 값이 다르면 true를 반환
console.log(5 != 5.0);  
// !==는 값과 자료형이 모두 다를 때 true 반환
console.log(5 !== 5.0);    
console.log(true || true); // OR 연산자, 하나라도 true이면 true 반환
console.log(true || false);       
console.log(true && true); // AND 연산자, 모두 true여야 true 반환        
console.log(true && false);       
console.log(!true); // NOT 연산자, 반대 값 반환           
console.log(!false);