let show = document.querySelector(".show")
let Form = document.querySelector(".Form")
let Close = document.querySelector(".Close")
let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
let number = document.querySelector("#number").value;
let salary = document.querySelector("#salary").value;
let hours = document.querySelector("#hours").value;
let tax = document.querySelector("#tax").value;
let age = document.querySelector("#age").value;
let gender = document.getElementsByName("people").value;
let submit = document.querySelector("#submit")
show.addEventListener("click",function(){
Form.style.opacity= 1;
show.style.opacity= 0;
setTimeout(() => {
    submit.style.opacity= 1;
    
},900);
setTimeout(() => {
    Close.style.opacity= 1;
    
},1500);

})
Form.addEventListener("mouse move",function(){
    Form.target.parentElement.style.backgroundColor=`rgb(${Form.offsetY},${Form.offsetX},${Form.offsetY+offsetX})`


})





Close.addEventListener("click",function(){
    Form.style.opacity= 0;
   Form.style.translateY= 100;
    show.style.opacity= 1;
    
    })
    submit.addEventListener("click",function(){
        let fname = document.querySelector("#fname").value;
        let lname = document.querySelector("#lname").value;
let number = document.querySelector("#number").value;
let gender = document.getElementsByName("people").value;
let salary = document.querySelector("#salary").value;
let hours = document.querySelector("#hours").value;
let tax = document.querySelector("#tax").value;
let age = document.querySelector("#age").value;
let res = salary*hours;
resTwo = (res*tax)/100;
resThree =res-resTwo
       document.write(`<h1>Name : ${fname} ${lname} <br>Age : ${age}<br>gender:${gender}<br>Number: ${number}<br>Salary per hour : ${salary}<br>Hours : ${hours}<br>Tax : ${tax}<br>result:${resThree}</h1>`)

    })
