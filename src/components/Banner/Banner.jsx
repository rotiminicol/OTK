import BannerImg from "../../assets/roulette4.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="betting ad image"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive text-blue-900"
                >
                  Driving Success with Winning Ads
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Unlock the full potential of your betting platform with our
                  tailored advertising solutions. We ensure maximum visibility
                  and engagement for your audience.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100" />
                      <span>Reliable Campaigns</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-200" />
                      <span>Quick Turnaround</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-300" />
                      <span>Dynamic Strategies</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-blue-900 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive text-blue-900">
                      Partner with Us
                    </h1>
                    <p className="text-sm text-gray-500">
                      Just like placing a winning bet, creating impactful ad
                      campaigns requires precision, expertise, and the right
                      tools. Join us and stand out in the competitive world of
                      betting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
