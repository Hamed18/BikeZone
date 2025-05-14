/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
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
import { Loader } from "lucide-react";
import { productSchema } from "@/schemas/productForm.schema";
import { toast } from "sonner";
import {
  useUpdateProductMutation,
  useGetSingleProductQuery,
} from "@/redux/features/product/productApi";
import LoadAnimation from "@/components/menu/LoadAnimation";

type TProductFormData = z.infer<typeof productSchema>;

const UpdateProduct = ({
  setIsUpdateProduct,
  refetch,
  productId,
}: {
  setIsUpdateProduct: (open: boolean) => void;
  refetch: () => void;
  productId: string;
}) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const { data: product, isFetching: isProductFetching } =
    useGetSingleProductQuery(productId, {
      skip: !productId,
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<TProductFormData>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (product) {
      const p = product.data;
      setValue("name", p.name);
      setValue("brand", p.brand);
      setValue("imagesString", p.images?.join(", ") || "");
      setValue("price", p.price);
      setValue("category", p.category);
      setValue("description", p.description);
      setValue("quantity", p.quantity);
      setValue("inStock", p.inStock);
      setValue("rating", p.rating || 0);
      setValue("totalReviews", p.totalReviews || 0);
    }
  }, [product, setValue]);

  const inStockValue = watch("inStock");

  const onSubmit = async (data: TProductFormData) => {
    const toastId = toast.loading("Updating...");

    const updatedProduct = {
      ...data,
      images: data.imagesString
        ? data.imagesString.split(",").map((url) => url.trim())
        : [],
    };
    delete (updatedProduct as any).imagesString;

    try {
      await updateProduct({
        id: productId,
        data: updatedProduct,
      }).unwrap();

      toast.success("Product Updated!", { id: toastId });
      setIsUpdateProduct(false);
      refetch();
    } catch (error) {
      toast.error("Update Failed!", { id: toastId });
      console.error("Failed to update product:", error);
    }
  };

  if (isProductFetching) {
    return <LoadAnimation />;
  }

  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Update Product</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Input id="brand" {...register("brand")} />
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
              className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
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
          <Input id="imagesString" {...register("imagesString")} />
          {errors.imagesString && (
            <p className="text-sm text-red-500">
              {errors.imagesString.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description")} />
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
                Updating...
              </>
            ) : (
              "Update Product"
            )}
          </Button>
        </div>
      </form>
    </DialogContent>
  );
};

export default UpdateProduct;
