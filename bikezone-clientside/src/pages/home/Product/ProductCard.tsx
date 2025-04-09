import { BiDollar } from "react-icons/bi";
export const products = [
  {
    name: "TrailBlazer X100",
    brand: "Trek",
    image: "https://i.ibb.co.com/qMCSFgLC/bike.jpg",
    price: 1299.99,
    category: "Mountain",
    description:
      "A rugged mountain bike designed for all terrains and adventures.",
    quantity: 10,
  },
  {
    name: "Speedster Pro",
    brand: "Giant",
    image: "https://i.ibb.co.com/qMCSFgLC/bike.jpg",
    price: 999.99,
    category: "Road",
    description: "Lightweight road bike for speed enthusiasts and racers.",
    quantity: 8,
  },
  {
    name: "CityCruise 3000",
    brand: "Specialized",
    image: "https://i.ibb.co.com/qMCSFgLC/bike.jpg",
    price: 749.99,
    category: "Hybrid",
    description: "Perfect hybrid bike for city commuting and light trails.",
    quantity: 15,
  },
  {
    name: "VoltRide E500",
    brand: "Cannondale",
    image: "https://i.ibb.co.com/qMCSFgLC/bike.jpg",
    price: 1799.99,
    category: "Electric",
    description: "Electric bike with long battery life and powerful motor.",
    quantity: 5,
  },
  {
    name: "HillMaster Pro",
    brand: "Scott",
    image: "https://i.ibb.co.com/0pgh63tb/bike.jpg",
    price: 1399.99,
    category: "Mountain",
    description:
      "Full suspension bike built for uphill and downhill thrill rides.",
    quantity: 4,
  },
  {
    name: "EcoRide S1",
    brand: "RadPower",
    image: "https://i.ibb.co.com/0pgh63tb/bike.jpg",
    price: 1199.99,
    category: "Electric",
    description: "Eco-friendly electric commuter bike for everyday rides.",
    quantity: 12,
  },
  {
    name: "UrbanFlex 700",
    brand: "Bianchi",
    image: "https://i.ibb.co.com/qMCSFgLC/bike.jpg",
    price: 899.99,
    category: "Hybrid",
    description:
      "Stylish hybrid bike built for comfort and performance in city rides.",
    quantity: 6,
  },
];
const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2">
      {products.slice(0, 6).map((product, index) => (
        <div className="shadow-xl" key={index}>
          <div className=" h-40 flex justify-center items-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full object-contain"
            />
          </div>

          <h3 className="font-bold text-center text-ellipsis overflow-hidden  px-2">
            {product.name}
          </h3>
          <p className="flex justify-center items-center font-semibold text-[#E81938] px-2">
            {product.price}
            <BiDollar />
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
