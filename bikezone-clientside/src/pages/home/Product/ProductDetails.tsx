import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);

  console.log("Product ID from URL:", productId);
  console.log("Product data:", data);

  const products: TProduct[] = data?.data || [];
  const product = products.find(
    (prod: TProduct) => String(prod._id) === productId
  );

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
          <div className="text-gray-700 font-semibold">
            <p className="">Category : {product.category}</p>
            <p className="my-2">Available : {product.quantity}</p>
            <p className="">Brand : {product.brand}</p>
            <p className="mt-4">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
