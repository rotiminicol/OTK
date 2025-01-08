const WorkData = [
  {
    id: 1,
    img: "/video1.mp4",
    name: "Bet365",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/video2.mp4",
    name: "Live Cassino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/video2.mp4",
    name: "Cassion",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "/video2.mp4",
    name: "Bet365",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "700",
  },
  {
    id: 5,
    img: "/video1.mp4",
    name: "Live Cassino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "900",
  },
  {
    id: 6,
    img: "/video2.mp4",
    name: "Cassion",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "1100",
  },
];

const Work = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-blue-900">
              Check Out Some Of Our Work:
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {WorkData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="w-72 h-[350px] rounded-2xl bg-white hover:bg-blue-700 hover:text-white relative shadow-lg group"
              >
                {/* Video container */}
                <div className="h-40 flex items-center justify-center overflow-hidden bg-gray-100 rounded-t-2xl">
                  <video
                    src={service.img}
                    controls
                    className="w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text container */}
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white transition-colors text-sm line-clamp-2">
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

export default Work;
