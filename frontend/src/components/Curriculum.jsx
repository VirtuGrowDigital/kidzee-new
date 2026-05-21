// src/components/Curriculum.jsx

import {
  Palette,
  BookOpen,
  Calculator,
  Dumbbell,
  Heart,
  Monitor,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import blockShape from "../assets/block-shape.png";

const curriculum = [
  {
    title: "Arts and Crafts",
    desc: "Fostering creativity through painting, collage, clay modelling and mixed-media exploration.",
    color: "bg-[#F7E3EE]",
    badge: "AGES 2.5-6 YRS",
    icon: Palette,
    iconBg: "bg-pink-500",
    textColor: "text-pink-500",
  },

  {
    title: "Literacy & Language",
    desc: "Phonics, storytelling and early reading in English and Hindi through playful methods.",
    color: "bg-[#E5F1F8]",
    badge: "AGES 3-6 YRS",
    icon: BookOpen,
    iconBg: "bg-sky-500",
    textColor: "text-sky-500",
  },

  {
    title: "Numeracy & Maths",
    desc: "Building number sense, patterns, and logical thinking through manipulatives and games.",
    color: "bg-[#EEE7FA]",
    badge: "AGES 3-6 YRS",
    icon: Calculator,
    iconBg: "bg-violet-500",
    textColor: "text-violet-500",
  },

  {
    title: "Physical Education",
    desc: "Gross motor development, yoga, dance and outdoor play for healthy, active bodies.",
    color: "bg-[#E5F4EA]",
    badge: "AGES 2.5-6 YRS",
    icon: Dumbbell,
    iconBg: "bg-green-500",
    textColor: "text-green-500",
  },

  {
    title: "Values & Ethics",
    desc: "Empathy, sharing, respect and mindfulness woven into everyday classroom moments.",
    color: "bg-[#F8F1DD]",
    badge: "AGES 2.5-6 YRS",
    icon: Heart,
    iconBg: "bg-orange-500",
    textColor: "text-orange-500",
  },

  {
    title: "Digital Learning",
    desc: "Age-appropriate tech literacy via interactive smart boards, coding toys and curated apps.",
    color: "bg-[#DDF4F5]",
    badge: "AGES 4-6 YRS",
    icon: Monitor,
    iconBg: "bg-cyan-600",
    textColor: "text-cyan-600",
  },
];

const Curriculum = () => {

  const navigate = useNavigate();

  return (

    <section className="relative py-28 bg-[#FCFCFC] overflow-hidden">

      {/* Decorative Blocks */}

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          top-[-20px]
          left-[-180px]

          w-[600px]

          opacity-95

          rotate-[-15deg]

          animate-[float1_6s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          top-[-120px]
          right-[-100px]

          w-[720px]

          opacity-90

          rotate-[15deg]

          animate-[float2_7s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          bottom-[-220px]
          left-20

          w-[860px]

          opacity-90

          rotate-[18deg]

          animate-[float3_8s_ease-in-out_infinite]
        "
      />

      <img
        src={blockShape}
        alt=""
        className="
          absolute
          top-[38%]
          right-[-240px]

          w-[720px]

          opacity-80

          rotate-[20deg]

          animate-[float4_9s_ease-in-out_infinite]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <p
            className="
              uppercase

              tracking-[4px]

              text-[13px]

              font-bold

              text-purple-700

              mb-5
            "
          >
            OUR CURRICULUM
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl

              font-black

              text-black

              mb-6

              leading-tight
            "
          >
            Learning That Feels Like Play
          </h2>

          <p
            className="
              max-w-3xl

              mx-auto

              text-gray-600

              text-lg

              leading-9
            "
          >
            Six thoughtfully designed learning domains that nurture every
            dimension of your child's growth — intellectually, emotionally,
            and physically.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {curriculum.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}

                className={`
                  ${item.color}

                  rounded-[34px]

                  px-8
                  py-7

                  min-h-[240px]

                  transition-all
                  duration-300

                  hover:-translate-y-2
                `}
              >

                {/* Icon */}

                <div
                  className={`
                    w-11
                    h-11

                    rounded-xl

                    ${item.iconBg}

                    flex
                    items-center
                    justify-center

                    mb-5
                  `}
                >

                  <Icon className="text-white w-5 h-5" />

                </div>

                {/* Badge */}

                <span
                  className={`
                    inline-block

                    text-[11px]

                    font-bold

                    px-3
                    py-1

                    rounded-full

                    bg-white/70

                    ${item.textColor}

                    mb-5
                  `}
                >
                  {item.badge}
                </span>

                {/* Title */}

                <h3
                  className="
                    text-[22px]

                    leading-[30px]

                    font-bold

                    text-black

                    mb-4
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-gray-700

                    leading-[28px]

                    text-[14px]

                    mb-6
                  "
                >
                  {item.desc}
                </p>

                {/* Button */}

                <button

                  onClick={() =>
                    navigate("/academics")
                  }

                  className={`
                    ${item.textColor}

                    font-bold

                    text-[15px]

                    hover:translate-x-1

                    transition-all
                    duration-300
                  `}
                >
                  Explore →
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Curriculum;