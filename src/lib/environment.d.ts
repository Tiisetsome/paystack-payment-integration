declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYSTACK_SECRET_KEY: string;
    }
  }
}

export {};
