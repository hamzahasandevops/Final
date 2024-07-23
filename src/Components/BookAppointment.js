import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import Help from "../Assets/help.png";
import Cash from "../Assets/cash.png";
import Return from "../Assets/return.png";
import Secure from "../Assets/secure.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleCheck,
//   faCalendarCheck,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";
import { Grid } from "@mui/material";

function BookAppointment() {
  // const navigate = useNavigate();

  // const handleBookAppointmentClick = () => {
  //   navigate("/appointment");
  // };

  const data = [
    {
      icon: Secure,
      title: "100% SECURE",
      title_hover: "100% Payment Protection",
    },
    {
      icon: Cash,
      title: "CASH ON DELIVERY",
      title_hover: "Get First Pay Later",
    },
    {
      icon: Return,
      title: "EASY RETURN ",
      title_hover: "Easy Return & Refund",
    },
    {
      icon: Help,
      title: "HELP CENTER",
      title_hover: "Call:(+91)-7703907198",
    },
  ];

  console.log(data);

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1 " />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Us</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose Health Plus for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>

        <div className="d-flex justify-content-center align-items-center flex-row">
          {data.map((d) => {
            return (
              <Grid container spacing={2}>
                <Grid item sm={6} lg={6} xs={12} sx={{}}>
                  <img src={d.icon} />
                  <h3>{d.title}</h3>
                  <h4>{d.title_hover}</h4>
                </Grid>
              </Grid>
            );
          })}
        </div>
        {/* <img src={Help} height="100px" width="100px" /> */}
        {/* <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button> */}
      </div>
    </div>
  );
}

export default BookAppointment;
