import paystackApi, { Object } from "paystack";

export abstract class Paystack {
  protected paystack: Object;
  constructor() {
    this.paystack = paystackApi(process.env.PAYSTACK_SECRET_KEY);
  }
}
