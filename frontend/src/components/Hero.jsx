// Hero.jsx

import { Link } from "react-router-dom";

import heroImg from "../assets/hero-child.webp";
import aboutImg from "../assets/about-school.webp";

import awardIcon from "../assets/award 1.png";
import educationIcon from "../assets/education 1.png";
import peopleIcon from "../assets/people 1.png";
import trophyIcon from "../assets/trophy 1.png";

import { Check } from "lucide-react";

const points = [
  "CCTV-monitored, hygienic and safe campus",
  "Daily nutrition and developmental progress reports",
  "Structured parent–teacher communication framework",
  "Inclusive education for children with special needs",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#D9C1EA]">

      {/* HERO SECTION */}

      <div className="relative bg-primary overflow-hidden min-h-[920px]">

        {/* TOP WHITE CURVE */}

        <div className="absolute top-0 left-0 w-full z-0">

          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[250px]"
            preserveAspectRatio="none"
            fill="#F5F5F5"
          >

            <path
              d="
                M0,180
                C220,250 520,70 860,85
                C1120,95 1280,150 1440,250
                L1440,320
                L0,320
                Z
              "
            />

          </svg>

        </div>

        {/* WHITE AREA */}

        <div className="absolute top-[180px] left-0 w-full h-[72%] bg-[#F5F5F5] z-0"></div>

        {/* BOTTOM WAVE */}

        <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden">

          <svg
            viewBox="0 0 1440 500"
            className="w-full h-[520px]"
            preserveAspectRatio="none"
            fill="#D9C1EA"
          >

            <path
              d="
                M0,420
                C180,430 340,360 520,240
                C720,110 980,80 1180,160
                C1320,215 1400,290 1440,330
                L1440,500
                L0,500
                Z
              "
            />

          </svg>

        </div>

        {/* HERO CONTENT */}

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 pt-40">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}

            <div>

              {/* TAG */}

              <div className="inline-flex items-center bg-yellow text-primary px-5 py-2 rounded-full text-sm font-extrabold mb-8 shadow-sm">
                • ADMISSIONS OPEN - 2026-27
              </div>

              {/* HEADING */}

              <h1 className="text-[60px] md:text-[72px] leading-[0.95] font-black text-black tracking-[-2px]">
                Where Little Minds
              </h1>

              <h2 className="text-[54px] md:text-[64px] leading-[1] font-black text-primary mt-2 mb-8 tracking-[-2px]">
                Bloom & Grow
              </h2>

              {/* DESCRIPTION */}

              <p className="text-[18px] leading-9 text-[#333] max-w-[560px] mb-10 font-semibold">
                A warm, play-based learning haven in Lucknow where every child
                builds confidence, creativity, and a genuine love for discovery
                — right from the start.
              </p>

              {/* BUTTONS */}

              <div className="flex items-center gap-5 flex-wrap">

                {/* ENROLL */}

                <Link to="/contact#interactive-form">

                  <button
                    className="
                      bg-primary

                      text-white

                      px-8
                      py-4

                      rounded-full

                      font-extrabold

                      shadow-xl

                      hover:scale-105

                      transition-all
                      duration-300
                    "
                  >
                    Enroll Your Child →
                  </button>

                </Link>

                {/* LEARN MORE */}

                <Link to="/about">

                  <button
                    className="
                      border-2
                      border-primary

                      text-primary

                      px-8
                      py-4

                      rounded-full

                      font-extrabold

                      hover:bg-primary
                      hover:text-white

                      transition-all
                      duration-300
                    "
                  >
                    Learn More
                  </button>

                </Link>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="relative flex justify-center">

              <div className="relative translate-y-[-10px]">

                {/* IMAGE BORDER */}

                <div className="absolute inset-0 rounded-[42px] border-[6px] border-[#bf90d7] z-20"></div>

                {/* IMAGE */}

                <img
                  src={heroImg}
                  alt="Kidzee Child"
                  className="
                    relative
                    z-10

                    w-[360px]
                    h-[520px]

                    rounded-[42px]

                    object-cover

                    shadow-2xl
                  "
                />

                {/* BADGE */}

                <div
                  className="
                    absolute

                    bottom-[-16px]
                    right-[-28px]

                    bg-primary

                    text-white

                    px-6
                    py-4

                    rounded-[22px]

                    shadow-2xl

                    z-30
                  "
                >

                  <p className="text-[11px] uppercase opacity-80 font-bold">
                    NEW BATCH
                  </p>

                  <h3 className="text-[18px] font-black leading-tight">
                    Seats Filling Fast!
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* STATS */}

          <div className="relative z-20 max-w-[1120px] mx-auto mt-20 pb-16">

            <div
              className="
                bg-primary

                rounded-[34px]

                px-10
                py-7

                grid
                grid-cols-2
                lg:grid-cols-4

                gap-8

                shadow-2xl
              "
            >

              {/* ITEM 1 */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    bg-[#8A42AD]

                    w-[68px]
                    h-[68px]

                    rounded-2xl

                    flex
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={awardIcon}
                    alt=""
                    className="w-9 h-9 object-contain"
                  />

                </div>

                <div>

                  <h3 className="text-white text-4xl font-black">
                    5+
                  </h3>

                  <p className="text-white/80 text-sm font-semibold">
                    Years Of Excellence
                  </p>

                </div>

              </div>

              {/* ITEM 2 */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    bg-[#8A42AD]

                    w-[68px]
                    h-[68px]

                    rounded-2xl

                    flex
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={educationIcon}
                    alt=""
                    className="w-9 h-9 object-contain"
                  />

                </div>

                <div>

                  <h3 className="text-white text-4xl font-black">
                    2400+
                  </h3>

                  <p className="text-white/80 text-sm font-semibold">
                    Happy Graduates
                  </p>

                </div>

              </div>

              {/* ITEM 3 */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    bg-[#8A42AD]

                    w-[68px]
                    h-[68px]

                    rounded-2xl

                    flex
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={peopleIcon}
                    alt=""
                    className="w-9 h-9 object-contain"
                  />

                </div>

                <div>

                  <h3 className="text-white text-4xl font-black">
                    30+
                  </h3>

                  <p className="text-white/80 text-sm font-semibold">
                    Expert Teachers
                  </p>

                </div>

              </div>

              {/* ITEM 4 */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    bg-[#8A42AD]

                    w-[68px]
                    h-[68px]

                    rounded-2xl

                    flex
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={trophyIcon}
                    alt=""
                    className="w-9 h-9 object-contain"
                  />

                </div>

                <div>

                  <h3 className="text-white text-4xl font-black">
                    12
                  </h3>

                  <p className="text-white/80 text-sm font-semibold">
                    National Awards
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ABOUT SECTION */}

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div
              className="
                absolute

                bottom-[-16px]
                right-[-16px]

                w-full
                h-full

                bg-[#B98AD9]

                rounded-[42px]

                z-0
              "
            ></div>

            <img
              src={aboutImg}
              alt="Kidzee About"
              className="
                relative
                z-10

                rounded-[42px]

                w-full
                h-[500px]

                object-cover

                shadow-2xl
              "
            />

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p
              className="
                uppercase

                tracking-[3px]

                text-primary

                font-black

                text-sm

                mb-5
              "
            >
              About Kidzee Lucknow
            </p>

            <h2
              className="
                text-[42px]
                md:text-[58px]

                leading-[1.05]

                font-black

                text-black

                mb-8
              "
            >
              A Safe Space To Learn,

              <span className="block">
                Play And Thrive
              </span>

            </h2>

            <p
              className="
                text-[#333]

                text-[18px]

                leading-9

                font-semibold

                mb-10
              "
            >
              Established in Lucknow in 2010, Kidzee has been at the forefront
              of early childhood education. Our curriculum — crafted by child
              development experts — ensures every child aged 1.5 to 6 receives
              a holistic, joyful foundation for life.
            </p>

            {/* POINTS */}

            <div className="space-y-5 mb-10">

              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="bg-[#FFEEE3] p-2 rounded-full">

                    <Check
                      size={18}
                      className="text-[#F97315]"
                    />

                  </div>

                  <p className="font-bold text-[17px] text-[#333]">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* BUTTON */}

            <Link to="/contact#interactive-form">

              <button
                className="
                  bg-primary

                  text-white

                  px-8
                  py-4

                  rounded-full

                  font-extrabold

                  shadow-xl

                  hover:scale-105

                  transition-all
                  duration-300
                "
              >
                Book A Campus Visit →
              </button>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;