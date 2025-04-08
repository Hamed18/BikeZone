import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter = Router()

orderRouter.post('/create-order', orderController.createOrder)
orderRouter.get('/', orderController.getOrder)
orderRouter.get('/:orderId', orderController.getSingleOrder)
orderRouter.put('/:orderId', orderController.updateOrder)
orderRouter.delete('/:orderId', orderController.deleteOrder)

export default orderRouter