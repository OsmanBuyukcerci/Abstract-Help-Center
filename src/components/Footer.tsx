const Footer = () => {
  return (
    <div className="bg-black w-full flex items-center justify-center">
      <div className="grid grid-cols-4 items-start relative w-full md:w-5/6 p-8  bg-black text-white">
        <div className="flex flex-col">
          <span className="font-bold">Abstract</span>
          <a className="font-extralight" href="#">
            Branches
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Resources</span>
          <a className="font-extralight" href="#">
            Blog
          </a>
          <a className="font-extralight" href="#">
            Help Center
          </a>
          <a className="font-extralight" href="#">
            Status
          </a>
          <a className="font-extralight" href="#">
            Blog
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Community</span>
          <a className="font-extralight" href="#">
            Twitter
          </a>
          <a className="font-extralight" href="#">
            LinkedIn
          </a>
          <a className="font-extralight" href="#">
            Facebook
          </a>{" "}
          <a className="font-extralight" href="#">
            Dribble
          </a>{" "}
          <a className="font-extralight" href="#">
            Podcast
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Company</span>
          <a className="font-extralight" href="#">
            About Us
          </a>{" "}
          <a className="font-extralight" href="#">
            Careers
          </a>{" "}
          <a className="font-extralight" href="#">
            Legal
          </a>
          <p className="mt-4">
            <span className="font-semibold">Contact Us</span>
            <p className="font-extralight">info@abstract.com</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
