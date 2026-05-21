// AcademicPhilosophy.jsx

import inquiryIcon from "../assets/light 1.png";
import steamIcon from "../assets/setting 1.png";
import excellenceIcon from "../assets/excellence 1.png";

const philosophyCards = [
  {
    icon: inquiryIcon,
    title: "Inquiry-Based Learning",
    desc:
      "We encourage children to ask questions, explore possibilities, and discover answers through hands-on experiences.",
    bg: "bg-[#FFF9D9]",
  },
  {
    icon: steamIcon,
    title: "STEAM Integration",
    desc:
      "Science, Technology, Engineering, Arts, and Mathematics are woven together to create meaningful learning experiences.",
    bg: "bg-[#DFF7FF]",
  },
  {
    icon: excellenceIcon,
    title: "Individual Excellence",
    desc:
      "Each child’s unique strengths and interests are recognized and nurtured through personalized learning paths.",
    bg: "bg-[#FFE5E5]",
  },
];

const AcademicPhilosophy = () => {
  return (
    <section className="relative bg-[#F4E8FB] py-24 md:py-32 overflow-hidden">

      {/* TOP CURVE */}

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">

        <svg
          viewBox="0 0 1440 220"
          className="w-full h-[120px] md:h-[170px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F4E8FB"
            d="M0,160L80,149.3C160,139,320,117,480,96C640,75,800,53,960,64C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10">

        {/* HEADING */}

        <div className="text-center max-w-[900px] mx-auto mb-20">

          <h2
            className="
              text-primary
              text-[38px]
              md:text-[62px]
              font-black
              leading-[1]
              mb-6
            "
          >
            Academic Philosophy
          </h2>

          <p
            className="
              text-[#444]
              text-[17px]
              md:text-[21px]
              leading-8
              md:leading-10
            "
          >
            At Kidzee, we believe in developing the whole child
            through innovative, research-based approaches that foster
            curiosity, creativity, and critical thinking.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {philosophyCards.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[34px]
                p-9
                md:p-10

                shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]

                transition-all
                duration-300

                relative
                overflow-hidden
              "
            >

              {/* TOP GLOW */}

              <div
                className="
                  absolute
                  top-[-60px]
                  right-[-60px]

                  w-[140px]
                  h-[140px]

                  bg-[#F7F0FC]

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

                  mb-7

                  ${item.bg}
                `}
              >

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-9 h-9 object-contain"
                />

              </div>

              {/* TITLE */}

              <h3
                className="
                  text-[24px]
                  md:text-[28px]

                  leading-[1.2]

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
          ))}

        </div>

      </div>

    </section>
  );
};

export default AcademicPhilosophy;