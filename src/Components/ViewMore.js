import React, { useContext, useState } from "react";
import { CartContext } from "./Features/ContextProvider";
import { totalItem } from "./Features/CartReducer";
import { totalPrice } from "./Features/CartReducer";
import Header from "../Pages/Header";
import ViewMoreNav from "../Pages/ViewMoreNav";
import Footer from "./Footer";
export default function ViewMore() {
  const { cart, dispatch } = useContext(CartContext);
  const [pincode, setPincode] = useState("");
  const [ml, setMl] = useState([]);

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
  return (
    <div>
      <ViewMoreNav />

      {cart.map((c) => {
        return (
          <div className=" p-5 d-flex flex-column w-75 m-auto">
            <div className="row  d-flex flex-row ">
              <div className="col-md-5 col-sm-5 p-5">
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
                      <img src={c.images} class="d-block w-100" alt="..." hei />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={c.images} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          Some representative placeholder content for the second
                          slide.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={c.images} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Some representative placeholder content for the third
                          slide.
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
              <div className="col-md-7 col-sm-7 ">
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
                          <option className="-">{c}ml</option>
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
                  <div className="border border-1 p-1 rounded">
                    {" "}
                    <button
                      className="rounded circle px-2 btn btn-light"
                      onClick={() => decrease(c.id)}
                    >
                      <b>-</b>
                    </button>
                    <button className="btn btn-light mx-2">{c.quantity}</button>
                    <button
                      className="rounded circle px-2 btn btn-light"
                      onClick={() => increase(c.id)}
                    >
                      <b>+</b>
                    </button>
                  </div>
                  <div className="border border-1 p-1 rounded">
                    <button className="btn btn-light mx-2">
                      <i class="fa-solid fa-cart-shopping text-success"></i> ADD
                      TO CART
                    </button>
                  </div>
                  <div className="border border-1 p-1 rounded">
                    <button className="btn btn-light mx-2 ">
                      <i class="fa-solid fa-cart-shopping text-success"></i> BUY
                    </button>
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

            <div className="row mt-3">
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
              <div className="col-md-12 col-sm-12">
                <div className="meta-title">
                  <h3 className="about-title py-3  ">
                    <span>Similar Product</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 d-none">Product</div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h2>FREQUENTLY ASKED QUESTION</h2>
              </div>
              <div className="col-md-12 col-sm-12 p-3 ">
                <ol>
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
                </ol>
              </div>
              <div className="col-md-12 col-sm-12 p-3 ">
                <Footer />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
