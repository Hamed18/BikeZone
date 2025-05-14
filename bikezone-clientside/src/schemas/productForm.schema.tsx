// import { z } from "zod";
// export const productSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   brand: z.string().min(2, "Brand must be at least 2 characters"),
//   // image: z.string().min(2, "Please paste image url"),
//   imagesString: z.string().optional(),
//   category: z.enum(["Mountain", "Road", "Hybrid", "Electric"]),
//   description: z.string().min(10, "Description must be at least 10 characters"),
//   quantity: z.number().min(0, "Quantity must be positive"),
//   totalReviews: z.number().min(0, "Quantity must be positive"),
//   rating: z.number().min(0, "Quantity must be positive"),

//   inStock: z.boolean(),
// });

import { z } from "zod";
export const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  brand: z.string().min(2, "Brand must be at least 2 characters"),
  imagesString: z.string().optional(), // for comma-separated URLs
  price: z.number().min(0, "Price must be positive"),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  quantity: z.number().min(0, "Quantity must be positive"),
  totalReviews: z.number().min(0, "Total reviews must be positive"),
  rating: z.number().min(0, "Rating must be positive"),
  inStock: z.boolean(),
});
