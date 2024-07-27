import React, { useState } from "react";
import { CartContext } from "./Features/ContextProvider";
import { useContext } from "react";
export default function ResultProduct({ product }) {
  const { dispatch } = useContext(CartContext);
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

  console.log(ml);

  return (
    <div className="card d-flex flex-row row">
      <div className="col-sm-4 d-flex justify-content-center align-items-center flex-column ">
        <img src={product.images} width="250px" height="230px" />
        <p class="card-text mt-3">
          MRP <del className="fs-5">₹{product.old_mrp}</del>
          {"     "}
          <ins className="text-decoration-none fs-4">₹{product.new_mrp}</ins>
        </p>
      </div>

      <div className="col-sm-8 col-lg-8 col-xs-8 overflow-auto">
        <div class="card-body d-flex flex-column  justify-content-between overflow-auto">
          <h3 className="about-title mt-3 py-3">
            <span style={{ flexWrap: "wrap" }}>{product.title}</span>
          </h3>
          <h5 class="card-title"> {product.desc}</h5>
        </div>
        <div className="d-flex justify-content-around ">
          <button
            className="btn btn-primary my-2"
            onClick={() => dispatch({ type: "ADD", d: product })}
          >
            ADD TO CART
          </button>
          <button className="btn btn-success my-2" disabled={true}>
            10% OFF
          </button>
          <select
            value={ml}
            className="btn btn-primary my-2 bg-light text-dark"
            onChange={(e) => setMl(e.target.value)}
          >
            <option value="">Select ML</option>
            {product.ml.map((p, index) => (
              <option key={index} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div
          className="container border border-2 d-flex flex-column p-3 "
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

        <div className="row p-3 d-flex  justify-content-center">
          <button className="btn btn-primary w-25 bg-light text-dark">
            View more...
          </button>
        </div>
      </div>
    </div>
  );
}
