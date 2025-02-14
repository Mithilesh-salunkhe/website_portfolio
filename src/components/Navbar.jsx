import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import bgImage from '../assets/freepik__background__39330.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: 'home' },
    { id: 2, text: 'About', link: 'about' },
    { id: 3, text: 'Projects', link: 'projects'},
    { id: 4, text: 'Contact', link: 'contact' },
  ];

  return (
    <div className="relative flex justify-between items-center h-24 max-w-[1240px] mx-auto px-0 sm:px-2 text-white">
      {/* Logo */}
      <a href="#">
        <img src={bgImage} alt="logo" className="h-16 w-auto object-contain" />
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex z-10 relative">
        {navItems.map((item) => (
          <Link
            to={item.link} // use the `link` property here
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            key={item.id}
            className="p-4 m-2 cursor-pointer hover:text-blue-500"
          >
            {item.text}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 flex flex-col'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] flex flex-col'
        }
      >
        {/* Mobile Logo */}
        <a href="#">
          <img src={bgImage} alt="logo" className="h-16 w-auto object-contain sm:mr-5" />
        </a>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.link} // ensure the `to` is using the `link` property
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="p-4 border-b rounded-xl hover:bg-white/50 backdrop-blur-lg duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
