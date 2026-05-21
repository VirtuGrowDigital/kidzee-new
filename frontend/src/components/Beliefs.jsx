// Beliefs.jsx

import {
    Sparkles,
    ShieldCheck,
    Lightbulb,
    HeartHandshake,
    Smile,
    Puzzle,
  } from "lucide-react";
  
  import blockShape from "../assets/block-shape.png";
  
  const beliefs = [
    {
      icon: Sparkles,
      title: "Creativity",
      description:
        "We encourage children to explore imagination through art, storytelling, music, and joyful learning experiences.",
      bg: "bg-[#FDF1D7]",
      iconBg: "bg-[#F59E0B]",
    },
  
    {
      icon: ShieldCheck,
      title: "Safety",
      description:
        "A safe, caring, and positive environment where every child feels protected, respected, and valued.",
      bg: "bg-[#E7F4EC]",
      iconBg: "bg-[#16A34A]",
    },
  
    {
      icon: Lightbulb,
      title: "Curiosity",
      description:
        "We inspire children to ask questions, discover new ideas, and develop a lifelong love for learning.",
      bg: "bg-[#EEE8FF]",
      iconBg: "bg-[#7C3AED]",
    },
  
    {
      icon: Smile,
      title: "Confidence",
      description:
        "Our nurturing approach helps children build self-esteem, communication skills, and independence.",
      bg: "bg-[#FFE7EE]",
      iconBg: "bg-[#E11D48]",
    },
  
    {
      icon: HeartHandshake,
      title: "Compassion",
      description:
        "We teach kindness, empathy, teamwork, and respect to help children grow into caring individuals.",
      bg: "bg-[#E5F6FA]",
      iconBg: "bg-[#0891B2]",
    },
  
    {
      icon: Puzzle,
      title: "Play-Based Learning",
      description:
        "Children learn best through meaningful activities, hands-on exploration, games, and interactive experiences.",
      bg: "bg-[#F3E8FF]",
      iconBg: "bg-[#9333EA]",
    },
  ];
  
  const Beliefs = () => {
    return (
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
  
        {/* FLOATING BLOCKS */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            left-[2%]
            top-[100px]
  
            w-[100px]
            md:w-[660px]
  
            opacity-70
  
            rotate-[20deg]
  
            animate-[float1_8s_ease-in-out_infinite]
          "
        />
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            right-[3%]
            bottom-[80px]
  
            w-[140px]
            md:w-[920px]
  
            opacity-70
  
            rotate-[-18deg]
  
            animate-[float2_9s_ease-in-out_infinite]
          "
        />
  
        {/* CONTENT */}
  
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
  
          {/* HEADING */}
  
          <div className="text-center mb-20">
  
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
              What We Believe
            </p>
  
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
              Our Core Values
            </h2>
  
            <p
              className="
                text-[#555]
  
                text-[17px]
                md:text-[20px]
  
                leading-9
  
                max-w-[760px]
  
                mx-auto
              "
            >
              At Kidzee, our values guide every learning
              experience and help children grow into confident,
              curious, creative, and compassionate individuals.
            </p>
  
          </div>
  
          {/* CARDS */}
  
          <div
            className="
              grid
  
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
  
              gap-6
              md:gap-8
            "
          >
  
            {beliefs.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className={`
                    ${item.bg}
  
                    relative
  
                    overflow-hidden
  
                    rounded-[32px]
  
                    p-8
  
                    transition-all
                    duration-300
  
                    hover:-translate-y-3
  
                    shadow-[0_12px_35px_rgba(0,0,0,0.06)]
                  `}
                >
  
                  {/* CARD GLOW */}
  
                  <div
                    className="
                      absolute
  
                      -top-[70px]
                      -right-[70px]
  
                      w-[180px]
                      h-[180px]
  
                      bg-white
  
                      opacity-30
  
                      blur-[70px]
  
                      rounded-full
                    "
                  ></div>
  
                  {/* ICON */}
  
                  <div
                    className={`
                      ${item.iconBg}
  
                      relative
                      z-10
  
                      w-14
                      h-14
  
                      rounded-2xl
  
                      flex
                      items-center
                      justify-center
  
                      mb-6
  
                      shadow-lg
                    `}
                  >
  
                    <Icon
                      size={28}
                      className="text-white"
                    />
  
                  </div>
  
                  {/* TITLE */}
  
                  <h3
                    className="
                      relative
                      z-10
  
                      text-black
  
                      text-[26px]
  
                      font-black
  
                      mb-4
                    "
                  >
                    {item.title}
                  </h3>
  
                  {/* TEXT */}
  
                  <p
                    className="
                      relative
                      z-10
  
                      text-[#444]
  
                      text-[15px]
  
                      leading-7
                    "
                  >
                    {item.description}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default Beliefs;