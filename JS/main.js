//console.log("Hello Word")
//console.log("Thi is a test JavaScript file.")


//String
//let fname ="John"; //String

/** 
Number
let age = 30; //Number
let height = 5.9; //Number
*/

/** 
fname = "Alice";
fname ="Bob";
console.log("Name:",fname);
console.log("Age:",age);
console.log("Height:",height);
*/

/** 
let number1 = '10';
//let number2 = '3';

let result1 = number1 + number2;
console.log("ผลบวก =",result1);
*/

/**
let number1 = 5;
let number2 = 5;

// let condition = number1 < number2; //Boolean ค่าความจริง
// console.log("condition:", console);
*/

/**
  Grsde
  >=80 เป็นเกรด A
  >=70 เป็นเกรด B

    
 */
/** 
let score = 75;
//if - else condition
if (score >= 80) {
     console.log('A');
} else if(score >= 70) {
     console.log('B');
} else if(score >= 60) {
     console.log('C');
} else if(score >= 50) {
     console.log('D');
} else{
     console.log('F');
}
*/

/**
&& และ
|| หรือ
! not หรือ ไม่
 */
/**
let number1 = 5
let number2 = 10

let condition1 = (number1 > 0 ) && (number2 > 0) //true && true = true
console.log("condition1:", condition1)

let age = 25
let gender ="fenale"
if (age >= 18 && gender == "female") {
    console.log(" ");
}

*/

/** 
let number1 = 20
if (!(number1 % 2 == 0)) {
    console.log("เป็นเลขคู่")
}
else {
    console.log("เป็นเลขคี่")
}
*/

let conter = 0;
while (conter <=4) {
    conter = conter + 1;
    console.log("while:", conter);
}
for (let i = 0; i <=4; i = i + 1) {
    console.log("for:", i);
}