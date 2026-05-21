import { X } from "lucide-react";

const ImageModal = ({
  image,
  onClose,
}) => {

  if (!image) return null;

  return (

    <div
      className="
        fixed
        inset-0

        z-[999]

        bg-black/90

        flex
        items-center
        justify-center

        p-6
      "
    >

      {/* CLOSE BUTTON */}

      <button
        onClick={onClose}

        className="
          absolute

          top-6
          right-6

          text-white

          hover:scale-110

          transition-all
          duration-300
        "
      >
        <X size={36} />
      </button>

      {/* IMAGE */}

      <img
        src={image}

        alt=""

        className="
          w-auto

          max-w-[95vw]
          max-h-[92vh]

          object-contain

          shadow-2xl
        "
      />

    </div>
  );
};

export default ImageModal;