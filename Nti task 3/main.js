// // 1
// var name =window.prompt("enter your name").trim()
// var arr=name.split(" ")
// var words = arr.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//     })
// var obj=words.join(" ")
// var noSpaces=obj.replace(" ","").length
// window.alert(`    name : ${obj}
//     number of chars : ${noSpaces}`)

// //2
// var email=window.prompt("enter your email")
// if(email.includes("@")&&email.endsWith(".com")&&!email.startsWith("@")&&!email.includes((" "))){
//     window.alert("valid")
// }else{window.alert("invalid")}

// //3
// var word=window.prompt("enter a text")
// var char = window.prompt("enter a char")
// var count = word.toLowerCase().split(char.toLowerCase()).length-1
// window.alert(`number of ${char} in text is : ${count}`)

// //4
// var text = window.prompt("enter a text").toLowerCase().split(" ")
// var word=window.prompt("enter a word").toLowerCase()
// var y = "*"
// for(var i=0;i<text.length;i++){
// if(text[i]==word){
//     text[i]=y.repeat(word.length)
// }else{}
// }
// var x=text.join(" ")
// window.alert(x)

// //5
// var frist=window.prompt("enter your frist name").toLowerCase().trim()
// var last=window.prompt("enter your last name").toLowerCase().trim()
// var name=`${frist}.${last}`.slice(0,15)
// window.alert(name)

// //6
// var text = window.prompt("enter a text").toLowerCase().split(" ")
// var word=window.prompt("enter a word").toLowerCase()
// if(text.includes(word)){
//     window.alert(`${word} exist`)
//     for(var i=0;i<text.length;i++){
// if(text[i]==word){
//     window.alert(`the frist occurance is the word number ${i+1}`)
//     break;
// }}
//   for(var u=text.length;u>0;u--){
// if(text[u]==word){
//     window.alert(`the last occurance is the word number ${u+1}`)
//     break;
// }}
// var counter=0
//   for(var y=0;y<text.length;y++){
// if(text[y]==word){
// counter+=1
// }}
// window.alert(`the number of occurance is ${counter}`)
// }

// else{
//     window.alert(`${word} not exist`)
// }

// //7
// var text=window.prompt("enter a text").trim().split(" ")
// for(var i=0;i<text.length;i++){
//     var word=""
//     for(var x=0;x<text[i].length;x++){
//        word+= text[i][text[i].length-x-1]
//     }
//     text[i]=word
// }
// var c =text.join(" ")
// window.alert(c)

// //8
// var text=window.prompt("enter a text").trim()
// var words=text.split(" ")
// window.alert(`number of words is : ${words.length}`)
// var letters=text.replaceAll(" ","").split("")
// window.alert(`number of chars is : ${letters.length}`)
// var countVowels=0
// for(var i=0;i<letters.length;i++){
//     if("aeiou".includes(letters[i])){
//         countVowels+=1
//     }
// }window.alert(`number of vowels is : ${countVowels}`)
// var countDigits=0
// for(var i=0;i<letters.length;i++){
//     if(isFinite(letters[i])){
//         countDigits+=1
//     }
// }window.alert(`number of digits is : ${countDigits}`)
// var lower=letters.join("").toLowerCase()
// var countUpper=0
// for(i=0;i<lower.length;i++){
//     if(lower[i]!=letters[i])
//         countUpper+=1
// }window.alert(`number of uppercases is : ${countUpper}`)
// var upper=letters.join("").toUpperCase()
// var countLower=0
// for(i=0;i<upper.length;i++){
//     if(upper[i]!=letters[i])
//         countLower+=1
// }window.alert(`number of lowercases is : ${countLower}`)
// var max=words[0]
// var min=words[0]
// for(i=1;i<words.length;i++){
//     if(words[i].length>max.length){
//         max=words[i]
// }    if(words[i].length<min.length){
//         min=words[i]}
// }window.alert(`the longest word is : ${max}`)
// window.alert(`the smallest word is : ${min}`)

// //9
// var phone = window.prompt("enter phone number");
// var first = phone.slice(0,4);
// var last = phone.slice(-3);
// var stars = "*".repeat(phone.length-7);
// var result = first  +stars+last;
// window.alert(result);

//10
var text = window.prompt("enter a text").trim();
text = text.replaceAll("javascript", "JavaScript");
text = text[0].toUpperCase() + text.slice(1);
if (!text.endsWith(".")) {
    text += ".";
}
window.alert(text);