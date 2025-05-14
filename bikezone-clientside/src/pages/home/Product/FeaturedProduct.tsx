import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProduct = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }
  console.log(products);

  return (
    <div className="max-w-7xl mx-auto px-2">
      <SectionTitle subtitle="Our Products" title="Top Selling Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.data.slice(0, 4).map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="grid place-content-center mt-10">
        <Link to="/products">
          <Button>
            View All
            <span className="ml-2">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
