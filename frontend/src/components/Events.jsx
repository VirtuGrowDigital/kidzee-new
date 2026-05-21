import locationIcon from "../assets/location-icon.png";

const events = [
  {
    day: "12",
    month: "MAY",
    type: "SCHOOL EVENT",
    title: "Annual Day Celebration 2026",
    desc: "A Joyous Evening Of Performances, Talent Shows, And Award Ceremonies For All Students.",
    time: "5:00 PM - 8:00 PM",
    location: "Kidzee Auditorium, Lucknow",
  },
  {
    day: "18",
    month: "JUN",
    type: "SUMMER CAMP",
    title: "Creative Summer Camp 2026",
    desc: "Fun-filled creative learning activities, storytelling, dance, music and exciting indoor games.",
    time: "10:00 AM - 1:00 PM",
    location: "Kidzee Activity Hall, Lucknow",
  },
  {
    day: "04",
    month: "JUL",
    type: "PARENT MEET",
    title: "Parent Interaction Session",
    desc: "A meaningful interaction session between parents and educators to discuss child growth.",
    time: "11:00 AM - 1:00 PM",
    location: "Kidzee Campus, Lucknow",
  },
];

const Events = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#F7F7F7] overflow-hidden">

      {/* DECORATIVE BLOCKS */}

      {/* TOP CENTER */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 rotate-[28deg] w-[90px] h-[90px] md:w-[130px] md:h-[130px] bg-[#F4EAD7] rounded-[30px] md:rounded-[36px] opacity-90"></div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-10 left-6 md:left-40 rotate-[-10deg] w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-[#F4EAD7] rounded-[28px] md:rounded-[36px] opacity-90"></div>

      {/* RIGHT CENTER */}
      <div className="absolute top-1/2 right-[-40px] -translate-y-1/2 rotate-[28deg] w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-[#F4EAD7] rounded-[28px] md:rounded-[36px] opacity-90"></div>

      <div className="max-w-[1180px] mx-auto px-5 md:px-6 relative z-10">

        {/* HEADING */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-12 md:mb-16">

          <div>

            <p className="uppercase tracking-[4px] text-primary font-black text-xs md:text-sm mb-4 md:mb-5">
              WHAT'S ON
            </p>

            <h2 className="text-[34px] sm:text-[42px] md:text-[64px] leading-[1] font-black text-black">
              Upcoming Events
            </h2>

          </div>

          <button className="text-primary font-bold text-[15px] md:text-[16px] hover:translate-x-1 transition-all duration-300">
            View All Events →
          </button>

        </div>

        {/* MOBILE CAROUSEL */}

        <div className="relative md:hidden">

          {/* LEFT BUTTON */}

          <button
            onClick={() => {
              document
                .getElementById("eventsSlider")
                .scrollBy({
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

              active:scale-95
              transition-all
              duration-300
            "
          >
            ←
          </button>

          {/* RIGHT BUTTON */}

          <button
            onClick={() => {
              document
                .getElementById("eventsSlider")
                .scrollBy({
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

              active:scale-95
              transition-all
              duration-300
            "
          >
            →
          </button>

          {/* SLIDER */}

          <div
            id="eventsSlider"
            className="
              flex
              gap-5
              overflow-x-auto
              snap-x
              snap-mandatory

              scroll-smooth

              scrollbar-hide

              px-2
              pb-2
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            {events.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[92%]
                  snap-center
                  bg-primary
                  rounded-[32px]
                  p-6
                  text-white
                  shadow-xl
                  flex
                  flex-col
                  justify-between
                "
              >

                {/* TOP */}

                <div>

                  {/* DATE */}

                  <div
                    className="
                      bg-white
                      text-primary
                      w-[72px]
                      h-[72px]
                      rounded-[20px]
                      flex
                      flex-col
                      items-center
                      justify-center
                      font-black
                      leading-none
                      mb-6
                    "
                  >
                    <span className="text-[32px]">
                      {item.day}
                    </span>

                    <span className="text-[16px] mt-1">
                      {item.month}
                    </span>
                  </div>

                  {/* TAG */}

                  <div
                    className="
                      inline-block
                      bg-white/20
                      px-3
                      py-[5px]
                      rounded-full
                      text-[10px]
                      font-bold
                      tracking-wide
                      mb-4
                    "
                  >
                    {item.type}
                  </div>

                  {/* TITLE */}

                  <h3 className="text-[28px] leading-[1.1] font-black mb-4">
                    {item.title}
                  </h3>

                  {/* DESC */}

                  <p className="text-white/90 text-[15px] leading-7 mb-6">
                    {item.desc}
                  </p>

                  {/* META */}

                  <div className="space-y-3 text-[13px] text-white/80 font-semibold">

                    {/* TIME */}

                    <div className="flex items-center gap-2">
                      <span>◷</span>
                      <span>{item.time}</span>
                    </div>

                    {/* LOCATION */}

                    <div className="flex items-center gap-2">

                      <img
                        src={locationIcon}
                        alt=""
                        className="w-4 h-4 object-contain"
                      />

                      <span>{item.location}</span>

                    </div>

                  </div>

                </div>

                {/* BUTTON */}

                <button
                  className="
                    mt-8
                    border-2
                    border-white
                    py-4
                    rounded-full
                    font-black
                    text-[15px]
                    hover:bg-white
                    hover:text-primary
                    transition-all
                    duration-300
                  "
                >
                  RSVP →
                </button>

              </div>
            ))}

          </div>

        </div>

        {/* DESKTOP VERSION */}

        <div className="hidden md:block space-y-8">

          {events.map((item, index) => (
            <div
              key={index}
              className="
                bg-primary
                rounded-[36px]
                px-6
                py-7
                flex
                flex-col
                lg:flex-row
                lg:items-center
                justify-between
                gap-8
                text-white
                shadow-xl
              "
            >

              {/* LEFT SIDE */}

              <div className="flex items-center gap-6">

                {/* DATE BOX */}

                <div
                  className="
                    bg-white
                    text-primary
                    min-w-[72px]
                    h-[72px]
                    rounded-[22px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    font-black
                    leading-none
                  "
                >
                  <span className="text-[34px]">
                    {item.day}
                  </span>

                  <span className="text-[18px] mt-1">
                    {item.month}
                  </span>
                </div>

                {/* CONTENT */}

                <div>

                  {/* TAG */}

                  <div
                    className="
                      inline-block
                      bg-white/20
                      px-3
                      py-[5px]
                      rounded-full
                      text-[10px]
                      font-bold
                      tracking-wide
                      mb-3
                    "
                  >
                    {item.type}
                  </div>

                  {/* TITLE */}

                  <h3 className="text-[34px] leading-[1.1] font-black mb-3">
                    {item.title}
                  </h3>

                  {/* DESC */}

                  <p className="text-white/90 text-[16px] leading-7 max-w-[760px] mb-4">
                    {item.desc}
                  </p>

                  {/* META */}

                  <div className="flex flex-wrap items-center gap-6 text-[13px] text-white/80 font-semibold">

                    {/* TIME */}

                    <div className="flex items-center gap-2">
                      <span>◷</span>
                      <span>{item.time}</span>
                    </div>

                    {/* LOCATION */}

                    <div className="flex items-center gap-2">

                      <img
                        src={locationIcon}
                        alt=""
                        className="w-4 h-4 object-contain"
                      />

                      <span>{item.location}</span>

                    </div>

                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <button
                className="
                  border-2
                  border-white
                  px-8
                  py-4
                  rounded-full
                  font-black
                  text-[15px]
                  hover:bg-white
                  hover:text-primary
                  transition-all
                  duration-300
                  whitespace-nowrap
                "
              >
                RSVP →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Events;