// // if we are sure that the anchor is not null we can use ! at the end
// const anchor =  document.querySelector('a')!

// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)

// we are passing a class
const form = document.querySelector(".new-item-form") as HTMLFormElement;


const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
	//  we it does not refresh the page once we submit
	e.preventDefault();
	console.log(type.value,toFrom.value,details.value,amount.valueAsNumber);
});
