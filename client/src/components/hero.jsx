export const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center py-16 md:py-32 lg:py-40 xl:py-48"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundBlendMode: "overlay",
        minHeight: "50vh",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          Premium Coffee from Around the World
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Discover our ethically sourced, handcrafted blends
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-4 text-lg bg-[#6f4e37] hover:bg-amber-900 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 transform"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};
