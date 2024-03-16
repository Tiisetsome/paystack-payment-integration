import dotenv from "dotenv";
import { PaystackCustomer } from "./controller/paystack/customer/customer";
import { customerData } from "./lib/data";
import { Transaction } from "./controller/paystack/transaction/transaction";
dotenv.config();

// 1 Create customer
const paystackCustomer = new PaystackCustomer();

console.log("Retrieving customer ...");
const customer = await paystackCustomer.getCustomer(customerData.email);

// 2 Initialize transaction
const transaction = new Transaction(customer.data);

// console.log("Initializing transaction ...");
// const initializeCustomerTransaction = await transaction.initializeTransaction();

// 3 Verify transaction
// console.log("Verfiying customer transaction ...");
// const customerTransactionVerified = await transaction.verifyTransaction(
//   "70cdd6a5e84a47cf9605ee3bf8e6d87b"
// );

// 4 Get customer transactions
// console.log("Getting customer transactions ...");
// const customerTransactions = await transaction.customerTransactions();
// console.log(customerTransactions);

// 5 Get a specific tansaction
// console.log("Getting a specific transaction ...");
// const singleTransaction = await transaction.customerTransaction(3635982596);
// console.log(singleTransaction);

// 5 Get a specific tansaction
console.log("Getting total transactions ...");
const totalTransactions = await transaction.transactionTotals();
console.log(totalTransactions);
