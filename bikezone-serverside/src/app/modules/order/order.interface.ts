import mongoose from "mongoose";
import { IUser } from "../user/user.interface"; //

export interface IOrder {
  user: mongoose.Schema.Types.ObjectId | IUser; //
  product: mongoose.Schema.Types.ObjectId;
  orderQuantity: number;
  orderStatus: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
  totalPrice: number;
  client_ip?: string; //
  transaction: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
