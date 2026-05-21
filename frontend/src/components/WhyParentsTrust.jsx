// WhyParentsTrust.jsx

import {
    ShieldCheck,
    GraduationCap,
    Puzzle,
    MessagesSquare,
    Sparkles,
    HeartHandshake,
  } from "lucide-react";
  
  import blockShape from "../assets/block-shape.png";
  
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Safe & Secure Campus",
    },
  
    {
      icon: GraduationCap,
      title: "Experienced Educators",
    },
  
    {
      icon: Puzzle,
      title: "Activity-Based Learning",
    },
  
    {
      icon: MessagesSquare,
      title: "Parent Communication",
    },
  
    {
      icon: Sparkles,
      title: "Creative Curriculum",
    },
  
    {
      icon: HeartHandshake,
      title: "Holistic Development",
    },
  ];
  
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
    },
  
    {
      number: "500+",
      label: "Happy Students",
    },
  
    {
      number: "100%",
      label: "Child Safety Focus",
    },
  ];
  
  const WhyParentsTrust = () => {
    return (
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
  
        {/* FLOATING BLOCKS */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            left-[3%]
            top-[100px]
  
            w-[100px]
            md:w-[160px]
  
            opacity-40
  
            rotate-[18deg]
  
            animate-[float1_8s_ease-in-out_infinite]
          "
        />
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            right-[4%]
            bottom-[60px]
  
            w-[130px]
            md:w-[220px]
  
            opacity-30
  
            rotate-[-18deg]
  
            animate-[float2_9s_ease-in-out_infinite]
          "
        />
  
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
  
          <div
            className="
              grid
              lg:grid-cols-2
  
              gap-16
              lg:gap-20
  
              items-center
            "
          >
  
            {/* LEFT SIDE */}
  
            <div>
  
              {/* LABEL */}
  
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
                Why Parents Trust Us
              </p>
  
              {/* TITLE */}
  
              <h2
                className="
                  text-black
  
                  text-[42px]
                  md:text-[68px]
  
                  leading-[1]
  
                  font-black
  
                  mb-8
                "
              >
                A Preschool Built Around Children
              </h2>
  
              {/* DESCRIPTION */}
  
              <p
                className="
                  text-[#555]
  
                  text-[17px]
                  md:text-[19px]
  
                  leading-9
  
                  mb-12
                "
              >
                At Kidzee, we create a joyful learning
                environment where children feel safe,
                inspired, supported, and excited to discover
                the world around them every single day.
              </p>
  
              {/* STATS */}
  
              <div
                className="
                  grid
  
                  grid-cols-1
                  sm:grid-cols-3
  
                  gap-5
                "
              >
  
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#F7F1FF]
  
                      rounded-[28px]
  
                      p-6
  
                      text-center
  
                      shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                    "
                  >
  
                    <h3
                      className="
                        text-primary
  
                        text-[34px]
  
                        font-black
  
                        mb-2
                      "
                    >
                      {item.number}
                    </h3>
  
                    <p
                      className="
                        text-[#555]
  
                        text-sm
  
                        font-bold
                      "
                    >
                      {item.label}
                    </p>
  
                  </div>
                ))}
  
              </div>
  
            </div>
  
            {/* RIGHT SIDE */}
  
            <div className="relative">
  
              {/* MAIN CARD */}
  
              <div
                className="
                  relative
  
                  overflow-hidden
  
                  bg-[#6D24A5]
  
                  rounded-[40px]
  
                  p-8
                  md:p-10
  
                  shadow-[0_20px_60px_rgba(109,36,165,0.25)]
                "
              >
  
                {/* INNER GLOW */}
  
                <div
                  className="
                    absolute
  
                    top-[-100px]
                    right-[-100px]
  
                    w-[260px]
                    h-[260px]
  
                    rounded-full
  
                    bg-[#B46DFF]
  
                    opacity-30
  
                    blur-[100px]
                  "
                ></div>
  
                {/* TITLE */}
  
                <h3
                  className="
                    relative
                    z-10
  
                    text-white
  
                    text-[34px]
                    md:text-[42px]
  
                    leading-tight
  
                    font-black
  
                    mb-10
                  "
                >
                  Trusted By Families Across Lucknow
                </h3>
  
                {/* TRUST POINTS */}
  
                <div
                  className="
                    relative
                    z-10
  
                    grid
  
                    grid-cols-1
                    sm:grid-cols-2
  
                    gap-5
                  "
                >
  
                  {trustPoints.map((item, index) => {
  
                    const Icon = item.icon;
  
                    return (
                      <div
                        key={index}
                        className="
                          bg-white/10
  
                          backdrop-blur-sm
  
                          rounded-[24px]
  
                          p-5
  
                          border
                          border-white/10
                        "
                      >
  
                        {/* ICON */}
  
                        <div
                          className="
                            w-12
                            h-12
  
                            rounded-2xl
  
                            bg-white/15
  
                            flex
                            items-center
                            justify-center
  
                            mb-4
                          "
                        >
  
                          <Icon
                            size={24}
                            className="text-[#FFF200]"
                          />
  
                        </div>
  
                        {/* TITLE */}
  
                        <h4
                          className="
                            text-white
  
                            text-[17px]
  
                            font-bold
  
                            leading-7
                          "
                        >
                          {item.title}
                        </h4>
  
                      </div>
                    );
                  })}
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default WhyParentsTrust;