
import Logo from "../../assets/logo.svg";
import { useState, useEffect } from "react";
import Icons from "./Icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

     return () => {
     document.body.style.overflow = "auto";
    };
  }, [open]);

  const NavData = [
    { title: "Home", url: "#" },
    { title: "About", url: "#" },
    { title: "Services", url: "#" },
    { title: "Portfolio", url: "#" },
    { title: "Contact Us", url: "#" },
    { title: "Request a Quote", url: "#" },
  ];

  return (
    <header className="flex items-center justify-center w-full max-w-285 mx-auto bg-white p-4 rounded-24 mt-6">
      <nav className="flex items-center justify-between w-full">
        <div className="logo cursor-pointer">
          <img
            width="105"
            height="52"
            src={Logo}
            alt="Logo"
          />
        </div>

        <ul className="flex items-center justify-center gap-7 max-lg:hidden">
          {NavData.map((obj, idx) => (
            <li className="text-base font-normal hover:text-red duration-300 ease-in-out transition-all" key={idx}>
              <a href={obj.url}>{obj.title}</a>
            </li>
          ))}
        </ul>

        <button className="bg-red text-white max-w-46.5 w-full cursor-pointer h-13 rounded-56 items-center flex justify-center font-bold text-base max-lg:hidden border border-solid border-transparent hover:text-red transition-all duration-300 ease-in-out hover:bg-white hover:border-red">
          (865) 621-1717
        </button>

        <button
          className="hidden max-lg:flex cursor-pointer outline-none w-12.5 h-12.5 items-center justify-center border border-solid border-black/20 rounded-full z-60"
          onClick={() => setOpen(!open)}>
          <Icons icon={open ? "close" : "menu"} />
        </button>
      </nav>

      <div
        className={`fixed inset-y-0 ${
          open ? "right-0" : "-right-full"
        } w-[80%] h-screen bg-white z-50 transition-all duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center w-full h-full px-6 gap-6">
          <ul className="flex flex-col items-center justify-center gap-6 text-center">
            {NavData.map((obj, idx) => (
              <li className="text-lg font-normal hover:text-red duration-300 ease-in-out transition-all" key={idx}>
                <a
                  href={obj.url}
                  onClick={() => setOpen(false)}
                >
                  {obj.title}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={() => setOpen(false)} className="bg-red text-white max-w-46.5 w-full cursor-pointer h-13 rounded-56 flex items-center justify-center font-bold text-base border border-solid border-transparent hover:text-red transition-all duration-300 ease-in-out hover:bg-white hover:border-red">
            (865) 621-1717
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
