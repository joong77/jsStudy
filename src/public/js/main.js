console.log('hi new guyes!');


// let 글자세기함수 = (a) => {
//     const newArray=[...a]
//     let pathArray= newArray.sort()

//     console.log(pathArray.length);

//     let obj = { a: 0, b: 0, c: 0, d: 0}
//     for (i = 0 ; i < pathArray.length; i++){
//         if (pathArray[i]==='a'){
//             obj.a = obj.a+1
//         } else if(pathArray[i]==='b'){
//             obj.b = obj.b+1
//         } else if(pathArray[i]==='c'){
//             obj.c = obj.c+1
//         } else if(pathArray[i]==='d'){
//             obj.d = obj.d+1
//         } 
//     }
//     console.log(obj);}


// data 레퍼런스 이해 : 문법이해 : 파라미터와 레퍼런스
// let name1 = { name : '김' };
// function changeName(obj){
//     obj = { name : 'park' };//파라미터는 변수를 재 선언하는 방식으로 레퍼런스 변화가 없다
// }
// function changeName2(obj){
//     obj['name'] = 'park' ;//레퍼런스를 타고 들어가 실제 값을 변경시킴
// }
// changeName(name1);
// console.log(name1);
// changeName2(name1);
// console.log(name1);

// constructor 응용 : 여러 변수 정의 : 쉽게 캐릭터 만들때 좋음
// let student = { name: 'kim', age: 30 };
// let minDmg = 150;
// let maxDmg = 300-minDmg;
// function Students(이름 = '무명', 나이 = Math.floor(Math.random()*maxDmg+minDmg) ) {
//     this.name = 이름; //constructor의 this는 새로 생성되는 object
//     this.age = 나이;
//     this.sayHi = ()=>{console.log(
//         '안녕하세요! ' + this.name + '입니다 저는 '+ this.age +'살 이에요!')};
// }
// let student1 = new Students('훈이');
// let student2 = new Students();
// console.log(student1, student2);
// student2.sayHi();
// var product2 = { name : 'pants', price : 60000 };
// function Product ( item = 'noName', price = 0 ) {
//     this.name = item;
//     this.price = price;
//     this.부가세 = ()=>{
//         console.log(price*0.1);
//     }
// }
// let product1 = new Product('shirts', 50000);
// product1.부가세();

// 오브젝트에 키벨류 넣기
// let object1 = {};
// object1['name']=1;
// console.log(object1);
 
//숫자가 아닌 것은 숫자로 만들고 forEach문을 돌리자!
// function 글자세기함수 (글자){
//   let 결과 = {};
//   [...글자].forEach(function(a){
//      if(결과[a] > 0){
//          결과[a]=결과[a]+1;
//     } else {
//          결과[a] = 1;   
//      }
//   });
//   console.log(결과);
// };
// 글자세기함수('aaaabbbbccccdddddd');

//...rest는 파라미터를 배열로 만들어주지만 단어를 하나의 파라미터로 보기에 비적합
// function 정렬(a, ...rest){
//     console.log([...a].sort(), [...rest[0]].sort());
//   }
//   정렬('bear', 'bare');

// function 어레이(...rest){
//     return rest
//   }
//   let newArray = 어레이(1,2,3,4,5);
//   console.log(newArray);
//   console.log(newArray[0]);
//   let maxValue = Math.max(...newArray);
//   console.log(maxValue);
// let a = [1,2,3];
// let b = ['you', 'are'];
// let c = function(a,b){
//     console.log([...a],...[...b][1]);
// }
// c(a,b);

//parameter 응용 예제 : 실용이해 : default value setting
// function addman ( a, b = 10/a + hamsu()) {
//     console.log(a+b);
// }
// function hamsu () {
//     return 10
// }
// addman(2);

//arquments 사용 예제 : 문법이해 : 모든 파라미터를 담는 어레이가 arquments
// function hamsu(a,b,c){
//     for (i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
//     console.log(arguments[0]);
// }
// hamsu(1,2,3);
// rest 개념 정리 : 문법이해 : arguments 신 문법으로 많이 쓰임 조정이 가능함
// function hamsu2(a,b, ...rest){
//     console.log(a,...rest, rest);
// }
// hamsu2(1,3,5,2,6,11); //rest는 일부만 담아 배열할 수 있음

// object 사용 예제 : 문법이해 : 오브젝트 안 배열 합 구하기--
// let obj = {
//     data: [1,2,3,4,5],
// }
// obj.alladd = function(){
//     console.log(obj.data)
//     let added = 0;
//     this.data.forEach(function(a){
//         added = added + a
//     });
//     console.log(added);
// }
// obj.alladd();

// this 사용법 예제 : 문법이해 : this의 지정 (function의 위치가 중요)
// document.querySelector('#버튼').addEventListener('click', function(){
//     console.log(this.innerHTML);
// });

//for 문 활용 복수문 바꾸기 : 코드간소화 : 태그엘레멘트 배열화와 포문활용--
// const modals = document.querySelectorAll('div'); 
// const buttons = document.querySelectorAll('button');
// for (let i = 0; i < 3; i++){
//     buttons[i].addEventListener('click', function(){
//        modals[i+2].style.display = 'block'; 
//     });
// }

//backTick 함수 사용 관련: 문자열 분석, 문자 함수 제배치
// function analistMan(mun, val1, val2){
//     if(val1 === 0){
//       val1 = '다팔렸음'
//     } 
//     if(val2 === 0) {
//       val2 = '다팔렸음'
//     }
//  console.log(`${mun[1]} ${val1} ${mun[0]} ${val2}`);
// }
// let sacks = 10;
// let pents = 0;
// analistMan`양말: ${sacks}  바지: ${pents}`;


let parents = { name : 'Kim'};
let sun1 = {};

sun1.__proto__ = parents;

console.log(sun1.name);

function Students (a, b) {
    this.name = a;
    this.age = b;
    this.sayHi = ()=>{
        console.log('안녕 나는' + this.name + '이야')
    }
} 

const 학생1 = new Students ('kim', 20);
const 학생2 = new Students ('park', 21);
const 학생3 = new Students ('Lee', 22);

학생3.sayHi();