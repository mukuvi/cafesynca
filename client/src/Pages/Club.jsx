export const Club = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Content Section - Red Background */}
      <div className="hidden md:flex flex-col justify-around bg-[#f2796e] w-[55%] min-h-screen p-5">
        {/* Logo Section */}
        <div className="flex justify-around items-center">
          <img
            src="/images/icons8-cheburashka-96.svg"
            alt="Logo"
            className="w-12 h-12"
          />
          <div className="text-center">
            <h2 className="text-xl font-light tracking-widest">KARIBU</h2>
            <h1 className="text-3xl font-bold">CAFESYNCA</h1>
          </div>
          <img
            src="/images/icons8-cheburashka-96.svg"
            alt="Logo"
            className="w-12 h-12"
          />
        </div>

        {/* Image Section */}
        <div
          className="h-[60%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bc2.jpg')" }}
        ></div>

        {/* Welcome Text */}
        <p className="text-center text-white text-lg">
          Thanks for visiting
          <br />
          Where every sip creates a moment to cherish
        </p>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-[45%] flex flex-col justify-center p-4 md:p-12 shadow-md">
        {/* Social Login Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-5">Get Started</h3>
          <p className="text-sm mb-4">
            Already have an account <br />
            <span className="text-[#f2796e] cursor-pointer hover:underline">
              Sign In
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
            <button className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 w-full">
              <img
                src="https://img.icons8.com/color/30/google-logo.png"
                alt="Google"
              />
              Sign up
            </button>
            <button className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-gray-300 rounded-lg bg-[#4f70b5] text-white w-full">
              <img
                src="https://img.icons8.com/fluency/30/facebook-new.png"
                alt="Facebook"
              />
              Sign up
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Username Field */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">User Name</label>
            <div className="relative">
              <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="James Ngandu"
                className="w-full pl-10 pr-10 py-2 border-2 border-gray-300 rounded-lg focus:border-[#f2796e] outline-none shadow-sm"
              />
              <i className="fa-solid fa-circle-exclamation absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0"></i>
              <i className="fa-solid fa-circle-check absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 opacity-0"></i>
            </div>
            <div className="text-red-500 text-sm mt-1 hidden">
              Error message
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <i className="fa-regular fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full pl-10 pr-10 py-2 border-2 border-gray-300 rounded-lg focus:border-[#f2796e] outline-none shadow-sm"
              />
              <i className="fa-solid fa-circle-exclamation absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0"></i>
              <i className="fa-solid fa-circle-check absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 opacity-0"></i>
            </div>
            <div className="text-red-500 text-sm mt-1 hidden">
              Error message
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="password"
                placeholder="password"
                className="w-full pl-10 pr-10 py-2 border-2 border-gray-300 rounded-lg focus:border-[#f2796e] outline-none shadow-sm"
              />
              <i className="fa-solid fa-circle-exclamation absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 opacity-0"></i>
              <i className="fa-solid fa-circle-check absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 opacity-0"></i>
            </div>
            <div className="text-red-500 text-sm mt-1 hidden">
              Error message
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#f2796e] text-white rounded-lg border-2 border-[#f2796e] text-lg cursor-pointer shadow-sm hover:opacity-80 transition-opacity"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
