console.log('hi new guyes!');

//for in 과 for of
obj = {name: 'kim', age: 30}; 
console.log(
obj.name, 
obj['name']
);
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
for (let mon in obj){ //enumerable한 정보만 반복 
    if(obj.hasOwnProperty(mon)){ //이거 안하면 부모 프로퍼티도 불러온다
    console.log(obj[mon]);
    }
}
let arr1 = [2,3,4,5];
console.log(arr1[Symbol.iterator]()); 
for (let newarr1 of arr1){ //'adfadf' 숫자도 가능 iterable한 자료 다가능
    console.log(newarr1);
}

//구구단예제
// let 데이터 = [1,2,3,4,5,6,7,8,9] ;
// let num1 = [...데이터]
// num1.shift();
// for (let nnum of num1){
//     for (let num of 데이터){
//        console.log(nnum+'*'+num+'='+ num*nnum );
//     }
// }


//promise 
// const markunder = new Promise(function(resolve, reject){
//   setTimeout(function(){
//   const b = 3;
//   const difficult = 1+b;
//   resolve('전달파라미터');
// }, 3000);
// }); //성공/실패판정 머신

// markunder
// .then((결과)=>{
//     console.log('성공!'+ 결과);
// })
// .catch(()=>{
//     console.log('실패!!')
// })

//서버에서 text 받아와서 콘솔창에 띄우기
// fetch("https://codingapple1.github.io/hello.txt")
// .then((response)=> response.text())
// .then((result)=> console.log(result))
// .then(fetch("https://codingapple1.github.io/hello2.txt")
// .then((response)=> response.text())
// .then((result)=> console.log(result))
// );

//promise 대신에 async await 사용법
// const button1 = document.querySelector('#submit1');
// const inputer = document.querySelector('#idea');
// var mind = '하이';
// button1.addEventListener('click', function(){
//     inputer.value = mind;
//     naming();
// });
// async function naming(){
//     const m = new Promise((resolve,reject)=>{
//     // resolve(1000);  
//     reject('error');
//     });
//     // try {
//     // const result = await m;
//     // console.log(result);
//     // } 
//     // catch{
//     // console.log('뭔일 있슈');
//     // }
//     m
//     .then((result)=>console.log(result))
//     .catch(()=>console.log('먼일있슈'))
// };



//이미지 로드시 실행 promise 코드
// const img1 = document.querySelector('#test');
// const imgChecker = new Promise (function(resolev, reject){
//     img1.addEventListener('load', function(){
//         resolev('로드완료');
//     });
//     img1.addEventListener('error', function(){
//         reject();
//     });
// });
// imgChecker
// .then((result)=>{
//     console.log(result);
// })
// .catch(()=>{
//     console.log('오류인듯');
// })
// img1.setAttribute('src', "https://codingapple1.github.io/kona.jpg")

//Destructuring
// const [age, name, man] = [30, 'lee', 'man'];
// const { name: 이름 , age, sex = '남' } = { name: 'kim' , age: 30  }
// const name = 'lee';
// const age = '30';
// const obj = { name , age}; //자주 쓰이는 문법
// const obj = { name : 'kim', age : 30};
// function hamsu({name, age}) {
//     console.log(name);
//     console.log(age);
// }
// hamsu(obj);
// let 신체정보 = {
//     body: {
//       height: 190,
//       weight: 70
//     },
//     size: ["상의 Large", "바지 30인치"],
//   };
// let [키, 몸무게, 상의사이즈, 하의사이즈] = [신체정보.body.height, 신체정보.body.weight, 신체정보.size[0], 신체정보.size[1]];

// let {
//     body: {
//       height, 
//       weight
//     },
//     size: [ 상의, 하의 ]
//   } = 신체정보;


// setter and getter 
// let data = {
//     odd : [],
//     even : [],
//     setter함수(...rest){
//         [...rest].forEach((a)=>{
//             if(a%2 == 0){
//                 this.odd.push(a);
//             } else {
//                 this.even.push(a);
//             }
//         });
//     }
//   }
// data.setter함수(1,2,3,4,5);
// console.log(data);

// class Unit {
//     constructor(체력, 공격력){
//         this.con = 체력;
//         this.atk = 공격력;
//     }
//     get battlePoint(){
//         console.log(parseInt(this.atk)+parseInt(this.con));
//     }

//     set heel(hp){
//         this.con = parseInt(this.con)+parseInt(hp)
//         console.log(this.con);
//     }

//     set dmged(dmg){
//         this.con = parseInt(this.con)-parseInt(dmg);
//         console.log(this.con);
//     }
// }

// const unit1 = new Unit(100,5);

// console.log(unit1);

// unit1.dmged=75;
// unit1.heel=50;

// unit1.battlePoint;

// console.log(data);
// constructor making situation
// class grammar 
// class Person {
//     constructor(name='unknown', age= Math.floor(Math.random()*100), skill='unknown'){
//         this.name= name;
//         this.age= age;
//         this.skill= skill;
//     }
//     sayHi(){
//         console.log(this.name + ': 안녕하시오!');
//     }
//     sayAttak(){
//         console.log(this.name + ': 받아라 이놈 초 필살기 ' + this.skill + '@@@@@!!');
//     }
// }

// const Nunu = new Person ('Nunu',100,'회오리공격');

// Nunu.sayAttak();

// class Monster extends Person {
//     constructor(name,age,skill,item){
//         super(name,age,skill);
//         this.item= item;
//     }

//     sayDie(){
//         console.log(this.name + ': 아 내 ' + this.item + '은... 안돼 ㅠㅠ');
//     }
// }

// const Mob1 = new Monster('Skull', 50, '뼈때리기', '뼈갑옷');

// Mob1.sayAttak();

// setTimeout(()=>{Mob1.sayDie();},3000);
    


// Array.prototype.remove3 = function () {
//     this.forEach((a,i)=>{
//         if(a===3){this.splice(i,1); 
//         console.log(i);}
//     })
// }

// var arr = [1,2,3,4,3,5,6,3,2];
// arr.remove3();

// console.log(arr);

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


// let parents = { name : 'Kim'};
// let sun1 = {};

// sun1.__proto__ = parents;

// console.log(sun1.name);

// function Students (a, b) {
//     this.name = a;
//     this.age = b;
//     this.sayHi = ()=>{
//         console.log('안녕 나는' + this.name + '이야')
//     }
// } 

// const 학생1 = new Students ('kim', 20);
// const 학생2 = new Students ('park', 21);
// const 학생3 = new Students ('Lee', 22);

// 학생3.sayHi();