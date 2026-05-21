import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const videos = [
  {
    video: video1,
  },

  {
    video: video2,
  },
];

const VideoSection = () => {

  return (

    <section className="bg-[#F5F5F5] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center mb-16">

          <h2
            className="
              text-black

              text-3xl
              md:text-5xl

              font-black
            "
          >
            Watch Our Kids in Action
          </h2>

        </div>

        {/* VIDEOS */}

        <div
          className="
            grid

            md:grid-cols-2

            gap-10
          "
        >

          {videos.map((item, index) => (

            <div
              key={index}

              className="
                overflow-hidden

                rounded-[34px]

                shadow-xl

                bg-black
              "
            >

              <video
                autoPlay
                muted
                loop
                playsInline

                className="
                  w-full

                  h-[320px]

                  object-cover
                "
              >

                <source
                  src={item.video}
                  type="video/mp4"
                />

              </video>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default VideoSection;