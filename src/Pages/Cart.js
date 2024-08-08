import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../Styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "../Components/Features/ContextProvider";
import { totalItem } from "../Components/Features/CartReducer";
import { totalPrice } from "../Components/Features/CartReducer";

import Header from "./Header";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const [ml, setMl] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Handle checkbox click to update selected items
  const handleCheckboxChange = useCallback((id, mrp) => {
    setSelectedItems((prevState) => {
      const selectedIds = new Set(prevState.map((item) => item.id));

      if (selectedIds.has(id)) {
        return prevState.filter((item) => item.id !== id);
      } else {
        return [...prevState, { id, mrp }];
      }
    });
  }, []);

  // Function to calculate total price
  const getTotalPrice = useMemo(() => {
    return selectedItems
      .reduce((total, item) => total + item.mrp, 0)
      .toFixed(2);
  }, [selectedItems]);

  const updateSelectedItemsOnRemove = useCallback((id) => {
    setSelectedItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }, []);

  const removeItem = (id) => {
    dispatch({ type: "Remove", id });
    updateSelectedItemsOnRemove(id); // Remove from selected items as well
  };

  const increase = (id) => {
    const itemIndex = cart.findIndex((p) => p.id === id);
    if (itemIndex !== -1 && cart[itemIndex].quantity < 10) {
      dispatch({ type: "Increase", id });
      updateSelectedItems(id); // Ensure selected items reflect the updated price immediately
    }
  };

  const decrease = (id) => {
    const itemIndex = cart.findIndex((p) => p.id === id);
    if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
      dispatch({ type: "Decrease", id });
      updateSelectedItems(id); // Ensure selected items reflect the updated price immediately
    }
  };

  // Function to update selected items based on cart changes
  const updateSelectedItems = useCallback(() => {
    setSelectedItems((prevState) =>
      prevState.map((item) => {
        const cartItem = cart.find((p) => p.id === item.id);
        if (cartItem) {
          return {
            ...item,
            mrp: cartItem.new_mrp * cartItem.quantity,
          };
        }
        return item;
      })
    );
  }, [cart]);

  // Effect to update selected items whenever cart changes
  useEffect(() => {
    updateSelectedItems();
  }, [cart, updateSelectedItems]);

  console.log(ml);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className=" d-none d-lg-block d-md-block d-xs-block row container m-auto flex-sm-row flex-md-column flex-sm-row flex-lg-row">
        {cart.length < 1 ? (
          <p className="mt-5 p-5 bg-light border border-1 rounded">
            <span>Empty Cart Go To Shoping </span>
            <Link to="/">Home</Link>
          </p>
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
                        <th>Check</th>
                      </tr>
                      <tr>
                        <td style={{ padding: "10px" }}>
                          <img src={c.image} height="100px" width="100px" />
                        </td>

                        <td>
                          <p>{c.title}</p>
                        </td>
                        <td>
                          <select
                            className="btn btn-primary my-2 bg-light text-dark"
                            onChange={(e) => {}}
                          >
                            {c.ml.map((p, index) => (
                              <option key={index} value={p}>
                                {p}
                              </option>
                            ))}
                          </select>
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
                                onClick={() => removeItem(c.id)}
                              >
                                <i class="fa-solid fa-trash text-danger"></i>
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="d-none d-sm-none d-md-none d-xl-block">
                          <p>₹{c.new_mrp}</p>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={() =>
                              handleCheckboxChange(c.id, c.new_mrp)
                            }
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                );
              })}
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-2 mt-1 mt-4 p-4">
              <p>Total Items: {totalItem(cart)}</p>
              <p>Total price: ₹ {totalPrice(cart)}</p>{" "}
              <button className="btn btn-primary">checkout</button>
              <div className="col-md-12 mt-5 ">
                <h4>Selected Items</h4>
                {selectedItems.length === 0 ? (
                  <p>No items selected.</p>
                ) : (
                  <ul>
                    {selectedItems.map((item) => (
                      <li key={item.id}>
                        ID: {item.id}, MRP: ₹{item.mrp}
                      </li>
                    ))}
                  </ul>
                )}{" "}
                <p>
                  <strong>
                    Total Price (Selected Items): ₹ {getTotalPrice}
                  </strong>
                </p>
              </div>
            </div>{" "}
          </>
        )}
      </div>
      <div className="container d-block d-sm-none d-lg-none d-md-none d-xl-none">
        <>
          <table className="table table-striped table-bordered">
            <tbody>
              {cart.map((c, index) => (
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                  <tr key={index}>
                    <td className="product-cell d-flex flex-column">
                      <img
                        src={c.image}
                        alt="Product Image"
                        className="img-fluid product-image"
                      />{" "}
                      <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={() => handleCheckboxChange(c.id, c.new_mrp)}
                      />
                    </td>
                    <td className="price-cell py-4">
                      <p className="product-name">{c.title}</p>
                    </td>
                    <td className="price-cell py-4">${c.new_mrp}</td>
                    <td className="quantity-cell py-4 bg-light">
                      <div className="d-flex  align-items-center">
                        <button
                          className="btn btn-light "
                          disabled={true}
                          type="button"
                          class="btn btn-light rounded"
                          data-toggle="tooltip"
                          data-html="true"
                          title="Delete"
                          onClick={() => removeItem(c.id)}
                        >
                          <i class="fa-solid fa-trash text-danger"></i>
                        </button>
                        <p className="mt-3"> {c.quantity} </p>
                      </div>
                      <div className="d-flex">
                        <button
                          className="btn btn-light "
                          onClick={() => increase(c.id)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-light "
                          onClick={() => decrease(c.id)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                  </tr>{" "}
                </thead>
              ))}
            </tbody>
          </table>
        </>
      </div>{" "}
      <div className="d-flex d-sm-none d-lg-none d-xl-none d-md-none">
        <div className=" mt-1 mt-4 p-4">
          <p>Total Items:{totalItem(cart)}</p>
          <p>Total price:₹ {totalPrice(cart)}</p>{" "}
          <button className="btn btn-primary">checkout</button>
        </div>{" "}
        <div className=" mt-3 px-4">
          <h4>Selected Items</h4>
          {selectedItems.length === 0 ? (
            <p>No items selected.</p>
          ) : (
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>
                  ID: {item.id}, MRP: ₹{item.mrp}
                </li>
              ))}
            </ul>
          )}{" "}
          <p>
            <strong>Total Price (Selected Items): ₹ {getTotalPrice}</strong>
          </p>
        </div>
      </div>
    </>
  );
}
