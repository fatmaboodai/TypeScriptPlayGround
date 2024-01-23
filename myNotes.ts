// tsc sandbox.ts -w --> to compile my code
// let character = 'Fatma'
// let age = 30
// let isBlackBelt = false


// const circ = (dia:number)=>{
// return dia*Math.PI
// }
// console.log(circ(20))

let names = ['fatma','Taiba','Dana']
names.push('hello')


let people = {
    name:'boodai',
    belt:'black',
    age:45
}
console.log(people)
  

let character :string[] = [];
character = ['Hi']
character.push('hi')



let mixed:(string|number|boolean)[]=[]
mixed.push('hello')
mixed.push(3)
mixed.push(true)

console.log(mixed)


let uid : string|number
let ninja1 : object
ninja1={name:'boodai'}
// this can happen because an array is part of object
ninja1 = ['hello']

// predefining my object
let ninja2 :{
    name:string
    belt:string
    age:number
}


// anytype 
// not that usefull 
let age: any =35
age = "Fatma"
age = ['hello']
let greet1 :Function

greet1 = () => {
  console.log('hello, world')
}


const add = (a:number, b:number, c?: number | string) => {
console.log(a + b )
console.log(c)
}
add(5, 10,"hello")
var minus = (a:number, b:number):number => {       
    return a + b}
let result = minus(10, 7)
console.log(result)


// functions and type shortcuts
type StringOrNumber = string | number;
type objWithName = {name:string,uid:StringOrNumber}

const logDetailss = (uid:StringOrNumber, item: string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

// user is an object 
// const greet = (user:{ name: string , uid:StringOrNumber})=>{
//     console.log(`${user.name} says hello`)
// }
const greet2 = (user:objWithName)=>{
    console.log(`${user.name} says hello`)
}

const greetAgain = (user:objWithName)=>{
    console.log(`${user.name} says hello`)
}

// example 1
let greet: (a: string, b: string) => void;
// now when we redeclare the function we have to follow this structure

greet = (name: string, greeting: string) => {
	console.log(`${name} says ${greeting}`);
};

// example 2

let calc: (a: number, b: number, c: string) => number;
// we have to match the original structure

calc = (num1: number, num2: number, action: string) => {
	if (action === "add") {
		return num1 + num2;
	} else {
		return num1 - num2;
	}
};

// example 3

let logDetails: (obj: { name: string; age: number }) => void;
 type person = { name: string; age: number }
logDetails = (ninja: person) => {
	console.log(`${ninja.name} is ${ninja.age} years old`);
};


// 
// if we are sure that the anchor is not null we can use ! at the end
const anchor =  document.querySelector('a')!

// if(anchor){
//     console.log(anchor.href)
// }
console.log(anchor.href)

class Invoice {
    // method 1
	readonly client:string;
	// we cant access it outside the class itself
	private details: string;
	public amount:number;
	// constructor
	constructor(c:string,d:string,a:number){
	// assign the global variables to the a , b ,c
	this.client = c
	this.details = d
	this.amount = a
	}
    // method 2
	// shortcut to the previous code
	// constructor(
	// 	readonly client:string,
	// 	private details:string, 
	// 	public amount:number
	// ) {}
	// method
	format() {
		return `${this.client} owes ${this.amount}KD for ${this.details}`;
	}
}


// interface
interface IsPerson {
	name: string;
	age: number;
	speak(a: string): void;
	spend(a: number): number;
}



const me: IsPerson = {
	name:'Fatma',
	age:24,
	speak(text:string):void{
		console.log(text)
	},
	spend(amount:number):number{
		console.log('I spent',amount)
		return amount
	},

}
console.log(me)

const greetPerson = (person:IsPerson) =>{
	console.log('hello',person.name)
}
greetPerson(me)



const invOne = new Invoice("Fatma", "Work on Fatma website", 200);
// const invTwo = new Invoice("Haya", "Work on Haya website", 400);
// // only objects created from the invoice class will be added to the array
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
// 	//  we only can access the public ones / readonly ones
// 	console.log(inv.client, inv.amount, inv.format());
// });
// let docOne: HasFormatter; // set it to an invoice
// let docTwo: HasFormatter; // set it to an payment

// docOne = new Invoice("Fatma", "Web work", 250);
// docTwo = new Payment("Haya", "pluming Work", 200);

// let docs: HasFormatter[] = [];

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);