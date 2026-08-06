//1
for(var i=1;i<=10;i++){
    console.log(i);
}

 //2
for(var i=2;i<=20;i++){
    console.log(i);
    i+=1
}

//3
var counter=0
for(var i=1;i<=15;i++){
    counter+=i
}console.log("total sales =",counter);

//4
var i=1
while(i<=7){
    console.log(i);
    i++
}

//5
var i=8
while(i>0){
    console.log(i);
    i--
}

//6
var i=1
do{
    console.log(i);
    i++
}
 while(i<6)

//7
var itemsInCart = 10;
while(itemsInCart<5){ // while excute when condition achived
    console.log("start shopping");
    }
do{console.log("start shopping"); // do while excute once at least otherwise the condition dosen't achived
}while(itemsInCart<5)

//8
var userName = "Ali"
var userAge = 22
var isStudent = true
console.log(userName+"-->"+typeof(userName));
console.log(userAge+"-->"+typeof(userAge));
console.log(isStudent+"-->"+typeof(isStudent));

//9
var dbPrice = 10
var inputPrice = "10"
console.log(dbPrice==inputPrice);// true (==)compare only value
console.log(dbPrice===inputPrice);// fales(===)compare value and data type

//10
var name=window.prompt("please enter your name")
window.alert(`welcome ${name}`)
console.log(`welcome ${name}`);

//11
var value=window.prompt("enter number of pieces")
var parse=parseInt(value)
console.log(typeof(parse));
var plus= +value
console.log(typeof(plus));
var num=Number(value)
console.log(typeof(num));

//12
var a=10
var b=3
console.log(`+ -->${a+b}`);
console.log(`- -->${a-b}`);
console.log(`* -->${a*b}`);
console.log(`/ -->${a/b}`);
console.log(`% -->${a%b}`);
console.log(`** -->${a**b}`);

//13
var age= +window.prompt("enter your age")
if (age>=18){
    window.alert("you can enter")
}else{
    window.alert("sorry,underage")
}

//14
var grade= +window.prompt("enter your grade")
if(grade>=90){
    window.alert("your grade is A")
}else if(grade>=80){
    window.alert("your grade is B")
}else if(grade>=70){
    window.alert("your grade is C")
}else if(grade>=60){    
    window.alert("your grade is D")
}else{
    window.alert("your grade is F")
}

//15
var age=window.prompt("enter your age")
var answer= age>=18?"adult":"minor"
console.log(answer);

//16
var day=window.prompt("enter the day")
switch(day){
    case "saturday":
    case "sunday":
        console.log("holiday");
        break;
    case "monday":
        console.log("monday");
        break;
    case "friday":
        console.log("friday");
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("weekend");
        break;
    default:
        alert("enter right day")           
}

//17
x= +window.prompt("enter the number")
for(i=1;i<=x;i++){
    console.log(`${i}*50 = ${i*50}`);
}

//18
var x= +window.prompt("enter the size")
if(x>0){
    for(var i=1;i<=x;i++){
        console.log(`${i} byte`);
        
    }
}else{console.log("Invalid file size");
}

//19
for (var i=1;i<=20;i++){
    console.log(`${i}--> normal`);
    i+=1
    console.log(`${i}--> express`);
}

//20
var arr=["yousef","ahmed","omar","hussien"]
for(var i=0;i<arr.length;i++){
    console.log(`student${i+1}: ${arr[i]}`);
    
}

//21
var total=0
for(i=0;i<5;i++){
    var x= +window.prompt("enter a value")
    total+=x
}console.log(`total:${total}`);
console.log(`mean:${total/5}`);

//22
var correctPin = "1234"
var attempts = 0
while(attempts<3){
    var x= window.prompt("enter pin")
    if(x===correctPin){
        window.alert("successful");
        break;
    }else{
        window.alert(`failed,${2-attempts} attemps remaining`);
        }attempts++
    }

//23
var hasAccount = true
var isVerified = false
if(hasAccount&&isVerified){
    console.log("Welcome back");
}else if(hasAccount&&!isVerified){
    console.log("Please verify your account");
}else if(!hasAccount){
    console.log("Please sign up");
}    

//24
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
var total=a + b + Number(c) + d + e
console.log(total);
if(total<=20){
    for (let i = 1; i <= total; i++) {
        console.log(i);
        }
}else{console.log("too big to print line by line");
}

//25
var x= +window.prompt("enter number")
var y=x
if(x<0){
    window.alert("error,negative number")
}else{
        for(i=x-1;i>1;i--)
            x*=i
}window.alert(`${y}!=${x}`)
console.log(`${y}!=${x}`);

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

//Task 2-2

var name= window.prompt("please enter your name")
var age= +window.prompt("please enter your age")
var experience= +window.prompt("please enter your years of experience")
var selfRating= +window.prompt("please enter your self rating")

var category

if(experience>10){
    category="expert"
}else if(experience>5){
    category="senior"
}else if(category>2){
    category="mid-level"
}else{category="juinor"}

var performance

switch(true){
    case selfRating>=9 :           
        performance="Excellent"
        break;
    case selfRating>=7:
        performance="Good"
        break;
    case selfRating>=5:
        performance="Average"
        break;
    case selfRating>0:
        performance="Needs Improvement"
        break;
    default:
        window.alert("invalid value")           
}
var salary =10000
if(experience>5){
    salary+=salary*20/100
}else if(experience>=3){
    salary+=salary*15/100
}else{salary+=salary*10/100}

var shift
var date=new Date().getHours()
if(9<=date<=18){
shift="day shift"
}else{shift="night shift"}

console.log(`    name : ${name}.
    age : ${age}.
    category : ${category}.
    performance : ${performance}.
    final salary : ${salary}.
    shift : ${shift}.`);

window.alert(`    name : ${name}.
    age : ${age}.
    category : ${category}.
    performance : ${performance}.
    final salary : ${salary}.
    shift : ${shift}.`)

document.getElementById("result").innerText=(`   name : ${name}.
    age : ${age}.
    category : ${category}.
    performance : ${performance}.
    final salary : ${salary}.
    shift : ${shift}.`)