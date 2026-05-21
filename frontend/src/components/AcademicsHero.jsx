// AcademicsHero.jsx

import heroImage from "../assets/academics1.png";
import blockShape from "../assets/block-shape.png";

const AcademicsHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-[140px]
        md:pt-[180px]
        pb-24
        md:pb-32
      "
      style={{
        background:
          "linear-gradient(135deg, #732D92 0%, #5B2B95 100%)",
      }}
    >

      {/* BACKGROUND BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          top-[60px]
          left-[-180px]
          w-[420px]
          md:w-[620px]
          opacity-20
          rotate-[-20deg]
          animate-[float1_7s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          bottom-[-140px]
          right-[-140px]
          w-[460px]
          md:w-[700px]
          opacity-20
          rotate-[18deg]
          animate-[float2_8s_ease-in-out_infinite]
        "
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* LEFT CONTENT */}

          <div className="lg:pt-8">

            <h1
              className="
                text-white
                text-[42px]
                sm:text-[56px]
                md:text-[74px]
                leading-[1]
                font-black
                mb-7
                max-w-[700px]
              "
            >
              Building Minds,
              <br />

              Shaping Futures:
              <span className="block text-[#FFE600]">
                Academics at Kidzee
              </span>
            </h1>

            <p
              className="
                text-white/90
                text-[17px]
                md:text-[21px]
                leading-8
                md:leading-10
                max-w-[620px]
                mb-10
              "
            >
              Our comprehensive curriculum nurtures holistic
              development for lifelong learning.
            </p>

            {/* BUTTON */}

            <div className="flex flex-wrap gap-5">

              <button
                className="
                  bg-white
                  text-primary

                  px-7
                  md:px-8

                  py-3
                  md:py-4

                  rounded-full

                  font-black

                  text-sm
                  md:text-base

                  shadow-2xl

                  hover:scale-105

                  transition-all
                  duration-300
                "
              >
                Apply For Admission →
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative flex justify-center lg:justify-end">

            {/* IMAGE GLOW */}

            <div
              className="
                absolute
                inset-0
                bg-[#D38EFF]
                blur-[120px]
                opacity-30
              "
            ></div>

            {/* IMAGE CARD */}

            <div
              className="
                relative
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-3
                rounded-[42px]
                shadow-2xl
                max-w-[560px]
              "
            >

              <img
                src={heroImage}
                alt="Kidzee Academics"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-[32px]
                "
              />

              {/* FLOATING BADGE */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5

                  bg-[#FFE600]

                  px-6
                  py-3

                  rounded-full

                  shadow-xl

                  font-black
                  text-black

                  text-sm
                  md:text-base
                "
              >
                Future-Ready Learning
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM WAVE */}

      <div
        className="
          absolute
          bottom-[-1px]
          left-0
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          viewBox="0 0 1440 220"
          className="w-full h-[120px] md:h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F4E8FB"
            d="M0,160L80,149.3C160,139,320,117,480,96C640,75,800,53,960,64C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

    </section>
  );
};

export default AcademicsHero;