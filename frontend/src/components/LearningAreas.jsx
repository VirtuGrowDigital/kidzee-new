// LearningAreas.jsx

import {
    Palette,
    BookOpen,
    Calculator,
    Dumbbell,
    Heart,
    Monitor,
  } from "lucide-react";
  
  import blockShape from "../assets/block-shape.png";
  
  const learningAreas = [
    {
      title: "Arts and Crafts",
      desc:
        "Fostering creativity through painting, collage, clay modelling and mixed-media exploration.",
      color: "bg-[#FCE6F1]",
      icon: Palette,
      iconBg: "bg-pink-500",
      textColor: "text-pink-500",
      badge: "CREATIVE",
    },
    {
      title: "Literacy & Language",
      desc:
        "Phonics, storytelling and early reading in English and Hindi through playful methods.",
      color: "bg-[#E6F5FF]",
      icon: BookOpen,
      iconBg: "bg-sky-500",
      textColor: "text-sky-500",
      badge: "LANGUAGE",
    },
    {
      title: "Numeracy & Maths",
      desc:
        "Building number sense, patterns, and logical thinking through manipulatives and games.",
      color: "bg-[#F1EAFE]",
      icon: Calculator,
      iconBg: "bg-violet-500",
      textColor: "text-violet-500",
      badge: "LOGIC",
    },
    {
      title: "Physical Education",
      desc:
        "Gross motor development, yoga, dance and outdoor play for healthy active bodies.",
      color: "bg-[#EAF8EE]",
      icon: Dumbbell,
      iconBg: "bg-green-500",
      textColor: "text-green-500",
      badge: "FITNESS",
    },
    {
      title: "Values & Ethics",
      desc:
        "Empathy, sharing, respect and mindfulness woven into everyday classroom moments.",
      color: "bg-[#FFF5DF]",
      icon: Heart,
      iconBg: "bg-orange-500",
      textColor: "text-orange-500",
      badge: "VALUES",
    },
    {
      title: "Digital Learning",
      desc:
        "Age-appropriate tech literacy via interactive smart boards and curated apps.",
      color: "bg-[#E4F8FA]",
      icon: Monitor,
      iconBg: "bg-cyan-600",
      textColor: "text-cyan-600",
      badge: "TECH",
    },
  ];
  
  const LearningAreas = () => {
    return (
      <section className="relative py-28 md:py-36 bg-white overflow-hidden">
  
        {/* HUGE TOP LEFT BLOCK */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            top-[-180px]
            left-[-240px]
  
            w-[520px]
            md:w-[820px]
  
            opacity-35
  
            rotate-[20deg]
  
            animate-[float1_8s_ease-in-out_infinite]
          "
        />
  
        {/* HUGE RIGHT CENTER BLOCK */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            top-[28%]
            right-[-260px]
  
            w-[500px]
            md:w-[780px]
  
            opacity-30
  
            rotate-[-18deg]
  
            animate-[float2_10s_ease-in-out_infinite]
          "
        />
  
        {/* BOTTOM LEFT LARGE BLOCK */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            bottom-[-220px]
            left-[5%]
  
            w-[420px]
            md:w-[680px]
  
            opacity-80
  
            rotate-[-12deg]
  
            animate-[float3_9s_ease-in-out_infinite]
          "
        />
  
        {/* TOP RIGHT SMALL BLOCK */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            top-[60px]
            right-[8%]
  
            w-[220px]
            md:w-[320px]
  
            opacity-85
  
            rotate-[12deg]
  
            animate-[float4_11s_ease-in-out_infinite]
          "
        />
  
        {/* CENTER LEFT SMALL BLOCK */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            top-[45%]
            left-[-120px]
  
            w-[220px]
            md:w-[340px]
  
            opacity-80
  
            rotate-[32deg]
  
            animate-[float2_7s_ease-in-out_infinite]
          "
        />
  
        {/* EXTRA BOTTOM RIGHT BLOCK */}
  
        <img
          src={blockShape}
          alt=""
          className="
            absolute
  
            bottom-[-120px]
            right-[12%]
  
            w-[260px]
            md:w-[400px]
  
            opacity-90
  
            rotate-[28deg]
  
            animate-[float1_12s_ease-in-out_infinite]
          "
        />
  
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">
  
          {/* HEADING */}
  
          <div className="text-center max-w-[850px] mx-auto mb-20">
  
            <p
              className="
                uppercase
                tracking-[4px]
                text-primary
                font-black
                text-sm
                mb-5
              "
            >
              Key Learning Areas
            </p>
  
            <h2
              className="
                text-[40px]
                md:text-[64px]
  
                leading-[1]
  
                font-black
                text-primary
  
                mb-6
              "
            >
              Building Future Skills
            </h2>
  
            <p
              className="
                text-[#555]
                text-[17px]
                md:text-[21px]
  
                leading-8
                md:leading-10
              "
            >
              Our curriculum covers essential learning domains that
              prepare children for success in the 21st century.
            </p>
  
          </div>
  
          {/* GRID */}
  
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
  
            {learningAreas.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className={`
                    ${item.color}
  
                    rounded-[36px]
  
                    p-8
                    md:p-10
  
                    relative
                    overflow-hidden
  
                    shadow-[0_15px_40px_rgba(0,0,0,0.05)]
  
                    hover:-translate-y-3
                    hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
  
                    transition-all
                    duration-500
                  `}
                >
  
                  {/* TOP GLOW */}
  
                  <div
                    className="
                      absolute
                      top-[-60px]
                      right-[-60px]
  
                      w-[140px]
                      h-[140px]
  
                      bg-white/30
  
                      rounded-full
                    "
                  ></div>
  
                  {/* ICON */}
  
                  <div
                    className={`
                      w-16
                      h-16
  
                      rounded-2xl
  
                      flex
                      items-center
                      justify-center
  
                      mb-6
  
                      shadow-lg
  
                      ${item.iconBg}
                    `}
                  >
  
                    <Icon
                      className="text-white"
                      size={30}
                      strokeWidth={2.5}
                    />
  
                  </div>
  
                  {/* BADGE */}
  
                  <div
                    className={`
                      inline-flex
  
                      px-4
                      py-2
  
                      rounded-full
  
                      bg-white/70
  
                      text-xs
                      font-black
                      tracking-[2px]
  
                      mb-5
  
                      ${item.textColor}
                    `}
                  >
                    {item.badge}
                  </div>
  
                  {/* TITLE */}
  
                  <h3
                    className="
                      text-[28px]
                      md:text-[34px]
  
                      leading-[1.1]
  
                      font-black
                      text-black
  
                      mb-5
                    "
                  >
                    {item.title}
                  </h3>
  
                  {/* DESCRIPTION */}
  
                  <p
                    className="
                      text-[#555]
  
                      text-[16px]
                      md:text-[17px]
  
                      leading-8
                    "
                  >
                    {item.desc}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default LearningAreas;