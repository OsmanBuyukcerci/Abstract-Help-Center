import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropdownClick = () => {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (dropdownButton && dropdownMenu) {
      dropdownButton.onclick = () => {
        if (!isOpen) {
          dropdownMenu.style.display = "flex";
          setOpen(true);
        } else {
          dropdownMenu.style.display = "none";
          setOpen(false);
        }
      };
    }
  };

  return (
    <div className="flex relative items-center w-full h-20 bg-black text-white text-lg font-semibold">
      <a
        href="#"
        className="flex items-center gap-2 absolute text-center sm:start-5 md:start-5 lg:start-20"
      >
        {/* Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="m21.512 6.112-3.89 3.889-3.535-3.536 3.889-3.889a6.501 6.501 0 0 0-8.484 8.486l-6.276 6.275a.999.999 0 0 0 0 1.414l2.122 2.122a.999.999 0 0 0 1.414 0l6.275-6.276a6.501 6.501 0 0 0 7.071-1.414 6.504 6.504 0 0 0 1.414-7.071z"></path>
        </svg>
        {/* Title */}
        <span className="font-bold">Abstract</span> | Help Center
      </a>

      {/* Dropdown */}
      <div className="absolute end-5">
        <div className="relative inline-block text-left w-auto">
          <button
            className=""
            id="dropdownButton"
            onClick={handleDropdownClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="m12 16 5-6H7z"></path>
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            </svg>
          </button>
          <div
            className="hidden absolute right-0 flex-col z-10 w-56 bg-white text-black rounded-lg"
            id="dropdownMenu"
            role="menu"
          >
            <div className="py-1">
              <a
                href="#"
                className="px-4 py-3 block text-sm hover:bg-lpurple"
                id="menu-item-0"
                tabIndex={-1}
              >
                Submit a request
              </a>
              <a
                href="#"
                className="px-4 py-3 block text-sm hover:bg-lpurple"
                id="menu-item-1"
                tabIndex={-1}
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
