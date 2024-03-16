import { PaystackCustomerType, UpdateCustomer } from "../../../lib/types";
import { Paystack } from "../base/paystack";

export class PaystackCustomer extends Paystack {
  constructor() {
    super();
  }

  public async createCustomer(customer: PaystackCustomerType) {
    const customerExists = await this.existingCustomer(customer.email);
    if (customerExists === true) {
      //TODO: Handle errors better
      console.log("Customer with the specified email already exists");
      return false;
    }
    return await this.paystack.customer.create(customer);
  }

  public async getCustomer(email: string) {
    return await this.paystack.customer.get(email);
  }

  public async getCustomers() {
    const customers = await this.paystack.customer.list();
    return customers.data;
  }

  public async updateCustomer(email: string, data: UpdateCustomer) {
    const existingCustomer = await this.existingCustomer(email);

    if (!existingCustomer) {
      console.log("Customer does not exist!");
      return false;
    }

    const updateCustomer = await this.paystack.customer.update(email, data);
    return updateCustomer.data;
  }

  private async existingCustomer(email: string) {
    const customer = await this.getCustomer(email);
    return customer.status;
  }
}
