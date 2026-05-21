import blockShape from "../assets/block-shape.png";

const GalleryHero = () => {
  return (
    <section
      className="
        relative

        overflow-hidden

        bg-primary

        pt-[140px]
        pb-[180px]

        md:pt-[170px]
        md:pb-[220px]
      "
    >

      {/* TOP BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          top-[140px]
          left-[18%]

          w-[720px]

          opacity-80

          rotate-[20deg]
        "
      />

      {/* RIGHT BLOCK */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[12%]
          top-[280px]

          w-[585px]

          opacity-70

          rotate-[-18deg]
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          max-w-[950px]

          mx-auto

          px-6

          text-center
        "
      >

        <h1
          className="
            text-white

            text-[42px]
            md:text-[62px]

            leading-[0.95]

            font-black

            mb-6
          "
        >

          <span className="block">
            Our Happy Moments
          </span>

          <span className="block text-[#FFF200] mt-3">
            At Kidzee Kursi Road
          </span>

        </h1>

        <p
          className="
            max-w-[760px]

            mx-auto

            text-white/90

            text-[18px]
            md:text-[28px]

            leading-[1.6]

            font-light
          "
        >
          Glimpses of learning, laughter,
          creativity and unforgettable
          childhood memories.
        </p>

      </div>

      {/* CURVED BOTTOM */}

      <div
        className="
          absolute

          bottom-0
          left-0

          w-full

          overflow-hidden

          leading-none
        "
      >

        <svg
          viewBox="0 0 1440 220"
          className="
            relative

            block

            w-full

            h-[140px]
            md:h-[220px]
          "
          preserveAspectRatio="none"
        >

          <path
            fill="#ffffff"
            d="
              M0,64
              C240,220
              480,220
              720,120

              C960,20
              1200,20
              1440,180

              L1440,320
              L0,320
              Z
            "
          />

        </svg>

      </div>

    </section>
  );
};

export default GalleryHero;