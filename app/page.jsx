export default function SkintheticWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide">Skinthetic</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:text-gray-500">Home</a>
          <a href="#products" className="hover:text-gray-500">Products</a>
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-8 py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold mb-4">Gentle Care for Real Skin</h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-600">
          Skinthetic brings science-backed, skin-friendly products designed for healthy, glowing skin.
        </p>
        <a href="https://wa.me/8801340766169" target="_blank" className="inline-block px-6 py-3 rounded-2xl bg-black text-white shadow">
          Order via WhatsApp
        </a>
      </section>

      {/* Products Section */}
      <section id="products" className="px-8 py-16">
        <h3 className="text-3xl font-semibold text-center mb-12">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-2xl p-6 shadow-sm">
              <div className="h-40 bg-gray-100 rounded-xl mb-4" />
              <h4 className="font-semibold mb-2">Hydrating Face Cleanser</h4>
              <p className="text-sm text-gray-600 mb-3">
                Gently removes impurities while maintaining skin moisture.
              </p>
              <p className="font-semibold mb-4">BDT 850</p>
              <a href="https://wa.me/8801340766169" target="_blank" className="block text-center w-full py-2 rounded-xl border hover:bg-gray-50">
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-6">About Skinthetic</h3>
        <p className="max-w-2xl mx-auto text-center text-gray-600">
          Skinthetic is a skincare brand focused on clean formulations, transparency, and real results.
          Our products are crafted with care to suit sensitive and everyday skin needs.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact & Orders</h3>
        <div className="max-w-md mx-auto text-center text-gray-600 space-y-3">
          <p>📘 Facebook: Skinthetic</p>
          <p>💬 WhatsApp Orders: +880-1340766169</p>
          <p>⏰ Order Response Time: 9 AM – 9 PM</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Skinthetic. All rights reserved.
      </footer>
    </div>
  );
}
