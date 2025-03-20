import { useState } from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarRedes = [
    {
      id: 1,
      title: "Instagram",
      link: "https://www.instagram.com",
      icon: "bi bi-instagram",
    },
    {
      id: 2,
      title: "Tiktok",
      link: "https://www.tiktok.com",
      icon: "bi bi-tiktok",
    },
  ];

  const navbarLinks = [
    {
      id: 1,
      title: "Inicio",
      link: "/",
    },
    {
      id: 2,
      title: "Nosotros",
      link: "/about",
    },
    {
      id: 3,
      title: "Soporte",
      link: "/support",
    },
    {

      id: 4,
      title: "Contacto",
      link: "/contacts",

    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 bg-opacity-80 backdrop-blur-md z-50 transition-all duration-300">
      <div className="flex justify-between items-center sm:px-10 sm:py-2 px-1 py-1">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" 
                      width={60}
                      height={40}
                      className="col-span-2 max-h-13 w-[80px] object-contain lg:col-span-1" />
        </div>

        {/* Botón de menú hamburguesa - visible solo en móvil */}
        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación - visible en desktop */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4 px-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="sm:text-lg text-sm text-white hover:text-purple-400 transition-transform duration-300 transform hover:scale-110 inline-block hover:drop-shadow-[0_0_8px_#a855f7]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes - visible en desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                >
                  <i
                    className={`${link.icon} sm:text-2xl text-lg text-white transition-all duration-300 hover:text-purple-500  hover:drop-shadow-[0_0_8px_#a855f7]`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute w-full bg-blue-950 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Links de navegación móvil */}
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.link}
                className="text-white hover:text-purple-900 block transition-all duration-300  hover:drop-shadow-[0_0_8px_#a855f7]"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Redes sociales móvil */}
        <ul className="flex space-x-4 px-4 py-2 border-t border-blue-700 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${link.icon} text-lg text-white hover:text-purple-900 transition-all duration-300  hover:drop-shadow-[0_0_8px_#a855f7]`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
