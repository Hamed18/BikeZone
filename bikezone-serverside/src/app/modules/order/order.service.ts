import mongoose from "mongoose"
import { IOrder } from "./order.interface"
import Product from "../product/product.model"
import Order from "./order.model"



const createOrder = async(payload: IOrder): Promise<IOrder>=>{
  const session = await mongoose.startSession()

  session.startTransaction()
    try{
      const {product, orderQuantity} = payload
      const requiredProduct= await Product.findById(product)

      if(!requiredProduct){
        throw new Error('Product not found')
      }

      const totalPrice = requiredProduct.price * orderQuantity

      payload.totalPrice = totalPrice
      payload.orderStatus = 'pending'

      if(requiredProduct.availableProduct < orderQuantity){
        throw new Error('Not enough products available')
      }

      const order = await Order.create([payload], {session})

      const updateProduct = await Product.findByIdAndUpdate(order[0].product, {
        $inc: { availableProduct: -orderQuantity}}, {new: true, session})
  if(!updateProduct){
    throw new Error('Failed to update product')
  }

  await session.commitTransaction()
  await session.endSession()
  return order[0]
    } catch(error){
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
export const orderService={
    createOrder,
    getOrder,
    getSingleOrder,
    updateOrder,
    deleteOrder,
}