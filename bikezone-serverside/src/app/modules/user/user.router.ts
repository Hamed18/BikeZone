import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { createCustomerValidationSchema } from './../customer/customer.validation';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-customer',
  auth(USER_ROLE.admin),
  validateRequest(createCustomerValidationSchema),
  UserControllers.createCustomer,
);

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
