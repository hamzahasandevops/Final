import React, { useState } from "react";
import { CartContext } from "../../../Components/Features/ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function MobMediResult({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card d-flex flex-row row container-fluid pb-5 mt-5">
      <div className="col-sm-12  col-xs-12  d-flex justify-content-center align-items-center flex-column ">
        <img
          src={product.images}
          width="100px"
          height="100px"
          style={{ marginTop: "10px" }}
        />
        <p class="card-text mt-3">
          MRP <del className="fs-5">₹{product.old_mrp}</del>
          {"     "}
          <ins className="text-decoration-none fs-4">₹{product.new_mrp}</ins>
        </p>
      </div>

      <div className="col-sm-12  col-12 col-xs-12 col-md-12 overflow-auto">
        <div class="card-body d-flex flex-column  justify-content-between overflow-auto">
          <h3 className="about-title mt-3 py-3">
            <span style={{ flexWrap: "wrap" }}>{product.title}</span>
          </h3>
          <h5 class="card-title mt-2"> {product.desc}</h5>
        </div>
        <div className="d-flex   w-100  justify-content-start">
          <button
            className="btn btn-light border border-2  my-2"
            onClick={() => dispatch({ type: "ADD", d: product })}
          >
            ADD TO CART
          </button>

          <button
            className="btn btn-success my-2"
            disabled={true}
            style={{ marginLeft: "5px" }}
          >
            10% OFF
          </button>
        </div>

        <div className="d-flex justify-content-start  p-3 ">
          <button
            className="btn btn-light border border-2   bg-light text-dark "
            onClick={() => dispatch({ type: "ADD_FORM", d: product })}
          >
            <Link to="/viewMore" className="text-decoration-none">
              View more...
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
