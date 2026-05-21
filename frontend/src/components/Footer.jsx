import logo from "../assets/logo.webp";

import instagramIcon from "../assets/Social link 1.png";
import linkedinIcon from "../assets/Social link 2.png";
import twitterIcon from "../assets/Social link 3.png";
import youtubeIcon from "../assets/Social link 4.png";
import facebookIcon from "../assets/Social link 5.png";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        text-white
        pt-14
        md:pt-16
        pb-6
      "
      style={{
        background:
          "linear-gradient(90deg, #CFAFEA 0%, #B57EDC 35%, #8F46C5 70%, #6D149B 100%)",
      }}
    >

      {/* SOFT OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_40%)]
          pointer-events-none
        "
      ></div>

      {/* MAIN */}

      <div className="max-w-[1180px] mx-auto px-5 md:px-6 relative z-10">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[1.4fr_0.7fr_1fr]
            gap-12
            lg:gap-14
          "
        >

          {/* LEFT */}

          <div className="text-center md:text-left">

            {/* LOGO */}

            <img
              src={logo}
              alt="Kidzee"
              className="
                h-[90px]
                sm:h-[110px]
                md:h-[125px]
                scale-[1.25]
                md:scale-[1.45]
                object-contain
                mb-2
                mx-auto
                md:mx-0
              "
            />

            {/* DESCRIPTION */}

            <p
              className="
                text-white/90
                leading-7
                md:leading-8
                text-[15px]
                md:text-[17px]
                max-w-[470px]
                mb-3
                mx-auto
                md:mx-0
              "
            >
              India's most loved preschool chain, nurturing little minds
              with the Péntemind curriculum at Kursi Road, Lucknow
              since 2014.
            </p>

            {/* YELLOW TEXT */}

            <p
              className="
                text-[#FFF200]
                font-black
                text-[15px]
                md:text-[17px]
                mb-6
              "
            >
              Nurturing Gen-Next · A Zeelearn School
            </p>

            {/* SOCIAL */}

            <div
              className="
                flex
                items-center
                justify-center
                md:justify-start
                gap-3
                md:gap-4
                flex-wrap
              "
            >

              {/* INSTAGRAM */}

              <img
                src={instagramIcon}
                alt="Instagram"
                className="
                  w-9
                  h-9
                  md:w-10
                  md:h-10
                  object-contain
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

              {/* FACEBOOK */}

              <img
                src={facebookIcon}
                alt="Facebook"
                className="
                  w-9
                  h-9
                  md:w-10
                  md:h-10
                  object-contain
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

              {/* LINKEDIN */}

              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="
                  w-9
                  h-9
                  md:w-10
                  md:h-10
                  object-contain
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

              {/* YOUTUBE */}

              <img
                src={youtubeIcon}
                alt="YouTube"
                className="
                  mt-3
                  md:mt-4
                  w-9
                  h-9
                  md:w-10
                  md:h-10
                  object-contain
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

              {/* TWITTER */}

              <img
                src={twitterIcon}
                alt="Twitter"
                className="
                  w-9
                  h-9
                  md:w-10
                  md:h-10
                  object-contain
                  hover:scale-110
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

            </div>

          </div>

          {/* CENTER */}

          <div className="text-center md:text-left">

            <h3 className="text-[24px] md:text-[28px] font-black mb-5 md:mb-6">
              Navigate
            </h3>

            <div
              className="
                space-y-3
                md:space-y-4
                flex
                flex-col
                text-[16px]
                md:text-[17px]
                font-medium
              "
            >

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFF200] font-black"
                    : "text-white/80 hover:text-[#FFF200] transition-all duration-300"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFF200] font-black"
                    : "text-white/80 hover:text-[#FFF200] transition-all duration-300"
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/academics"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFF200] font-black"
                    : "text-white/80 hover:text-[#FFF200] transition-all duration-300"
                }
              >
                Academics
              </NavLink>

              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFF200] font-black"
                    : "text-white/80 hover:text-[#FFF200] transition-all duration-300"
                }
              >
                Events
              </NavLink>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFF200] font-black"
                    : "text-white/80 hover:text-[#FFF200] transition-all duration-300"
                }
              >
                Gallery
              </NavLink>

              <NavLink
                to="/admissions"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFF200] font-black"
                    : "text-white/80 hover:text-[#FFF200] transition-all duration-300"
                }
              >
                Admissions
              </NavLink>

            </div>

          </div>

          {/* RIGHT */}

          <div className="text-center md:text-left">

            <h3 className="text-[24px] md:text-[28px] font-black mb-5 md:mb-6">
              Contact
            </h3>

            <div className="space-y-5 md:space-y-6">

              {/* PHONE */}

              <div>

                <h4 className="font-black text-[18px] md:text-[20px] mb-1">
                  Phone
                </h4>

                <p className="text-white/80 text-[15px] md:text-[17px] leading-7">
                  +91 6306034180
                </p>

              </div>

              {/* ADDRESS */}

              <div>

                <h4 className="font-black text-[18px] md:text-[20px] mb-1">
                  Address
                </h4>

                <p className="text-white/80 text-[15px] md:text-[17px] leading-7 md:leading-8">
                  Arjun Enclave, Plot 16817,
                  <br />
                  Kursi Rd, Phase 2, Guramba,
                  <br />
                  Lucknow, UP — 226021
                </p>

              </div>

              {/* HOURS */}

              <div>

                <h4 className="font-black text-[18px] md:text-[20px] mb-1">
                  Hours
                </h4>

                <p className="text-white/80 text-[15px] md:text-[17px] leading-7">
                  Mon–Sat · 8:00 AM – 1:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-10
            md:mt-12
            pt-5
            text-center
            md:text-left
          "
        >

          <p
            className="
              text-white/90
              text-[13px]
              md:text-[15px]
              leading-6
              md:leading-7
            "
          >

            © 2025
            <span className="text-[#FFF200] font-black">
              {" "}Kidzee Kursi Road Pre School
            </span>

            , Lucknow. A
            <span className="text-[#FFF200] font-black">
              {" "}Zeelearn{" "} 
            </span>

             Franchise. All rights reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;