console.log('hi new guyes!');

let obj = {
    data: [1,2,3,4,5],
}

obj.alladd = function(){
    console.log(obj.data)
    let added = 0;
    this.data.forEach(function(a){
        added = added + a
    });
    console.log(added);
}

obj.alladd();


// document.querySelector('#버튼').addEventListener('click', function(){
//     console.log(this.innerHTML);
// });
const modals = document.querySelectorAll('div');
const buttons = document.querySelectorAll('button');


for (let i = 0; i < 3; i++){
    buttons[i].addEventListener('click', function(){
       modals[i+2].style.display = 'block'; 
    });
}


function analistMan(mun, val1, val2){

    if(val1 === 0){
      val1 = '다팔렸음'
    } 
    if(val2 === 0) {
      val2 = '다팔렸음'
    }
 console.log(`${mun[1]} ${val1} ${mun[0]} ${val2}`);
}

let sacks = 10;
let pents = 0;



analistMan`양말: ${sacks}  바지: ${pents}`;

