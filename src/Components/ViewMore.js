import React, { useContext, useState } from "react";
import { CartContext } from "./Features/ContextProvider";

import ViewMoreNav from "../Pages/ViewMoreNav";
import Footer from "./Footer";
import Questions from "../Pages/Questions";

import Reviews from "./Reviews";
import BreadCrumbs from "../Pages/BreadCrumbs";

export default function ViewMore() {
  const { cart, dispatch } = useContext(CartContext);
  const [pincode, setPincode] = useState("");
  const [ml, setMl] = useState([]);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    const value = e.target.value;

    // Validate input to ensure it's a number and is 6 digits long
    if (/^\d*$/.test(value) && value.length <= 6) {
      setPincode(value);
    }
  };
  const handlePinForm = () => {
    if (pincode === "") {
      alert("Enter your Pincode");
    } else {
      alert("Your order shall deliver in 7-8 working days.");
    }
  };
  const increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  const ratingStar = {
    color: "orange",
  };

  const handleCount = () => {
    const maxCount = 5;
    if (count < maxCount) {
      return setCount(count + 1);
    }
  };

  const gradientStyle = {
    background: "linear-gradient(to right, #ECF2FF, #FBFCFF)",
  };
  return (
    <div className="container-fluid w-100 ">
      <div className="row container-fluid w-100">
        <ViewMoreNav />

        {cart.map((c) => {
          return (
            <div className=" p-5 d-flex flex-column w-75 m-auto  w-100">
              <div className="row  d-flex flex-row ">
                <div className="col-md-12 col-sm-12 ">
                  <div className="title-field mx-4">
                    <BreadCrumbs />
                  </div>
                </div>
                <div className="col-md-5 col-sm-12 p-5 col">
                  <div
                    id="carouselExampleCaptions"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div class="carousel-inner ">
                      <div class="carousel-item active" data-bs-interval="2000">
                        <img
                          src={c.images}
                          class="d-block w-75"
                          alt="..."
                          hei
                        />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item" data-bs-interval="2000">
                        <img src={c.images} class="d-block  w-75" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            second slide.
                          </p>
                        </div>
                      </div>
                      <div class="carousel-item" data-bs-interval="2000">
                        <img src={c.images} class="d-block  w-75" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 ">
                  <div className="title-field">
                    <h3 className="about-title py-3  ">
                      <span>{c.title}</span>
                    </h3>
                    <p>{c.desc}</p>
                  </div>
                  <div className="button d-flex ">
                    <select
                      className="form-select bg-light text-dark w-25"
                      aria-label="Default select example"
                    >
                      {c.ml.map((c) => {
                        return (
                          <>
                            {" "}
                            <option className="">{c}ml</option>
                          </>
                        );
                      })}
                    </select>
                    <button
                      className="btn btn-outline-success bg-success text-white  mx-2"
                      disabled={true}
                    >
                      {" "}
                      10 % Off
                    </button>
                  </div>
                  <div className="mrp  py-3  w-25">
                    <p>
                      MRP ₹<del>{c.old_mrp}</del>
                      <ins className="fs-5 text-decoration-none ">
                        {" "}
                        ₹{c.new_mrp}
                      </ins>
                    </p>
                    {"  "}
                  </div>
                  <div className="dispatchButtons d-flex align-items-center  w-50 justify-content-between">
                    <div className="border border-1 p-1 rounded d-flex">
                      {" "}
                      <button
                        className="rounded circle px-2 btn btn-light"
                        onClick={() => decrease(c.id)}
                      >
                        <b>-</b>
                      </button>
                      <button className="btn btn-light mx-2">
                        {c.quantity}
                      </button>
                      <button
                        className="rounded circle px-2 btn btn-light"
                        onClick={() => increase(c.id)}
                      >
                        <b>+</b>
                      </button>
                    </div>
                    <div className="border border-1 p-1 rounded">
                      {/* for large devices */}
                      <button
                        className="btn btn-light mx-2 d-none d-lg-block d-xl-block"
                        onClick={() => dispatch({ type: "ADD", d: c })}
                      >
                        <i class="fa-solid fa-cart-shopping text-success"></i>{" "}
                        ADD TO CART
                      </button>
                      <button
                        className="btn btn-light d-block mx-2 d-lg-none d-xl-none"
                        onClick={() => dispatch({ type: "ADD", d: c })}
                      >
                        <i class="fa-solid fa-cart-shopping text-success"></i>{" "}
                      </button>
                    </div>
                    <div className="border border-1 p-1 rounded">
                      <button className="btn btn-light mx-2 d-none d-lg-block d-xl-block">
                        <i class="fa-solid fa-cart-shopping text-success d-lg-none d-xl-none"></i>{" "}
                        BUY
                      </button>
                      <button className="btn btn-light mx-2 ">Buy</button>
                    </div>
                  </div>

                  <div
                    className="container border border-2 d-flex flex-column p-3 mt-3"
                    style={{ backgroundColor: "#f7f7f7" }}
                  >
                    <div className="title d-flex justify-content-start py-2">
                      <h4>Delivery Option</h4>
                    </div>
                    <div className="buttons d-flex justify-content-start">
                      <input
                        type="text"
                        value={pincode}
                        onChange={handleChange}
                        maxLength="6" // Optional: restrict input length
                        placeholder="Check Delivery Pincode "
                        className="btn btn-primary bg-light w-50 text-dark"
                      />

                      <button
                        className="btn btn-primary bg-light text-dark"
                        type="submit"
                        onClick={handlePinForm}
                      >
                        Check
                      </button>

                      {/* {pincode.length === 6 && <p>Pincode is complete!</p>} */}
                    </div>
                    <div>
                      <ul className="text d-flex  px-3 p-4">
                        <li className="list-style-type-none">
                          ✓ Free Shipping above 1500 orders.
                        </li>

                        <li className="mx-4"> ✓ 15 days Full Return*.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="offers p-3  shadow   bg-body rounded">
                    {" "}
                    <h3 className="d-flex">Offer Available</h3>
                    <p className="d-flex">
                      {" "}
                      ✓ Coupon Code: MCMR10 For 10% Extra Discount on Checkout.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-8 col-sm-8">
                  <div className="title">
                    <h3>DESCRIPTION</h3>
                    <p className="lh-lg">{c.meta_desc}</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4  p-2 rounded d-flex justify-content-center">
                  {" "}
                  <div className="title">
                    <h3>SELLER INFORMATION</h3>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-5">
                  <div className="meta-title">
                    <h3 className="about-title py-3  ">
                      <span>Similar Product</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 d-none">Product</div>
              </div>

              <div className="row mt-5">
                <div className="col-md-12 col-sm-12">
                  <h2>FREQUENTLY ASKED QUESTION</h2>
                </div>
                <div className="col-md-12 col-sm-12 p-3 ">
                  {/* <ol>
                  <li> Is {c.title} Drop safe to take with other medicines?</li>
                  <li>
                    How long do I need to use {c.title} before I see improvement
                    of my conditions?
                  </li>
                  <li>
                    After my symptoms have passed, should I continue to take the
                    medicine?
                  </li>
                  <li>
                    I have never taken homeopathic medicine before. Would it be
                    safe to take {c.title}?
                  </li>
                </ol> */}

                  <Questions title={c.title} />
                </div>

                <div className="rating  col-md-12 col-sm-12 p-3">
                  <h3 className="about-title py-3  ">
                    <span>Ratings & Reviews</span>
                  </h3>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-sm-12 col-md-12 d-flex justify-content-center p-4 rounded"
                  style={gradientStyle}
                >
                  {" "}
                  <span className="fs-1">{c.title}</span>
                </div>
                <div
                  className="col-sm-5 col-md-5 border border-1 p-5"
                  style={gradientStyle}
                >
                  <div className="class-title-button d-flex flex-column justify-content-center align-items-center">
                    <h2>Customer Review</h2>
                    <button
                      className="btn btn-primary bg-light text-success mt-3"
                      onClick={handleCount}
                    >
                      <span>{count} out of </span>
                      <span className="text-dark"> 5 </span>
                      <span
                        class="fa fa-star checked "
                        style={ratingStar}
                      ></span>
                      <span
                        class="fa fa-star checked"
                        style={ratingStar}
                      ></span>
                      <span
                        class="fa fa-star checked"
                        style={ratingStar}
                      ></span>
                      <span class="fa fa-star" style={ratingStar}></span>
                      <span class="fa fa-star"></span>
                    </button>
                    <p className="mt-2">Based on 9 customer ratings.</p>
                  </div>

                  <div className="stars-rating p-3">
                    <span>3 Star</span>
                    <div className="progress ">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        // style="width: 25%"
                        style={{ width: "75%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>2 Star</span>
                    <div class="progress mt-2">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        // style="width: 50%"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>1 Star</span>
                    <div class="progress mt-2">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        // style="width: 75%"
                        style={{ width: "25%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>No Star</span>
                    <div class="progress mt-2">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        // style="width: 100%"
                        style={{ width: "0%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center p-5">
                      <h5>Have you used this product?</h5>
                      <p>Rate it on scale of 5</p>
                      <div className="p-1 mb-3">
                        {" "}
                        <span
                          class="fa fa-star checked "
                          style={ratingStar}
                        ></span>
                        <span
                          class="fa fa-star checked"
                          style={ratingStar}
                        ></span>
                        <span
                          class="fa fa-star checked"
                          style={ratingStar}
                        ></span>
                        <span class="fa fa-star" style={ratingStar}></span>
                        <span class="fa fa-star"></span>
                      </div>
                      <button className="btn btn-outline-success bg-light text-dark">
                        Write a Product Review
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 col-md-7 border border-2">
                  <div className="row">
                    <Reviews />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-sm-12 p-3 ">
                  <Footer />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
