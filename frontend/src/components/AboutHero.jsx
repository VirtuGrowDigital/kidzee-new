// AboutHero.jsx

import blockShape from "../assets/block2.png";

const AboutHero = () => {
  return (
    <section
      className="
        relative

        bg-[#6D24A5]

        overflow-hidden

        pt-[170px]
        md:pt-[210px]

        pb-[180px]
        md:pb-[240px]
      "
    >

      {/* HUGE LEFT BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[-140px]
          top-[140px]

          w-[320px]
          md:w-[500px]

          opacity-90

          rotate-[25deg]

          animate-[float1_7s_ease-in-out_infinite]
        "
      />

      {/* HUGE RIGHT BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[-140px]
          top-[220px]

          w-[300px]
          md:w-[460px]

          opacity-90

          rotate-[-18deg]

          animate-[float2_8s_ease-in-out_infinite]
        "
      />

      {/* BOTTOM LEFT BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[6%]
          bottom-[120px]

          w-[170px]
          md:w-[250px]

          opacity-95

          rotate-[18deg]

          animate-[float3_9s_ease-in-out_infinite]
        "
      />

      {/* TOP SMALL RIGHT BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[10%]
          top-[90px]

          w-[120px]
          md:w-[180px]

          opacity-95

          rotate-[15deg]

          animate-[float4_8s_ease-in-out_infinite]
        "
      />

      {/* EXTRA CENTER LEFT BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[20%]
          top-[420px]

          w-[110px]
          md:w-[160px]

          opacity-90

          rotate-[-12deg]

          animate-[float2_10s_ease-in-out_infinite]
        "
      />

      {/* CENTER GLOW */}

      <div
        className="
          absolute

          top-[-220px]
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[700px]

          bg-[#A855F7]

          opacity-70

          blur-[140px]

          rounded-full
        "
      ></div>

      {/* CONTENT */}

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">

        {/* LABEL */}

        <div
          className="
            inline-flex

            items-center
            justify-center

            bg-white/10

            border
            border-white/10

            backdrop-blur-md

            px-6
            py-3

            rounded-full

            text-[#FFF200]

            text-sm
            font-black

            tracking-[3px]

            uppercase

            mb-8
          "
        >
          About Kidzee
        </div>

        {/* HEADING */}

        <h1
          className="
            text-white

            text-[44px]
            md:text-[78px]

            leading-[1]

            font-black

            mb-8
          "
        >
          Inspiring Young Minds
          <br />
          Through Joyful Learning
        </h1>

        {/* DESCRIPTION */}

        <p
          className="
            text-white/80

            text-[17px]
            md:text-[22px]

            leading-9

            max-w-[780px]
            mx-auto

            mb-12
          "
        >
          At Kidzee, we believe every child is unique.
          Our nurturing environment, innovative curriculum,
          and caring educators help children grow with
          confidence, creativity, curiosity, and compassion.
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
          Explore Our Journey →
        </button>

      </div>

      {/* BOTTOM WAVE */}

      <div className="absolute bottom-0 left-0 w-full leading-none">

        <svg
          viewBox="0 0 1440 220"
          className="w-full h-[120px] md:h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

      </div>

    </section>
  );
};

export default AboutHero;