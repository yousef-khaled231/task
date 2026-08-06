//1
console.log("JS is running successfully");
//2
window.alert("ready to practise")

//3
var productName = "Laptop"
var price = 15000
var isAvailable = true

console.log(productName);
console.log(typeof(productName));
console.log(price);
console.log(typeof(price));
console.log(isAvailable);
console.log(typeof(isAvailable));
var x=document.getElementById("mainTitle")
console.log(x)
x.innerText=("practise time")



var city = "Cairo"
var country = "Egypt"
//5
console.log(city+" ,"+country);
//6
console.log(`${city} - ${country}`)
//7
var itemPrice=120,quantity=3
console.log("total= " ,itemPrice*quantity);
console.log("The rest= ",400-itemPrice*quantity);
console.log("division= ",itemPrice/quantity);
console.log("modules= ",itemPrice%quantity);
console.log("power= ",quantity**2);
//8
var color=prompt("enter your fav colour")
console.log("your fav colour is",color)
//9
var score = 20
var textScore = "20"

console.log(score == textScore) /*true( == -->compare only values)*/
console.log( score === textScore) /*false( == -->compare values and data types)*/
//10
var input=prompt("enter number of pieces")
var num =Number(input)
console.log(typeof (num));
var plus= +input
console.log(typeof(plus));
var parsee =parseInt(input)
console.log(typeof(parsee))
//11
arr=["appel","banana","mango"]
console.log(arr[1])
arr[1]="orange"
arr.push("grape")
console.log(arr);
//12
var course={title:"mean",hours:120,level:"advanced"}
course.title="MEAN"
console.log("hours: ",course.hours)
console.log(course);
//13
var hasAccount = true
var isVerified = false
console.log(hasAccount && isVerified)
console.log(hasAccount || isVerified);
console.log(!isVerified);
//14
var balance=50

balance +=30
balance*=2
balance -=20
console.log(balance);
//15
var hotel=prompt("please enter hotel's name")
var nights=prompt("please enter night's number")
var confirmed=confirm("are the book confirmed?")
window.alert(`Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`)
console.log(`Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`)
//16
console.log(2 + 8 + "0");  // "100" 
console.log("2" + 8 + 0);  // "280"
console.log(2 + "8" + 0);  // "280"
//17
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2); //Alex, Giza --> Js is one by one language 

var car1 = { brand: "Toyota" };
var car2 = {...car1};
Object.assign(car2,{brand:"honda"})
console.log(car1, car2);
//18
mixedBag=["joo",22,true,null,undefined,{isGratuated:"false"},["html","css","js"]]
for(var i =0;i<mixedBag.length;i++){
    console.log(typeof(mixedBag[i]));
    
}
//19
var name=window.prompt("please enter your name")
var price=window.prompt("please enter the price")
var isConfirmed=window.confirm("is paid?")
var price2= +price
console.log(`Name: ${name}, price:${price2}, is paid: ${isConfirmed}`);
window.alert(`Name: ${name}, price:${price2}, is paid: ${isConfirmed}`)
document.getElementById("result").innerText=`Name: ${name}, price:${price2}, is paid: ${isConfirmed}`
//20
var x= +prompt("enter num1")
var y= +prompt("enter num2")
console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);
console.log(`${x} % ${y} = ${x%y}`);
console.log(`${x} ** ${y} = ${x**y}`);
//21
// var a = 40;
// var b = 50;
// var c = "60";
// var d = 30;
// var e = 30;
// console.log(a + b + c + d + e); --> "60" is string and (+) make number string
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + Number(c) + d + e)
//22
function makeInvoiceLine(item,qty,paid){
    var item1=window.prompt("enter item")
    var qty1= +window.prompt("enter qty")
    var paid1=window.confirm("is paid?")
    window.alert(`invoice => Item: ${item1} | Qty: ${qty1} | Paid: ${paid1}`)
}
makeInvoiceLine()
//23
function saveUserName(inp){
  inp=window.prompt("enter name")
  if (!inp){
    window.alert("name is required")
  }else{
    window.alert("name saved successfully")
    obj={userName:`${inp}`,status:"saved"}
    console.log(obj);
    
  }
}
saveUserName()
//24
var a1 = "15";
var b1 = 15;
var c1 = null;
var d1;
var e1 = [15];
var f1 = { value: 15 };
var arr=[a1,b1,c1,d1,e1,f1];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
    console.log(typeof(arr[i]));
    console.log(arr[i]==15);
    console.log(arr[i]===15);
}
//25
var productName=window.prompt("please enter product name")
var brand=window.prompt("please enter the brand")
var price= +window.prompt("please enter price")
var category=window.prompt("please enter the category")
var isConfirm=window.confirm( "Is this product in stock?")
var productInfo=`productname: ${productName}, brand:${brand}, price:${price}, category:${category}, isconfirmed:${isConfirm}`.trim()
document.getElementById("result").innerText=productInfo
console.log(productInfo)
window.alert(`${productInfo}`)


//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

//task 1-2

var name ="yousef",age=22,isAvailable=true,experience=null

console.log(name);
console.log(age);
console.log(isAvailable);
console.log(experience);

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isAvailable));
console.log(typeof(experience));

var firstName="joo",lastName="khaled"
console.log(firstName," ",lastName);
console.log(`${firstName} ${lastName}`);

var userName=window.prompt("enter your name")

if(userName){
  var password=window.prompt("enter password")
  if(password.length>=8){
    window.alert("successful login");
    console.log("name: ",userName+" "+"password: ",password);
    
  }else{window.alert("password must be at least 8 chars")
    
  }
  }else{
    window.alert("name is required")
  }





