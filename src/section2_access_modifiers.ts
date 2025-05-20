// TASK:
// Create a class `Account` with:
// - public `owner`: string
// - private `balance`: number
// - readonly `id`: number
// Add a method `deposit(amount: number)` to increase the balance

// Your code here 👇
class Account {
  public owner: string;
  private balance: number;
  readonly id: number;

  constructor(owner: string, id: number, initialBalance: number) {
    this.owner = owner;
    this.id = id;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}
