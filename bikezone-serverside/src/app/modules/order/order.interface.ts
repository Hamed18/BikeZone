import mongoose from "mongoose"
import { IUser } from "../user/user.interface"  //

export interface IOrder {
    user : mongoose.Schema.Types.ObjectId | IUser //
    product : mongoose.Schema.Types.ObjectId
    orderQuantity : number
    orderStatus: 'pending' | 'paid' | 'cancelled'
    totalPrice : number
    client_ip?: string  //
} 