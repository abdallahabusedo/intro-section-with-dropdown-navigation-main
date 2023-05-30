"use client";
import React from "react";

const LogoImage = () => {
  return (
    <article>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={"/images/image-hero-desktop.png"}
        />
        <img src={"/images/image-hero-mobile.png"} alt="" className="w-full" />
      </picture>
    </article>
  );
};

export default LogoImage;
