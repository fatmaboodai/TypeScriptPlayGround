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
	let doc: HasFormatter;
	if (type.value === "invoice") {
		doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
	} else {
		doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
	}
	list.render(doc,type.value,'end')
});
