// AboutCTA.jsx

import blockShape from "../assets/block-shape.png";

const AboutCTA = () => {
  return (
    <section
      className="
        relative

        overflow-hidden

        bg-[#6D24A5]

        py-24
        md:py-32
      "
    >

      {/* MAIN GLOW */}

      <div
        className="
          absolute

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[600px]
          h-[600px]

          rounded-full

          bg-[#B46DFF]

          opacity-60

          blur-[140px]
        "
      ></div>

      {/* FLOATING BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[5%]
          top-[60px]

          w-[100px]
          md:w-[860px]

          opacity-90

          rotate-[20deg]

          animate-[float1_8s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[4%]
          bottom-[40px]

          w-[440px]
          md:w-[820px]

          opacity-80

          rotate-[-18deg]

          animate-[float2_9s_ease-in-out_infinite]
        "
      />

      {/* CONTENT */}

      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">

        {/* LABEL */}

        <p
          className="
            uppercase

            tracking-[4px]

            text-[#FFF200]

            text-sm

            font-black

            mb-6
          "
        >
          Join The Kidzee Family
        </p>

        {/* HEADING */}

        <h2
          className="
            text-white

            text-[42px]
            md:text-[72px]

            leading-[1]

            font-black

            mb-8
          "
        >
          Ready To Begin
          <br />
          Your Child’s Journey?
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-white/80

            text-[17px]
            md:text-[20px]

            leading-9

            max-w-[760px]

            mx-auto

            mb-12
          "
        >
          Join the Kidzee family and give your child
          a joyful, nurturing, and inspiring foundation
          for lifelong learning, confidence, creativity,
          and growth.
        </p>

        {/* BUTTON */}

        <button
          className="
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

            transition-all
            duration-300

            hover:scale-105
            hover:bg-white
          "
        >
          Schedule A Visit →
        </button>

      </div>

    </section>
  );
};

export default AboutCTA;