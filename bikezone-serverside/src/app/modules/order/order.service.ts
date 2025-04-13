import mongoose from "mongoose"
import { IOrder } from "./order.interface"
import Product from "../product/product.model"
import Order from "./order.model"
import User from "../user/user.model"  

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    const { product, orderQuantity, user: userId, client_ip } = payload

    const requiredProduct = await Product.findById(product)
    if (!requiredProduct) {
      throw new Error('Product not found')
    }

    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    const totalPrice = requiredProduct.price * orderQuantity

    payload.totalPrice = totalPrice
    payload.orderStatus = 'pending'

    if (requiredProduct.quantity < orderQuantity) {
      throw new Error('Not enough products available')
    }

    const order = await Order.create([payload], { session })

    const updateProduct = await Product.findByIdAndUpdate(
      order[0].product,
      { $inc: { quantity: -orderQuantity } },
      { new: true, session }
    )

    if (!updateProduct) {
      throw new Error('Failed to update product')
    }

    // ✅ Payment Integration 
    const shurjopayPayload = {
      amount: totalPrice,
      order_id: order[0]._id,
      currency: "BDT",
      customer_name: user.name,
      customer_email: user.email,
      customer_address: "N\A",
      customer_phone: "N\A",
      client_ip: client_ip || "127.0.0.1",
    }

    // send this payload to ShurjoPay API here

    await session.commitTransaction()
    await session.endSession()
    return order[0]
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}

const getOrder = async () => {
  const result = await Order.find()
  return result
}
const getSingleOrder = async (id: string) => {
  const result = await Order.findById(id)
  return result
}

const updateOrder = async (id: string, data: IOrder) => {
  const result = await Order.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id)
  return result
}

export const orderService = {
  createOrder,
  getOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
}
