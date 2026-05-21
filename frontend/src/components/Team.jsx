// Team.jsx

import blockShape from "../assets/block-shape.png";

import teacher1 from "../assets/teacher 1.avif";
import teacher2 from "../assets/teacher 2.avif";
import teacher3 from "../assets/teacher 3.webp";

const teamMembers = [
  {
    image: teacher1,
    name: "Priya Sharma",
    role: "Principal",
  },

  {
    image: teacher2,
    name: "Ananya Verma",
    role: "Academic Head",
  },

  {
    image: teacher3,
    name: "Sneha Kapoor",
    role: "Child Mentor",
  },
];

const Team = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">

      {/* FLOATING BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[-80px]
          top-[100px]

          w-[220px]
          sm:w-[320px]
          md:w-[460px]

          opacity-80

          rotate-[18deg]

          animate-[float1_8s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[-120px]
          bottom-[40px]

          w-[260px]
          sm:w-[500px]
          md:w-[980px]

          opacity-80

          rotate-[-18deg]

          animate-[float2_9s_ease-in-out_infinite]
        "
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">

        {/* HEADING */}

        <div className="text-center mb-16 md:mb-20">

          <p
            className="
              uppercase

              tracking-[3px]

              text-primary

              text-xs
              sm:text-sm
              md:text-base

              font-black
            "
          >
            THE PEOPLE BEHIND KIDZEE
          </p>

        </div>

        {/* TEAM GRID */}

        <div
          className="
            flex
            flex-wrap

            justify-center

            gap-y-14
            gap-x-8

            lg:grid
            lg:grid-cols-3
            lg:gap-8
          "
        >

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                relative

                w-full
                max-w-[320px]

                sm:w-[46%]
                lg:w-full

                pt-14
              "
            >

              {/* IMAGE CIRCLE */}

              <div
                className="
                  absolute

                  top-0
                  left-1/2

                  -translate-x-1/2

                  w-[82px]
                  h-[82px]

                  sm:w-[88px]
                  sm:h-[88px]

                  md:w-[92px]
                  md:h-[92px]

                  rounded-full

                  border-[3px]
                  border-black

                  overflow-hidden

                  bg-[#E5D8F7]

                  z-20
                "
              >

                {/* IMAGE */}

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full

                    object-cover
                  "
                />

              </div>

              {/* CARD */}

              <div
                className="
                  relative

                  overflow-hidden

                  bg-[#E5D8F7]

                  rounded-[26px]
                  md:rounded-[30px]

                  pt-14
                  md:pt-16

                  pb-7
                  md:pb-8

                  px-5
                  md:px-6

                  text-center

                  transition-all
                  duration-300

                  hover:-translate-y-2
                "
              >

                {/* CARD GLOW */}

                <div
                  className="
                    absolute

                    inset-0

                    rounded-[30px]

                    bg-[#C084FC]

                    opacity-20

                    blur-[40px]

                    -z-10
                  "
                ></div>

                {/* TOP SHINE */}

                <div
                  className="
                    absolute

                    top-[-60px]
                    right-[-40px]

                    w-[120px]
                    h-[120px]

                    md:w-[140px]
                    md:h-[140px]

                    rounded-full

                    bg-white

                    opacity-30

                    blur-[40px]
                  "
                ></div>

                {/* NAME */}

                <h3
                  className="
                    relative
                    z-10

                    text-black

                    text-[24px]
                    sm:text-[26px]
                    md:text-[30px]

                    leading-tight

                    font-black

                    mb-4
                    md:mb-5
                  "
                >
                  {member.name}
                </h3>

                {/* ROLE */}

                <div
                  className="
                    relative
                    z-10

                    inline-flex

                    items-center
                    justify-center

                    px-6
                    md:px-8

                    py-2.5
                    md:py-3

                    rounded-full

                    bg-[#BB90DD]

                    text-[#6B21A8]

                    text-xs
                    md:text-sm

                    font-bold
                  "
                >
                  {member.role}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Team;