let num = [1,2,3,4,5,6,7,8,9]
num[0] = 0 // 위치에 있는 값을 바꾸려면 인덱스 번호로 접근해서 변경
num[2] = 55
num.pop() // 배열의 마지막 요소 제거
num.push(445) // 배열의 마지막에 새로운 값 추가
console.log(num)
console.log(num.includes(5)) // ( ☆ ) 특정 요소가 배열에 포함되어 있는지 확인
console.log(num.indexOf(4)) // ( ☆ ) 특정 요소의 인덱스 위치 반환 (없으면 -1 반환)
console.log(num.slice(7)) // 인덱스 7 이후 모든 요소를 잘라내서 반환
console.log(num.slice(3,7)) // ( ☆ ) 인덱스 3부터 7 이전까지의 요소 반환, 기존배열 건드리지 않음
num.splice(2,1) // 시작점에서 지정한 개수만큼 요소 제거, 기존의 배열이 잘림
console.log(num)

let animals = ["Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Ape", "Armadillo", "Donkey", "Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison", "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant", "Dugong", "Dunlin", "Eagle", "Echidna", "Eel", "Eland", "Elephant", "Elk", "Emu", "Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gaur", "Gazelle", "Gerbil", "Giraffe", "Grasshopper", "Heron", "Herring", "Hippopotamus", "Hornet", "Horse", "Kangaroo", "Kingfisher", "Koala", "Kookabura", "Moose", "Narwhal", "Newt", "Nightingale", "Octopus", "Okapi", "Opossum", "Quail", "Quelea", "Quetzal", "Rabbit", "Raccoon", "Rail", "Ram", "Rat", "Raven", "Red deer", "Sandpiper", "Sardine", "Sparrow", "Spider", "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", "Tiger", "Toad", "Whale", "Wildcat", "Wolf", "Worm", "Wren", "Yak", "Zebra"];
animals.pop()
animals.push("Dog")
animals.push("Mosquito","Mouse","Mule")
animals.includes("Human") // "Human"이 배열에 포함되어 있는지 확인
animals.includes("Cat")
animals[animals.indexOf("Red deer")] = "Deer" // "Red deer"의 인덱스를 찾아 "Deer"로 변경
animals.splice(animals.indexOf("Spider"),3) // "Spider"부터 3개의 요소 제거
animals.splice(animals.indexOf("Tiger")) // "Tiger"부터 배열의 끝까지 요소 제거
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1) // "Baboon"부터 "Bison"까지 새로운 배열에 저장
console.log(newList) 