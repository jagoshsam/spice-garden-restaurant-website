function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  ];

  return (
    <section id="gallery" className="py-24 px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2
         className="text-5xl font-bold text-center mb-4"
        style={{ fontFamily: "Playfair Display" }}
       >
          Our Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A glimpse of our delicious dishes and warm atmosphere.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;