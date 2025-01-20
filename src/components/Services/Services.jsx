import { useState, useEffect } from "react";
import axios from "axios";
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
    link: "https://www.bet365.com",
    allowedCountries: ["UK", "Cyprus", "Canada"], // Countries where this is allowed
  },
  {
    id: 2,
    img: Img2,
    name: "Live Casino",
    description:
      "Step into the ultimate Live Casino experience. Play your favorite games in real-time with professional dealers!",
    link: "https://www.livecasino.com",
    allowedCountries: ["Cyprus", "USA"],
  },
  {
    id: 3,
    img: Img3,
    name: "Sportybet",
    description:
      "Explore the thrill of sports betting with Sportybet. Amazing odds and countless options to win!",
    link: "https://www.sportybet.com",
    allowedCountries: ["Nigeria", "Ghana"], // Example restricted countries
  },
  {
    id: 4,
    img: Img4,
    name: "Casino X",
    description:
      "Dive into endless entertainment with Casino X! Spin, bet, and win big with our exclusive games!",
    link: "https://www.casinox.com",
    allowedCountries: ["Germany", "Sweden"],
  },
  {
    id: 5,
    img: Img5,
    name: "Sportybet",
    description:
      "Explore the thrill of sports betting with Sportybet. Amazing odds and countless options to win!",
    link: "https://www.sportybet.com",
    allowedCountries: ["Nigeria", "Ghana"], // Example restricted countries
  },
  {
    id: 6,
    img: Img6,
    name: "Casino X",
    description:
      "Dive into endless entertainment with Casino X! Spin, bet, and win big with our exclusive games!",
    link: "https://www.casinox.com",
    allowedCountries: ["Germany", "Sweden"],
  },
  
];

const Services = () => {
  const [userCountry, setUserCountry] = useState("");
  const [ageVerification, setAgeVerification] = useState({});

  // Fetch the user's country
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setUserCountry(response.data.country_name);
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    fetchCountry();
  }, []);

  const handleAgeClick = (id, isVerified) => {
    setAgeVerification((prev) => ({ ...prev, [id]: isVerified }));
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-customBlue">
              We work with:
            </h1>
          </div>

          {/* Services Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {ServicesData.map((service) => {
              const isAccessible =
                service.allowedCountries.includes(userCountry);

              return (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  className="w-72 h-72 bg-white rounded-2xl overflow-hidden shadow-lg relative group hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 group-hover:bg-white transition-colors">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-3/4 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 bg-white p-4 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h1 className="text-lg font-bold text-customBlue">
                      {service.name}
                    </h1>
                    <p className="text-gray-700 text-sm mt-2">
                      {service.description}
                    </p>
                    {ageVerification[service.id] !== undefined ? (
                      ageVerification[service.id] ? (
                        isAccessible ? (
                          <a
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-customBlue text-white py-1 px-4 rounded-lg mt-4 hover:bg-blue-600 transition"
                          >
                            Visit Website
                          </a>
                        ) : (
                          <p className="text-red-500 text-sm mt-4">
                            This service is not available in your country.
                          </p>
                        )
                      ) : (
                        <p className="text-red-500 text-sm mt-4">
                          You must be 18+ to proceed.
                        </p>
                      )
                    ) : (
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">Are you 18+?</p>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => handleAgeClick(service.id, true)}
                            className="py-1 px-3 text-xs bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => handleAgeClick(service.id, false)}
                            className="py-1 px-3 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
