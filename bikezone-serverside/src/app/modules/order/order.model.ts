import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";


const orderSchema = new Schema<IOrder>({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true
    },
    orderQuantity:{
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    },
    orderStatus:{
        type: String,
        enum: ['pending', 'paid', 'cancelled'],
        default: 'pending'
    },
}, {
    timestamps: true
})

const Order = model<IOrder>('order', orderSchema)

export default Order


