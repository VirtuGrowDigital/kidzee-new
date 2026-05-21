// src/components/contact/ContactInfo.jsx

import {
    MapPin,
    Phone,
    Mail,
    Clock3,
  } from "lucide-react";
  
  const info = [
    {
      icon: MapPin,
      title: "Campus Address",
      text: "Kidzee Preschool, Kursi Road, Lucknow",
      bg: "bg-[#FDF1D7]",
      iconBg: "bg-[#F59E0B]",
    },
  
    {
      icon: Phone,
      title: "Call Us",
      text: "+91 6306034180",
      bg: "bg-[#F4F0FF]",
      iconBg: "bg-[#7C3AED]",
    },
  
    {
      icon: Mail,
      title: "Email Address",
      text: "admissions@kidzee.com",
      bg: "bg-[#E7F4EC]",
      iconBg: "bg-[#16A34A]",
    },
  
    {
      icon: Clock3,
      title: "Working Hours",
      text: "Mon - Sat | 8:00 AM - 5:00 PM",
      bg: "bg-[#FFE7EE]",
      iconBg: "bg-[#E11D48]",
    },
  ];
  
  const ContactInfo = () => {
    return (
      <section className="bg-white py-20 md:py-24">
  
        <div className="max-w-[1280px] mx-auto px-6">
  
          <div
            className="
              grid
  
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
  
              gap-6
            "
          >
  
            {info.map((item, index) => {
  
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className={`
                    ${item.bg}
  
                    rounded-[32px]
  
                    p-8
  
                    transition-all
                    duration-300
  
                    hover:-translate-y-2
                  `}
                >
  
                  <div
                    className={`
                      ${item.iconBg}
  
                      w-14
                      h-14
  
                      rounded-2xl
  
                      flex
                      items-center
                      justify-center
  
                      mb-6
                    `}
                  >
  
                    <Icon
                      size={26}
                      className="text-white"
                    />
  
                  </div>
  
                  <h3
                    className="
                      text-black
  
                      text-[22px]
  
                      font-black
  
                      mb-4
                    "
                  >
                    {item.title}
                  </h3>
  
                  <p
                    className="
                      text-[#555]
  
                      leading-7
                    "
                  >
                    {item.text}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default ContactInfo;