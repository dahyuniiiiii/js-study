let num = [1,2,3,4,5,6,7,8,9]
num[0] = 0 // 위치에 있는 값을 바꾸려면 인덱스 번호로 접근해서 변경
num[2] = 55
num.pop() // 배열의 마지막 요소 제거
num.push(445) // 배열의 마지막에 새로운 값 추가
console.log(num)
console.log(num.includes(5)) // 특정 요소가 배열에 포함되어 있는지 확인
console.log(num.indexOf(4)) // 특정 요소의 인덱스 위치 반환 (없으면 -1 반환)
console.log(num.slice(7)) // 인덱스 7 이후 모든 요소를 잘라내서 반환
console.log(num.slice(3,7)) // 인덱스 3부터 7 이전까지의 요소 반환, 기존배열 건드리지 않음

num.splice(2,1) // 시작점에서 지정한 개수만큼 요소 제거, 기존의 배열이 잘림
console.log(num)