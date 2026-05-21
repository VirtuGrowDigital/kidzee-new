// MilestonesTimeline.jsx

import { useState } from "react";
import blockShape from "../assets/block2.png";

const milestones = [
  {
    age: "18 months - 2 years",
    title: "Toddler Explorers",
    short:
      "Sensory play, movement, music, and joyful discovery activities.",
  },
  {
    age: "2 - 3 Years",
    title: "Playgroup Pioneers",
    short:
      "Building confidence, communication, and playful learning habits.",
  },
  {
    age: "3 - 4 Years",
    title: "Nursery Navigators",
    short:
      "Introducing literacy, numeracy, creativity, and self-expression.",
  },
  {
    age: "4 - 5 Years",
    title: "Junior Kindergarten",
    short:
      "Strengthening logical thinking, creativity, and communication skills.",
  },
  {
    age: "5 - 6 Years",
    title: "Senior Kindergarten",
    short:
      "Preparing children academically and socially for primary school.",
  },
];

const MilestonesTimeline = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative bg-[#EDE2F7] overflow-hidden pt-28 md:pt-36">

      {/* FLOATING BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          left-[-70px]
          top-[260px]

          w-[160px]
          md:w-[220px]

          opacity-25

          rotate-[28deg]

          animate-[float1_7s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          right-[8%]
          top-[480px]

          w-[120px]
          md:w-[170px]

          opacity-20

          rotate-[-25deg]

          animate-[float2_8s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          left-[-80px]
          bottom-[360px]

          w-[170px]
          md:w-[230px]

          opacity-20

          rotate-[18deg]

          animate-[float3_9s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          right-[-40px]
          bottom-[300px]

          w-[150px]
          md:w-[210px]

          opacity-20

          rotate-[-12deg]

          animate-[float4_8s_ease-in-out_infinite]
        "
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">

        {/* HEADING */}

        <div className="text-center mb-24">

          <p
            className="
              uppercase
              tracking-[4px]
              text-primary
              font-black
              text-sm
              mb-5
            "
          >
            Growth Journey
          </p>

          <h2
            className="
              text-[40px]
              md:text-[64px]

              leading-[1.1]

              font-black
              text-primary

              mb-6
            "
          >
            Learning Milestones Timeline
          </h2>

          <p
            className="
              text-[#555]

              text-[17px]
              md:text-[20px]

              leading-8

              max-w-[760px]
              mx-auto
            "
          >
            Track your child’s developmental journey through
            age-appropriate learning milestones.
          </p>

        </div>

        {/* TIMELINE */}

        <div className="relative pb-32">

          {/* CENTER LINE */}

          <div
            className="
              hidden lg:block

              absolute
              left-1/2
              top-0

              -translate-x-1/2

              w-[4px]
              h-full

              bg-[#7D2AB5]/20
            "
          >

            <div
              className="
                absolute
                inset-0

                bg-primary

                rounded-full
              "
            ></div>

          </div>

          {/* ITEMS */}

          <div className="space-y-16 lg:space-y-28">

            {milestones.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                    relative

                    flex
                    items-center

                    ${
                      isLeft
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                  `}
                >

                  {/* TIMELINE DOT */}

                  <div
                    className="
                      hidden lg:flex

                      absolute
                      left-1/2
                      top-1/2

                      -translate-x-1/2
                      -translate-y-1/2

                      w-5
                      h-5

                      rounded-full

                      bg-primary

                      border-[5px]
                      border-[#D9C0EE]

                      z-20
                    "
                  ></div>

                  {/* CARD WRAPPER */}

                  <div
                    className="
                      relative

                      w-full
                      lg:w-[42%]

                      h-[420px]
                      md:h-[380px]

                      perspective-[2000px]

                      cursor-pointer
                    "
                    onClick={() =>
                      setActiveCard(
                        activeCard === index ? null : index
                      )
                    }
                  >

                    {/* FLIP INNER */}

                    <div
                      className={`
                        relative
                        w-full
                        h-full

                        duration-700

                        transform-style-preserve-3d

                        lg:hover:rotate-y-180

                        ${
                          activeCard === index
                            ? "rotate-y-180"
                            : ""
                        }
                      `}
                    >

                      {/* FRONT SIDE */}

                      <div
                        className="
                          absolute
                          inset-0

                          bg-white

                          rounded-[36px]

                          px-8
                          md:px-12

                          py-10
                          md:py-12

                          shadow-[0_18px_40px_rgba(125,42,181,0.12)]

                          overflow-hidden

                          backface-hidden

                          flex
                          flex-col
                          justify-center
                        "
                      >

                        {/* CORNER SHAPE */}

                        <div
                          className="
                            absolute
                            top-[-70px]
                            right-[-70px]

                            w-[160px]
                            h-[160px]

                            bg-[#F3E9FB]

                            rounded-full
                          "
                        ></div>

                        {/* AGE */}

                        <div
                          className="
                            inline-flex

                            bg-[#FFF200]

                            px-7
                            py-3

                            rounded-full

                            text-primary

                            font-black
                            text-sm

                            mb-7

                            relative
                            z-10

                            w-fit
                          "
                        >
                          {item.age}
                        </div>

                        {/* TITLE */}

                        <h3
                          className="
                            text-[28px]
                            md:text-[36px]

                            leading-[1.2]

                            font-black
                            text-primary

                            mb-5

                            relative
                            z-10
                          "
                        >
                          {item.title}
                        </h3>

                        {/* TEXT */}

                        <p
                          className="
                            text-[#666]

                            text-[16px]
                            md:text-[17px]

                            leading-8

                            relative
                            z-10
                          "
                        >
                          {item.short}
                        </p>

                      </div>

                      {/* BACK SIDE */}

                      <div
                        className="
                          absolute
                          inset-0

                          min-h-full

                          bg-gradient-to-br
                          from-[#732D92]
                          to-[#5B2B95]

                          rounded-[36px]

                          p-10

                          text-white

                          rotate-y-180

                          backface-hidden

                          shadow-[0_18px_40px_rgba(125,42,181,0.25)]

                          overflow-hidden

                          flex
                          flex-col
                          justify-between
                        "
                      >

                        {/* TOP GLOW */}

                        <div
                          className="
                            absolute
                            top-[-100px]
                            right-[-100px]

                            w-[220px]
                            h-[220px]

                            bg-white/10

                            rounded-full
                          "
                        ></div>

                        {/* CONTENT */}

                        <div className="relative z-10">

                          {/* LABEL */}

                          <p
                            className="
                              uppercase
                              tracking-[4px]

                              text-[#FFF200]

                              text-xs
                              font-black

                              mb-4
                            "
                          >
                            Skills Developed
                          </p>

                          {/* TITLE */}

                          <h3
                            className="
                              text-[28px]
                              md:text-[34px]

                              font-black

                              leading-[1.2]

                              mb-6
                            "
                          >
                            {item.title}
                          </h3>

                          {/* FEATURES */}

                          <div className="space-y-4 text-white/90">

                            <div className="flex items-start gap-3">

                              <div className="w-2.5 h-2.5 rounded-full bg-[#FFF200] mt-2"></div>

                              <p className="leading-7 text-[15px]">
                                Communication & speaking confidence
                              </p>

                            </div>

                            <div className="flex items-start gap-3">

                              <div className="w-2.5 h-2.5 rounded-full bg-[#FFF200] mt-2"></div>

                              <p className="leading-7 text-[15px]">
                                Creativity through playful activities
                              </p>

                            </div>

                            <div className="flex items-start gap-3">

                              <div className="w-2.5 h-2.5 rounded-full bg-[#FFF200] mt-2"></div>

                              <p className="leading-7 text-[15px]">
                                Social interaction & emotional growth
                              </p>

                            </div>

                            <div className="flex items-start gap-3">

                              <div className="w-2.5 h-2.5 rounded-full bg-[#FFF200] mt-2"></div>

                              <p className="leading-7 text-[15px]">
                                Hands-on learning experiences
                              </p>

                            </div>

                          </div>

                        </div>

                        {/* BOTTOM */}

                        <div
                          className="
                            relative
                            z-10

                            flex
                            items-center
                            justify-between

                            mt-8
                          "
                        >

                          <div>

                            <p className="text-white/60 text-xs mb-1">
                              Recommended Age
                            </p>

                            <p className="font-black text-[#FFF200]">
                              {item.age}
                            </p>

                          </div>

                          <div
                            className="
                              bg-white/10

                              border
                              border-white/10

                              px-5
                              py-3

                              rounded-full

                              text-sm
                              font-bold

                              backdrop-blur-md
                            "
                          >
                            Kidzee Program
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* BOTTOM CURVE */}

      <div className="relative mt-10">

        <svg
          viewBox="0 0 1440 220"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#6D24A5"
            d="M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

      </div>

    </section>
  );
};

export default MilestonesTimeline;