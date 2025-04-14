import mongoose from "mongoose"
// import { IOrder } from "./order.interface"
import Product from "../product/product.model"
import Order from "./order.model"
import User from "../user/user.model"
import httpStatus from "http-status";
import { orderUtils } from "./order.utils";
import { IUser } from "../user/user.interface"
import AppError from "../../errors/AppError"
interface IPament {
  orderId: string,
  user: string,
}
// const createOrder = async (payload: IOrder): Promise<IOrder> => {
//   const result = await Order.create(payload);
//   return result;
// };

// 
const createOrder = async (
  user: IUser,
  payload: { product: string; orderQuantity: number},
  client_ip: string
) => {
 console.log(payload);
  const requiredProduct= await Product.findById(payload.product)
  if(!requiredProduct){
    throw new Error('Product not found')
  }
  const totalPrice = requiredProduct.price * payload?.orderQuantity
  
console.log(totalPrice);
  let order = await Order.create({
    user,
    product: requiredProduct._id,
    totalPrice,
  });

  // payment integration
  const shurjopayPayload = {
    amount: totalPrice,
    order_id: order._id,
    currency: "BDT",
    customer_name: user.name,
    customer_address: 'N/A',
    customer_email: user.email,
    customer_phone: 'N/A',
    customer_city: 'N/A',
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);
  console.log(payment);

  if (payment?.transactionStatus) {
    order = await order.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;
};

const getOrder = async () => {
    const result = await Order.find()
    return result
  }
  const getSingleOrder = async (id: string) => {
    const result = await Order.findById(id)
    return result
  }
  
  const paymentOne = async (payload: IPament, client_ip: string) => {
   let order = await getSingleOrder(payload?.orderId)
   const userInfo = await User.findById(payload?.user);
  // payment integration
  const shurjopayPayload = {
    amount: order?.totalPrice,
    order_id: order?._id,
    currency: "BDT",
    customer_name: userInfo?.name,
    // customer_address: userInfo?.address,
    customer_email: userInfo?.email,
    // customer_phone: user.phone,
    // customer_city: user.city,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

  if (payment?.transactionStatus) {
    order = await order?.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;
    // const result = await Order.findByIdAndUpdate(id, data, {
    //   new: true,
    // })
    // return result
  }
  
  const deleteOrder = async (id: string) => {
    const result = await Order.findByIdAndDelete(id)
    return result
  }

// Payment Integration
/*
const shurjopayPayload = {
  amount: totalPrice,
  order_id: order._id,
  currency: "BDT",
  customer_name: user.name,
  customer_address: user.address,
  customer_email: user.email,
  customer_phone: user.phone,
  customer_city: user.city,
 // client_ip,
};   
*/

const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);
  console.log(verifyPayment.length);
  if (verifiedPayment.length) {
    await Order.findOneAndUpdate(
      {
        "transaction.id": order_id,
      },
      {
        "transaction.bank_status": verifiedPayment[0].bank_status,
        "transaction.sp_code": verifiedPayment[0].sp_code,
        "transaction.sp_message": verifiedPayment[0].sp_message,
        "transaction.transactionStatus": verifiedPayment[0].transaction_status,
        "transaction.method": verifiedPayment[0].method,
        "transaction.date_time": verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status == "Success"
            ? "Paid"
            : verifiedPayment[0].bank_status == "Failed"
            ? "Pending"
            : verifiedPayment[0].bank_status == "Cancel"
            ? "Cancelled"
            : "",
      }
    );
  }

  return verifiedPayment;
};

export const orderService={
    createOrder,
    getOrder,
    getSingleOrder,
    paymentOne,
    deleteOrder,
    verifyPayment
}