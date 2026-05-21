import { useState } from "react";

import ImageModal from "./ImageModal";

/* GALLERY IMAGES */

import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";

const images = [
  {
    image: img1,
    title: "Bumble Basecamp",
    date: "18th May, 2026",
  },

  {
    image: img2,
    title: "Mother's Day",
    date: "10th May, 2026",
  },

  {
    image: img3,
    title: "Dance Day",
    date: "29th April, 2026",
  },

  {
    image: img4,
    title: "Art Competition",
    date: "18th April, 2026",
  },

  {
    image: img5,
    title: "Story Session",
    date: "12th April, 2026",
  },

  {
    image: img6,
    title: "Outdoor Fun",
    date: "2nd April, 2026",
  },
];

const GalleryGrid = () => {

  const [selectedImage, setSelectedImage] =
    useState(null);

  return (

    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((item, index) => (

            <div
              key={index}

              onClick={() =>
                setSelectedImage(item.image)
              }

              className="
                bg-white

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                cursor-pointer

                transition-all
                duration-300

                hover:-translate-y-2
              "
            >

              {/* IMAGE */}

              <div className="h-[420px] overflow-hidden">

                <img
                  src={item.image}

                  alt=""

                  className="
                    w-full
                    h-full

                    object-cover
                    object-top

                    hover:scale-105

                    transition-all
                    duration-500
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="bg-[#7B2FA6] p-6">

                <h3
                  className="
                    text-white

                    text-[24px]

                    font-black

                    mb-2
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-white/80

                    text-base
                  "
                >
                  {item.date}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

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

export default GalleryGrid;