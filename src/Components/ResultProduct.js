import React from "react";
import { CartContext } from "./Features/ContextProvider";
import { useContext } from "react";
export default function ResultProduct({ product }) {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="card d-flex flex-row row">
      <div className="col-sm-4 d-flex justify-content-center align-items-center flex-column ">
        <img src={product.images} width="200px" height="150px" />
        <p class="card-text mt-3">
          MRP <del className="fs-5">₹{product.old_mrp}</del>
          {"     "}
          <ins className="text-decoration-none fs-4">₹{product.new_mrp}</ins>
        </p>
      </div>

      <div className="col-sm-8 col-lg-8 col-xs-8">
        <div class="card-body d-flex flex-column  justify-content-between">
          <h3 className="about-title mt-3 py-3">
            <span style={{ flexWrap: "wrap" }}>{product.title}</span>
          </h3>
          <h5 class="card-title"> {product.desc}</h5>
        </div>
        <div className="d-flex justify-content-around">
          <button
            className="btn btn-primary my-2"
            onClick={() => dispatch({ type: "ADD", d: product })}
          >
            ADD TO CART
          </button>
          <button className="btn btn-success my-2" disabled={true}>
            10% OFF
          </button>
          <select className="btn btn-primary  my-2 bg-light text-dark">
            <option>30 ML</option>
          </select>
        </div>
      </div>
    </div>
  );
}
