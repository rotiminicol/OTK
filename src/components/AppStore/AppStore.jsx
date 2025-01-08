import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/goty.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* Text Section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-yellow-400 pl-3">
                Download Top Betting Apps Today
              </h1>
              <p className="text-yellow-400 text-sm sm:text-base text-center sm:text-left">
                Access the best betting platforms on your mobile devices. Download
                Bet365, Live Cassino, and more from the Play Store or App Store
                to enjoy seamless betting experiences anytime, anywhere.
              </p>

              {/* Links Section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-105 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>
            {/* Empty Div for Layout */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
