export const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white text-center py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      }}
    >
      <div
        className="relative bg-cover bg-center text-white text-center mt-2 py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        }}
      >
        <h2 className="text-4xl mb-5 font-semibold">
          Premium Coffee from Around the World
        </h2>
        <p className="text-lg mb-7">
          Discover our ethically sourced, handcrafted blends
        </p>
        <a
          href="#products"
          className="inline-block px-6 py-3 bg-[#6f4e37] text-white text-decoration-none rounded-sm font-medium transition-all duration-[300ms] hover:bg-[#c4a484] cursor-pointer"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};
