// console.log("Goodbye, World!");
// document.write("<h1>We Are  Devloper</h1>");
// alert("Hi i am Kanika");
// function abes(){
//     document.write("hello abes college");
// }
// function jadu(){
//     if(document.getElementById("adi").style.backgroundColor == "black"){
//         document.getElementById("adi").style.backgroundColor = "yellow";
//         document.getElementById("adi").style.color = "black";
//     }
//     else{
//         document .getElementById("adi").style.backgroundColor = "black";
//         document.getElementById("adi").style.color = "white";}
// }
// let a = 30;
// if(a>20){
//     let a = 50;
//     console.log("a inside value = " + a);
// }
// else{
//     console.log("Inside a element");
// }
// console.log("a outiside value" + a);
//
//
// //Arrow Function
//
// const data = (msg) => {
//     console.log("Hi..hello " + msg);
// }
// data("this is my fsd training going on")
//
// //IIFE
// function selctlanguage(lang) {
//     if(lang == 'java'){
//         function javaCompiler(){
//             return "hey, java compiler calling"
//         }
//     }
// }
// console.log("hello world");
// var a=20;
// console.log("a="+a);

// console.log(a);
// a=20;
// var a=30;
// if(a>20){
//     var a=50;
//     console.log("a inside value"+a);
// }else{
//     console.log("Inside else statement")
// }
// console.log("a outside value"+a);

// function greeting(msg){
//     return "hiii..hello"+msg;

// }
// const msgl=greeting("Good Morning");
// console.log(msgl);

// const data=(msg)=>{
//     // console.log("hiii..hello"+msg);
//     return "hiii..hello"+msg;
// }
// const data1= data("Good Morning");
// console.log(data1);

// const data=msg=>msg;
// const data1 = data("hellloooo");
// console.log(data1);

//IIFE
// (()=>{
//     console.log("Hiii...Helllooooo..");
// })();

// setTimeout(()=>{console.log("hellooo")},1000);
// setInterval(()=>{console.log("heyyyy.....")},1000);


// function greetings(msg="hiii"){
// console.log("Helloo"+msg);
// }
// greetings("Welcome to ABES");

function selectLangauge(lang){
    let data;
    if(lang=='java'){
        function javacompiler(){
            return"Hey, Java Compiler calling.....";
        }
        data=javacompiler();
    }else if(lang=='c'){
        function cCompiler(){
            return"Heyy C Compiler calling";
        }
    }
    else{
        data = "No compiler available";
    }
return data;
}
const language = selectLangauge("java")
console.log(language)