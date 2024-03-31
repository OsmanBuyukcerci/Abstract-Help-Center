const NavBar = () => {
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

      {/* Buttons */}
      <div className="buttons invisible sm:visible flex md:gap-2 lg:gap-4 absolute end-2 sm:end-5 lg:end-20">
        <button className="bg-black hover:bg-lpurple hover:text-black border-white border-2 rounded-lg px-4 sm:px-6 py-2">
          Submit a request
        </button>
        <button className="bg-purple hover:bg-lpurple hover:text-black rounded-lg px-6 py-2">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default NavBar;
