import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Components/Navbar";
import CategoryFooter from "./CategoryFooter";
import { itemDetails } from "../../Scripts/data";
import { CartContext } from "../../Components/Features/ContextProvider";

const CategoryDetails = () => {
  const { id } = useParams();
  const item = itemDetails[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [item.images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  if (!item) {
    return (
      <div>
        <h2>Item not found</h2>
        <p>Could not find details for category with ID: {id}</p>
      </div>
    );
  }

  const itemData = [
    {
      id: 1,
      mrp: 789,
      images: [
        {
          name: "Garcinia",
          url: "https://static.oxinis.com/healthmug/image/asset/2882-pu.webp",
        },
        {
          name: "Spondin",
          url: "https://static.oxinis.com/healthmug/image/asset/2883-eb.webp",
        },
        {
          name: "Paracetamol",
          url: "https://static.oxinis.com/healthmug/image/asset/2886-fm.webp",
        },
        {
          name: "Alfalfa",
          url: "https://static.oxinis.com/healthmug/image/asset/2885-sr.webp",
        },
        {
          name: "Orasor",
          url: "https://static.oxinis.com/healthmug/image/asset/4041-pj.webp",
        },
      ],
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      id: 2,
      mrp: 1228,
      images: [
        {
          name: "Image 1",
          url: "https://static.oxinis.com/healthmug/image/asset/3714-dh.webp",
        },
        {
          name: "Image 2",
          url: "https://static.oxinis.com/healthmug/image/asset/3610-bp.webp",
        },
        {
          name: "Image 3",
          url: "https://static.oxinis.com/healthmug/image/asset/3611-gv.webp",
        },
        {
          name: "Image 4",
          url: "https://static.oxinis.com/healthmug/image/asset/3609-ec.webp",
        },
        {
          name: "Image 5",
          url: "https://static.oxinis.com/healthmug/image/asset/3612-kb.webp",
        },
      ],
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      id: 3,
      mrp: 933,
      images: [
        {
          name: "Image 1",
          url: "https://static.oxinis.com/healthmug/image/asset/2388-mq.webp",
        },
        {
          name: "Image 2",
          url: "https://static.oxinis.com/healthmug/image/asset/2390-lw.webp",
        },
        {
          name: "Image 3",
          url: "https://static.oxinis.com/healthmug/image/asset/3732-uj.webp",
        },
        {
          name: "Image 4",
          url: "https://static.oxinis.com/healthmug/image/asset/2389-oj.webp",
        },
        {
          name: "Image 5",
          url: "https://static.oxinis.com/healthmug/image/asset/2861-di.webp",
        },
      ],
      title: "Camera",
      author: "@helloimnik",
    },
  ];

  // const totalPrice = itemData.reduce((acc, item) => acc + item.mrp, 0);
  return (
    <div className="container-fluid">
      <div className="w-100">
        <Navbar />
      </div>

      <div className="row container-fluid">
        <div className="col-12 col-sm-6 col-lg-6 p-5">
          <div className="card  shadow px-5">
            <div className="card-body h-75">
              <h5 className="card-title mb-3 mt-3">
                Top {item.title} Medicines
              </h5>

              <p className="card-text lh-lg">{item.description}</p>
            </div>
            <div className="d-flex px-3 pb-3 gap-3">
              {item.banner.map((b, i) => {
                return (
                  <div key={i}>
                    <img src={b} height="150px" width="150px" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-4 col-md-12 col-lg-6 p-5">
          <div className="slider ">
            <div
              className="slider-images"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                height: "570px",
              }}
            >
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  style={{ height: "545px" }}
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
        </div>{" "}
        <div className="col-6 col-sm-6 col-md-6 col-lg-12  ">
          <div className="card-title px-5 py-3 mt-5 ms-2 ">
            <p>UPTO 20% OFF</p>
            <h5>{item.title} Products</h5>
          </div>

          <div
            className="card-products d-flex px-5"
            style={{ overflowX: "auto" }}
          >
            <div className="d-flex flex-nowrap py-3">
              {item.products.slice(0, 6).map((p, index) => (
                <div
                  key={index}
                  className="card p-3 mx-3"
                  style={{ width: "300px" }}
                >
                  <img
                    src={p.image}
                    className="card-img-top"
                    alt="Product Image"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {p.title}{" "}
                      <a
                        className="btn btn-light"
                        style={{
                          position: "relative",
                          bottom: "50px",
                          left: "53px",
                        }}
                        onClick={() => dispatch({ type: "ADD", d: p })}
                      >
                        <i className="fas fa-plus"></i>
                      </a>
                    </h5>
                    <p className="card-text">
                      Description of the product goes here. You can include ...
                    </p>
                    <p className="card-text">
                      <del>${p.old_mrp}</del>{" "}
                      <ins className="text-decoration-none fs-5 text-primary">
                        ${p.new_mrp}
                      </ins>
                    </p>

                    <a href="#" className="btn btn-light">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a href="#" className="btn btn-light">
                      View More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-12   m-auto  p-3 container mt-3">
          <div className="card-title px-5 py-3">
            <p>BEST BRANDS</p>
            <h5>BEST{item.title} Offers</h5>
          </div>
          <div
            className="container-fluid px-5 d-flex "
            style={{ columnGap: "10px" }}
          >
            {item.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  style={{ width: "100%", height: "250px" }}
                  alt={`Image ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-12  ">
          <div className="card-title px-5 py-3 ms-2">
            <p>UPTO 40% OFF On Combo Packs</p>
            <h5>{item.title} Products</h5>
          </div>

          <div
            className="card-products d-flex px-5"
            style={{ overflowX: "auto" }}
          >
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {itemData.map((p) => (
                <div key={p.id} className="col">
                  <div className="card h-100">
                    <ImageList
                      variant="inset"
                      sx={{ width: "100%", height: 450 }}
                    >
                      {p.images &&
                        p.images.map((item, index) => (
                          <ImageListItem key={index}>
                            <img
                              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              src={`${item.url}?w=248&fit=crop&auto=format`}
                              alt=""
                              loading="lazy"
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                            <ImageListItemBar
                              title={item.name} // Render the name here
                              actionIcon={
                                <IconButton
                                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                  aria-label={`info about ${item.name}`}
                                >
                                  <InfoIcon />
                                </IconButton>
                              }
                            />
                          </ImageListItem>
                        ))}
                    </ImageList>
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>{" "}
                      {/* Render the name again if needed */}
                      <p className="card-text">{p.description}</p>
                      <p className="card-text">
                        <div className="d-flex">
                          <div>
                            <del>${p.mrp * 1.5}</del>{" "}
                            <ins className="text-decoration-none fs-5 text-primary">
                              ${p.mrp}
                            </ins>
                          </div>
                        </div>
                      </p>
                      <a href="#" className="btn btn-light">
                        <i className="fas fa-plus"></i> Add to Wishlist
                      </a>
                      <a href="#" className="btn btn-light">
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                      </a>
                      <a href="#" className="btn btn-light">
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <CategoryFooter />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
