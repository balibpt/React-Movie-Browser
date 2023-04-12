import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth";

export default function HomeNavBar() {
  const user = useContext(AuthContext);

  const navigate = useNavigate();

  const displayLoginInOrSignOut = () => {
    if (user) {
      return (
        <button
          onClick={userSignOut}
          class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
        >
          Sign out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            navigate("/sign-in");
          }}
          class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
        >
          Login
        </button>
      );
    }
  };

  const userSignOut = () => {
    signOut(auth);
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FilmFinder
            </span>
          </a>
          <div class="flex items-center">
            <a
              href="tel:5541251234"
              class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              Shows made easy with FilmFinder
            </a>
            {displayLoginInOrSignOut()}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
