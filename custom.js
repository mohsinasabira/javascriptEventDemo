// function areaTri(base, height){
//     let area = (base*height)/2;
//     return area;
// }
// function areaSqr(height, width){
//     let area = height*width;
//     return area;
// }
// var result = areaTri(20,30) + areaSqr(50,30);
// console.log(result);

// let x=80;
// if(x=80){
//     console.log("pass");
// }

// // Array
// let numbers = [10,20,30,40,50,60];
// console.log(numbers);

let box = document.querySelector(".box");
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
//  let aquaColr = true;

 redBtn.addEventListener("click", function(){
   box.style.backgroundColor = "red";
 });
 blueBtn.addEventListener("click", function(){
 box.style.backgroundColor="blue";
 });
let box2 = document.querySelector(".box-2");

let changeBtn = document.getElementById("change");
let blueColor = true;
change.addEventListener("click", function(){
 if(blueColor == true){
     box2.style.backgroundColor = "yellow";
     blueColor = false;
 } else if(blueColor == false){
     box2.style.backgroundColor="blueviolet";
     blueColor = true;
 }
});
