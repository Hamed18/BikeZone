import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  product: TProduct;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="property-card group overflow-hidden rounded-md transition duration-300 relative border p-4 shadow-xl">
      <div className="relative md:aspect-[4/3] w-full">
        <img
          src={
            product.images?.[0] ||
            "https://media.istockphoto.com/id/1300331505/vector/living-room-interior-comfortable-sofa-bookcase-chair-and-house-plants-vector-flat-style.jpg"
          }
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div className="px-4">
        <div className="flex items-center text-sm mb-2">
          <Badge
            variant="outline"
            className="text-xs px-2 py-0.5 mt-4 text-white dark:text-black bg-primary"
          >
            {product.category}
          </Badge>
        </div>
        <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-1 text-sm text-yellow-500 mt-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.round(product.rating ?? 0) ? "#FACC15" : "none"}
              stroke="#FACC15"
            />
          ))}
          <span className="ml-2 text-muted-foreground">
            ({product.totalReviews})
          </span>
        </div>
        <div className="text-xl font-bold text-primary pb-4">
          ${product.price}
        </div>
      </div>
      <div className=" w-full gap-4 px-4">
        <Link to={`/product/${product._id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
