function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center px-10"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h1
           className="text-6xl font-bold text-gray-800 leading-tight mb-6"
           style={{ fontFamily: "Playfair Display" }}
        >
            Experience the Taste
            <br />
            of Tradition
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Fresh ingredients, authentic recipes,
            and unforgettable dining experiences.
          </p>

          <div className="flex gap-4">

            <a
              href="#menu"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300"
            >
              View Menu
            </a>

            <a
              href="#contact"
              className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-600 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Reserve Table
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Food"
            className="rounded-3xl shadow-xl w-[600px] hover:scale-105 transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;