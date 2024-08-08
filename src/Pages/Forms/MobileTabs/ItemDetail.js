import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { itemDetails } from "../../../Scripts/data";
import { CartContext } from "../../../Components/Features/ContextProvider";
import Footer from "../../../Components/Footer";

const ItemDetail = () => {
  const { id } = useParams();
  const item = itemDetails[id];
  const { dispatch } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Number of products per page

  const [activeIndex, setActiveIndex] = useState(0);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Initialize filtered products with all products
    setFilteredProducts(item.products);
  }, [item.products]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % item.images.length;
      setActiveIndex(newIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex, item]);

  if (!item) return <div>Item not found</div>;

  const handleImage = {
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "580px",
  };

  const bannerImage = {
    // height: "400px",
    // backgroundColor: "red",
  };

  // Chunk function to divide products into rows
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };
  const chunkedProducts = chunkArray(filteredProducts, 12).slice(0, 1);

  //for banner curousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time on larger screens
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on medium screens
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 1 slide at a time on smaller screens (mobile)
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  //for pagination

  // Calculate indexes for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = item.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <div style={handleImage}>
        <div
          className="carousel slide"
          style={{
            position: "relative",
            top: "350px",
            borderRadius: "10px",
            padding: "20px",
          }}
          id="carouselExampleIndicators"
          data-ride="false" // Disable automatic cycling
        >
          <div
            className="carousel-inner"
            style={{ borderRadius: "20px", height: "200px" }}
          >
            {item.images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="container mt-5">
        <div className="p-4 products-title">
          <p>BEST OF {item.title.toUpperCase()}</p>
          <h5>Top Selling Products</h5>
        </div>
        <div className="row justify-content-center product-container">
          {chunkedProducts.map((chunk, index) => (
            <div key={index} className="row flex-nowrap overflow-auto">
              {chunk.map((product) => (
                <div key={product.id} className="col-md-4 col-sm-6 col-5 mb-4">
                  <div className="card shadow-sm w-100">
                    <img
                      src={product.image} // Check if this should be product.images[0] for the first image
                      className="card-img-top"
                      style={{ maxWidth: "100%", height: "auto" }}
                      alt={`Product ${product.id}`}
                      height="180px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <ins className="text-decoration-none fs-5">
                        ${product.new_mrp}
                      </ins>
                      <del>${product.old_mrp}</del>
                      <button className="btn btn-light border border-2">
                        View More
                      </button>
                    </div>
                    <div className="d-flex w-100">
                      <button
                        className="btn btn-light border-top w-75"
                        onClick={() => dispatch({ type: "ADD", d: product })}
                      >
                        ADD TO CART
                      </button>
                      <a className="btn btn-light border-top w-25">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div
            className="p-2"
            style={{
              fontSize: "20px",
              fontWeight: "500",
              backgroundColor: "#f0f0f0",
              textAlign: "center",
              height: "45px",
              textAlign: "start",
              marginBottom: "20px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p>BEST OF {item.title.toUpperCase()} SERVICES</p>
          </div>
          <div className="mt-5">
            <Slider {...settings}>
              {item.img.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    style={{ width: "100%", height: "auto" }}
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="all-product py-3 mt-4">
          <div
            className="title py-2 px-2"
            style={{
              fontSize: "20px",
              fontWeight: "500",
              backgroundColor: "#f0f0f0",
              textAlign: "center",
              height: "45px",
              textAlign: "start",
              marginBottom: "20px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5>ALL THE {item.title.toUpperCase()} PRODUCTS</h5>
          </div>

          <div
            className="d-flex flex-nowrap overflow-auto"
            style={{ overflowX: "auto" }}
          >
            {currentProducts.map((d, index) => (
              <div
                className="card mr-3"
                key={index}
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                <img className="card-img-top" src={d.image} alt="Product" />
                <div className="card-body">
                  <h4 className="card-title">{d.title}</h4>

                  <p className="card-text">${d.new_mrp}</p>
                  <a
                    className="btn btn-light border border-2"
                    onClick={() => dispatch({ type: "ADD", d: d })}
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* Pagination controls */}
          <nav>
            <ul className="pagination justify-content-center">
              {item.products.length > productsPerPage &&
                Array(Math.ceil(item.products.length / productsPerPage))
                  .fill()
                  .map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => paginate(index + 1)}
                        className="page-link"
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
            </ul>
          </nav>
        </div>

        <div
          className=" container-fluid  mt-5 p-2 border border-2 bg-dark text-light"
          style={bannerImage}
        >
          <h1>{item.title}Care.in +</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
