// Build a BankAccount class using ES2022 private fields so the balance can never be directly accessed or corrupted from outside.

// Requirements:

// Private field #balance starting at 0
// Private field #transactionHistory as an array
// deposit(amount) — adds to balance, records transaction
// withdraw(amount) — deducts if sufficient funds, else throws Error
// getBalance() — returns current balance
// getHistory() — returns a copy of transaction history

class BankAccount{
    #balance;
    #transactionHistory = [];
    constructor(name,balance){
        this.name = name;
        this.#balance = balance || 0;
    }
    deposit(amount){
        if(amount<=0) throw new Error("Enter valid amount");
        this.#balance +=amount;
        this.#transactionHistory.push(amount);
    }
    withdraw(amount){
        if(amount>this.#balance || amount<=0) throw new Error("This amount can't be withdraw");
        this.#balance-=amount;
        this.#transactionHistory.push(-amount);
    }
    get balance(){
        return this.#balance;
    }
    get history(){
        return [...this.#transactionHistory];
    }
}

const myAccount = new BankAccount("Harsh");

myAccount.deposit(200);
myAccount.withdraw(100);
myAccount.balance;
console.log(myAccount.history);
console.log(myAccount.history);