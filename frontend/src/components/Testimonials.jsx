import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    review:
      "Kidzee has completely transformed Aarav’s confidence and speaking skills. He now loves going to school every single day.",
    name: "Priya Sharma",
    role: "Parent of Aarav",
  },
  {
    review:
      "The teachers are extremely caring and patient. We noticed a huge improvement in our daughter’s creativity and communication.",
    name: "Rohit Verma",
    role: "Parent of Myra",
  },
  {
    review:
      "Safe environment, joyful learning, and excellent staff. Kidzee feels like a second home for our child.",
    name: "Sneha Kapoor",
    role: "Parent of Vihaan",
  },
  {
    review:
      "We were searching for a preschool that balances fun and learning. Kidzee exceeded all our expectations beautifully.",
    name: "Ankit Srivastava",
    role: "Parent of Kiara",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  /* AUTO SLIDE MOBILE */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let scrollAmount = 0;

    const autoSlide = setInterval(() => {
      const cardWidth = slider.offsetWidth * 0.92 + 20;

      scrollAmount += cardWidth;

      if (
        scrollAmount >=
        slider.scrollWidth - slider.clientWidth
      ) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#E9D9F4] py-20 md:py-28">

      {/* GLOW EFFECTS */}

      <div className="absolute top-[-220px] right-[-220px] w-[550px] h-[550px] bg-[#C58BEA] rounded-full blur-[160px] opacity-30"></div>

      <div className="absolute bottom-[-220px] left-[-220px] w-[550px] h-[550px] bg-[#B46DFF] rounded-full blur-[160px] opacity-30"></div>

      {/* FLOATING BLOCKS */}

      <div className="absolute top-10 right-10 w-[110px] h-[110px] rotate-[20deg] rounded-[34px] bg-white/10"></div>

      <div className="absolute bottom-10 left-10 w-[100px] h-[100px] rotate-[-14deg] rounded-[30px] bg-white/10"></div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-6 relative z-10">

        {/* HEADING */}

        <div className="text-center mb-14 md:mb-20">

          <p className="uppercase tracking-[4px] text-primary font-black text-xs md:text-sm mb-4">
            TESTIMONIALS
          </p>

          <h2 className="text-[38px] sm:text-[50px] md:text-[72px] leading-[1] font-black text-primary mb-5">
            What Parents Say
          </h2>

          <p className="text-[#555] text-[16px] md:text-[22px] leading-8 md:leading-10 max-w-[850px] mx-auto">
            Real stories from parents who trusted Kidzee to shape
            their child’s early learning journey with love,
            care, and joyful education.
          </p>

        </div>

        {/* MOBILE SLIDER */}

        <div className="relative md:hidden">

          {/* LEFT BUTTON */}

          <button
            onClick={() => {
              sliderRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
              });
            }}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20

              w-11
              h-11

              rounded-full
              bg-white
              shadow-2xl

              flex
              items-center
              justify-center

              text-primary
              text-xl
              font-black
            "
          >
            ←
          </button>

          {/* RIGHT BUTTON */}

          <button
            onClick={() => {
              sliderRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
              });
            }}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20

              w-11
              h-11

              rounded-full
              bg-white
              shadow-2xl

              flex
              items-center
              justify-center

              text-primary
              text-xl
              font-black
            "
          >
            →
          </button>

          {/* SLIDER */}

          <div
            ref={sliderRef}
            className="
              flex
              gap-5
              overflow-x-auto
              snap-x
              snap-mandatory
              scroll-smooth
              scrollbar-hide
              px-2
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[92%]
                  snap-center

                  bg-white/75
                  backdrop-blur-xl

                  rounded-[34px]

                  p-7

                  shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                  border
                  border-white/40

                  flex
                  flex-col
                  justify-between

                  min-h-[420px]

                  hover:-translate-y-2

                  transition-all
                  duration-500
                "
              >

                <div>

                  {/* STARS */}

                  <div className="flex gap-1 mb-7">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className="fill-[#FFB800] text-[#FFB800]"
                      />
                    ))}

                  </div>

                  {/* REVIEW */}

                  <p className="text-[#444] text-[16px] leading-9">
                    {item.review}
                  </p>

                </div>

                {/* USER */}

                <div className="flex items-center gap-4 mt-10">

                  <div
                    className="
                      w-14
                      h-14

                      rounded-full

                      bg-gradient-to-br
                      from-[#A855F7]
                      to-[#732D92]

                      flex
                      items-center
                      justify-center

                      text-white
                      font-black
                      text-lg

                      shadow-xl
                    "
                  >
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <h4 className="font-black text-[18px] text-black">
                      {item.name}
                    </h4>

                    <p className="text-[#777] text-sm font-medium">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* DESKTOP GRID */}

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-7">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/75
                backdrop-blur-xl

                rounded-[36px]

                p-9

                shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                border
                border-white/40

                min-h-[470px]

                flex
                flex-col
                justify-between

                hover:-translate-y-3
                hover:shadow-2xl

                transition-all
                duration-500
              "
            >

              <div>

                {/* STARS */}

                <div className="flex gap-1 mb-8">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className="fill-[#FFB800] text-[#FFB800]"
                    />
                  ))}

                </div>

                {/* REVIEW */}

                <p className="text-[#444] text-[18px] leading-10">
                  {item.review}
                </p>

              </div>

              {/* USER */}

              <div className="flex items-center gap-4 mt-10">

                {/* AVATAR */}

                <div
                  className="
                    w-16
                    h-16

                    rounded-full

                    bg-gradient-to-br
                    from-[#A855F7]
                    to-[#732D92]

                    flex
                    items-center
                    justify-center

                    text-white
                    font-black
                    text-xl

                    shadow-xl
                  "
                >
                  {item.name.charAt(0)}
                </div>

                {/* INFO */}

                <div>

                  <h4 className="font-black text-[22px] text-black leading-tight">
                    {item.name}
                  </h4>

                  <p className="text-[#777] font-medium mt-1">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;