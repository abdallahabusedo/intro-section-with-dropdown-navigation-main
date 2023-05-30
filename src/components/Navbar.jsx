"use client";
import { useState } from "react";

const Navbar = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");

    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
      menuButton.src = "/images/icon-close-menu.svg";
    } else {
      menuButton.src = "/images/icon-menu.svg";
    }
  };

  return (
    <header className="p-5 flex items-center justify-between">
      <div className="lg:flex lg:items-start lg:justify-start">
        <img src={"/images/logo.svg"} alt="" className="lg:mr-5" />
        <nav className="navbar">
          <div>
            <button
              onClick={() => setOpenFeatures(!openFeatures)}
              className="flex items-center justify-start"
            >
              Features{" "}
              {openFeatures ? (
                <img
                  src={"/images/icon-arrow-up.svg"}
                  alt=""
                  className="ml-2"
                />
              ) : (
                <img
                  src={"/images/icon-arrow-down.svg"}
                  alt=""
                  className="ml-2"
                />
              )}
            </button>
            {openFeatures && (
              <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={"/images/icon-todo.svg"} alt="" className="mr-2" />{" "}
                  Todo List
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img
                    src={"/images/icon-calendar.svg"}
                    alt=""
                    className="mr-2"
                  />{" "}
                  Calendar
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img
                    src={"/images/icon-reminders.svg"}
                    alt=""
                    className="mr-2"
                  />{" "}
                  Reminders
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img
                    src={"/images/icon-planning.svg"}
                    alt=""
                    className="mr-2"
                  />{" "}
                  Planning
                </li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setOpenCompany(!openCompany)}
              className="flex items-center justify-start"
            >
              Company{" "}
              {openCompany ? (
                <img
                  src={"/images/icon-arrow-up.svg"}
                  alt=""
                  className="ml-2"
                />
              ) : (
                <img
                  src={"/images/icon-arrow-down.svg"}
                  alt=""
                  className="ml-2"
                />
              )}
            </button>
            {openCompany && (
              <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2">
                  History
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  Our Team
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  Blog
                </li>
              </ul>
            )}
          </div>
          <div className="mb-2 lg:mb-0">
            <button>Careers</button>
          </div>
          <div>
            <button>About</button>
          </div>
        </nav>
      </div>

      <div className="lg:hidden">
        <button onClick={handleOpenMenu}>
          <img src={"/images/icon-menu.svg"} alt="" className="menu-button" />
        </button>
      </div>

      <div className="hidden lg:block">
        <button className="mr-10 opacity-75">Login</button>
        <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl">
          Register
        </button>
      </div>
    </header>
  );
};

export default Navbar;
