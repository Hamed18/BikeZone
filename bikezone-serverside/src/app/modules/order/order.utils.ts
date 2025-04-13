import Shurjopay, { PaymentResponse } from "shurjopay";
import config from "../../config";

// Initialize Shurjopay instance
const shurjopay = new Shurjopay();

shurjopay.config(
  config.sp.sp_endpoint!,
  config.sp.sp_username!,
  config.sp.sp_password!,
  config.sp.sp_prefix!,
  config.sp.sp_return_url!
);

// Wrap the async payment call
const makePaymentAsync = async (
  paymentPayload: any
): Promise<PaymentResponse> => {
  return new Promise((resolve, reject) => {
    shurjopay.makePayment(
      paymentPayload,
      (response: PaymentResponse) => resolve(response),
      (error: any) => reject(error)
    );
  });
};

export const orderUtils = {
  makePaymentAsync,
};
