import { Router } from "express";
import { productController } from "./product.controller";
import { ProductValidation } from "./product.validation";
import validateRequest from "../../middleeatres/validateRequest";

const productRouter = Router();
productRouter.post(
  "/products",
  validateRequest(ProductValidation.productValidationSchema),
  productController.createProduct
);

productRouter.get("/products", productController.getProduct);
productRouter.get("/products/:productId", productController.getSingleProduct);
productRouter.put("/products/:productId", productController.updateProduct);
productRouter.delete("/products/:productId", productController.deleteProduct);

export default productRouter;
