// src/components/Navbar.jsx

import logo from "../assets/logo.webp";

import { Menu, X } from "lucide-react";

import { useState } from "react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Academics",
      path: "/academics",
    },

    {
      name: "Gallery",
      path: "/gallery",
    },

    {
      name: "Events",
      path: "/events",
    },

    {
      name: "Contact Us",
      path: "/contact",
    },

    {
      name: "About Us",
      path: "/about",
    },
  ];

  return (

    <nav className="absolute top-0 left-0 w-full z-50">

      {/* MAIN NAVBAR */}

      <div
        className="
          max-w-[1280px]
          mx-auto

          px-4
          sm:px-6
          lg:px-10

          py-3

          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <div
          className={`
            flex
            items-center

            z-[60]

            transition-all
            duration-300

            ${
              open
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }
          `}
        >

          <NavLink to="/">

            <img
              src={logo}
              alt="Kidzee"

              className="
                h-[70px]
                sm:h-[85px]
                md:h-[95px]

                scale-[1.2]
                md:scale-[1.45]

                origin-left

                object-contain
              "
            />

          </NavLink>

        </div>

        {/* DESKTOP MENU */}

        <div
          className="
            hidden
            lg:flex

            items-center

            gap-10

            text-white

            font-bold

            text-[16px]
          "
        >

          {navLinks.map((item, index) => (

            <NavLink
              key={index}

              to={item.path}

              className={({ isActive }) =>
                `
                  relative

                  transition-all
                  duration-300

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]

                  after:bg-[#FFE600]

                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? "text-[#FFE600] after:w-full"
                      : "text-white after:w-0 hover:text-[#FFE600] hover:after:w-full"
                  }
                `
              }
            >
              {item.name}
            </NavLink>

          ))}

        </div>

        {/* CTA */}

        <button

          onClick={() =>
            navigate("/contact#enquiry-form")
          }

          className="
            hidden
            lg:flex

            bg-[#FFE600]

            text-black

            px-6
            py-3

            rounded-full

            font-extrabold

            shadow-xl

            hover:scale-105

            transition-all
            duration-300
          "
        >
          Enroll Now
        </button>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}

          className="
            lg:hidden

            z-[60]

            relative

            w-12
            h-12

            rounded-full

            bg-white/15

            backdrop-blur-xl

            border
            border-white/20

            flex
            items-center
            justify-center

            text-white

            shadow-xl

            transition-all
            duration-300
          "
        >

          <div className="transition-all duration-300">

            {open ? (
              <X
                size={26}
                strokeWidth={2.5}
              />
            ) : (
              <Menu
                size={26}
                strokeWidth={2.5}
              />
            )}

          </div>

        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}

      <div
        className={`
          fixed
          inset-0

          z-50

          transition-all
          duration-500

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        {/* BACKDROP */}

        <div
          onClick={() => setOpen(false)}

          className="
            absolute
            inset-0

            bg-black/50

            backdrop-blur-md
          "
        ></div>

        {/* MOBILE MENU PANEL */}

        <div
          className={`
            absolute

            top-0
            right-0

            h-full

            w-[85%]
            sm:w-[420px]

            bg-[linear-gradient(180deg,#A855F7_0%,#6D149B_100%)]

            shadow-2xl

            px-8
            pt-8
            pb-10

            flex
            flex-col

            transition-all
            duration-500

            ${
              open
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* TOP */}

          <div className="mb-14">

            {/* LOGO */}

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
            >

              <img
                src={logo}
                alt="Kidzee"

                className="
                  h-[70px]

                  scale-[1.25]

                  origin-left

                  object-contain
                "
              />

            </NavLink>

          </div>

          {/* LINKS */}

          <div className="flex flex-col gap-5">

            {navLinks.map((item, index) => (

              <NavLink
                key={index}

                to={item.path}

                onClick={() => setOpen(false)}

                className={({ isActive }) =>
                  `
                    group

                    flex
                    items-center
                    justify-between

                    text-[20px]

                    font-black

                    border-b
                    border-white/10

                    pb-4

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-[#FFE600]"
                        : "text-white hover:text-[#FFE600]"
                    }
                  `
                }
              >

                <span>
                  {item.name}
                </span>

                <span
                  className="
                    opacity-0

                    translate-x-[-10px]

                    group-hover:opacity-100

                    group-hover:translate-x-0

                    transition-all
                    duration-300
                  "
                >
                  →
                </span>

              </NavLink>

            ))}

          </div>

          {/* BOTTOM SECTION */}

          <div className="mt-auto">

            {/* CTA */}

            <button

              onClick={() => {

                navigate("/contact#enquiry-form");

                setOpen(false);
              }}

              className="
                w-full

                bg-[#FFE600]

                text-black

                py-4

                rounded-full

                font-black

                text-[17px]

                shadow-2xl

                hover:scale-[1.02]

                transition-all
                duration-300
              "
            >
              Enroll Now
            </button>

            {/* SMALL TEXT */}

            <p
              className="
                text-white/70

                text-sm

                text-center

                mt-6

                leading-6
              "
            >
              Nurturing young minds with joyful learning experiences.
            </p>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;