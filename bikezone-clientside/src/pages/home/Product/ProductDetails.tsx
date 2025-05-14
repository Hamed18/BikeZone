import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Link, useParams } from "react-router-dom";
import SectionBanner from "@/components/SectionBanner/SectionBanner";
import LoadAnimation from "@/components/menu/LoadAnimation";
import { ApiError } from "@/types/global.type";
import { Button } from "@/components/ui/button";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useGeSingletUserQuery } from "@/redux/features/user/userApi";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../../../index.css";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Check, Star, X } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const currentData = useAppSelector(selectCurrentUser);
  const { data: userData, isLoading: userLoading } = useGeSingletUserQuery(
    currentData?._id
  );
  const { productId } = useParams();
  const { data, error, isLoading, isError } = useGetAllProductsQuery(undefined);

  const products: TProduct[] = data?.data || [];
  const product = products.find(
    (prod: TProduct) => String(prod._id) === productId
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  if (isLoading || userLoading) return <LoadAnimation />;
  if (isError) return <div>Error: {(error as ApiError)?.data?.message}</div>;
  if (!product) return <div>No product found</div>;
  // related product
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p._id !== product._id
  );
  return (
    <div>
      <SectionBanner heading="Product Details" subHeading="Product Details" />
      <div className="max-w-7xl mx-auto px-2 my-12">
        <div className="grid md:grid-cols-2 md:gap-10 gap-5 items-start">
          {/* Embla Image Carousel */}
          <div>
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {product.images?.map((img, i) => (
                  <div className="min-w-0 flex-[0_0_100%]" key={i}>
                    <img
                      src={img}
                      className="w-full h-[60vh] object-contain"
                      alt={`Product ${i}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Dot Navigation */}
            <div className="flex justify-center  gap-2">
              {product.images?.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1 w-1 rounded-full ${
                    index === selectedIndex ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}

          <div className="space-y-6">
            <div className="border-b border-primary pb-6">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <div className="text-white dark:text-black">
                    <Badge>{product.category}</Badge>
                  </div>
                </div>
                <span className="flex items-center text-primary font-bold mt-2">
                  {product.brand}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">
                ${product.price.toLocaleString()}
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium">Availability:</span>
                {product.inStock ? (
                  <span className="flex items-center text-primary">
                    <Check className="w-4 h-4 mr-1" /> Available
                  </span>
                ) : (
                  <span className="flex items-center text-red-600">
                    <X className="w-4 h-4 mr-1" /> Out of stock
                  </span>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="mb-3 flex gap-10 text-muted-foreground">
              <p>
                Total Reviews:{" "}
                <span className="text-foreground font-medium">
                  {product.totalReviews}
                </span>
              </p>

              <p className="flex items-center gap-1">
                Ratings:{" "}
                <span className="text-foreground font-medium flex items-center gap-1">
                  {product.rating}
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </span>
              </p>
            </div>
            <p className="text-muted-foreground">
              Quantity:{" "}
              <span className="text-foreground font-medium">
                {product.quantity}
              </span>
            </p>
            {userData?.data?.isActive === false ? (
              <Button style={{ backgroundColor: "red" }}>
                You are blocked
              </Button>
            ) : product.inStock && product?.quantity > 0 ? (
              currentData?.role === "admin" ? (
                <Button style={{ backgroundColor: "red" }}>
                  Admin Can't Buy
                </Button>
              ) : (
                <Link to={`/checkout/${product._id}`}>
                  <Button>Buy Now</Button>
                </Link>
              )
            ) : (
              <Button>Out of stock</Button>
            )}
          </div>
        </div>
      </div>
      {/* Related */}
      <div className="max-w-7xl mx-auto px-2 pb-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>

        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
