import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { toast } from "sonner";
import { Link, useParams } from "react-router-dom";
import { useCreateOrderMutation } from '@/redux/features/order/order';
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const ProductDetails = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  const { productId } = useParams();
  const { data, error, isLoading, refetch } = useGetAllProductsQuery(undefined);

  console.log("Product ID from URL:", productId);
  console.log("Product data:", data);

  const products: TProduct[] = data?.data || [];
  const product = products.find(
    (prod: TProduct) => String(prod._id) === productId
  );

  // order start
  const [createOrder] =
    useCreateOrderMutation();
  const handleAddToOrder = async () => {
    const result = await createOrder({
      product: productId,
      orderQuantity: 1
     })
    if(result?.data?.status){
      toast.success("Order Successful!");
      refetch()
    }else{
      toast.error("Not Order Successful!");
    }
  };
  // order end
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;
  if (!product) return <div>Product not found</div>;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start my-10">
        <div>
          <img
            className="w-full h-[60vh] object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="px-4">
          <h3 className="text-xl font-bold py-5">{product.name}</h3>
          <h2 className="text-2xl text-[#E81938] font-bold border-b border-black mb-2">
            Price: ${product.price}
          </h2>
          <div className="text-gray-700 font-semibold pb-4">
            <p className="">Category : {product.category}</p>
            <p className="my-2">Available : {product.quantity}</p>
            <p className="">Brand : {product.brand}</p>
            <p className="mt-4">{product.description}</p>
          </div>
          {/* <Link to={`/checkout/${product?._id}`}> */}
            <Button onClick={handleAddToOrder}>Buy Now</Button>
          {/* </Link> */}
          {/* <Link to={`/checkout/${product?._id}`}>
            <Button>Buy Now</Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
