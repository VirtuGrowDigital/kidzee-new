import { useState } from "react";

import AlbumModal from "./AlbumModal";

import ImageModal from "./ImageModal";

/* GALLERY IMAGES */

import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";

const albums = [
  {
    title: "Bumble Basecamp",

    images: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    ],
  },

  {
    title: "Summer Camp",

    images: [
      img6,
      img5,
      img4,
      img3,
      img2,
      img1,
    ],
  },
];

const SpecialEvents = () => {

  const [selectedAlbum, setSelectedAlbum] =
    useState(null);

  const [selectedImage, setSelectedImage] =
    useState(null);

  return (

    <section
      className="
        relative

        overflow-hidden

        bg-[#6D24A5]

        py-24
      "
    >

      {/* FLOATING SHAPES */}

      <div
        className="
          absolute

          left-[40px]
          bottom-[120px]

          w-[110px]
          h-[110px]

          bg-[#B46AD8]

          opacity-40

          rounded-[28px]

          rotate-[20deg]
        "
      ></div>

      <div
        className="
          absolute

          right-[40px]
          bottom-[160px]

          w-[110px]
          h-[110px]

          bg-[#B46AD8]

          opacity-40

          rounded-[28px]

          rotate-[20deg]
        "
      ></div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="mb-14">

          <h2
            className="
              text-white

              text-3xl
              md:text-5xl

              font-black

              mb-4
            "
          >
            Special Events
          </h2>

          <p
            className="
              text-white/80

              text-base

              max-w-2xl

              leading-8
            "
          >
            Explore magical moments from our joyful
            celebrations, creative workshops, and
            unforgettable learning experiences.
          </p>

        </div>

        {/* EVENT CARDS */}

        <div className="grid md:grid-cols-2 gap-8">

          {albums.map((item, index) => (

            <div
              key={index}

              className="
                group

                relative

                h-[340px]

                overflow-hidden

                rounded-[36px]

                shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                cursor-pointer
              "
            >

              {/* IMAGE */}

              <img
                src={item.images[0]}

                alt=""

                className="
                  w-full
                  h-full

                  object-cover

                  group-hover:scale-110

                  transition-all
                  duration-700
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-transparent
                "
              ></div>

              {/* CONTENT */}

              <div
                className="
                  absolute

                  bottom-7
                  left-7
                  right-7
                "
              >

                <div
                  className="
                    inline-flex

                    items-center

                    gap-2

                    bg-[#FFF200]

                    text-black

                    px-4
                    py-2

                    rounded-full

                    text-xs

                    font-black

                    mb-4
                  "
                >
                  {item.images.length} Photos
                </div>

                <h3
                  className="
                    text-white

                    text-2xl

                    font-black

                    mb-2
                  "
                >
                  {item.title}
                </h3>

                <button
                  onClick={() =>
                    setSelectedAlbum(item)
                  }

                  className="
                    text-[#FFF200]

                    text-base

                    font-black

                    hover:translate-x-2

                    transition-all
                    duration-300
                  "
                >
                  View Album →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ALBUM MODAL */}

      <AlbumModal
        album={selectedAlbum}
        onClose={() =>
          setSelectedAlbum(null)
        }
        onImageClick={(img) =>
          setSelectedImage(img)
        }
      />

      {/* IMAGE MODAL */}

      <ImageModal
        image={selectedImage}
        onClose={() =>
          setSelectedImage(null)
        }
      />

    </section>
  );
};

export default SpecialEvents;