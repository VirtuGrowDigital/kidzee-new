import { useNavigate } from "react-router-dom";

const GalleryCTA = () => {

  const navigate = useNavigate();

  return (

    <section
      className="
        relative

        overflow-hidden

        bg-[#6D24A5]
        
        py-28
      "
    >

      {/* TOP WAVE */}

      <div
        className="
          absolute

          top-0
          left-0

          w-full

          h-[80px]

          bg-[#F5F5F5]

          rounded-b-[100px]
        "
      ></div>

      {/* FLOATING SHAPES */}

      <div
        className="
          absolute

          left-[120px]
          top-[120px]

          w-[110px]
          h-[110px]

          rounded-[28px]

          bg-[#B46AD8]

          opacity-30

          rotate-[20deg]
        "
      ></div>

      <div
        className="
          absolute

          right-[100px]
          bottom-[80px]

          w-[110px]
          h-[110px]

          rounded-[28px]

          bg-[#B46AD8]

          opacity-30

          rotate-[20deg]
        "
      ></div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          max-w-5xl
          mx-auto

          px-6

          text-center
        "
      >

        {/* HEADING */}

        <h2
          className="
            text-white

            text-[36px]
            md:text-[58px]

            leading-[1.1]

            font-black

            mb-6
          "
        >
          Ready to be part
          <span className="block text-[#FFF200] mt-2">
            of our family?
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-white/80

            text-lg
            md:text-xl

            leading-9

            max-w-3xl

            mx-auto

            mb-12
          "
        >
          Join hundreds of happy families who trust
          Kidzee for their child’s joyful learning
          journey and holistic development.
        </p>

        {/* BUTTON */}

        <button
          onClick={() =>
            navigate("/contact#enquiry-form")
          }

          className="
            bg-white

            text-[#6D24A5]

            px-10
            py-5

            rounded-full

            text-lg

            font-black

            shadow-2xl

            hover:scale-105

            transition-all
            duration-300
          "
        >
          Book A Campus Visit →
        </button>

      </div>

    </section>
  );
};

export default GalleryCTA;