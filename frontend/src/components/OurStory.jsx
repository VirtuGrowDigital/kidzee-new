import campusImage from "../assets/school.webp";
import blockShape from "../assets/block-shape.png";

const OurStory = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEDFFD] py-24 md:py-32">

      {/* FLOATING BLOCKS */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          right-[8%]
          top-[40px]

          w-[420px]
          md:w-[770px]

          opacity-80

          rotate-[20deg]

          animate-[float1_8s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute

          left-[-20px]
          bottom-[60px]

          w-[120px]
          md:w-[630px]

          opacity-90

          rotate-[-18deg]

          animate-[float2_9s_ease-in-out_infinite]
        "
      />

      <div className="max-w-[1280px] mx-auto px-6">

        <div
          className="
            grid
            lg:grid-cols-2

            gap-14
            lg:gap-20

            items-center
          "
        >

          {/* IMAGE */}

          <div className="relative">

            {/* SHADOW LAYER */}

            <div
              className="
                absolute

                bottom-[-14px]
                right-[-14px]

                w-full
                h-full

                rounded-[40px]

                bg-[#CFA8EB]
              "
            ></div>

            {/* IMAGE */}

            <img
              src={campusImage}
              alt="Kidzee Campus"
              className="
                relative

                w-full

                rounded-[40px]

                object-cover

                z-10
              "
            />

          </div>

          {/* CONTENT */}

          <div className="relative z-10">

            {/* LABEL */}

            <p
              className="
                uppercase

                tracking-[3px]

                text-primary

                text-sm

                font-black

                mb-5
              "
            >
              Govt. Recognised
            </p>

            {/* TITLE */}

            <h2
              className="
                text-black

                text-[40px]
                md:text-[64px]

                leading-[1]

                font-black

                mb-8
              "
            >
              OUR STORY
            </h2>

            {/* TEXT */}

            <p
              className="
                text-[#333]

                text-[16px]
                md:text-[18px]

                leading-8

                mb-8
              "
            >
              Founded in Lucknow, Kidzee Preschool has been a
              beacon of early childhood education where every
              child is encouraged to explore, learn, and grow
              with confidence.
            </p>

            <p
              className="
                text-[#333]

                text-[16px]
                md:text-[18px]

                leading-8

                mb-10
              "
            >
              Through joyful learning experiences, caring
              educators, and activity-based education, we
              help children develop creativity, curiosity,
              communication, and lifelong learning skills.
            </p>

            {/* BUTTON */}

            <button
              className="
                bg-primary

                text-white

                px-8
                py-4

                rounded-full

                font-black

                text-sm

                transition-all
                duration-300

                hover:scale-105
              "
            >
              Book A Campus Visit →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;