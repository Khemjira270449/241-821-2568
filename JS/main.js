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

/** 
let conter = 0;
while (conter <=4) {
    conter = conter + 1;
    console.log("while:", conter);
}
for (let i = 0; i <=4; i = i + 1) {
    console.log("for:", i);
}
    */

/**
 * 1.arry (06/01/2569)
 */

/** 
let age1 = 25
let age2 = 30
let age3 = 35
console.log(age1, age2, age3); //25 30 35

let ages = [25, 30, 35];
console.log(ages); //25 35 35
console.log(ages1[1]); //25 30 35

//แทนที่ค่าในอาเรย์
ages = [40, 45, 50];
console.log(ages); //40, 45, 50

//ต่ออาเรย์
ages.puch(55);
console.log(ages); //[40, 45, 50, 55]

// ความยาวของอาเรย์
console.log(ages.length); //4

//ลบสมาชิกตัวสุดท้ายของอาเรย์
ages.pop();
console,log(ages); //[40, 45, 50]

if(ages.includes(45)) { //true
    console.log("พบ 45 ในอาเรย์"); //พย 45 ในอาเรย์
}

let numbers = [30, 60, 80, 40, 50];
numbers.sort();
console.log(numbers); //[40, 50, 60, 80, 90]

let name = ["John", "Jane", "Doe"];
names.push("Smith");
console.log(name);
confirm.log(name.length);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
    */

/** 
 * 2.object
 
let student = [{
    age:20,
    name: "Ema",
    grade: 'A'
},{
     age:23,
    name: "Liam",
    grade: 'B'
}];
 for (let i = 0; i <student.length; i++) {
    console.log("Student: " + student(i + 1) + ":")
    console.log("Name: " + student[i].name)
    console.log("Age: " + student[i].age)
    console.log("Grade: " + student[i].grade)
 }

 student.push({
    age: 21,
    name: "Olivia",
    grade: 'A'
 });
 console.log(student);
*/

/**
 * 3.function

//ปรพกาศฟังก์ชัน

function calculate(score) {
    if (score >=90 ) {
        grade = 'A';
    } else if (score >=80 ) {
        grade = 'B'; 
    }  else if (score >=70 ) {
        grade = 'C'; 
    }   else if (score >=60 ) {
        grade = 'D'; 
    }   else {
        grade = 'F'; 
    }
    return grade;
}
//เรียกใช้ฟังก์ชัน
let student_score = 85;
let student_grade = calculate&grade(student_score);
console.log("Student's grade is"+ student_grade);
*/

/** 
let score = [10,20, 30, 40, 50];

for (let i = 0; i < score.length; i++) {
    //nconsole.log('Score at index' + i + 'is' + score[i] );
    console.log('Score at index ${i} is ${score[i]}');
}

score = score.map((s)n=> {
    return s * 2
})

score.forEach((s) => {
    console.log('new score', s)
})
*/

/**
 * 4.arry

let score = [10, 20, 30, 40, 50];

for(let index = 0; index <score.length; intdex++) {
    console.log('scpre',score[index])
}

let newScore = score.forEach((ns) => ) {
    ret
}
console.log('newScore : ',newScore)

newScore.forEach((ns) => {
    console.log('new score : ',)
})
*/


/**
 * 5.object + function ข้อสอบ 1 ข้อ !!!!!!!!!!!!!!!!!!!!!!
 */
let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'A'
    },
    {
        name: 'bb',
        score: '60',
        grade: 'B'
    }
]

console.log('Student : ', students[0])

let student = student.find((s) => {
    if (s.name == 'bb') {
        return true
    }
})

 let doublescor_student = student.map((s) => {
    s.score =s.score * 2
    return s
 })

 console.log("student:" ,student)
 console.log(doublescor_student)

 let height_student = student.filter((s) => {
    if (s.score >= 110) {
        return true
    }
 })

 console.log('highScore_student',height_student)
 