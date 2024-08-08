import React from "react";
import Sale from "../Assets/sale.jpg";
import "../Styles/About.css";
import { allData } from "../Scripts/data";
import { CartContext } from "./Features/ContextProvider";
import { useContext } from "react";
function About() {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="about-section " id="about">
      <div className="about-image-content ">
        <img src={Sale} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content ">
        <h3 className="about-title">
          <span>
            {/* About Us */}
            Deal of The Day
          </span>
        </h3>
        <p className="about-description">
          Welcome to Health Plus, your trusted partner for accessible and
          personalized health medicines. Our expert doctors offers online
          consultations, medicines and specialized services, prioritizing your
          well-being. Join us on this journey towards a healthier you.
        </p>
        <div style={{ display: "flex", overflowX: "scroll" }}>
          {allData &&
            allData.length > 0 &&
            allData.map((d) => {
              return (
                <div className="container-fluid w-100" key={d.id}>
                  <div className="row">
                    <div
                      className="col-12 border "
                      style={{
                        width: "300px",
                        padding: "10px",
                        marginBottom: "10px",
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        justifyContent: "center",
                        overflowX: "scroll",
                      }}
                    >
                      <button className="btn btn-light  border border-1  w-50 m-2">
                        {d.offPrice}
                      </button>

                      <img
                        src={d.image}
                        className="card-img-top"
                        alt="fuc"
                        style={{ height: "150px", width: "150px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{d.title}</h5>
                        {d.ml[0]}ml
                      </div>
                      <div
                        className="card-body  "
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <del>MRP ${d.old_mrp}</del>
                        <ins>${d.new_mrp}</ins>
                      </div>
                      <div className="d-flex">
                        <button
                          className="btn btn-light border border-1 w-75"
                          onClick={() => dispatch({ type: "ADD", d: d })}
                        >
                          ADD TO CART
                        </button>
                        <button className="btn btn-light   border border-1 w-25">
                          <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default About;
