// src/components/contact/MapSection.jsx

import {
    MapPin,
    Bus,
    ShieldCheck,
    Car,
    Star,
    CloudSun,
    Shapes,
  } from "lucide-react";
  
  import blockShape from "../assets/block-shape.png";
  
  const floatingIcons = [
    {
      icon: Star,
      className:
        "top-[100px] left-[8%] text-[#F59E0B]",
    },
  
    {
      icon: CloudSun,
      className:
        "bottom-[120px] left-[10%] text-[#14B8A6]",
    },
  
    {
      icon: Shapes,
      className:
        "top-[120px] right-[10%] text-[#EC4899]",
    },
  ];
  
  const MapSection = () => {
    return (
      <section className="relative overflow-hidden bg-[#F8F3FC] py-24 md:py-32">
  
        {/* BIG GLOW */}
  
        <div
          className="
            absolute
  
            top-1/2
            left-1/2
  
            -translate-x-1/2
            -translate-y-1/2
  
            w-[700px]
            h-[700px]
  
            rounded-full
  
            bg-[#E9D5FF]
  
            opacity-40
  
            blur-[140px]
          "
        ></div>
  
        {/* FLOATING BLOCKS */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            left-[-120px]
            top-[60px]
  
            w-[260px]
            md:w-[520px]
  
            opacity-50
  
            rotate-[18deg]
  
            animate-[float1_8s_ease-in-out_infinite]
          "
        />
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            right-[-100px]
            bottom-[20px]
  
            w-[300px]
            md:w-[680px]
  
            opacity-50
  
            rotate-[-18deg]
  
            animate-[float2_9s_ease-in-out_infinite]
          "
        />
  
        {/* FLOATING ICONS */}
  
        {floatingIcons.map((item, index) => {
  
          const Icon = item.icon;
  
          return (
            <div
              key={index}
              className={`
                absolute
  
                ${item.className}
  
                opacity-30
  
                animate-bounce
              `}
            >
  
              <Icon
                size={60}
                strokeWidth={1.5}
              />
  
            </div>
          );
        })}
  
        {/* FLOATING CIRCLES */}
  
        <div
          className="
            absolute
  
            top-[140px]
            right-[18%]
  
            w-16
            h-16
  
            rounded-full
  
            bg-[#FFF200]
  
            opacity-30
  
            blur-[2px]
          "
        ></div>
  
        <div
          className="
            absolute
  
            bottom-[160px]
            left-[20%]
  
            w-10
            h-10
  
            rounded-full
  
            bg-[#EC4899]
  
            opacity-30
          "
        ></div>
  
        <div
          className="
            absolute
  
            top-[40%]
            right-[6%]
  
            w-20
            h-20
  
            rounded-full
  
            bg-[#14B8A6]
  
            opacity-20
  
            blur-[4px]
          "
        ></div>
  
        {/* CONTENT */}
  
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
  
          {/* HEADING */}
  
          <div className="text-center mb-14">
  
            <p
              className="
                uppercase
  
                tracking-[4px]
  
                text-primary
  
                text-sm
  
                font-black
  
                mb-5
              "
            >
              Visit Our Campus
            </p>
  
            <h2
              className="
                text-black
  
                text-[42px]
                md:text-[64px]
  
                leading-[1]
  
                font-black
  
                mb-8
              "
            >
              Find Us Easily
            </h2>
  
            {/* CHIPS */}
  
            <div className="flex flex-wrap justify-center gap-4">
  
              <div
                className="
                  px-5
                  py-3
  
                  rounded-full
  
                  bg-white
  
                  shadow-md
  
                  flex
                  items-center
                  gap-2
  
                  font-bold
  
                  text-primary
                "
              >
                <Car size={18} />
                Easy Parking
              </div>
  
              <div
                className="
                  px-5
                  py-3
  
                  rounded-full
  
                  bg-[#FFF200]
  
                  shadow-md
  
                  flex
                  items-center
                  gap-2
  
                  font-bold
  
                  text-black
                "
              >
                <ShieldCheck size={18} />
                Safe Campus
              </div>
  
              <div
                className="
                  px-5
                  py-3
  
                  rounded-full
  
                  bg-white
  
                  shadow-md
  
                  flex
                  items-center
                  gap-2
  
                  font-bold
  
                  text-primary
                "
              >
                <Bus size={18} />
                Main Road Access
              </div>
  
            </div>
  
          </div>
  
          {/* MAP CARD */}
  
          <div
            className="
              relative
  
              overflow-hidden
  
              rounded-[42px]
  
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
  
              border-[8px]
              border-white
            "
          >
  
            {/* INNER GLOW */}
  
            <div
              className="
                absolute
  
                inset-0
  
                bg-[#B46DFF]
  
                opacity-10
  
                blur-[100px]
  
                z-10
              "
            ></div>
  
            {/* LOCATION CARD */}
  
            <div
              className="
                absolute
  
                top-6
                left-6
  
                z-20
  
                bg-white
  
                rounded-[24px]
  
                px-5
                py-4
  
                shadow-xl
  
                flex
                items-center
                gap-4
              "
            >
  
              <div
                className="
                  w-12
                  h-12
  
                  rounded-2xl
  
                  bg-primary
  
                  flex
                  items-center
                  justify-center
                "
              >
  
                <MapPin
                  className="text-white"
                  size={24}
                />
  
              </div>
  
              <div>
  
                <h4
                  className="
                    text-black
  
                    font-black
                  "
                >
                  Kidzee Preschool
                </h4>
  
                <p
                  className="
                    text-sm
  
                    text-[#666]
                  "
                >
                  Kursi Road, Lucknow
                </p>
  
              </div>
  
            </div>
  
            {/* MAP */}
  
            <iframe
              title="Kidzee Location"
              src="https://www.google.com/maps?q=26.93136024554395,80.97858738881366&z=16&output=embed"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="relative z-0"
            ></iframe>
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default MapSection;