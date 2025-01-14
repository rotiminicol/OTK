import Logo from "../../assets/kinglogo.png";
import { FaDice } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => { 
  return (
     <div className="navbar bg-gradient-to-r from-customBlue via-black to-black shadow-md "> 
     <div className="container py-2"> 
      <div className="flex justify-between items-center"> {/* Logo section */} 
        <div data-aos="fade-down" data-aos-once="true"> 
          <a href="#" className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider" > 
            <img src={Logo} alt="Logo" className="w-14" /> </a> </div> {/* Link section */} 
            <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="flex justify-between items-center gap-4" > 
              <ul className="hidden sm:flex items-center gap-4"> {Menu.map((menu) => ( 
                <li key={menu.id}> <a href={menu.link} className="inline-block text-xl py-4 px-4 text-white hover:text-white duration-200" > {menu.name} </a> 
                </li> ))} 
                </ul> 
                <a href="#contact" className="hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3 bg-customBlue hover:bg-blue-600"> Contact Us <FaDice className="text-xl text-white drop-shadow-sm cursor-pointer" /> 
                </a>
                 </div> 
                 </div>
                  </div> 
                  </div> 
                  );
                 };
export default Navbar;
