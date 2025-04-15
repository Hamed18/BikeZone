import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { orderService } from "./order.service";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const payload = req.body;
  const result = await orderService.createOrder(user, payload, req.ip!);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Order created successfully",
    data: result,
  });
});

const getOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await orderService.getOrder();

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Order got successfully",
    data: result,
  });
});

const getUserOrder = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user;

  const result = await orderService.getUserOrder(userId);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "User order get successfully",
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const orderId = req.params.orderId;

  const result = await orderService.getSingleOrder(orderId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "User got successfully",
    data: result,
  });
});

const deleteOrder = catchAsync(async (req: Request, res: Response) => {
  const orderId = req.params.orderId;
  await orderService.deleteOrder(orderId);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "User deleted successfully",
    data: {},
  });
});

const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(req.query.order_id as string);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    message: "Order verified successfully",
    data: order,
  });
});

export const orderController = {
  createOrder,
  getOrder,
  getSingleOrder,
  verifyPayment,
  deleteOrder,
  getUserOrder,
};
