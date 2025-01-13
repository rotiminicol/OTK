import Img1 from "../../assets/Bet365_Logo.png";
import Img2 from "../../assets/casinologo.png";
import Img3 from "../../assets/cassino2.png";
import Img4 from "../../assets/cassino4.png";
import Img5 from "../../assets/cassino6.png";
import Img6 from "../../assets/cassino8.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Bet365",
    description:
      "Experience the thrill of betting with Bet365. Join today and enjoy top-notch odds and endless opportunities to win!",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Live Casino",
    description:
      "Step into the ultimate Live Casino experience. Play your favorite games in real-time with professional dealers!",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    name: "Casino",
    description:
      "Discover the excitement of Casino gaming. Spin the reels, hit the tables, and chase your fortune in style!",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img4,
    name: "Bet365",
    description:
      "Bet365 offers unmatched sports betting excitement. Bet on your favorite sports and enjoy thrilling promotions!",
    aosDelay: "700",
  },
  {
    id: 5,
    img: Img5,
    name: "Live Casino",
    description:
      "Immerse yourself in the Live Casino world. Engage with live dealers and experience the closest thing to being there!",
    aosDelay: "900",
  },
  {
    id: 6,
    img: Img6,
    name: "Casino",
    description:
      "Join the Casino frenzy. Explore a variety of games and indulge in an unforgettable gaming adventure!",
    aosDelay: "1100",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-customBlue">
              We work with:
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="w-72 h-[300px] rounded-2xl bg-white hover:bg-customBlue hover:text-white relative shadow-lg group"
              >
                {/* Image container */}
                <div className="h-40 flex items-center justify-center overflow-hidden bg-gray-100 rounded-t-2xl">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text container */}
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white transition-colors text-xs line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
