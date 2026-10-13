//변수 선언
const users =[
    {"id":1, name:"철수", age:20},
    {"id":2, name:"영희", age:17},
    {"id":3, name:"민수", age:25},
]
let numbers = [1,2,3];

// 배열요소 접근
users.forEach( item =>{
    console.log(item);
});

// filter()
// users 에서 id가 3번이 아닌 user 만 추출해서 새로운 배열 생성

console.log(users.filter((user)=>user.id !==3));

// map() : 각 요소에 특정 연산을 하거나, 하나씩 가지고 나와 새로운 배열로 리턴
const result = numbers.map((num) => num * 2 )
console.log(result)

// 자바스크립트 객체 {키:값, key:value ...}

const obj1 = {name:"철수"}
const obj2 = obj1
obj1.name = "영희"
console.log(`obj1 ${obj1.name}, obj2 ${obj2.name}`)

const user = {
    name:'철수',
    age:20,
}

// user 복사
const newUser = {
    ...user,
    age:21,
}
user.name = "영희";
console.log(newUser);

// numbers 복사
//const newArr = numbers; // 같은 배열
const newArr = [...numbers]
numbers[1]= 5
console.log(numbers)
console.log(newArr)

// 구조 분해 할당
// 접근방식 user.name , user.age
const {name, age} = user;
console.log(`${name}: ${age}`)

const [num1,...num2] = numbers;
console.log(`${num1}: ${num2}`)

// 삼항연산자 : 조건 ? 참일때 : 거짓일때
// age가 20 이상이면 성인 / 미성년자 [js에서는 if를 쓰기어려움]
const result2 = age >= 20 ? "성인" : "미성년자";
console.log(result2)

// && and

// 콜백함수 
// fetch()

"-------------------------------------------------------------------------------------------------------------------------"

// 사전작업 : node.js 설치 [npm 도구 : 패키지 관리도구 == python pip]
// vite : 빌드도구 (개발 중 작성한 여러 개의 파일을 하나 또는 몇 개로 묶는 도구)  / next.js js기반 무거운 개발도구
// ESlint(문법검사) / OXlint(빠르고가벼움-안정성낮음)
// 1. vite 기반으로 react 프로젝트 생성하기
// $ npm create vite@latest [프로젝트명]

// //  Shortcuts (h + enter)
//   press r + enter to restart the server
//   press u + enter to show server url
//   press o + enter to open in browser
//   press c + enter to clear console
//   press q + enter to quit

// npm run dev [실행] 후
// o + enter [브라우저] 

// node_modules = npm / public = 정적파일 이미지

// npm run dev : 작성하는 코드가 실시간으로 반영(개발 시 사용) dev : developer(개발자)
// 개발종료 후 build > npm run build : 서버에 올려 사용자들에게 웹페이지로 배포될 파일들로 코드를 모아 컴파일
//  dist 폴더 생성 : 실제 배포
// npm run preview : 빌드를 통해 나온 결과물을 테스트하는 단계
// 소스코드 jsx (javascipt xml) tsx (typescript xml)

// 구조-분해-할당

// type 정의 interface , type=