import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [searchInput, setSearchInput] = useState("");

  /* Getting search input from InputField */
  const getSearchInput = (input: string) => {
    setSearchInput(input);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Navigation Bar */}
      <NavBar />

      {/* Input Field */}
      <InputField
        handleClick={(input: string) => {
          getSearchInput(input);
        }}
      />

      {/* Progress Cards */}
      <div className="grid grid-cols-1 my-16 md:my-32 md:space-x-4 w-5/6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          path_d="M17.5 4C15.57 4 14 5.57 14 7.5c0 1.554 1.025 2.859 2.43 3.315-.146.932-.547 1.7-1.23 2.323-1.946 1.773-5.527 1.935-7.2 1.907V8.837c1.44-.434 2.5-1.757 2.5-3.337C10.5 3.57 8.93 2 7 2S3.5 3.57 3.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C3.5 20.43 5.07 22 7 22s3.5-1.57 3.5-3.5c0-.551-.14-1.065-.367-1.529 2.06-.186 4.657-.757 6.409-2.35 1.097-.997 1.731-2.264 1.904-3.768C19.915 10.438 21 9.1 21 7.5 21 5.57 19.43 4 17.5 4zm-12 1.5C5.5 4.673 6.173 4 7 4s1.5.673 1.5 1.5S7.827 7 7 7s-1.5-.673-1.5-1.5zM7 20c-.827 0-1.5-.673-1.5-1.5a1.5 1.5 0 0 1 1.482-1.498l.13.01A1.495 1.495 0 0 1 7 20zM17.5 9c-.827 0-1.5-.673-1.5-1.5S16.673 6 17.5 6s1.5.673 1.5 1.5S18.327 9 17.5 9z"
          title="Branches"
          overview="Abstract Branches lets you manage, version, and document your designs in one place."
        />
        <Card
          path_d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
          title="Manage your account"
          overview="Abstract Branches lets you manage, version, and document your designs in one place."
        />
        <Card
          path_d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A.998.998 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432l9 6zM13 19.131V6l6.565 8.754L13 19.131zM11 6v13.131l-6.565-4.377L11 6z"
          title="Manage organizations, teams, and projects"
          overview="Use Abstract organizations, teams, and projects to organize your people and your work."
        />
        <Card
          path_d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"
          title="Manage billing"
          overview="Change subscriptions and payment details"
        />
        <Card
          path_d="M3.433 17.325 3.079 19.8a1 1 0 0 0 1.131 1.131l2.475-.354C7.06 20.524 8 18 8 18s.472.405.665.466c.412.13.813-.274.948-.684L10 16.01s.577.292.786.335c.266.055.524-.109.707-.293a.988.988 0 0 0 .241-.391L12 14.01s.675.187.906.214c.263.03.519-.104.707-.293l1.138-1.137a5.502 5.502 0 0 0 5.581-1.338 5.507 5.507 0 0 0 0-7.778 5.507 5.507 0 0 0-7.778 0 5.5 5.5 0 0 0-1.338 5.581l-7.501 7.5a.994.994 0 0 0-.282.566zM18.504 5.506a2.919 2.919 0 0 1 0 4.122l-4.122-4.122a2.919 2.919 0 0 1 4.122 0z"
          title="Authenticate to Abstract"
          overview="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
        />
        <Card
          path_d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z"
          title="Abstract support"
          overview="Get in touch with a human."
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Copyright */}
      <div className="flex items-center justify-center bg-black w-full text-white">
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="m21.512 6.112-3.89 3.889-3.535-3.536 3.889-3.889a6.501 6.501 0 0 0-8.484 8.486l-6.276 6.275a.999.999 0 0 0 0 1.414l2.122 2.122a.999.999 0 0 0 1.414 0l6.275-6.276a6.501 6.501 0 0 0 7.071-1.414 6.504 6.504 0 0 0 1.414-7.071z"></path>
          </svg>
          ©Copyright 2022 / Abstract Studio Design, Inc. / All rights reserved
        </div>
      </div>
    </div>
  );
}

export default App;
