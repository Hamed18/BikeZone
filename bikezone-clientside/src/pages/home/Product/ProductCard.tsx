import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { BiDollar } from "react-icons/bi";

const ProductCard = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  if (isLoading) return <p>Loading...</p>;

  console.log(data?.data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2">
      {data?.data?.slice(0, 6).map((product: TProduct, index: string) => (
        <div className="max-w-xs min-w-[200px] shadow-xl mx-auto" key={index}>
          <div className=" h-40 flex justify-center items-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full object-contain"
            />
          </div>

          <h3 className="font-bold line-clamp-1 text-center text-ellipsis overflow-hidden  px-2">
            {product.name}
          </h3>
          <p className="flex justify-center items-center font-semibold text-[#E81938] px-2">
            {product.price}
            <BiDollar />
          </p>
          <button className="bg-[#E81938] text-white">View</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
