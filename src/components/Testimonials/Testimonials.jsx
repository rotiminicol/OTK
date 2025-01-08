import Slider from "react-slick";
import Img1 from "../../assets/Bet365_Logo.png";
import Img2 from "../../assets/casinologo.png";
import Img3 from "../../assets/cassino2.png";
import Img4 from "../../assets/cassino4.png";
import Img5 from "../../assets/cassino6.png";
import Img6 from "../../assets/cassino8.png";
import { FaStar } from "react-icons/fa";

const TestimonialData = [
  {
    id: 1,
    name: "Bet365",
    text: "Working with this team has significantly increased our user engagement. Their marketing strategies are unparalleled in the industry.",
    img: Img1,
    rating: 5,
  },
  {
    id: 2,
    name: "Live Cassino",
    text: "They have helped us grow exponentially. Their ad campaigns are well-targeted and deliver real results.",
    img: Img2,
    rating: 4,
  },
  {
    id: 3,
    name: "Cassion",
    text: "A fantastic experience! Their expertise in driving traffic and conversions has been a game-changer for us.",
    img: Img3,
    rating: 5,
  },
  {
    id: 4,
    name: "BetKing",
    text: "Their innovative marketing strategies have brought us closer to our customers. Highly recommended!",
    img: Img4,
    rating: 5,
  },
  {
    id: 5,
    name: "MegaBet",
    text: "The collaboration has been seamless, and the results speak for themselves. Outstanding service!",
    img: Img5,
    rating: 4,
  },
  {
    id: 6,
    name: "GoldBet",
    text: "Partnering with them has been one of our best decisions. Their ads deliver beyond expectations.",
    img: Img6,
    rating: 5,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 bg-white">
      <div className="container">
        {/* Header Section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold text-yellow-500"
          >
            Our Clients Speak
          </h1>
          <p className="text-center text-gray-500 text-sm">
            Hear what leading betting companies have to say about our services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white hover:bg-blue-100 transition-all relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                      <div className="flex gap-1 justify-center">
                        {[...Array(5)].map((star, index) => (
                          <FaStar
                            key={index}
                            className={
                              index < data.rating
                                ? "text-blue-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
