import React from "react";
import { itemDetails } from "../../Scripts/data";

export default function CategoryFooter() {
  return (
    <footer className="p-5">
      <div className="footer-container bg-dark d-flex flex-column">
        {" "}
        <div className="d-flex " style={{ columnGap: "20px" }}>
          <div>
            <p className="ft-title">
              MedicineCare <span className="ft-sign">+</span>
            </p>
            <p className="">
              Medicine Care offers affordable, high-quality medicines. We make
              it simple for <br />
              you to take good care of your health and for your loved ones,{" "}
              <br /> no matter where they may be located in India. From any
              location in india.
              <br /> You can send and buy medicine online.
            </p>
          </div>

          <div className="brands ">
            <p className="ft-title">Brands</p>
            <div className="text-dark border-top">
              <ul
                className=""
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  color: "white",
                }}
              >
                <li>Adel</li>
                <li>Indica</li>
                <li>Ayurved</li>
                <li>Healthmug</li>
              </ul>
            </div>
          </div>
          <div className="ms-4">
            <p className="ft-title">Categories</p>{" "}
            <div>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  color: "white",
                }}
              >
                <li>Homeopathy</li>
                <li>Ayurveda</li>
                <li>Unani</li>
                <li>English</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="ft-title " style={{ textAlign: "center" }}>
              Accomplitions <span className="ft-sign">+</span>
            </p>{" "}
            <div className="text-stats">
              <div className="text-stats-container">
                <p>145k+</p>
                <p>Receive Patients</p>
              </div>

              <div className="text-stats-container">
                <p>5000+</p>
                <p>Medicines Available</p>
              </div>

              <div className="text-stats-container">
                <p>10+</p>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
