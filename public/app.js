"use strict";
// // if we are sure that the anchor is not null we can use ! at the end
// const anchor =  document.querySelector('a')!
// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)
// we are passing a class
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    //  we it does not refresh the page once we submit
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
