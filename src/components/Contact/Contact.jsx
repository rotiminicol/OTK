import { FaFacebook, FaInstagram, FaTiktok, FaTelegram } from "react-icons/fa6";

const socialLinks = [
  { 
    href: 'https://www.instagram.com/online_traffice_king?igsh=MXMzdmRjZ2R5ejFmdQ%3D%3D&utm_source=qr',
    icon: <FaInstagram className="text-3xl hover:text-yellow-500 duration-300 text-[#E4405F]" />, 
    alt: 'Instagram' 
  }, 
  { 
    href: "https://t.me/tomsmithaccount", 
    icon: <FaTelegram className="text-3xl hover:text-yellow-500 duration-200 text-[#0088CC]" />, 
    alt: 'Telegram'
  }, 
  { 
    href: 'https://www.facebook.com/share/14f7cyfVds/?mibextid=wwXIfr', 
    icon: <FaFacebook className="text-3xl hover:text-yellow-500 duration-200 text-[#1877F2]" />,
    alt: 'Facebook' 
  }, 
  { 
    href: 'https://www.tiktok.com/@online.traffic.ki?_t=ZN-8swW5SrO4Na&_r=1',
    icon: <FaTiktok className="text-3xl hover:text-yellow-500 duration-200 text-[#000000]" />, 
    alt: 'TikTok'
  }
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section mb-16 p-10 bg-gradient-to-tl from-transparent via-customBlue to-transparent"
    >
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] text-black reveal-up">
            Contact me for collaboration
          </h2>

          <p className="mt-3 mb-8 max-w-[50ch] text-white lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/ayvvxxob"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="label text-black"
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="My Name"
                className="text-field text-black p-3"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="label text-black"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="@example.com"
                className="text-field text-black p-3"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="label text-black"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80 text-black p-3"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full justify-center bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-700"
          >
            Send Us a Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
