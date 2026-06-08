function FeaturedDishes() {
  const dishes = [
    {
      name: "Margherita Pizza",
      description: "Fresh mozzarella, basil, and tomato sauce.",
      price: "$12",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      name: "Classic Burger",
      description: "Juicy beef patty with fresh vegetables.",
      price: "$10",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Creamy Pasta",
      description: "Rich Alfredo sauce with parmesan cheese.",
      price: "$14",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },
  ];

  return (
    <section id="menu" className="py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Dishes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {dish.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {dish.description}
                </p>

                <p className="text-orange-600 font-bold text-xl">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishes;