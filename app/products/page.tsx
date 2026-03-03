const products = [
  {
    id: 1,
    name: "Lavender Grace",
    price: 499,
    image: "/prod1.jpg",
  },
  {
    id: 2,
    name: "Ruby Bloom",
    price: 599,
    image: "/prod2.jpg",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen px-10 py-10">

      <h2 className="text-3xl font-bold mb-10 text-[#5c4033]">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold">
              {product.name}
            </h3>

            <p className="text-[#e48a6a] font-bold">
              ₱{product.price}
            </p>

            <button className="mt-4 w-full bg-[#e48a6a] text-white py-2 rounded-full hover:bg-[#dd9775]">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}