import { Customer, TransactionStatus } from "../../../lib/types";
import { removeSpecialCharacters } from "../../../utils/helpers";
import { Paystack } from "../base/paystack";
import uuidv4 from "uuid.v4";

export class Transaction extends Paystack {
  private customer: Customer;

  constructor(customer: Customer) {
    super();
    this.customer = customer;
  }

  public async initializeTransaction() {
    const transaction = await this.paystack.transaction.initialize({
      email: this.customer.email,
      amount: 300,
      name: "product test",
      reference: removeSpecialCharacters(uuidv4()),
    });

    if (transaction.status === false) {
      console.log(
        "Error: something went wrong with your transaction ",
        transaction.message
      );
      return false;
    }

    return transaction.data;
  }

  public async verifyTransaction(reference: string) {
    const transaction = await this.paystack.transaction.verify(reference);

    if (transaction.status === false) {
      console.log("Error: transaction not verified ", transaction.message);
      return false;
    }

    //HINT: You can update your db from here if need be

    return transaction.data;
  }

  public async customerTransactions() {
    const transactions = await this.paystack.transaction.list();

    if (transactions.status === false) {
      console.log("Error: Something went wrong");
      return false;
    }

    return transactions.data.filter(
      (transaction) =>
        transaction.customer.email === this.customer.email &&
        transaction.status === TransactionStatus.Success
    );
  }

  public async customerTransaction(transactionId: number) {
    const transaction = await this.paystack.transaction.get(transactionId);

    if (transaction.status === false) {
      console.log("Error: Transaction not found");
      return false;
    }

    return transaction.data;
  }

  public async transactionTotals() {
    const totalTransactions = await this.paystack.transaction.totals();

    if (totalTransactions.status === false) {
      console.log("Error: Transactions not found");
    }
    return totalTransactions.data;
  }
}
