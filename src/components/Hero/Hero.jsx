import HeroPng from "../../assets/roulette4.png";
import Logo from "../../assets/kinglogo.png"; // Import the logo

const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-customBlue flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">

          
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
  <h1
    data-aos="fade-up"
    data-aos-once="true"
    className="flex flex-col items-center text-3xl sm:text-4xl lg:text-5xl font-bold"
  >
    <div className="flex items-center">
      <span className="text-yellow-400">ONLINE</span>
      <img
        src={Logo}
        alt="Logo"
        className="inline-block w-6 h-6 mx-2"
      />
      <span
        data-aos="zoom-out"
        data-aos-delay="300"
        className="text-yellow-400"
      >
        TRAFFIC KING
      </span>
    </div>
  </h1>
  <p
    data-aos="fade-up"
    data-aos-once="true"
    className="text-xs lg:text-base text-center text-yellow-400"
  >
    CASINO MEDIA & TECH SERVICE EXPERT POWERED BY EREZ
  </p>
  
  <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center mt-4">
    <a 
      href="https://www.facebook.com/share/14f7cyfVds/?mibextid=wwXIfr" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-gradient-to-r from-customBlue to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:scale-110 duration-300 text-yellow-400 text-lg sm:text-xl py-3 px-6 rounded-full shadow-lg transition-transform"
    >
      Become Our Client
    </a> 
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
