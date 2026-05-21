import { motion, AnimatePresence } from "framer-motion";

import Confetti from "react-confetti";

import {
  PartyPopper,
  Star,
  Sparkles,
} from "lucide-react";

const SuccessPopup = ({
  open,
  onClose,
  title,
  description,
}) => {

  return (

    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          className="
            fixed
            inset-0
            z-[999]

            flex
            items-center
            justify-center

            bg-black/40

            backdrop-blur-sm

            p-6
          "
        >

          <Confetti
            recycle={false}
            numberOfPieces={250}
          />

          <motion.div

            initial={{
              scale: 0.7,
              opacity: 0,
              y: 40,
            }}

            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}

            exit={{
              scale: 0.8,
              opacity: 0,
            }}

            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}

            className="
              relative

              overflow-hidden

              bg-white

              rounded-[40px]

              p-10

              max-w-[500px]
              w-full

              text-center

              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            "
          >

            {/* GLOW */}

            <div
              className="
                absolute

                top-[-100px]
                right-[-100px]

                w-[240px]
                h-[240px]

                rounded-full

                bg-[#E9D5FF]

                blur-[100px]

                opacity-60
              "
            ></div>

            {/* ICON */}

            <div
              className="
                relative
                z-10

                w-24
                h-24

                mx-auto
                mb-8

                rounded-full

                bg-[#FFF200]

                flex
                items-center
                justify-center

                shadow-xl
              "
            >

              <PartyPopper
                size={42}
                className="text-primary"
              />

            </div>

            {/* FLOATING ICONS */}

            <Star
              className="
                absolute

                top-10
                left-10

                text-[#F59E0B]

                animate-bounce
              "
            />

            <Sparkles
              className="
                absolute

                bottom-10
                right-10

                text-[#EC4899]

                animate-pulse
              "
            />

            {/* TEXT */}

            <h2
              className="
                relative
                z-10

                text-[38px]

                font-black

                text-primary

                mb-4
              "
            >
              Yayyy! 🎉
            </h2>

            <p
              className="
                relative
                z-10

                text-[28px]

                font-black

                text-black

                leading-tight

                mb-5
              "
            >
              {title}
            </p>

            <p
              className="
                relative
                z-10

                text-[#555]

                leading-8

                mb-10
              "
            >
              {description}
            </p>

            <button
              onClick={onClose}

              className="
                relative
                z-10

                bg-primary

                text-white

                px-10
                py-4

                rounded-full

                font-black

                hover:scale-105

                transition-all
                duration-300
              "
            >
              Awesome 
            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default SuccessPopup;