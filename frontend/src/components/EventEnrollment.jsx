// src/components/contact/EventEnrollment.jsx

import { useState } from "react";

import {
  PartyPopper,
  Gift,
  Music,
  Palette,
  School,
  ShieldCheck,
  Stars,
  CalendarDays,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import blockShape from "../assets/block-shape.png";

import SuccessPopup from "./SuccessPopup";

const eventIcons = [
  {
    icon: PartyPopper,
    className:
      "top-[80px] left-[8%] text-[#FFF200]",
  },

  {
    icon: Gift,
    className:
      "bottom-[100px] left-[12%] text-[#EC4899]",
  },

  {
    icon: Music,
    className:
      "top-[120px] right-[10%] text-[#14B8A6]",
  },

  {
    icon: Palette,
    className:
      "bottom-[120px] right-[8%] text-[#F59E0B]",
  },
];

const visitIcons = [
  {
    icon: School,
    className:
      "top-[90px] left-[8%] text-[#FFF200]",
  },

  {
    icon: ShieldCheck,
    className:
      "bottom-[100px] left-[12%] text-[#14B8A6]",
  },

  {
    icon: Stars,
    className:
      "top-[120px] right-[10%] text-[#EC4899]",
  },

  {
    icon: CalendarDays,
    className:
      "bottom-[120px] right-[8%] text-[#F59E0B]",
  },
];

const EventEnrollment = () => {

  const [activeTab, setActiveTab] =
    useState("visit");

  const [successPopup, setSuccessPopup] =
    useState(false);

  const [popupTitle, setPopupTitle] =
    useState("");

  const [popupDescription, setPopupDescription] =
    useState("");

  const [visitForm, setVisitForm] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const [eventForm, setEventForm] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    address: "",
    event: "",
    notes: "",
  });

  const floatingIcons =
    activeTab === "visit"
      ? visitIcons
      : eventIcons;

  const handleVisitChange = (e) => {

    setVisitForm({
      ...visitForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleEventChange = (e) => {

    setEventForm({
      ...eventForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleVisitSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://kidzee-new-production.up.railway.app/api/campus-visit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(visitForm),
        }
      );

      const data = await response.json();

      if (data.success) {

        setPopupTitle(
          "Campus Visit Scheduled! 🏫"
        );

        setPopupDescription(
          "We are excited to welcome you to Kidzee. Our team will contact you shortly with your visit details."
        );

        setSuccessPopup(true);

        setVisitForm({
          parentName: "",
          childName: "",
          phone: "",
          email: "",
          address: "",
          date: "",
          time: "",
          notes: "",
        });
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  const handleEventSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://kidzee-new-production.up.railway.app/api/event-enrollment",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(eventForm),
        }
      );

      const data = await response.json();

      if (data.success) {

        setPopupTitle(
          "Event Enrollment Successful! 🎉"
        );

        setPopupDescription(
          "Your child is now enrolled for the event. We can't wait to celebrate and learn together!"
        );

        setSuccessPopup(true);

        setEventForm({
          parentName: "",
          childName: "",
          phone: "",
          email: "",
          address: "",
          event: "",
          notes: "",
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
        id="interactive-form"
        className="
          relative
          overflow-hidden
          bg-white
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

            left-[-100px]
            top-[100px]

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

            w-[320px]
            md:w-[700px]

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

        <div className="max-w-[950px] mx-auto px-6 relative z-10">

          <div
            className="
              relative

              overflow-hidden

              bg-[#6D24A5]

              rounded-[42px]

              p-8
              md:p-14

              shadow-[0_20px_60px_rgba(109,36,165,0.2)]
            "
          >

            {/* GLOW */}

            <div
              className="
                absolute

                top-[-120px]
                right-[-120px]

                w-[260px]
                h-[260px]

                rounded-full

                bg-[#B46DFF]

                opacity-30

                blur-[100px]
              "
            ></div>

            {/* TOGGLE */}

            <div
              className="
                relative
                z-10

                flex
                justify-center

                mb-12
              "
            >

              <div
                className="
                  relative

                  bg-white/10

                  p-2

                  rounded-full

                  backdrop-blur-sm

                  flex

                  w-full
                  max-w-[520px]
                "
              >

                <motion.div
                  layoutId="active-pill"

                  className="
                    absolute

                    top-2
                    bottom-2

                    w-[calc(50%-8px)]

                    rounded-full

                    bg-[#FFF200]
                  "

                  animate={{
                    x:
                      activeTab === "visit"
                        ? 0
                        : "100%",
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />

                <button
                  onClick={() =>
                    setActiveTab("visit")
                  }

                  className={`
                    relative
                    z-10

                    flex-1

                    h-14

                    rounded-full

                    text-sm
                    md:text-base

                    font-black

                    transition-all
                    duration-300

                    ${
                      activeTab === "visit"
                        ? "text-black"
                        : "text-white"
                    }
                  `}
                >
                  Book Campus Visit
                </button>

                <button
                  onClick={() =>
                    setActiveTab("event")
                  }

                  className={`
                    relative
                    z-10

                    flex-1

                    h-14

                    rounded-full

                    text-sm
                    md:text-base

                    font-black

                    transition-all
                    duration-300

                    ${
                      activeTab === "event"
                        ? "text-black"
                        : "text-white"
                    }
                  `}
                >
                  Enroll For Event
                </button>

              </div>

            </div>

            <AnimatePresence mode="wait">

              {activeTab === "visit" ? (

                <motion.form
                  key="visit"

                  onSubmit={handleVisitSubmit}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -20,
                  }}

                  transition={{
                    duration: 0.35,
                  }}

                  className="
                    relative
                    z-10

                    grid
                    gap-6
                  "
                >

                  <input
                    type="text"
                    name="parentName"
                    value={visitForm.parentName}
                    onChange={handleVisitChange}
                    placeholder="Parent Name"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="text"
                    name="childName"
                    value={visitForm.childName}
                    onChange={handleVisitChange}
                    placeholder="Child Name"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={visitForm.phone}
                    onChange={handleVisitChange}
                    placeholder="Phone Number"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={visitForm.email}
                    onChange={handleVisitChange}
                    placeholder="Email Address"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="text"
                    name="address"
                    value={visitForm.address}
                    onChange={handleVisitChange}
                    placeholder="Residential Address"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-6">

                    <input
                      type="date"
                      name="date"
                      value={visitForm.date}
                      onChange={handleVisitChange}
                      className="
                        h-14

                        rounded-2xl

                        px-5

                        bg-white

                        outline-none
                      "
                      required
                    />

                    <select
                      name="time"
                      value={visitForm.time}
                      onChange={handleVisitChange}
                      className="
                        h-14

                        rounded-2xl

                        px-5

                        bg-white

                        outline-none

                        text-[#555]
                      "
                      required
                    >

                      <option value="">
                        Select Visit Time Slot
                      </option>

                      <option value="9:00 AM - 10:00 AM">
                        9:00 AM - 10:00 AM
                      </option>

                      <option value="10:00 AM - 11:00 AM">
                        10:00 AM - 11:00 AM
                      </option>

                      <option value="11:00 AM - 12:00 PM">
                        11:00 AM - 12:00 PM
                      </option>

                      <option value="12:00 PM - 1:00 PM">
                        12:00 PM - 1:00 PM
                      </option>

                    </select>

                  </div>

                  <textarea
                    rows="4"
                    name="notes"
                    value={visitForm.notes}
                    onChange={handleVisitChange}
                    placeholder="Additional Notes"
                    className="
                      rounded-2xl

                      p-5

                      bg-white

                      outline-none

                      resize-none
                    "
                  ></textarea>

                  <button
                    type="submit"
                    className="
                      bg-[#FFF200]

                      text-primary

                      h-14

                      rounded-full

                      font-black

                      transition-all
                      duration-300

                      hover:scale-[1.02]
                    "
                  >
                    Schedule Campus Visit
                  </button>

                </motion.form>

              ) : (

                <motion.form
                  key="event"

                  onSubmit={handleEventSubmit}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -20,
                  }}

                  transition={{
                    duration: 0.35,
                  }}

                  className="
                    relative
                    z-10

                    grid
                    gap-6
                  "
                >

                  <input
                    type="text"
                    name="parentName"
                    value={eventForm.parentName}
                    onChange={handleEventChange}
                    placeholder="Parent Name"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="text"
                    name="childName"
                    value={eventForm.childName}
                    onChange={handleEventChange}
                    placeholder="Child Name"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={eventForm.phone}
                    onChange={handleEventChange}
                    placeholder="Phone Number"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={eventForm.email}
                    onChange={handleEventChange}
                    placeholder="Email Address"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <input
                    type="text"
                    name="address"
                    value={eventForm.address}
                    onChange={handleEventChange}
                    placeholder="Residential Address"
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  />

                  <select
                    name="event"
                    value={eventForm.event}
                    onChange={handleEventChange}
                    className="
                      h-14

                      rounded-2xl

                      px-5

                      bg-white

                      outline-none
                    "
                    required
                  >
                    <option value="">
                      Select Event
                    </option>

                    <option>
                      Annual Function
                    </option>

                    <option>
                      Summer Camp
                    </option>

                    <option>
                      Sports Day
                    </option>

                    <option>
                      Art Competition
                    </option>

                  </select>

                  <textarea
                    rows="4"
                    name="notes"
                    value={eventForm.notes}
                    onChange={handleEventChange}
                    placeholder="Additional Notes"
                    className="
                      rounded-2xl

                      p-5

                      bg-white

                      outline-none

                      resize-none
                    "
                  ></textarea>

                  <button
                    type="submit"
                    className="
                      bg-[#FFF200]

                      text-primary

                      h-14

                      rounded-full

                      font-black

                      transition-all
                      duration-300

                      hover:scale-[1.02]
                    "
                  >
                    Register Event
                  </button>

                </motion.form>

              )}

            </AnimatePresence>

          </div>

        </div>

      </section>

      <SuccessPopup
        open={successPopup}

        onClose={() =>
          setSuccessPopup(false)
        }

        title={popupTitle}

        description={popupDescription}
      />
    </>
  );
};

export default EventEnrollment;