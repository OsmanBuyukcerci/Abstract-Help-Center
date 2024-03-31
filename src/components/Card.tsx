interface CardProps {
  path_d: string;
  overview: string;
  title: string;
}

const Card = ({ path_d, overview, title }: CardProps) => {
  return (
    <a
      href="#"
      className="flex gap-3 p-4 hover:shadow-md lg:hover:scale-105 hover:transition hover:duration-200"
    >
      <div className="logo flex flex-col h-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d={path_d}></path>
        </svg>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="title text-2xl font-bold">{title}</div>
        <p className="overview">{overview}</p>
        <a href="#" className="text-blue-500">
          Learn More
        </a>
      </div>
    </a>
  );
};

export default Card;
