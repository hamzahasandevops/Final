import React, { useEffect, useState } from "react";

import "../../Styles/FullHero.css";

export default function FullHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://static.oxinis.com/healthmug/image/asset/3743-iu.webp",
    "https://static.oxinis.com/healthmug/image/asset/3743-iu.webp",
    "https://static.oxinis.com/healthmug/image/asset/3745-ex.webp",
    // Add more image URLs
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <div
        className="slider-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
      <button
        className="slider-button prev"
        onClick={prevImage}
        aria-label="Previous slide"
      >
        <svg
          className="arrow-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="slider-button next"
        onClick={nextImage}
        aria-label="Next slide"
      >
        <svg
          className="arrow-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
