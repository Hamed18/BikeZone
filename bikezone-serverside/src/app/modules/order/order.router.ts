import { Router } from "express";
import { orderController } from "./order.controller";
import auth from "../../middleeatres/auth";
import { USER_ROLE } from "../user/user.constants";

const orderRouter = Router()

orderRouter.get("/verify", auth(USER_ROLE.customer), orderController.verifyPayment);
orderRouter.post('/create-order', orderController.createOrder)
orderRouter.get('/', orderController.getOrder)
orderRouter.get('/:orderId', orderController.getSingleOrder)
orderRouter.put('/:orderId', orderController.updateOrder)
orderRouter.delete('/:orderId', orderController.deleteOrder)

export default orderRouter