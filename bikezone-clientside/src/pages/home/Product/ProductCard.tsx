import LoadAnimation from "@/components/menu/LoadAnimation";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <LoadAnimation />;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.data?.slice(0, 3).map((product: TProduct) => (
          <div className=" max-w-md w-full shadow-md" key={product?._id}>
            <div className="relative">
              <img
                alt="Banner Profile"
                src={product.image}
                className="w-full rounded-t-2xl h-52"
              />

              <div className="absolute bg-black text-base text-white flex justify-center items-center bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-2 font-extrabold border-white">
                ${product.price}
              </div>
            </div>

            <div className="p-5">
              <p className="text-gray-400 text-base mt-5 ">
                In Stock :
                <span className=" text-black font-bold">
                  {" "}
                  {product.quantity}
                </span>
              </p>
              <Link to={`/product/${product._id}`}>
                <p className="text-2xl font-medium mt-3 hover:underline">
                  {product.name}
                </p>
              </Link>

              <div className="flex justify-start gap-5 items-center py-2 font-bold text-gray-700">
                <li className="list-inside  list-disc  text-base">
                  Brand : {product.brand}
                </li>
                <p className=" text-base">Category : {product.category}</p>
              </div>
              <Link to={`/product/${product?._id}`}>
                <Button
                  style={{
                    backgroundColor: "#0000",
                    color: "black",
                    border: "2px solid black",
                  }}
                >
                  <Info />
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mx-auto py-10">
        <Link to="/products/">
          <Button>View All</Button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
