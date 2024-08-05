import React, { useRef } from "react";
import "../../Styles/MediHero.css";
import H1 from "../../Assets/H1.webp";
import H2 from "../../Assets/H2.webp";
import H3 from "../../Assets/H3.webp";
import H4 from "../../Assets/H4.webp";
import H5 from "../../Assets/H5.webp";
import H6 from "../../Assets/H6.webp";
import H7 from "../../Assets/H7.webp";
import H8 from "../../Assets/H8.webp";
import H9 from "../../Assets/H9.webp";
import H10 from "../../Assets/H10.webp";
import H11 from "../../Assets/H11.webp";
import H12 from "../../Assets/H12.webp";
import H13 from "../../Assets/H13.webp";
import H14 from "../../Assets/H14.webp";
import H15 from "../../Assets/H15.webp";
import H16 from "../../Assets/H16.webp";
import H17 from "../../Assets/H17.webp";

import H19 from "../../Assets/H19.webp";
import H20 from "../../Assets/H20.webp";

const items = [
  { src: H1, label: "Homeopathy" },
  { src: H2, label: "Ayurveda" },
  { src: H3, label: "Unani" },
  { src: H4, label: "Allopathy" },
  { src: H5, label: "Nutrition" },
  { src: H6, label: "Sexual wellness" },
  { src: H7, label: "Multivitamins & Minerals" },
  { src: H7, label: "Sugar Substitute" }, // Adjust label if different image
  { src: H8, label: "Hair Care" },
  { src: H9, label: "Health Food & Drinks" },
  { src: H10, label: "Skin Care" },
  { src: H11, label: "Essential oils" },
  { src: H12, label: "Baby Care" },
  { src: H13, label: "Baby Care" },
  { src: H14, label: "Baby Care" },
  { src: H15, label: "Baby Care" },
  { src: H16, label: "Baby Care" },
  { src: H17, label: "Baby Care" },
  { src: H19, label: "Baby Care" },
  { src: H20, label: "Baby Care" },
];
export default function MediHero() {
  const sliderRef = useRef(null);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container-fluid  mb-5">
      <div className="slider-container">
        <button
          className="slider-control prev"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <span>&lt;</span>
        </button>
        <div className="slider-wrapper" ref={sliderRef}>
          <div className="slider-content">
            {items.map((item, index) => (
              <div key={index} className="slider-item">
                <img src={item.src} alt={item.label} />
                <p style={{ flexWrap: "wrap" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="slider-control next"
          onClick={handleNext}
          aria-label="Next"
        >
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
}
