import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-5 py-3 px-5 2xl:px-40 lign-middle bg-white border-b-2">
      <a
        href="/index"
        className="bg-black p-2 text-white uppercase font-mono font-bold text-xl rounded-lg"
      >
        DEV
      </a>
      <div className="me-auto align-middle w-96 my-auto">
        <form action="#" method="POST" className="flex gap-1">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder:ps-3 rounded border-2 border-gray-500 h-10 w-full"
          />
          <svg
            className="w-10 h-10 m-auto"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </form>
      </div>
      <div className="flex gap-5">
        <a
          href="/posts"
          className="p-2 border-2 rounded-lg border-violet-600 text-violet-600"
        >
          Create Post
        </a>
        <svg
          className="w-8 h-8 m-auto"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          ></path>
        </svg>
        <img
          className="w-10 h-10 rounded-full m-auto"
          src="https://via.placeholder.com/150/24f355"
          alt="user profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
