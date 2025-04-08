import mongoose from "mongoose"

export interface IOrder {
    user : mongoose.Schema.Types.ObjectId
    product : mongoose.Schema.Types.ObjectId
    orderQuantity : number
    orderStatus: 'pending' | 'paid' | 'cancelled'
    totalPrice : number
} 