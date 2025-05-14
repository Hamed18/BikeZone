import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import { Loader } from "lucide-react";
import { productSchema } from "@/schemas/productForm.schema";
import { toast } from "sonner";

type TProductFormData = z.infer<typeof productSchema>;

const AddProduct = ({
  setIsDialogOpen,
  refetch,
}: {
  setIsDialogOpen: (open: boolean) => void;
  refetch: () => void;
}) => {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<TProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      brand: "",
      imagesString: "",
      price: 0,
      category: undefined,
      description: "",
      quantity: 0,
      rating: 0,
      totalReviews: 0,
      inStock: true,
    },
  });

  const inStockValue = watch("inStock");

  const onSubmit = async (data: TProductFormData) => {
    const toastId = toast.loading("Uploading...");

    // Convert comma-separated image URLs to array
    const images = data.imagesString
      ? data.imagesString.split(",").map((url) => url.trim())
      : [];

    const productData = {
      ...data,
      images,
    };
    delete productData.imagesString;

    try {
      const result = await addProduct(productData).unwrap();
      console.log("Product added successfully:", result);
      toast.success("Product Created!", { id: toastId });
      setIsDialogOpen(false);
      reset();
      refetch();
    } catch (error) {
      toast.error("Failed to create product!", { id: toastId });
      console.error("Failed to add product:", error);
    }
  };

  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Add New Product</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter product name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Input
              id="brand"
              {...register("brand")}
              placeholder="Enter brand name"
            />
            {errors.brand && (
              <p className="text-sm text-red-500">{errors.brand.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              {...register("category")}
              className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="">Select category</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="imagesString">
            Product Image URLs (comma-separated)
          </Label>
          <Input
            id="imagesString"
            {...register("imagesString")}
            placeholder="e.g. https://image1.jpg, https://image2.jpg"
          />
          {errors.imagesString && (
            <p className="text-sm text-red-500">
              {errors.imagesString.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Enter product description"
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="0"
              {...register("quantity", { valueAsNumber: true })}
            />
            {errors.quantity && (
              <p className="text-sm text-red-500">{errors.quantity.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <Input
              id="rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              {...register("rating", { valueAsNumber: true })}
            />
            {errors.rating && (
              <p className="text-sm text-red-500">{errors.rating.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalReviews">Total Reviews</Label>
          <Input
            id="totalReviews"
            type="number"
            min="0"
            {...register("totalReviews", { valueAsNumber: true })}
          />
          {errors.totalReviews && (
            <p className="text-sm text-red-500">
              {errors.totalReviews.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-end space-x-2 pt-4">
          <Switch
            id="inStock"
            checked={inStockValue}
            onCheckedChange={(checked) => setValue("inStock", checked)}
          />
          <Label htmlFor="inStock">
            {inStockValue ? "In Stock" : "Out of Stock"}
          </Label>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Product"
            )}
          </Button>
        </div>
      </form>
    </DialogContent>
  );
};

export default AddProduct;
