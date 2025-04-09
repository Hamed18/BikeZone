
const Marquee = () => {
  return (
    <div className="bg-blue-100 py-3 border-y border-blue-300 overflow-hidden font-sans">
      <div
        className="whitespace-nowrap flex gap-12 text-base md:text-lg font-semibold text-blue-800 animate-marquee px-4"
        style={{
          animation: "marquee 22s linear infinite",
        }}
      >
        <span>🚴‍♂️ Summer Sale! Up to 40% off on mountain bikes!</span>
        <span>🆕 Explore our 2025 Eco Commuter Collection now in stock!</span>
        <span>🎁 Free helmet with every new bike this week!</span>
        <span>🚨 Limited stock – grab your dream ride today!</span>
        <span>🚚 Fast & Free Shipping on orders over $200!</span>
      </div>

      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
