import HeroPng from "../../assets/roulette4.png";

const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-black flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              Reach 900+ million monthly users{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="bg-clip-text text-transparent text-blue-500 bg-gradient-to-b from-blue-500 to-blue-800 font-cursive"
              >
                For a limited time!
              </span>{" "}
              $150 cash back when you spend
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-blue-700 hover:bg-blue-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Become an Advertiser
              </button>
            </div>
          </div>
          {/* Image section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <img
              data-aos-once="true"
              src={HeroPng}
              alt="Hero"
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl absolute top-10 left-10"
            >
              <h1 className="text-white">Hey Winners</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl absolute bottom-10 right-10"
            >
              <h1 className="text-white">Best Ad Company</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
