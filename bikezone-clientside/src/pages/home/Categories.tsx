import SectionTitle from "@/components/SectionTitle/SectionTitle";
import LoadAnimation from "@/components/menu/LoadAnimation";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import Marquee from "react-fast-marquee";

const Categories = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <LoadAnimation />;
  }

  const uniqueCategoriesMap = new Map<string, TProduct>();
  data?.data?.forEach((product: TProduct) => {
    if (!uniqueCategoriesMap.has(product.category)) {
      uniqueCategoriesMap.set(product.category, product);
    }
  });

  const uniqueCategories = Array.from(uniqueCategoriesMap.values());

  return (
    <>
      <SectionTitle subtitle="Categories" title="Explore Top Categories" />
      <Marquee speed={60} pauseOnHover>
        <div className="flex gap-6">
          {uniqueCategories.map((cat, i) => (
            <div
              key={i}
              className="min-w-[200px] overflow-hidden transition  rounded shadow"
            >
              <div className="relative h-36 w-full">
                <img
                  src={cat.images[0] || "/fallback.jpg"}
                  alt={cat.category}
                  className="object-cover w-full h-full rounded-t"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-primary">
                  {cat.category}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default Categories;
