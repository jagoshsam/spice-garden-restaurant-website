function About() {
  return (
    <section id="about" className="py-24 px-10 bg-orange-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            alt="Restaurant"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <p className="text-orange-600 font-semibold mb-3">
            ABOUT US
          </p>

          <h2
           className="text-5xl font-bold text-gray-800 mb-6"
           style={{ fontFamily: "Playfair Display" }}
        >
            A Place Where Food Meets Passion
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            At Spice Garden, we believe every meal should be
            memorable. Our chefs carefully craft every dish
            using fresh ingredients and authentic recipes.
          </p>

          <p className="text-gray-600 leading-8">
            From family dinners to special celebrations,
            we provide an unforgettable dining experience
            for every guest.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;