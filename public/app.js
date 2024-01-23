import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// we are passing a class
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    //  we it does not refresh the page once we submit
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        // it will spread the values array and pass each value as an argument when we use ...
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS 
const addUID = (obj) => {
    //  the passed object did not specify what properties it has
    // when we add <T> we are capturing the type of the object that is passed and will check the properties of that object
    let uid = Math.floor(Math.random() * 100);
    // return the object with a uid to it 
    return Object.assign(Object.assign({}, obj), { uid });
};
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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
let docThree = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: { name: "Fatma" }
};
let docFour = {
    uid: 2,
    resourceName: ResourceType.FILM,
    data: ["The notebook"]
};
console.log(docThree, docFour);
// tuples
// we use tuples when we want to specify the type of each element in an array
// very flexible
let arr = ['fatma', 25, true];
arr[0] = false;
arr[1] = 'Fatma';
arr = [30, false, 'Fatma'];
// we can specify the types of each element in the array (each position)
// we have to speicfy the types of each element in the array otherise it will be treated as a normal array
let tup = ['Fatma', 25, true];
let student;
student = ['Fatma', 2545];
