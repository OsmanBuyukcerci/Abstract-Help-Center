import { useState } from "react";

interface InputFieldProps {
  handleClick: (input: string) => void;
}

const InputField = ({ handleClick }: InputFieldProps) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center w-full h-60 bg-lpurple">
      <div className="text-3xl sm:text-5xl md:text-6xl font-medium">
        How can we help?
      </div>

      {/* Input */}
      <div className="flex border-2 border-lpurple shadow-sm">
        <input
          className="p-2 w-auto sm:w-[30rem] h-12 rounded-l-lg "
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="flex items-center bg-white px-3 rounded-r-lg hover:bg-slate-500/50"
          onClick={() => {
            handleClick(searchInput);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputField;
