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
import { Star } from "lucide-react";

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

  if (isLoading || userLoading) {
    return <LoadAnimation />;
  }

  if (isError) {
    return (
      <div className="p-4 md:p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {(error as ApiError)?.data?.message || "Failed to load product"}
          </span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-4 md:p-6">
        <div className="flex flex-col items-center justify-center gap-4 h-[calc(100vh-200px)]">
          <h3 className="text-xl font-semibold">No product found</h3>
        </div>
      </div>
    );
  }

  const renderActionButton = () => {
    if (userData?.data?.isActive === false) {
      return <Button className="bg-red-500">You are blocked</Button>;
    }

    if (!product.inStock || product?.quantity <= 0) {
      return <Button className="bg-gray-500">Out of stock</Button>;
    }

    if (currentData?.role === "admin") {
      return <Button className="bg-red-500">Admin Can't Buy</Button>;
    }

    return (
      <Link to={`/checkout/${product._id}`}>
        <Button className="bg-green-600 hover:bg-green-700 transition-colors duration-200">Buy Now</Button>
      </Link>
    );
  };

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "Jane Doe",
      rating: 5,
      comment: "Excellent product quality and fast delivery! Will buy again.",
      date: "2 days ago",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "John Smith",
      rating: 4,
      comment: "Great value for money. The packaging was secure and professional.",
      date: "1 week ago",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Ayesha Rahman",
      rating: 5,
      comment: "I'm very satisfied with this product. It's exactly as described.",
      date: "3 weeks ago",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Delivery information data
  const deliveryInfo = [
    {
      title: "Fast Delivery",
      icon: "🚚",
      description: "3-5 business days delivery"
    },
    {
      title: "Free Shipping",
      icon: "📦",
      description: "Free on orders over $50"
    },
    {
      title: "Easy Returns",
      icon: "🔄",
      description: "30-day return policy"
    },
    {
      title: "Secure Payment",
      icon: "🔒",
      description: "100% secure checkout"
    }
  ];

  return (
    <div>
      <SectionBanner heading="Product Details" subHeading="Product Details" />
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid md:grid-cols-2 md:gap-10 gap-5 items-start my-10">
          <div>
            <img
              className="w-full md:h-[60vh] object-contain rounded-2xl"
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
            {renderActionButton()}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < review.rating ? "#F59E0B" : "#E5E7EB"} 
                          className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{review.comment}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>
          
          {/* Review Summary */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">Overall Rating</h4>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold">4.8</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="#F59E0B" className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mt-1">Based on 124 reviews</p>
              </div>
              {/* <Button variant="outline" className="mt-4 md:mt-0 border-blue-500 text-blue-500 hover:bg-blue-50">
                Write a Review
              </Button> */}
            </div>
          </div>
        </div>

        {/* Delivery Information Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Delivery & Services</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {deliveryInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Detailed Delivery Info */}
          <div className="my-10 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="font-bold text-xl mb-4">Shipping Details</h4>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Delivery Time</span>
                <span className="font-medium">3-5 Business Days</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Shipping Cost</span>
                <span className="font-medium">Free over $50</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Courier Partners</span>
                <span className="font-medium">DHL, FedEx, Local Services</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">Cash on Delivery</span>
                <span className="font-medium">Available</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600">Order Tracking</span>
                <span className="font-medium">Via Account Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;