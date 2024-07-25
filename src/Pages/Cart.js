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

      <div></div>

      <div className="container d-flex flex-column py-5  mt-3">
        {cart.map((c) => {
          return (
            <div>
              <table>
                <tr>
                  <th>Products</th>
                  <th>Name</th>
                  <th>ml</th>
                  <th>Mrp</th>
                  <th>Discount</th>
                  <th>Quantity</th>

                  <th>Total Mrp</th>
                </tr>
                <tr>
                  <td style={{ padding: "10px" }}>
                    <img src={c.images} height="100px" width="100x" />
                  </td>
                  <td>
                    <p>{c.title}</p>
                  </td>
                  <td>
                    <p>{c.ml[0]}</p>
                  </td>
                  <td>
                    <del>₹{c.old_mrp}</del>

                    <ins className="text-decoration-none"> ₹{c.new_mrp}</ins>
                  </td>
                  <td>{c.Discount}%</td>
                  <td style={{ padding: "10px" }}>
                    <div className="d-flex flex-column">
                      <div>
                        <button
                          className="rounded circle px-2 btn btn-success"
                          onClick={() => decrease(c.id)}
                        >
                          <b>-</b>
                        </button>
                        <button className="btn btn-primary mx-2">
                          {c.quantity}
                        </button>
                        <button
                          className="rounded circle px-2 btn btn-success"
                          onClick={() => increase(c.id)}
                        >
                          <b>+</b>
                        </button>
                      </div>

                      <div>
                        <button
                          className="rounded circle px-2 btn btn-primary mx-2 mt-2 w-50"
                          onClick={() => dispatch({ type: "Remove", id: c.id })}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p>₹{c.new_mrp}</p>
                    {/* <p>${totalPrice(cart)}</p> */}
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
        <div className="container d-flex p-5 justify-content-between">
          <p>Total Items: {totalItem(cart)}</p>
          <p>Total price: ₹ {totalPrice(cart)}</p>
          <button className="btn btn-primary">checkout</button>
        </div>
      </div>
    </>
  );
}
