import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// we are passing a class
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
	//  we it does not refresh the page once we submit
	e.preventDefault();
	let values:[string,string,number]
	values = [toFrom.value, details.value, amount.valueAsNumber]
	let doc: HasFormatter;
	if (type.value === "invoice") {
		// it will spread the values array and pass each value as an argument when we use ...
		doc = new Invoice(...values);
	} else {
		doc = new Payment(...values);
	}
	list.render(doc,type.value,'end')
});

// GENERICS 
const addUID = <T extends {name:string}>(obj: T) => {
	//  the passed object did not specify what properties it has
	// when we add <T> we are capturing the type of the object that is passed and will check the properties of that object
	let uid = Math.floor(Math.random() * 100);
	// return the object with a uid to it 
	return { ...obj, uid };
}

let docOne = addUID({ name: "Fatma", age: 24 });
console.log(docOne.age);


// with interfaces
// interface Resource <T>{
// 	uid: number;
// 	resourceName: string;
// 	//  this data can be anything 
// 	data: T;
// }

// ENUMS
//  so we dont have to write the same thing over and over again
// we use enums when we have a fixed set of values
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }


interface Resource <T>{
	uid: number;
	resourceName: ResourceType
	//  this data can be anything 
	data: T;
}

let docThree :Resource<object> = {
	uid: 1,
	resourceName: ResourceType.PERSON,
	data: {name:"Fatma"}
}

let docFour :Resource<string[]> = {
	uid: 2,
	resourceName: ResourceType.FILM,
	data: ["The notebook"]
}

console.log(docThree,docFour)

// tuples
// we use tuples when we want to specify the type of each element in an array
// very flexible
let arr = ['fatma',25,true]
arr[0] = false
arr[1] = 'Fatma'
arr = [30,false,'Fatma']

// we can specify the types of each element in the array (each position)
// we have to speicfy the types of each element in the array otherise it will be treated as a normal array

let tup:[string,number,boolean] = ['Fatma',25,true]

let student :[string,number]
student = ['Fatma',2545]