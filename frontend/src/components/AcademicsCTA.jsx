// AcademicsCTA.jsx

import blockShape from "../assets/block2.png";

const AcademicsCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#6D24A5] pt-10 pb-28">

      {/* FLOATING BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          left-[-80px]
          top-[100px]

          w-[180px]
          md:w-[240px]

          opacity-10

          rotate-[25deg]

          animate-[float1_7s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          right-[-70px]
          bottom-[50px]

          w-[180px]
          md:w-[230px]

          opacity-10

          rotate-[-18deg]

          animate-[float2_8s_ease-in-out_infinite]
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          absolute
          top-[-180px]
          left-1/2

          -translate-x-1/2

          w-[600px]
          h-[600px]

          bg-[#A855F7]

          opacity-20

          blur-[140px]

          rounded-full
        "
      ></div>

      {/* CONTENT */}

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">

        {/* LABEL */}

        <p
          className="
            uppercase
            tracking-[4px]

            text-[#FFF200]

            font-black
            text-sm

            mb-6
          "
        >
          Join The Kidzee Family
        </p>

        {/* HEADING */}

        <h2
          className="
            text-white

            text-[40px]
            md:text-[68px]

            leading-[1.1]

            font-black

            mb-8
          "
        >
          Ready To Shape
          <br />
          Your Child’s Future?
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-white/80

            text-[17px]
            md:text-[20px]

            leading-9

            max-w-[720px]
            mx-auto

            mb-12
          "
        >
          Give your child a joyful learning environment filled
          with creativity, confidence, communication, and
          future-ready skills through Kidzee’s innovative
          curriculum.
        </p>

        {/* CTA BUTTON */}

        <button
          className="
            group

            relative

            bg-[#FFF200]

            text-primary

            px-10
            md:px-12

            py-4
            md:py-5

            rounded-full

            font-black

            text-[15px]
            md:text-[16px]

            overflow-hidden

            transition-all
            duration-300

            hover:scale-105

            shadow-[0_10px_40px_rgba(255,242,0,0.35)]
          "
        >

          <span className="relative z-10">
            Book A Campus Visit →
          </span>

          {/* BUTTON SHINE */}

          <div
            className="
              absolute
              inset-0

              bg-white/40

              opacity-0

              group-hover:opacity-100

              transition-all
              duration-300
            "
          ></div>

        </button>

      </div>

    </section>
  );
};

export default AcademicsCTA;