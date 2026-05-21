import { X } from "lucide-react";

const AlbumModal = ({
  album,
  onClose,
  onImageClick,
}) => {

  if (!album) return null;

  return (

    <div
      className="
        fixed
        inset-0

        z-[999]

        bg-black/80

        overflow-y-auto

        p-6
      "
    >

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h2
            className="
              text-white

              text-4xl

              font-black
            "
          >
            {album.title}
          </h2>

          <button
            onClick={onClose}
            className="text-white"
          >
            <X size={38} />
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {album.images.map((img, index) => (

            <img
              key={index}

              src={img}

              alt=""

              onClick={() =>
                onImageClick(img)
              }

              className="
                h-[280px]
                w-full

                object-cover

                rounded-3xl

                cursor-pointer

                hover:scale-[1.03]

                transition-all
                duration-300
              "
            />

          ))}

        </div>

      </div>

    </div>
  );
};

export default AlbumModal;