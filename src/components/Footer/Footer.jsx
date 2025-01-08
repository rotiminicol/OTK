import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/pip2.png"; // Replace with a relevant ad company background

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/60 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive text-blue-500"
            >
              Online Traffic King
            </a>
            <p className="pt-4">
              Dominating Online Presence, Driving Results – The Ultimate
              Advertising Partner.
            </p>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-700 py-2 px-4 mt-5 text-sm rounded-full hover:bg-blue-600 duration-200"
            >
              Send Us a Message
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-blue-500">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second column links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-blue-500">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-blue-500">
                Address
              </h1>
              <div>
                <p className="mb-3">Powered by EREZ</p>
                <p>+91 ########</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-blue-500 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-blue-500 duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-blue-500 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Footer Text */}
        <div className="bg-black/80 text-center py-4">
          <p className="text-sm">
            Online Casino Tech & Media
            <br />
            Powered by EREZ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
