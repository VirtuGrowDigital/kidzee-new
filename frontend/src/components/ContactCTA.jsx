// src/components/contact/ContactCTA.jsx

import blockShape from "../assets/block-shape.png";

const ContactCTA = () => {
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

      {/* BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[5%]
          top-[50px]

          w-[140px]
          md:w-[220px]

          opacity-50

          rotate-[20deg]
        "
      />

      {/* CONTENT */}

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">

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
          We’d Love To
          <br />
          Welcome You
        </h2>

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
          Visit our campus and experience a joyful learning
          environment designed to help every child grow
          with confidence and happiness.
        </p>

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

            transition-all
            duration-300

            hover:scale-105
            hover:bg-white
          "
        >
          Schedule A Campus Tour →
        </button>

      </div>

    </section>
  );
};

export default ContactCTA;