import React, { useState } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import H1 from "../../../Assets/H1.webp";
import H2 from "../../../Assets/H2.webp";
import H3 from "../../../Assets/H3.webp";
import H4 from "../../../Assets/H4.webp";
import H5 from "../../../Assets/H5.webp";
import H6 from "../../../Assets/H6.webp";
import H7 from "../../../Assets/H7.webp";
import H8 from "../../../Assets/H8.webp";
import H9 from "../../../Assets/H9.webp";
import H10 from "../../../Assets/H10.webp";
import H11 from "../../../Assets/H11.webp";
import H12 from "../../../Assets/H12.webp";
import H13 from "../../../Assets/H13.webp";
import H14 from "../../../Assets/H14.webp";
import H15 from "../../../Assets/H15.webp";
import H16 from "../../../Assets/H16.webp";
import H17 from "../../../Assets/H17.webp";
import H19 from "../../../Assets/H19.webp";
import H20 from "../../../Assets/H20.webp";
import Banner from "../../../Assets/banner-2.webp";

const items = [
  { src: H1, label: "Homeopathy", id: 1 },
  { src: H2, label: "Ayurveda", id: 2 },
  { src: H3, label: "Unani", id: 3 },
  { src: H4, label: "Allopathy", id: 4 },
  { src: H5, label: "Nutrition", id: 5 },
  { src: H6, label: "Sexual Wellness", id: 6 },
  { src: H7, label: "Multivitamins & Minerals", id: 7 },
  { src: H7, label: "Sugar Substitute", id: 8 },
  { src: H8, label: "Hair Care", id: 9 },
  { src: H9, label: "Health Food & Drinks", id: 10 },
  { src: H10, label: "Skin Care", id: 11 },
  { src: H11, label: "Essential Oils", id: 12 },
  { src: H12, label: "Baby Care - General", id: 13 },
  { src: H13, label: "Baby Care - Specific", id: 14 },
  { src: H14, label: "Baby Care - Premium", id: 15 },
  { src: H15, label: "Baby Care - Organic", id: 16 },
  { src: H16, label: "Baby Care - Natural", id: 17 },
  { src: H17, label: "Baby Care - Advanced", id: 18 },
  { src: H19, label: "Baby Care - Sensitive", id: 19 },
  { src: H20, label: "Baby Care - Eco-Friendly", id: 20 },
];

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    padding: "10px",
    justifyContent: "center",
  },
  productItem: {
    flex: "1 1 calc(25% - 16px)", // Adjust to 25% for four items per row on larger screens
    maxWidth: "200px",
    textAlign: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxSizing: "border-box",
    marginBottom: "16px", // Optional spacing between rows
  },
  productImage: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "8px",
  },
  productLabel: {
    margin: "0",
    fontSize: "14px",
  },
};

const mobileStyles = {
  productItem: {
    flex: "1 1 calc(50% - 16px)", // Adjust to 50% for two items per row on smaller screens
    maxWidth: "150px", // Adjusted maxWidth for smaller screens
  },
};

export default function MediCategory() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryClick = debounce((categoryId) => {
    setIsLoading(true);
    // Simulate loading delay and display results after 3 seconds
    setTimeout(() => {
      console.log(`Navigating to category: ${categoryId}`);
      setIsLoading(false);
    }, 3000); // Simulating 3 seconds loading time
  }, 300); // Debounce time of 300ms

  return (
    <div className="">
      <div style={{ backgroundColor: "#dc3545" }}>
        <img src={Banner} height="100px" width="100%" alt="Banner" />
      </div>
      <div style={styles.container}>
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => handleCategoryClick(item.id)}
          >
            <div style={{ ...styles.productItem, ...mobileStyles.productItem }}>
              <img
                src={item.src}
                alt={item.label}
                style={styles.productImage}
              />
              <p style={styles.productLabel}>{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
      {isLoading && (
        <div className="loader">
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          Loading...
        </div>
      )}
    </div>
  );
}
