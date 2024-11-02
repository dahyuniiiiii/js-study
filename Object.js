let patient = {
    name: "jimin",
    age: 17,
    disease: "cold"
}

console.log(patient) 
console.log(patient.age) // 객체 속성(age)의 접근후 출력
console.log(patient["name"]) // = (patient.name)

patient.name = "jk" // 객체 속성(name) 수정
patient["age"] = 25 // = (patient.age = 25)
console.log(patient)

let patientList = [{name: "jimin", age: 13},{name: "jk", age: 25},{name: "jhope", age: 40}]

console.log(patientList)
console.log("첫번째 환자는:", patientList[0]) //(첫번째 환자는:)
console.log("첫번째 환자의 나이는:", patientList[0].age) // 중첩된 속성(배열인덱스, 객체 속성) 접근, = (patientList[0]["age"])
