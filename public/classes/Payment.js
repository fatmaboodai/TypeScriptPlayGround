// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // method
    format() {
        return `${this.recipient} is owed ${this.amount}KD for ${this.details}`;
    }
}
