export interface PaystackCustomerType {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  metadata?: any;
}
export interface UpdateCustomer {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface Customer {
  transactions: any[];
  subscriptions: any[];
  authorizations: any[];
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  metadata: any;
  domain: string;
  customer_code: string;
  risk_action: string;
  id: number;
  integration: number;
  createdAt: string;
  updatedAt: string;
  created_at: string;
  updated_at: string;
  total_transactions: number;
  total_transaction_value: any[];
  dedicated_account: any | null;
  dedicated_accounts: any[];
  identified: boolean;
  identifications: any | null;
}

export enum TransactionStatus {
  Success = "success",
  Abandoned = "abounded",
}
