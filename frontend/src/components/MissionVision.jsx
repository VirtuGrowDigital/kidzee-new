// MissionVision.jsx

import missionIcon from "../assets/heart 1.png";
import visionIcon from "../assets/view 1.png";
import blockShape from "../assets/block-shape.png";

const cards = [
  {
    icon: missionIcon,
    title: "Our Mission",
    description:
      "To provide a nurturing and stimulating environment where every child feels valued, safe, and inspired to explore their innate curiosity and develop holistically.",
    bg: "bg-[#F7F2DD]",
  },

  {
    icon: visionIcon,
    title: "Our Vision",
    description:
      "To be the leading preschool that shapes confident, creative, and compassionate individuals who are ready to thrive in an ever-changing world.",
    bg: "bg-[#F4F0FF]",
  },
];

const MissionVision = () => {
  return (
    <section
      className="
        relative

        overflow-hidden

        bg-[#6D24A5]

        py-20
        md:py-24
      "
    >

      {/* SOFT GLOW */}

      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          bg-[#B46DFF]

          opacity-20

          blur-[140px]

          rounded-full
        "
      ></div>

      {/* FLOATING BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[5%]
          top-[40px]

          w-[90px]
          md:w-[120px]

          opacity-50

          rotate-[18deg]

          animate-[float1_8s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[6%]
          bottom-[30px]

          w-[90px]
          md:w-[890px]

          opacity-90

          rotate-[-18deg]

          animate-[float2_9s_ease-in-out_infinite]
        "
      />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* CARDS */}

        <div
          className="
            grid
            md:grid-cols-2

            gap-6
            md:gap-8
          "
        >

          {cards.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.bg}

                relative

                rounded-[28px]

                p-7
                md:p-8

                shadow-[0_10px_35px_rgba(0,0,0,0.08)]

                transition-all
                duration-300

                hover:-translate-y-2
              `}
            >

              {/* BOX GLOW */}

              <div
                className="
                  absolute

                  inset-0

                  rounded-[28px]

                  bg-white

                  opacity-30

                  blur-[35px]

                  scale-[1.03]

                  -z-10
                "
              ></div>

              {/* ICON */}

              <div
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-[#D97704]

                  flex
                  items-center
                  justify-center

                  shadow-md

                  mb-5
                "
              >

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5 object-contain"
                />

              </div>

              {/* TITLE */}

              <h3
                className="
                  text-black

                  text-[24px]

                  font-black

                  mb-4
                "
              >
                {item.title}
              </h3>

              {/* TEXT */}

              <p
                className="
                  text-[#444]

                  text-[15px]

                  leading-7
                "
              >
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default MissionVision;