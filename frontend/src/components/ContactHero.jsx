// src/components/contact/ContactHero.jsx

import blockShape from "../assets/block-shape.png";

const ContactHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#6D24A5]

        pt-[170px]
        md:pt-[210px]

        pb-[160px]
        md:pb-[220px]
      "
    >

      {/* GLOW */}

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

          opacity-20

          blur-[140px]
        "
      ></div>

      {/* BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[-60px]
          top-[120px]

          w-[240px]
          md:w-[420px]

          opacity-70

          rotate-[20deg]

          animate-[float1_8s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[-80px]
          bottom-[40px]

          w-[300px]
          md:w-[620px]

          opacity-80

          rotate-[-18deg]

          animate-[float2_9s_ease-in-out_infinite]
        "
      />

      {/* CONTENT */}

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">

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
          Contact Kidzee
        </p>

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
          Let’s Build Bright
          <br />
          Futures Together
        </h1>

        <p
          className="
            text-white/80

            text-[17px]
            md:text-[21px]

            leading-9

            max-w-[760px]
            mx-auto
          "
        >
          We would love to connect with you. Reach out for
          admissions, campus visits, event enrollments,
          or any enquiry regarding your child’s learning journey.
        </p>

      </div>

      {/* WAVE */}

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

export default ContactHero;