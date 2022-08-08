"use strict"
//let message = "Hi";

let message;
message = "Hello";
message = "Hi";

let wow
wow = "WOW"
wow = message


//----------------------------------------------------
console.log(wow)
console.log(message)

const btn = document.querySelector('.b1');
const txt = document.querySelector('.p1');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
//---------------------------------------------------------
const txt2 = document.querySelector('.p2');



const button2 = document.querySelector('.b2');
button2.addEventListener('click', greet);

function greet() {
  
   const name = prompt('What is your name?');
   txt2.textContent = `Hello ${name}, nice to see you!`;
}

//-------------------------------------------------------------------
const txt3 = document.querySelector('.p3')
const button3 = document.querySelector('.b3')
button3.addEventListener('click', login)

function login() {  
  let userName = prompt("Who is there?!")
  if (userName === "qwe"){
    let password = prompt("password");
    if (password === "123") {
      txt3.textContent = "Welcome BOSS"
    } 
    else if (password === "" || password === null) {
      txt3.textContent = "canceled"
    }
    else {
      txt3.textContent = "Wrong password"
    }
  } 
  else if ( userName === null || userName === "")
  txt3.textContent = "Canceled"
  else {
    txt3.textContent = "I don't know u"
  }
}
// --------------this is alternative way to do it----------------------
// var response = prompt('Account');
// if (response === 'Admin') {
// var admin_verification = prompt('password', '');

// console.log
// (
// (!admin_verification) ? 'cancelled' :
// (admin_verification === 'TheMaster') ? 'Welcome' : 'Wrong Password'
// );

// } else if (!response) {
// console.log('cancelled')
// } else {
// console.log(`I don't know you`);
// }
//-----------------------------------------------------------------

const checkBox = document.querySelector('.in1');
      const para = document.querySelector('.p4');
      let shoppingDone = false;

      checkBox.addEventListener('change', () => {
        checkBox.disabled = true;
        shoppingDone = true;
        updateAllowance();
      });

      function updateAllowance() {
        let childsAllowance;
        if (shoppingDone === true) {
          childsAllowance = 10;
        } else {
          childsAllowance = 5;
        }

        para.textContent = `Child has earned \$${childsAllowance} this week.`;
      }

      updateAllowance();

      //---------------------------------------------------------------------------
      let select = document.querySelector('select');
      const para2 = document.querySelector('.p5');

      select.onchange = setWeather;

      function setWeather() {
        const choice = select.value;

        if(choice === 'sunny') {
          para2.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
        } else if(choice === 'rainy') {
          para2.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
        } else if(choice === 'snowing') {
          para2.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
        } else if(choice === 'overcast') {
          para2.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
        } else {
          para2.textContent = '';
        }
      }

// --------------------------------------------------------------------------------------------------------
 
let txt6 =document.querySelector(".p6")
let inp1 =document.querySelector(".inp1")
 inp1.addEventListener('click', run)
 function run() {
  let month = +prompt("Enter the month number")
 
 switch (month){
case 0:
case 1:
case 2:
  txt6.textContent = "Winter"
  break;
case 3:
case 4:
case 5:
  txt6.textContent = "Spring"
  break;
  case 6:
  case 7:
  case 8:
    txt6.textContent = "Summer"
  break;
  case 9:
  case 10:
  case 11:
    txt6.textContent = "Autumn"
  break;
default:
  txt6.textContent = "WoW"
  }
}
//  PROBLEM 1 
// if (month = 3 || 4 || 5) {
//   txt6.textContent = "aa"
// }
// else if (month = 0 || 1 || 2 )
// txt6.textContent = "bb"
// else {
//   txt6.textContent = "cc"
// } // why it's doesn't respond when I use this way
//  PROBLEM 2 
// switch doesn't read the value of an input type number
//-------------------------------------------------------------
// PROBLEM 3
let inp2 =document.querySelector(".inp2")
// function initInput()
// 	{
// 	var variable = somevalue;
// 	document.forms[0].fid_17.value = variable;
// 	}
let month2  ;
month2 = +document.forms[0].fid_17.value;
switch (month2){
  case 0:
  case 1:
  case 2:
    txt6.textContent = "Winter"
    break;
  case 3:
  case 4:
  case 5:
    txt6.textContent = "Spring"
    break;
    case 6:
    case 7:
    case 8:
      txt6.textContent = "Summer"
    break;
    case 9:
    case 10:
    case 11:
      txt6.textContent = "Autumn"
      break;
  default:
    txt6.textContent = "WoW"
    }
// waste of time couldn't figure it out...
// -------------------------------------------------------------------------------------
function argument(n) {
  let x =  n*2
  return x
}
function sum(min1, max1){
  let y = 0;
  while (min1<=max1 ){
    
   y += argument(min1)  // 2+4+6
   min1++
  }
  return y
}
console.log(sum(1,3))

// -------------------------------------------------------------------------------------
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);

// -------------------------------------------------------------------------------------


