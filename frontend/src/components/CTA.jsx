// CTA.jsx

import { Link } from "react-router-dom";

import palette1 from "../assets/paint-palette 1.png";
import palette2 from "../assets/paint-palette 2.png";
import star1 from "../assets/star 2.png";
import star2 from "../assets/star 4.png";
import pen1 from "../assets/fountain-pen-close-up 2.png";
import pen2 from "../assets/fountain-pen-close-up 3.png";

const CTA = () => {
  return (
    <section className="bg-primary py-32 relative overflow-hidden">

      {/* DECORATIONS */}

      {/* top left star */}

      <img
        src={star1}
        alt=""
        className="absolute top-20 left-24 w-14 opacity-90 animate-[float1_6s_ease-in-out_infinite]"
      />

      {/* left palette */}

      <img
        src={palette1}
        alt=""
        className="absolute top-[38%] left-52 w-16 opacity-90 animate-[float2_7s_ease-in-out_infinite]"
      />

      {/* bottom left pen */}

      <img
        src={pen1}
        alt=""
        className="absolute bottom-24 left-16 w-16 opacity-90 animate-[float3_8s_ease-in-out_infinite]"
      />

      {/* center star */}

      <img
        src={star2}
        alt=""
        className="absolute bottom-32 left-[38%] w-16 opacity-90 animate-[float4_7s_ease-in-out_infinite]"
      />

      {/* top right pen */}

      <img
        src={pen2}
        alt=""
        className="absolute top-24 right-64 w-16 opacity-90 animate-[float2_8s_ease-in-out_infinite]"
      />

      {/* top right star */}

      <img
        src={star1}
        alt=""
        className="absolute top-24 right-24 w-16 opacity-90 animate-[float1_6s_ease-in-out_infinite]"
      />

      {/* bottom right palette */}

      <img
        src={palette2}
        alt=""
        className="absolute bottom-24 right-60 w-16 opacity-90 animate-[float3_8s_ease-in-out_infinite]"
      />

      {/* bottom right pen */}

      <img
        src={pen2}
        alt=""
        className="absolute bottom-16 right-0 w-20 opacity-90 animate-[float4_9s_ease-in-out_infinite]"
      />

      {/* CONTENT */}

      <div className="container-custom text-center text-white relative z-10">

        {/* subtitle */}

        <p className="uppercase tracking-[4px] text-[14px] font-bold text-white/80 mb-6">
          LIMITED SEATS AVAILABLE
        </p>

        {/* heading */}

        <h2 className="text-[58px] md:text-[78px] leading-[0.95] font-black mb-8">

          <span className="block">
            Give Your Child the
          </span>

          <span className="block text-yellow mt-2">
            Best Start in Life
          </span>

        </h2>

        {/* description */}

        <p className="max-w-[780px] mx-auto leading-[44px] text-[24px] text-white/90 mb-12 font-extralight">
          Join the Kidzee family today. Admissions for 2026–27 are now open across all Lucknow campuses.
        </p>

        {/* BUTTONS */}

        <div className="flex justify-center flex-wrap gap-6">

          {/* APPLY BUTTON */}

          <Link to="/contact">

            <button
              className="
                bg-white

                text-primary

                px-10
                py-5

                rounded-full

                font-black

                text-[18px]

                shadow-2xl

                hover:scale-105

                transition-all
                duration-300
              "
            >
              Apply For Admission →
            </button>

          </Link>

          {/* LEARN MORE */}

          <Link to="/about">

            <button
              className="
                border-2
                border-white

                text-white

                px-10
                py-5

                rounded-full

                font-black

                text-[18px]

                hover:bg-white
                hover:text-primary

                transition-all
                duration-300
              "
            >
              Learn More
            </button>

          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;