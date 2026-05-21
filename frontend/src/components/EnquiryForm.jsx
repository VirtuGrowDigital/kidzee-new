// src/components/contact/EnquiryForm.jsx

import { useState } from "react";

import {
  Stars,
  Smile,
  Sparkles,
  ToyBrick,
} from "lucide-react";

import blockShape from "../assets/block-shape.png";

import SuccessPopup from "./SuccessPopup";

const floatingIcons = [
  {
    icon: Stars,
    className:
      "top-[80px] left-[8%] text-[#F59E0B]",
  },

  {
    icon: Smile,
    className:
      "bottom-[120px] left-[12%] text-[#EC4899]",
  },

  {
    icon: Sparkles,
    className:
      "top-[100px] right-[10%] text-[#7C3AED]",
  },

  {
    icon: ToyBrick,
    className:
      "bottom-[100px] right-[8%] text-[#14B8A6]",
  },
];

const EnquiryForm = () => {

  const [successPopup, setSuccessPopup] =
    useState(false);

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://kidzee-new-production.up.railway.app/api/enquiry",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {

        setSuccessPopup(true);

        setFormData({
          parentName: "",
          childName: "",
          phone: "",
          email: "",
          message: "",
        });
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <>
      <section
        id="enquiry-form"
        className="
          relative
          overflow-hidden
          bg-[#F8F3FC]
          py-24
          md:py-32
        "
      >

        {/* FLOATING BLOCKS */}

        <img
          src={blockShape}
          alt=""
          className="
            absolute

            left-[-80px]
            top-[100px]

            w-[240px]
            md:w-[420px]

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
            bottom-[40px]

            w-[280px]
            md:w-[600px]

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

        {/* CONTENT */}

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">

          <div
            className="
              grid
              lg:grid-cols-2

              gap-16
              items-center
            "
          >

            {/* LEFT */}

            <div>

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
                Admissions Enquiry
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
                Let’s Connect
              </h2>

              <p
                className="
                  text-[#555]

                  text-[17px]
                  md:text-[19px]

                  leading-9

                  mb-10
                "
              >
                Fill out the enquiry form and our admissions
                team will connect with you regarding programs,
                curriculum, campus visits, fee structure,
                and your child’s learning journey.
              </p>

              {/* TAGS */}

              <div className="flex flex-wrap gap-4">

                <div
                  className="
                    px-6
                    py-3

                    rounded-full

                    bg-white

                    text-primary

                    font-bold

                    shadow-md
                  "
                >
                  Creative Learning
                </div>

                <div
                  className="
                    px-6
                    py-3

                    rounded-full

                    bg-[#FFF200]

                    text-black

                    font-bold

                    shadow-md
                  "
                >
                  Safe Environment
                </div>

                <div
                  className="
                    px-6
                    py-3

                    rounded-full

                    bg-[#E9D5FF]

                    text-primary

                    font-bold

                    shadow-md
                  "
                >
                  Joyful Activities
                </div>

              </div>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="
                relative

                overflow-hidden

                bg-white

                rounded-[40px]

                p-8
                md:p-10

                shadow-[0_20px_50px_rgba(0,0,0,0.06)]
              "
            >

              {/* FORM GLOW */}

              <div
                className="
                  absolute

                  top-[-100px]
                  right-[-100px]

                  w-[220px]
                  h-[220px]

                  rounded-full

                  bg-[#E9D5FF]

                  opacity-40

                  blur-[90px]
                "
              ></div>

              <div className="relative z-10 grid gap-6">

                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Parent Name"
                  className="
                    h-14

                    rounded-2xl

                    px-5

                    bg-[#F8F3FC]

                    outline-none
                  "
                  required
                />

                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Child Name"
                  className="
                    h-14

                    rounded-2xl

                    px-5

                    bg-[#F8F3FC]

                    outline-none
                  "
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="
                    h-14

                    rounded-2xl

                    px-5

                    bg-[#F8F3FC]

                    outline-none
                  "
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="
                    h-14

                    rounded-2xl

                    px-5

                    bg-[#F8F3FC]

                    outline-none
                  "
                  required
                />

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="
                    rounded-2xl

                    p-5

                    bg-[#F8F3FC]

                    outline-none

                    resize-none
                  "
                ></textarea>

                <button
                  type="submit"
                  className="
                    bg-primary

                    text-white

                    h-14

                    rounded-full

                    font-black

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                  "
                >
                  Submit Enquiry
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

      <SuccessPopup
        open={successPopup}

        onClose={() =>
          setSuccessPopup(false)
        }

        title="Form Submitted Successfully!"

        description="
          Thank you for connecting with Kidzee.
          Our admissions team will contact
          you very soon.
        "
      />
    </>
  );
};

export default EnquiryForm;