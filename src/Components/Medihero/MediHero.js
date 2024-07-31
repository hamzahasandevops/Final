import React from "react";
import Muilt1 from "../../Assets/multi-1.webp";
import Muilt2 from "../../Assets/multi-2.webp";
import Muilt3 from "../../Assets/multi-3.webp";

import "../../Styles/MediHero.css";

export default function MediHero() {
  return (
    <div className="container-fluid mt-1  block overflow-hidden relative">
      <div className="d-flex justify-content-around container-fluid">
        {/* Dropdown 1 */}
        <div className=" rounded d-flex flex-column align-items-center">
          <div className="images-section">
            <img src={Muilt1} width="104px" height="151px" />
          </div>
          <div>
            <p>Homeopathy</p>
          </div>
        </div>
        {/* Dropdown 2 */}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Ayurveda</p>
          </div>
        </div>
        {/* Dropdown 3 */}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt3} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Unani</p>
          </div>
        </div>
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Allopathy</p>
          </div>
        </div>
        {/* Dropdown 4 */}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt3} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Nutrition</p>
          </div>
        </div>
        <div className=" rounded d-flex flex-column align-items-center">
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Sexual wellness</p>
          </div>
        </div>{" "}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Multivitamis & Mutliminerals</p>
          </div>
        </div>{" "}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Sugar Substitute</p>
          </div>
        </div>{" "}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Hair Care</p>
          </div>
        </div>{" "}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Health Food & Drinks</p>
          </div>
        </div>{" "}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Skin Care</p>
          </div>
        </div>{" "}
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Essential oils</p>
          </div>
        </div>
        <div className=" rounded d-flex flex-column align-items-center">
          {" "}
          <div className="images-section">
            <img src={Muilt2} width="104px" height="151px" />
          </div>{" "}
          <div>
            <p>Baby Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}
