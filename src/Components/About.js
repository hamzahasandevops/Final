import React from "react";
import Doctor from "../Assets/doctor-group.png";

import "../Styles/About.css";
import { allData } from "../Scripts/data";

function About() {
  console.log(allData);
  return (
    <div className="about-section " id="about">
      <div className="about-image-content ">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
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
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>
        <div style={{ display: "flex", overflowX: "scroll" }}>
          {allData &&
            allData.length > 0 &&
            allData.map((d) => {
              return (
                <div className="container-fluid w-100">
                  <div className="row">
                    <div
                      className="col-12 border "
                      style={{
                        width: "260px",
                        padding: "10px",
                        marginBottom: "10px",
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button className="btn btn-primary w-50 m-2">
                        {d.offPrice}
                      </button>

                      <img
                        src={d.images}
                        className="card-img-top"
                        alt="fuc"
                        style={{ height: "150px", width: "150px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{d.title}</h5>
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
                      <button className="btn btn-primary w-75">
                        ADD TO CART
                      </button>
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
