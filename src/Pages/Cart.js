import React from "react";
import "../Styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "../Components/Features/ContextProvider";
import { totalItem } from "../Components/Features/CartReducer";
import { totalPrice } from "../Components/Features/CartReducer";

import Header from "./Header";
export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

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
    <>
      <div>
        <Header />
      </div>

      <div className=" d-flex row container m-auto flex-sm-row flex-md-column flex-sm-row flex-lg-row">
        {cart.length < 1 ? (
          <h1 className="mt-5 p-5 bg-light border border-1 rounded">
            <span>Empty Cart</span>
          </h1>
        ) : (
          <>
            <div className="  mt-5     col-md-10 col-sm-10">
              {cart.map((c) => {
                return (
                  <div className=" ">
                    <table>
                      <tr>
                        <th>Products</th>
                        <th>Name</th>
                        <th>ml</th>
                        <th>Mrp</th>
                        <th className="d-none d-sm-none d-md-none d-xl-block">
                          Discount
                        </th>
                        <th>Quantity</th>

                        <th className="d-none d-sm-none d-md-none d-xl-block">
                          Total Mrp
                        </th>
                      </tr>
                      <tr>
                        <td style={{ padding: "10px" }}>
                          <img src={c.images} height="100px" width="100px" />
                        </td>
                        <td>
                          <p>{c.title}</p>
                        </td>
                        <td>
                          <p>{c.ml[0]}</p>
                        </td>
                        <td>
                          <del>₹{c.old_mrp}</del>

                          <ins className="text-decoration-none">
                            {" "}
                            ₹{c.new_mrp}
                          </ins>
                        </td>
                        <td className="d-none d-sm-none d-md-none d-xl-block">
                          {c.Discount}%
                        </td>
                        <td style={{ padding: "10px" }}>
                          <div className="d-flex flex-row dispatchButtons border border-1 w-50 d-flex ">
                            <div className=" p-1 rounded">
                              {" "}
                              <button
                                className="rounded circle  btn btn-light"
                                onClick={() => decrease(c.id)}
                              >
                                <b>-</b>
                              </button>
                              <button
                                className="rounded circle btn btn-light"
                                onClick={() => increase(c.id)}
                              >
                                <b>+</b>
                              </button>
                            </div>

                            <div>
                              <button className="btn btn-light ">
                                {c.quantity}
                              </button>{" "}
                              <button
                                type="button"
                                class="btn btn-light rounded"
                                data-toggle="tooltip"
                                data-html="true"
                                title="Delete"
                                className="rounded circle  btn btn-light "
                                onClick={() =>
                                  dispatch({ type: "Remove", id: c.id })
                                }
                              >
                                <i class="fa-solid fa-trash text-danger"></i>
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="d-none d-sm-none d-md-none d-xl-block">
                          <p>₹{c.new_mrp}</p>
                          {/* <p>${totalPrice(cart)}</p> */}
                        </td>
                      </tr>
                    </table>
                  </div>
                );
              })}
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-2 mt-1 mt-4 p-4">
              <p>Total Items: {totalItem(cart)}</p>
              <p>Total price: ₹ {totalPrice(cart)}</p>
              <button className="btn btn-primary">checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
