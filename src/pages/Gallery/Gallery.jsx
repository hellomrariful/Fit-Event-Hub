import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";

const Gallery = () => {
  const imageUrls = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);


  const mainImageUrl =
  "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg";

const imageUrlPic = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
];

const [activeImage, setActiveImage] = useState(mainImageUrl);

const handleImageClick = (imageUrl) => {
  setActiveImage(imageUrl);
};

  return (
    <div className="mt-20">
      <div>
      <p className="text-center text-[#524FF5] text-2xl font-semibold uppercase tracking-[8px] mb-1">
        OUR Recent Event Gallery
      </p>
      <h1 className="text-center text-5xl font-bold mb-16">Live Events</h1>
      </div>
      <div>
        <div id="gallery" className="relative w-full mt-20 " data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className={`${activeIndex === index ? "block" : "hidden"} duration-700 ease-in-out`}
                data-carousel-item={activeIndex === index ? "active" : null}
              >
                <img
                  src={imageUrl}
                  className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black text-3xl"
            data-carousel-pre
            onClick={prevImage}
          >
            <FaAngleLeft></FaAngleLeft>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-3xl"
            data-carousel-next
            onClick={nextImage}
          >
           <FaAngleRight></FaAngleRight>
          </button>
        </div>
      </div>

      <div className=" mt-20">
      <p className="text-center text-[#524FF5] text-2xl font-semibold uppercase tracking-[8px] mb-1">
      Latest Captured Moments
      </p>
      <h1 className="text-center text-5xl font-bold mb-16">Event Visuals</h1>
      </div>
      <div className="mt-20 mx-auto text-center flex justify-center">
      <div className="grid gap-4">
      <div>
        <img
          className="h-auto mx-auto rounded-lg "
          src={activeImage}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {imageUrlPic.map((imageUrl, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src={imageUrl}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(imageUrl)}
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Gallery;
