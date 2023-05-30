"use client";
import React from "react";

const Description = () => {
  return (
    <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
      <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
        Make remote work
      </h1>
      <p className="mb-5">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">
        Learn more
      </button>

      <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start">
        <li>
          <img
            src={"/images/client-databiz.svg"}
            alt=""
            className="w-16 md:w-24"
          />
        </li>
        <li>
          <img
            src={"/images/client-audiophile.svg"}
            alt=""
            className="w-16 md:w-24"
          />
        </li>
        <li>
          <img
            src={"/images/client-meet.svg"}
            alt=""
            className="w-16 md:w-24"
          />
        </li>
        <li>
          <img
            src={"/images/client-maker.svg"}
            alt=""
            className="w-16 md:w-24"
          />
        </li>
      </ul>
    </article>
  );
};

export default Description;
