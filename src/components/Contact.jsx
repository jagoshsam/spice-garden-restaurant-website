function Contact() {
  return (
    <section id="contact" className="py-24 px-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">

        <h2
         className="text-5xl font-bold text-center mb-4"
         style={{ fontFamily: "Playfair Display" }}
        >
          Contact Us
        </h2>

        <p className="text-center text-gray-400 mb-12">
          We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-orange-500">
              Visit Spice Garden
            </h3>

            <div className="space-y-5 text-gray-300 text-lg">
              <p>📍 123 Main Street, City Center</p>
              <p>📞 +91 98765 43210</p>
              <p>✉ contact@spicegarden.com</p>
              <p>🕒 Mon - Sun : 10 AM - 11 PM</p>
            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500"
            ></textarea>

            <button
              className="bg-orange-600 hover:bg-orange-700 transition px-8 py-4 rounded-xl text-white font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;