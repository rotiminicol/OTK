
const WorkData = [
  {
    id: 1,
    img: "/video1.mp4",
    name: "Bet365",
    description: "Experience the ultimate sports betting platform with seamless gameplay and live updates.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/video3.mp4",
    name: "Live Cassino",
    description: "Dive into the thrilling world of live casino games, all from the comfort of your home.",
    aosDelay: "300",
  },
];

const Work = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Explore Our Featured Works
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Handpicked projects crafted with passion and precision.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {WorkData.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col w-[400px] md:w-[500px] bg-white rounded-3xl shadow-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-customBlue to-indigo-600 text-white">
                <h2 className="text-3xl font-bold">{service.name}</h2>
                <p className="mt-2 text-lg font-medium">
                  {service.description}
                </p>
              </div>

              {/* Video */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <video src={service.img} muted className="w-full max-h-full object-contain" controls />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
