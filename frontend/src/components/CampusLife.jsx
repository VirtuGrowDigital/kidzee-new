import blur from "../assets/blur.png";

import schoolImg1 from "../assets/school-img.png";
import schoolImg2 from "../assets/school-img2.png";
import schoolImg3 from "../assets/school-img3.png";
import schoolImg4 from "../assets/school-img4.png";
import schoolImg5 from "../assets/school-img5.png";

const CampusLife = () => {
  return (
    <section className="relative overflow-hidden bg-[#E9D9F4] py-28">

      {/* BLUR EFFECTS */}

      {/* top right */}
      <img
        src={blur}
        alt=""
        className="absolute top-[-100px] right-0 w-[520px] opacity-80 pointer-events-none"
      />

      {/* bottom left */}
      <img
        src={blur}
        alt=""
        className="absolute bottom-0 left-0 w-[720px] rotate-180 opacity-80 pointer-events-none"
      />

      {/* CONTENT */}

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-primary font-black text-sm mb-5">
            CAMPUS LIFE
          </p>

          <h2 className="text-[42px] md:text-[64px] leading-[1] font-black text-black mb-6">
            A Glimpse Inside Kidzee
          </h2>

          <p className="text-[#333] text-[20px] leading-9 max-w-[720px] mx-auto">
            Happy faces, vibrant classrooms, and memories that last a lifetime.
          </p>

        </div>

        {/* GALLERY */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT BIG IMAGE */}

          <div className="h-full">

            <img
              src={schoolImg1}
              alt=""
              className="
                w-full
                h-full
                min-h-[620px]
                object-cover
                rounded-[42px]
                shadow-xl
              "
            />

          </div>

          {/* RIGHT GRID */}

          <div className="grid grid-cols-2 gap-7">

            {/* IMAGE 2 */}

            <img
              src={schoolImg2}
              alt=""
              className="
                w-full
                h-[290px]
                object-cover
                rounded-[34px]
                shadow-lg
              "
            />

            {/* IMAGE 3 */}

            <img
              src={schoolImg3}
              alt=""
              className="
                w-full
                h-[290px]
                object-cover
                rounded-[34px]
                shadow-lg
              "
            />

            {/* IMAGE 4 */}

            <img
              src={schoolImg4}
              alt=""
              className="
                w-full
                h-[290px]
                object-cover
                rounded-[34px]
                shadow-lg
              "
            />

            {/* IMAGE 5 */}

            <img
              src={schoolImg5}
              alt=""
              className="
                w-full
                h-[290px]
                object-cover
                rounded-[34px]
                shadow-lg
              "
            />

          </div>

        </div>

        {/* BUTTON */}

        <div className="flex justify-center mt-16">

          <button
            className="
              border-2
              border-primary
              text-primary
              px-10
              py-4
              rounded-full
              font-black
              text-[16px]
              hover:bg-primary
              hover:text-white
              transition-all
              duration-300
            "
          >
            View Full Gallery →
          </button>

        </div>

      </div>

    </section>
  );
};

export default CampusLife;