function Testimonials() {
  const reviews = [
    {
      name: "John Smith",
      review:
        "Amazing food and wonderful atmosphere. Highly recommended!",
    },
    {
      name: "Sarah Johnson",
      review:
        "The best dining experience I've had in years. Excellent service.",
    },
    {
      name: "Michael Brown",
      review:
        "Fresh ingredients, delicious meals, and friendly staff.",
    },
  ];

  return (
    <section className="py-24 px-10 bg-orange-50">
      <div className="max-w-7xl mx-auto">

        <h2
         className="text-5xl font-bold text-center mb-4"
         style={{ fontFamily: "Playfair Display" }}
        >
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by food lovers across the city.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <p className="text-gray-600 mb-6">
                "{review.review}"
              </p>

              <h3 className="font-bold text-orange-600">
                {review.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;