import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../Assets/Dysomin.jpg";
import { CartContext } from "../../../Components/Features/ContextProvider";
import Footer from "../../../Components/Footer";

const itemDetails = {
  1: {
    title: "Homeopathy",
    description: "Details about Homeopathy",
    image: "https://static.oxinis.com/healthmug/image/asset/2504-ok.webp",
    images: [
      "https://static.oxinis.com/healthmug/image/asset/3743-iu.webp",
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
      "https://static.oxinis.com/healthmug/image/asset/3745-ex.webp",
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
    ],

    img: [
      "https://static.oxinis.com/healthmug/image/asset/3622-qf.webp",
      "https://static.oxinis.com/healthmug/image/asset/3623-pe.webp",
      "https://static.oxinis.com/healthmug/image/asset/3624-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/3625-lp.webp",
    ],

    products: [
      {
        id: 20,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
      },
      {
        id: 21,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
      },
      {
        id: 22,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
      },
      {
        id: 23,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
      },
      {
        id: 24,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
      },
      {
        id: 25,
        title: "Garcinia combogia",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
      },
      // Add more products as needed
    ],
  },
  2: {
    title: "Ayurveda",
    description: "Details about Ayurveda",
    image: "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
    images: [
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
      "https://static.oxinis.com/healthmug/image/asset/2387-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
      "https://static.oxinis.com/healthmug/image/asset/2504-ok.webp",
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
    ],
    img: [
      "https://static.oxinis.com/healthmug/image/asset/3622-qf.webp",
      "https://static.oxinis.com/healthmug/image/asset/3623-pe.webp",
      "https://static.oxinis.com/healthmug/image/asset/3624-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/3625-lp.webp",
    ],
    products: [
      {
        id: 26,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        ml: [20, 30, 100, 1000],
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Discount: 10,
      },
      {
        id: 27,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 28,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 29,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
        ml: [20, 30, 100, 1000],
      },
      {
        id: 30,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
        ml: [20, 30, 100, 1000],
      },
      {
        id: 31,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
        ml: [20, 30, 100, 1000],
      },
      // Add more products as needed
    ],
  },
  3: {
    title: "Unani",
    description: "Details about Unani",
    image: "https://static.oxinis.com/healthmug/image/asset/2387-gq.webp",
    images: [
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
      "https://static.oxinis.com/healthmug/image/asset/2387-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
      "https://static.oxinis.com/healthmug/image/asset/2387-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/2277-nb.webp",
    ],
    img: [
      "https://static.oxinis.com/healthmug/image/asset/3622-qf.webp",
      "https://static.oxinis.com/healthmug/image/asset/3623-pe.webp",
      "https://static.oxinis.com/healthmug/image/asset/3624-gq.webp",
      "https://static.oxinis.com/healthmug/image/asset/3625-lp.webp",
    ],
    products: [
      {
        id: 32,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 33,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 34,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        new_mrp: 118,
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 35,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        quantity: 1,
        Discount: 10,
        ml: [20, 30, 100, 1000],
      },
      {
        id: 36,
        title: "Garcinia combogia",
        offPrice: "10% OFF",
        old_mrp: 131,
        new_mrp: 118,
        quantity: 1,
        image:
          "https://th.bing.com/th?id=OIP.em4TcFlceBF0subfkXqomwHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        Discount: 10,
        ml: [20, 30, 100, 1000],
        ml: [20, 30, 100, 1000],
        ml: [20, 30, 100, 1000],
      },
    ],
  },
};

const ItemDetail = () => {
  const { id } = useParams();
  const item = itemDetails[id];
  const { dispatch } = useContext(CartContext);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % item.images.length;
      setActiveIndex(newIndex);
    }, 2000);

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

  const chunkedProducts = chunkArray(item.products, 6);

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

  return (
    <div>
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
          data-ride="carousel"
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
        <div
          className=" container-fluid  mt-5 p-2 border border-2 bg-dark text-light"
          style={bannerImage}
        >
          <h1>MedicineCare.in +</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
