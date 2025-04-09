import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const demoProducts = [
  {
    _id: "67f67048df9d77cc552cb5c6",
    name: "Speedster Road Elite",
    brand: "Cannondale",
    price: 1299.99,
    category: "Road",
    description: "Lightweight carbon road bike with Shimano 105 groupset",
    quantity: 8,
    inStock: true,
    image:
      "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg",
  },
  {
    _id: "67f648c0a269b3fb99e8c80a",
    name: "Urban Commuter Pro",
    brand: "Specialized",
    image:
      "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg",
    price: 10000,
    category: "Mountain",
    description: "Premium urban commuter bike with advanced features",
    quantity: 12,
    inStock: true,
  },
  {
    _id: "67f60f8c5e37f9e2313d2130",
    name: "Sample City Commuter Bike",
    brand: "Raleigh",
    price: 2000,
    category: "Mountain",
    description: "Comfortable city bike with durable construction",
    quantity: 4,
    inStock: true,
    image:
      "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg",
  },
  {
    _id: "67f5e7665e37f9e2313d210f",
    name: "Trail Master XT",
    brand: "Specialized",
    image:
      "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg",
    price: 132143,
    category: "Mountain",
    description: "Professional grade mountain bike for extreme trails",
    quantity: 1,
    inStock: true,
  },
  {
    _id: "67f5e7315e37f9e2313d2109",
    name: "Trailblazer Mountain Bike",
    brand: "Trek",
    image:
      "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg",
    price: 899.99,
    category: "Mountain",
    description: "Full-suspension mountain bike with 29-inch wheels",
    quantity: 15,
    inStock: true,
  },
  {
    _id: "67f5e65a5e37f9e2313d2105",
    name: "City Commuter Bike",
    brand: "Raleigh",
    image:
      "https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg",
    price: 800,
    category: "Hybrid",
    description: "Versatile hybrid bike for daily commuting",
    quantity: 30,
    inStock: true,
  },
];

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Get unique brands and categories for filters
  const brands = [...new Set(demoProducts.map((product) => product.brand))];
  const categories = [
    ...new Set(demoProducts.map((product) => product.category)),
  ];

  // Filter products based on search and filters
  const filteredProducts = demoProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesStock = !inStockOnly || product.inStock;

    return (
      matchesSearch &&
      matchesPrice &&
      matchesBrand &&
      matchesCategory &&
      matchesStock
    );
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="py-4 max-w-7xl mx-auto px-4">
      <h3 className="text-2xl font-bold">Products</h3>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 my-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, brand, or category..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Price Range</h4>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                />
                <span>-</span>
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Brands</h4>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <DropdownMenuCheckboxItem
                    key={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  >
                    {brand}
                  </DropdownMenuCheckboxItem>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </div>
            </div>

            <div>
              <DropdownMenuCheckboxItem
                checked={inStockOnly}
                onCheckedChange={() => setInStockOnly(!inStockOnly)}
              >
                In Stock Only
              </DropdownMenuCheckboxItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <Card key={product._id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <img
                src={product.image || "https://via.placeholder.com/300x200"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <div className="mt-2 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">Brand:</span> {product.brand}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Price:</span> $
                  {product.price.toFixed(2)}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Status:</span>
                  <span
                    className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                      product.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {product.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link to={`/product/${product?._id}`}>
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No products match your search criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
